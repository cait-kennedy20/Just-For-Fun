async function getGoboAccessToken() {
  const clientId = process.env.GOBO_CLIENT_ID;
  const clientSecret = process.env.GOBO_CLIENT_SECRET;
  const targetId = process.env.GOBO_TARGET_ID;

  if (!clientId || !clientSecret) {
    throw new Error("Missing GOBO_CLIENT_ID or GOBO_CLIENT_SECRET in Vercel environment variables");
  }

  if (!targetId) {
    throw new Error("Missing GOBO_TARGET_ID in Vercel environment variables");
  }

  const tokenUrl = "https://fieldedge-staging.withgobo.com/oauth/token";

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const body = new URLSearchParams();
  body.append("grant_type", "client_credentials");
  body.append("target_id", targetId);

  const tokenResponse = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": `Basic ${basicAuth}`
    },
    body: body.toString()
  });

  const rawText = await tokenResponse.text();

  let tokenData;
  try {
    tokenData = JSON.parse(rawText);
  } catch {
    throw new Error(`Token endpoint returned non-JSON response: ${rawText}`);
  }

  if (!tokenResponse.ok) {
    throw new Error(
      tokenData.error_description ||
      tokenData.error ||
      tokenData.message ||
      `Failed to get access token (${tokenResponse.status})`
    );
  }

  if (!tokenData.access_token) {
    throw new Error("Token response did not include access_token");
  }

  return tokenData.access_token;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const companyId = process.env.FIELDEDGE_COMPANY_ID;

    if (!companyId) {
      throw new Error("Missing FIELDEDGE_COMPANY_ID in Vercel environment variables");
    }

    const accessToken = await getGoboAccessToken();

    const apiResponse = await fetch("https://dev.api.fieldedge.com/open-api/v1/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
        "x-company-id": companyId
      },
      body: JSON.stringify(req.body)
    });

    const rawText = await apiResponse.text();

    let data;
    try {
      data = JSON.parse(rawText);
    } catch {
      data = { raw: rawText };
    }

    return res.status(apiResponse.status).json(data);
  } catch (error) {
    console.error("create-inventory-item failed:", error);

    return res.status(500).json({
      error: "Request failed",
      details: error.message || "Unknown server error"
    });
  }
}
