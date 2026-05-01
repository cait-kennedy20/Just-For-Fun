# Booking Beta Feedback Monitor Agent

This agent watches a Confluence page (your online booking beta feedback doc) and triggers:

1. A Slack Connect notification.
2. A write to Ash via webhook.

It runs as a polling worker and compares the Confluence page version number.

## 1) Configure environment variables

Copy `.env.example` values into your runtime environment.

Required:

- `ATLASSIAN_BASE_URL` (example: `https://your-company.atlassian.net`)
- `ATLASSIAN_EMAIL`
- `ATLASSIAN_API_TOKEN`
- `CONFLUENCE_PAGE_ID`
- `ASH_WEBHOOK_URL`

Slack (choose one mode):

- Incoming webhook mode: `SLACK_WEBHOOK_URL`
- Bot mode: `SLACK_BOT_TOKEN` + `SLACK_CHANNEL_ID`

Optional:

- `POLL_INTERVAL_SECONDS` (default: `60`)

## 2) Run once (smoke test)

```bash
npm run booking-feedback-agent:once
```

Behavior:

- First run seeds local state with the current version and does not notify.
- Future runs notify only when version increases.

## 3) Run continuously

```bash
npm run booking-feedback-agent
```

The agent stores local state in:

```text
.agent-state/booking-feedback-monitor.json
```

## Payload sent to Ash

The Ash webhook receives JSON in this shape:

```json
{
  "eventType": "online_booking_beta_feedback_doc.updated",
  "source": "booking-feedback-monitor",
  "summaryText": "Online Booking Beta Feedback updated: ...",
  "page": {
    "id": "123456",
    "title": "Online Booking Beta Feedback",
    "versionNumber": 12,
    "previousVersion": 11,
    "updatedBy": "Jane Doe",
    "updatedAt": "2026-05-01T15:12:34.000Z",
    "webUrl": "https://your-company.atlassian.net/wiki/spaces/..."
  },
  "detectedAt": "2026-05-01T15:13:05.000Z"
}
```
