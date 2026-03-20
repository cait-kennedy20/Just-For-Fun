<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FieldEdge Developer Portal Demo</title>
  <style>
    :root {
      --bg: #0b1020;
      --panel: #111831;
      --panel-2: #17203d;
      --text: #eef2ff;
      --muted: #a7b0d6;
      --line: rgba(255,255,255,.08);
      --blue: #5b8cff;
      --blue-2: #7fb0ff;
      --green: #2dd4bf;
      --green-2: #99f6e4;
      --white: #ffffff;
      --shadow: 0 18px 60px rgba(0,0,0,.35);
      --radius: 22px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background:
        radial-gradient(circle at top right, rgba(91,140,255,.18), transparent 28%),
        radial-gradient(circle at 0% 20%, rgba(45,212,191,.12), transparent 24%),
        linear-gradient(180deg, #0a0f1f 0%, #0d1328 100%);
      color: var(--text);
    }

    a { color: inherit; text-decoration: none; }
    .container { width: min(1180px, calc(100% - 32px)); margin: 0 auto; }

    .nav {
      position: sticky; top: 0; z-index: 100;
      backdrop-filter: blur(14px);
      background: rgba(10,15,31,.72);
      border-bottom: 1px solid var(--line);
    }
    .nav-inner {
      display: flex; align-items: center; justify-content: space-between;
      gap: 18px; padding: 16px 0;
    }
    .brand {
      display: flex; align-items: center; gap: 12px; font-weight: 700; letter-spacing: -.02em;
    }
    .brand-mark {
      width: 40px; height: 40px; border-radius: 14px;
      background: linear-gradient(135deg, var(--blue), var(--green));
      box-shadow: inset 0 1px 1px rgba(255,255,255,.25), 0 10px 20px rgba(0,0,0,.22);
      position: relative;
    }
    .brand-mark::after {
      content: ""; position: absolute; inset: 10px; border-radius: 10px;
      border: 2px solid rgba(255,255,255,.7);
    }
    .nav-links { display: flex; align-items: center; gap: 18px; color: var(--muted); font-size: 14px; }
    .nav-actions { display: flex; gap: 10px; }

    .btn {
      border: 1px solid var(--line);
      background: rgba(255,255,255,.02);
      color: var(--text);
      padding: 12px 16px;
      border-radius: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: .2s ease;
      display: inline-flex; align-items: center; justify-content: center; gap: 10px;
    }
    .btn:hover { transform: translateY(-1px); border-color: rgba(255,255,255,.16); }
    .btn-primary { background: linear-gradient(135deg, var(--blue), #3d6df0); border: none; }
    .btn-accent { background: linear-gradient(135deg, var(--green), #0ea5a4); border: none; color: #071219; }
    .btn-ghost { background: rgba(255,255,255,.04); }
    .btn.small { padding: 10px 12px; border-radius: 12px; font-size: 14px; }

    .hero { padding: 72px 0 32px; }
    .eyebrow {
      display: inline-flex; align-items: center; gap: 10px;
      border: 1px solid var(--line); border-radius: 999px; padding: 8px 12px;
      color: var(--muted); font-size: 13px; background: rgba(255,255,255,.03);
    }
    .dot { width: 8px; height: 8px; border-radius: 999px; background: var(--green); box-shadow: 0 0 14px var(--green); }
    .hero-grid {
      display: grid; grid-template-columns: 1.15fr .85fr; gap: 28px; align-items: stretch; margin-top: 24px;
    }
    h1 {
      margin: 18px 0 14px; font-size: clamp(38px, 5vw, 68px); line-height: .98; letter-spacing: -.045em;
      max-width: 820px;
    }
    .lead { font-size: 18px; line-height: 1.75; color: var(--muted); max-width: 760px; }

    .hero-panel, .panel {
      background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
      border: 1px solid var(--line); border-radius: calc(var(--radius) + 4px);
      box-shadow: var(--shadow);
    }
    .hero-panel { padding: 24px; }
    .stat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 10px; }
    .stat {
      padding: 18px; background: rgba(255,255,255,.04); border-radius: 18px; border: 1px solid var(--line);
    }
    .stat .label { font-size: 13px; color: var(--muted); }
    .stat .value { font-size: 28px; font-weight: 700; margin-top: 8px; letter-spacing: -.03em; }

    .section { padding: 22px 0 26px; }
    .section-head { display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 18px; }
    .section-head h2 { margin: 0; font-size: 28px; letter-spacing: -.03em; }
    .section-head p { margin: 6px 0 0; color: var(--muted); }

    .choice-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
    .choice-card {
      background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.03));
      border: 1px solid var(--line); border-radius: 28px; padding: 26px; box-shadow: var(--shadow);
      position: relative; overflow: hidden;
    }
    .choice-card::before {
      content: ""; position: absolute; right: -20px; top: -20px; width: 120px; height: 120px;
      background: radial-gradient(circle, rgba(255,255,255,.12), transparent 62%);
    }
    .pill {
      display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase;
      padding: 8px 10px; border-radius: 999px; margin-bottom: 16px;
    }
    .pill.green { background: rgba(45,212,191,.14); color: var(--green-2); }
    .pill.blue { background: rgba(91,140,255,.14); color: var(--blue-2); }
    .choice-card h3 { margin: 0 0 10px; font-size: 28px; letter-spacing: -.03em; }
    .choice-card p { color: var(--muted); line-height: 1.7; margin: 0 0 18px; }
    .bullet-list { display: grid; gap: 10px; margin: 0 0 22px; padding: 0; list-style: none; }
    .bullet-list li {
      padding: 12px 14px; border-radius: 14px; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.05);
      color: #dae1ff;
    }

    .content-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 22px; margin-top: 20px; }
    .stack { display: grid; gap: 22px; }
    .panel { padding: 22px; }
    .panel h3 { margin: 0; font-size: 22px; letter-spacing: -.03em; }
    .subtle { color: var(--muted); font-size: 14px; margin-top: 6px; }
    .toolbar { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 18px; }
    .toolbar .chips { display: flex; gap: 8px; flex-wrap: wrap; }
    .chip {
      padding: 8px 10px; border-radius: 999px; font-size: 12px; color: var(--muted); background: rgba(255,255,255,.04); border: 1px solid var(--line);
    }

    .key-table {
      width: 100%; border-collapse: collapse; margin-top: 16px; overflow: hidden; border-radius: 18px;
      border: 1px solid var(--line); background: rgba(255,255,255,.02);
    }
    .key-table th, .key-table td { text-align: left; padding: 15px 16px; font-size: 14px; }
    .key-table th { color: var(--muted); font-weight: 600; background: rgba(255,255,255,.03); }
    .key-table tr + tr td { border-top: 1px solid var(--line); }
    .mono {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      background: rgba(255,255,255,.05); padding: 6px 8px; border-radius: 10px; display: inline-block;
    }
    .status {
      display: inline-flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: 999px; font-size: 12px; font-weight: 700;
      background: rgba(45,212,191,.14); color: var(--green-2);
    }
    .status::before { content: ""; width: 8px; height: 8px; border-radius: 999px; background: var(--green); }

    .quick-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 16px; }
    .quick-card {
      border: 1px solid var(--line); background: rgba(255,255,255,.03); border-radius: 18px; padding: 16px;
    }
    .quick-card strong { display: block; font-size: 15px; margin-bottom: 6px; }
    .quick-card span { color: var(--muted); font-size: 13px; line-height: 1.6; }

    .code {
      margin-top: 16px; background: #0a1022; border-radius: 18px; border: 1px solid var(--line);
      padding: 16px; overflow-x: auto; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 13px; line-height: 1.75;
    }
    .code .comment { color: #88a0ff; }
    .code .string { color: #9ef5d0; }

    .pipeline {
      display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin-top: 18px;
    }
    .stage {
      border: 1px solid var(--line); border-radius: 18px; background: rgba(255,255,255,.03); min-height: 240px;
      display: flex; flex-direction: column;
    }
    .stage-head {
      padding: 14px 14px 10px; border-bottom: 1px solid var(--line);
      display: flex; align-items: center; justify-content: space-between; gap: 8px;
    }
    .stage-head strong { font-size: 15px; }
    .count { font-size: 12px; color: var(--muted); border: 1px solid var(--line); padding: 5px 8px; border-radius: 999px; }
    .stage-body { padding: 12px; display: grid; gap: 10px; }
    .partner {
      background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.04));
      border: 1px solid var(--line); border-radius: 16px; padding: 12px;
    }
    .partner strong { display: block; font-size: 14px; }
    .partner span { display: block; margin-top: 4px; color: var(--muted); font-size: 12px; line-height: 1.5; }

    .timeline {
      display: grid; gap: 12px; margin-top: 16px;
    }
    .step {
      display: grid; grid-template-columns: 42px 1fr; gap: 14px;
      border: 1px solid var(--line); border-radius: 18px; background: rgba(255,255,255,.03); padding: 16px;
    }
    .step-num {
      width: 42px; height: 42px; border-radius: 14px; display: grid; place-items: center; font-weight: 800;
      background: linear-gradient(135deg, var(--blue), var(--green)); color: white;
    }
    .step h4 { margin: 0; font-size: 16px; }
    .step p { margin: 6px 0 0; color: var(--muted); line-height: 1.65; font-size: 14px; }

    .footer {
      padding: 40px 0 60px; color: var(--muted); font-size: 14px;
    }

    @media (max-width: 1040px) {
      .hero-grid, .content-grid, .choice-grid { grid-template-columns: 1fr; }
      .pipeline { grid-template-columns: repeat(2, 1fr); }
      .quick-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 760px) {
      .nav-links { display: none; }
      .nav-actions { display: none; }
      .pipeline { grid-template-columns: 1fr; }
      .stat-grid { grid-template-columns: 1fr; }
      .section-head { display: block; }
      .hero { padding-top: 42px; }
      .choice-card h3 { font-size: 24px; }
    }
  </style>
