import { mkdir, readFile, writeFile } from "node:fs/promises";
import process from "node:process";

const DEFAULT_POLL_SECONDS = 60;
const STATE_DIR = ".agent-state";
const STATE_PATH = `${STATE_DIR}/booking-feedback-monitor.json`;

const CONFIG = {
  atlassianBaseUrl: mustGetEnv("ATLASSIAN_BASE_URL"),
  atlassianEmail: mustGetEnv("ATLASSIAN_EMAIL"),
  atlassianApiToken: mustGetEnv("ATLASSIAN_API_TOKEN"),
  confluencePageId: mustGetEnv("CONFLUENCE_PAGE_ID"),
  slackWebhookUrl: process.env.SLACK_WEBHOOK_URL?.trim(),
  slackBotToken: process.env.SLACK_BOT_TOKEN?.trim(),
  slackChannelId: process.env.SLACK_CHANNEL_ID?.trim(),
  ashWebhookUrl: mustGetEnv("ASH_WEBHOOK_URL"),
  pollIntervalSeconds: Number(process.env.POLL_INTERVAL_SECONDS || DEFAULT_POLL_SECONDS)
};

validateConfig();

const runOnce = process.argv.includes("--once");

async function main() {
  console.log(`[agent] starting booking feedback monitor (${runOnce ? "run-once" : "watch"})`);

  if (runOnce) {
    await checkForUpdate();
    return;
  }

  while (true) {
    try {
      await checkForUpdate();
    } catch (error) {
      console.error("[agent] monitor iteration failed:", formatError(error));
    }

    await sleepSeconds(CONFIG.pollIntervalSeconds);
  }
}

async function checkForUpdate() {
  const page = await fetchConfluencePageVersion();
  const state = await readState();

  if (!state.lastVersionSeen) {
    await writeState({
      lastVersionSeen: page.versionNumber
    });
    console.log(`[agent] initialized at version ${page.versionNumber} (${page.title})`);
    return;
  }

  if (page.versionNumber <= state.lastVersionSeen) {
    console.log(`[agent] no update (version ${page.versionNumber})`);
    return;
  }

  const event = buildUpdateEvent(state.lastVersionSeen, page);
  console.log(
    `[agent] update detected v${state.lastVersionSeen} -> v${page.versionNumber}, notifying Slack + Ash`
  );

  await postToSlack(event);
  await postToAsh(event);

  await writeState({
    lastVersionSeen: page.versionNumber
  });

  console.log("[agent] notifications sent and state updated");
}

function buildUpdateEvent(previousVersion, page) {
  const updatedBy = page.updatedBy || "Unknown user";
  const updatedAt = page.updatedAt || new Date().toISOString();
  const pageUrl = page.webUrl || `${CONFIG.atlassianBaseUrl.replace(/\/$/, "")}/wiki/pages/${page.id}`;

  const summaryText =
    `Online Booking Beta Feedback updated: ` +
    `${page.title} (v${previousVersion} -> v${page.versionNumber}) by ${updatedBy} at ${updatedAt}. ${pageUrl}`;

  return {
    eventType: "online_booking_beta_feedback_doc.updated",
    source: "booking-feedback-monitor",
    summaryText,
    page: {
      id: page.id,
      title: page.title,
      versionNumber: page.versionNumber,
      previousVersion,
      updatedBy,
      updatedAt,
      webUrl: pageUrl
    },
    detectedAt: new Date().toISOString()
  };
}

async function fetchConfluencePageVersion() {
  const base = CONFIG.atlassianBaseUrl.replace(/\/$/, "");
  const url =
    `${base}/wiki/rest/api/content/${encodeURIComponent(CONFIG.confluencePageId)}` +
    "?expand=version";

  const authHeader = Buffer.from(
    `${CONFIG.atlassianEmail}:${CONFIG.atlassianApiToken}`,
    "utf8"
  ).toString("base64");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Basic ${authHeader}`,
      Accept: "application/json"
    }
  });

  const text = await response.text();
  const payload = tryParseJson(text);

  if (!response.ok) {
    const details = payload?.message || payload?.error || text;
    throw new Error(`Confluence request failed (${response.status}): ${details}`);
  }

  const versionNumber = payload?.version?.number;
  if (!versionNumber || typeof versionNumber !== "number") {
    throw new Error("Confluence response missing version.number");
  }

  const webUiPath = payload?._links?.webui;
  const linksBase = payload?._links?.base;
  const webUrl = webUiPath
    ? `${(linksBase || base).replace(/\/$/, "")}${webUiPath}`
    : undefined;

  return {
    id: String(payload.id),
    title: payload.title || "Online Booking Beta Feedback",
    versionNumber,
    updatedAt: payload?.version?.when,
    updatedBy: payload?.version?.by?.displayName,
    webUrl
  };
}

async function postToSlack(event) {
  if (CONFIG.slackWebhookUrl) {
    await postJson(CONFIG.slackWebhookUrl, {
      text: event.summaryText
    });
    return;
  }

  if (CONFIG.slackBotToken && CONFIG.slackChannelId) {
    await postJson("https://slack.com/api/chat.postMessage", {
      channel: CONFIG.slackChannelId,
      text: event.summaryText
    }, {
      Authorization: `Bearer ${CONFIG.slackBotToken}`
    });
    return;
  }

  throw new Error(
    "Slack is not configured. Set SLACK_WEBHOOK_URL or SLACK_BOT_TOKEN + SLACK_CHANNEL_ID."
  );
}

async function postToAsh(event) {
  await postJson(CONFIG.ashWebhookUrl, event);
}

async function postJson(url, body, additionalHeaders = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...additionalHeaders
    },
    body: JSON.stringify(body)
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(`POST ${url} failed (${response.status}): ${responseText}`);
  }

  return tryParseJson(responseText) || { raw: responseText };
}

async function readState() {
  try {
    const file = await readFile(STATE_PATH, "utf8");
    const parsed = JSON.parse(file);
    return {
      lastVersionSeen:
        typeof parsed.lastVersionSeen === "number" ? parsed.lastVersionSeen : null
    };
  } catch {
    return { lastVersionSeen: null };
  }
}

async function writeState(state) {
  await mkdir(STATE_DIR, { recursive: true });
  await writeFile(STATE_PATH, JSON.stringify(state, null, 2), "utf8");
}

function validateConfig() {
  if (!Number.isFinite(CONFIG.pollIntervalSeconds) || CONFIG.pollIntervalSeconds <= 0) {
    throw new Error("POLL_INTERVAL_SECONDS must be a positive number");
  }

  const slackWebhookSet = Boolean(CONFIG.slackWebhookUrl);
  const slackBotSet = Boolean(CONFIG.slackBotToken && CONFIG.slackChannelId);
  if (!slackWebhookSet && !slackBotSet) {
    throw new Error(
      "Slack is not configured. Set SLACK_WEBHOOK_URL or SLACK_BOT_TOKEN + SLACK_CHANNEL_ID."
    );
  }
}

function mustGetEnv(name) {
  const value = process.env[name];
  if (!value || !value.trim()) {
    throw new Error(`Missing required environment variable ${name}`);
  }
  return value.trim();
}

function tryParseJson(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function formatError(error) {
  return error instanceof Error ? error.message : String(error);
}

function sleepSeconds(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

main().catch((error) => {
  console.error("[agent] fatal error:", formatError(error));
  process.exitCode = 1;
});
