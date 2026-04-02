async function getGoboAccessToken() {
  const params = new URLSearchParams();

  params.append("grant_type", "client_credentials");
  params.append("client_id", process.env.GOBO_CLIENT_ID);
  params.append("client_secret", process.env.GOBO_CLIENT_SECRET);

  const tokenResponse = await fetch("https://fieldedge-staging.withgobo.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params.toString()
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
      `Failed to get access token (${tokenResponse.status})`
    );
  }

  if (!tokenData.access_token) {
    throw new Error("Token response did not include access_token");
  }

  return tokenData.access_token;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const accessToken = await getGoboAccessToken();

    const payload = req.body;

    const apiResponse = await fetch("https://dev.api.fieldedge.com/open-api/v1/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,

        // 👇 ADD YOUR COMPANY CONTEXT HERE
        "x-company-id": process.env.FIELDEDGE_COMPANY_ID

        // If your Postman uses a different header, swap this:
        // "x-account-id": process.env.FIELDEDGE_COMPANY_ID
        // "x-tenant-id": process.env.FIELDEDGE_COMPANY_ID
      },
      body: JSON.stringify(payload)
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
    return res.status(500).json({
      error: "Request failed",
      details: error.message
    });
  }
}