</head>
<body>
  <nav class="nav">
    <div class="container nav-inner">
      <div class="brand">
        <div class="brand-mark"></div>
        <div>
          <div>FieldEdge Developer</div>
          <div style="font-size:12px;color:var(--muted);font-weight:500;">Portal concept demo</div>
        </div>
      </div>
      <div class="nav-links">
        <a href="#paths">Paths</a>
        <a href="#dashboard">Customer Dashboard</a>
        <a href="#pipeline">Partner Pipeline</a>
        <a href="#journeys">Journeys</a>
      </div>
      <div class="nav-actions">
        <a class="btn btn-ghost small" href="#dashboard">View demo</a>
        <a class="btn btn-primary small" href="#paths">Get API access</a>
      </div>
    </div>
  </nav>

  <header class="hero container">
    <span class="eyebrow"><span class="dot"></span>Single front door, two onboarding experiences</span>
    <div class="hero-grid">
      <div>
        <h1>Build on FieldEdge APIs without forcing customers and partners through the same flow.</h1>
        <p class="lead">
          This demo portal shows a cleaner model for onboarding: customers get fast self-serve production access using their existing accounts, while partners apply, receive a sandbox, and move through a structured launch pipeline before entering the ecosystem.
        </p>
      </div>
      <div class="hero-panel">
        <div class="subtle">At a glance</div>
        <div class="stat-grid">
          <div class="stat">
            <div class="label">Customer path</div>
            <div class="value">Instant</div>
          </div>
          <div class="stat">
            <div class="label">Partner path</div>
            <div class="value">Qualified</div>
          </div>
          <div class="stat">
            <div class="label">Customer env</div>
            <div class="value">Production</div>
          </div>
          <div class="stat">
            <div class="label">Partner env</div>
            <div class="value">Sandbox → Prod</div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section id="paths" class="section container">
    <div class="section-head">
      <div>
        <h2>Choose the right path from the start</h2>
        <p>One entry point in the portal, then an intentional split based on who is requesting access.</p>
      </div>
    </div>

    <div class="choice-grid">
      <div class="choice-card">
        <span class="pill green">Customer path</span>
        <h3>Use the API for your business</h3>
        <p>
          Existing FieldEdge customers can sign in, generate a key, and start sending data into production without dealing with partner applications or sandbox complexity.
        </p>
        <ul class="bullet-list">
          <li>No contract required</li>
          <li>No sandbox required</li>
          <li>Works with existing FieldEdge account</li>
          <li>Quickstart examples tailored to common workflows</li>
        </ul>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <a class="btn btn-accent" href="#dashboard">Preview customer dashboard</a>
          <a class="btn btn-ghost" href="#journeys">See customer journey</a>
        </div>
      </div>

      <div class="choice-card">
        <span class="pill blue">Partner path</span>
        <h3>Build a marketplace integration</h3>
        <p>
          New partners submit an application, get reviewed, receive sandbox access, and move through a launch pipeline before production credentials and Gobo marketplace onboarding.
        </p>
        <ul class="bullet-list">
          <li>Application and qualification step</li>
          <li>Sandbox account and API credentials</li>
          <li>Launch readiness checklist</li>
          <li>Marketplace handoff after production approval</li>
        </ul>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <a class="btn btn-primary" href="#pipeline">Preview partner pipeline</a>
          <a class="btn btn-ghost" href="#journeys">See partner journey</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section container">
    <div class="content-grid">
      <div class="stack">
        <div id="dashboard" class="panel">
          <h3>Customer API dashboard</h3>
          <div class="subtle">What a simple self-serve customer experience could look like after access is granted.</div>
          <div class="toolbar">
            <div class="chips">
              <span class="chip">Account: Acme Heating & Cooling</span>
              <span class="chip">Use case: Leads API</span>
              <span class="chip">Environment: Production</span>
            </div>
            <button class="btn btn-accent small">Generate new key</button>
          </div>

          <table class="key-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Key</th>
                <th>Status</th>
                <th>Last used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Production Key</td>
                <td><span class="mono">fe_live_1234abcd</span></td>
                <td><span class="status">Active</span></td>
                <td>2 minutes ago</td>
              </tr>
              <tr>
                <td>Backup Key</td>
                <td><span class="mono">fe_live_5678efgh</span></td>
                <td><span class="status">Active</span></td>
                <td>Yesterday</td>
              </tr>
            </tbody>
          </table>

          <div class="quick-grid">
            <div class="quick-card">
              <strong>Quickstart</strong>
              <span>Send your first lead in minutes with a ready-to-copy example and request schema.</span>
            </div>
            <div class="quick-card">
              <strong>Postman collection</strong>
              <span>Import common requests for leads and customers without building calls from scratch.</span>
            </div>
            <div class="quick-card">
              <strong>Usage guidance</strong>
              <span>Production-only access tied to your existing account. No sandbox or contract needed.</span>
            </div>
          </div>

          <div class="code"><span class="comment"># Send your first lead</span><br>
            curl -X POST https://api.fieldedge.com/leads \\<br>
            &nbsp;&nbsp;-H <span class="string">"Authorization: Bearer fe_live_1234abcd"</span> \\<br>
            &nbsp;&nbsp;-H <span class="string">"Content-Type: application/json"</span> \\<br>
            &nbsp;&nbsp;-d '{<br>
            &nbsp;&nbsp;&nbsp;&nbsp;"name": "John Doe",<br>
            &nbsp;&nbsp;&nbsp;&nbsp;"phone": "555-123-4567",<br>
            &nbsp;&nbsp;&nbsp;&nbsp;"source": "Website Form"<br>
            &nbsp;&nbsp;}'
          </div>
        </div>
      </div>

      <div class="stack">
        <div class="panel">
          <h3>Customer request screen</h3>
          <div class="subtle">The portal asks just enough to guide docs and guardrails, not enough to slow the customer down.</div>
          <div class="timeline">
            <div class="step">
              <div class="step-num">1</div>
              <div>
                <h4>Sign in</h4>
                <p>Authenticate with an existing FieldEdge account. No separate developer identity required.</p>
              </div>
            </div>
            <div class="step">
              <div class="step-num">2</div>
              <div>
                <h4>Select use case</h4>
                <p>Examples include sending leads, creating customers, or powering a lightweight workflow.</p>
              </div>
            </div>
            <div class="step">
              <div class="step-num">3</div>
              <div>
                <h4>Generate key</h4>
                <p>Provision production credentials immediately and route the user into the right quickstart.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="pipeline" class="section container">
    <div class="section-head">
      <div>
        <h2>Partner application and launch pipeline</h2>
        <p>What internal teams need to see as new integrations move from intake to production readiness.</p>
      </div>
      <a class="btn btn-ghost small" href="#journeys">Open onboarding details</a>
    </div>

    <div class="panel">
      <div class="toolbar" style="margin-top:0;">
        <div class="chips">
          <span class="chip">Owner: Partnerships + Product</span>
          <span class="chip">Marketplace: Gobo after launch</span>
          <span class="chip">Environment policy: Sandbox first</span>
        </div>
        <button class="btn btn-primary small">Review new applications</button>
      </div>

      <div class="pipeline">
        <div class="stage">
          <div class="stage-head"><strong>New</strong><span class="count">2</span></div>
          <div class="stage-body">
            <div class="partner"><strong>CoolAir Integrations</strong><span>Submitted marketplace integration application. Needs initial review.</span></div>
            <div class="partner"><strong>HVAC Sync Pro</strong><span>Inbound request for a dispatch and work-order style integration.</span></div>
          </div>
        </div>
        <div class="stage">
          <div class="stage-head"><strong>Reviewing</strong><span class="count">1</span></div>
          <div class="stage-body">
            <div class="partner"><strong>ServiceFlow</strong><span>Use case and mutual customer value under evaluation.</span></div>
          </div>
        </div>
        <div class="stage">
          <div class="stage-head"><strong>Approved</strong><span class="count">1</span></div>
          <div class="stage-body">
            <div class="partner"><strong>LeadBridge</strong><span>Approved for sandbox provisioning and technical onboarding.</span></div>
          </div>
        </div>
        <div class="stage">
          <div class="stage-head"><strong>Building</strong><span class="count">1</span></div>
          <div class="stage-body">
            <div class="partner"><strong>PipeWorks AI</strong><span>Testing customer, lead, and work-order lifecycle endpoints in sandbox.</span></div>
          </div>
        </div>
        <div class="stage">
          <div class="stage-head"><strong>Launching</strong><span class="count">1</span></div>
          <div class="stage-body">
            <div class="partner"><strong>DispatchHero</strong><span>Completing launch checklist before production keys and marketplace handoff.</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="journeys" class="section container">
    <div class="content-grid">
      <div class="panel">
        <h3>Customer journey</h3>
        <div class="subtle">Optimized for one-off API needs inside an existing customer account.</div>
        <div class="timeline">
          <div class="step"><div class="step-num">1</div><div><h4>Account authentication</h4><p>Customer signs in with their existing FieldEdge account.</p></div></div>
          <div class="step"><div class="step-num">2</div><div><h4>Intent capture</h4><p>Portal captures the use case so docs and examples can be tailored to the right API.</p></div></div>
          <div class="step"><div class="step-num">3</div><div><h4>Credential issuance</h4><p>Production API key is generated instantly with lightweight usage guardrails.</p></div></div>
          <div class="step"><div class="step-num">4</div><div><h4>Guided first call</h4><p>User lands in a quickstart built around practical workflows like sending a lead into FieldEdge.</p></div></div>
        </div>
      </div>

      <div class="panel">
        <h3>Partner journey</h3>
        <div class="subtle">Optimized for a full integration that eventually joins the partner ecosystem.</div>
        <div class="timeline">
          <div class="step"><div class="step-num">1</div><div><h4>Application</h4><p>Partner submits company details, use case, timeline, and expected customer value.</p></div></div>
          <div class="step"><div class="step-num">2</div><div><h4>Qualification</h4><p>Product and partnerships review fit, support impact, and roadmap alignment.</p></div></div>
          <div class="step"><div class="step-num">3</div><div><h4>Sandbox onboarding</h4><p>Approved partners receive a sandbox account, credentials, test data, and build checklist.</p></div></div>
          <div class="step"><div class="step-num">4</div><div><h4>Launch readiness</h4><p>Once testing is complete, partner requests production access and moves into marketplace onboarding.</p></div></div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer container">
    Portal demo concept for stakeholder reviews, roadmap discussions, and internal alignment on customer vs partner onboarding.
  </footer>
</body>
</html>
