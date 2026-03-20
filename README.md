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
  
    .modal-overlay {
      position: fixed; inset: 0; background: rgba(3, 7, 18, .72);
      backdrop-filter: blur(10px); display: none; align-items: center; justify-content: center;
      padding: 20px; z-index: 200;
    }
    .modal-overlay.open { display: flex; }
    .modal {
      width: min(760px, 100%); max-height: 88vh; overflow: auto;
      border-radius: 28px; border: 1px solid var(--line);
      background: linear-gradient(180deg, #111831, #0f172c);
      box-shadow: 0 30px 90px rgba(0,0,0,.45);
      padding: 24px;
    }
    .modal-top {
      display: flex; align-items: start; justify-content: space-between; gap: 18px; margin-bottom: 18px;
    }
    .modal-title { margin: 6px 0 0; font-size: 30px; letter-spacing: -.04em; }
    .close-btn {
      width: 42px; height: 42px; border-radius: 14px; border: 1px solid var(--line);
      background: rgba(255,255,255,.04); color: var(--text); cursor: pointer; font-size: 20px;
    }
    .modal-grid { display: grid; gap: 14px; }
    .flow-card {
      border: 1px solid var(--line); border-radius: 20px; background: rgba(255,255,255,.03); padding: 18px;
    }
    .flow-card h4 { margin: 0; font-size: 18px; }
    .flow-card p { margin: 8px 0 0; color: var(--muted); line-height: 1.7; font-size: 14px; }
    .modal-actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px; }
    .mini-fields { display: grid; gap: 10px; margin-top: 12px; }
    .mini-field {
      padding: 12px 14px; border-radius: 14px; border: 1px solid var(--line); background: rgba(255,255,255,.03);
      color: #dbe4ff; font-size: 14px;
    }
    .success-note {
      margin-top: 14px; padding: 14px 16px; border-radius: 16px; background: rgba(45,212,191,.1);
      border: 1px solid rgba(45,212,191,.22); color: #d7fff7; line-height: 1.7; font-size: 14px;
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
          <div style="font-size:12px;color:var(--muted);font-weight:500;">Developer portal</div>
        </div>
      </div>
      <div class="nav-links">
        <a href="#paths">Paths</a>
        <a href="#dashboard">Customer Dashboard</a>
        <a href="#pipeline">Partner Pipeline</a>
        <a href="#journeys">How it works</a>
        <a href="#booking">Book Service</a>
      </div>
      <div class="nav-actions">
        <a class="btn btn-ghost small" href="#dashboard">Explore APIs</a>
        <a class="btn btn-primary small" href="#booking">Book service</a>
      </div>
    </div>
  </nav>

  <header class="hero container">
    <span class="eyebrow"><span class="dot"></span>Build with FieldEdge or request service online</span>
    <div class="hero-grid">
      <div>
        <h1>Build with FieldEdge APIs and give customers a modern way to request service online.</h1>
        <p class="lead">
          Explore a cleaner FieldEdge experience for two audiences: businesses and developers who want to connect to FieldEdge, and homeowners who want a fast, modern online booking flow that sends requests to the office for confirmation.
        </p>
      </div>
      <div class="hero-panel">
        <div class="subtle">What you can do here</div>
        <div class="stat-grid">
          <div class="stat">
            <div class="label">Business access</div>
            <div class="value">Self-serve</div>
          </div>
          <div class="stat">
            <div class="label">Integration path</div>
            <div class="value">Guided</div>
          </div>
          <div class="stat">
            <div class="label">Booking flow</div>
            <div class="value">Embeddable</div>
          </div>
          <div class="stat">
            <div class="label">Launch model</div>
            <div class="value">Sandbox → Live</div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section id="paths" class="section container">
    <div class="section-head">
      <div>
        <h2>Choose how you want to work with FieldEdge</h2>
        <p>Whether you need direct API access for your business or want to build a full integration, start with the path that matches your goals.</p>
      </div>
    </div>

    <div class="choice-grid">
      <div class="choice-card">
        <span class="pill green">For businesses</span>
        <h3>Connect your business to FieldEdge</h3>
        <p>
          Existing FieldEdge customers can sign in, generate credentials, and start sending data into production without extra contract steps or sandbox setup.
        </p>
        <ul class="bullet-list">
          <li>No contract required</li>
          <li>No sandbox required</li>
          <li>Works with existing FieldEdge account</li>
          <li>Quickstart examples tailored to common workflows</li>
        </ul>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-accent" data-open-modal="customer">Get API access</button>
          <a class="btn btn-ghost" href="#journeys">See customer journey</a>
        </div>
      </div>

      <div class="choice-card">
        <span class="pill blue">For integration partners</span>
        <h3>Build an integration for FieldEdge</h3>
        <p>
          Integration partners can apply for sandbox access, build against test data, and move through a guided launch path before going live.
        </p>
        <ul class="bullet-list">
          <li>Application and qualification step</li>
          <li>Sandbox account and API credentials</li>
          <li>Launch readiness checklist</li>
          <li>Marketplace handoff after production approval</li>
        </ul>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-primary" data-open-modal="partner">Apply as a partner</button>
          <a class="btn btn-ghost" href="#journeys">See partner journey</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section container">
    <div class="content-grid">
      <div class="stack">
        <div id="dashboard" class="panel">
          <h3>Your API access dashboard</h3>
          <div class="subtle">Manage credentials, find quickstarts, and get moving fast with the APIs your business needs.</div>
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
          <h3>Getting started is simple</h3>
          <div class="subtle">A lightweight access flow helps businesses get credentials without unnecessary friction.</div>
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
        <h2>Partner onboarding</h2>
        <p>A guided path for partners building repeatable integrations for the FieldEdge ecosystem.</p>
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
        <h3>Business access journey</h3>
        <div class="subtle">Built for existing FieldEdge businesses that want fast API access for operational workflows.</div>
        <div class="timeline">
          <div class="step"><div class="step-num">1</div><div><h4>Account authentication</h4><p>Customer signs in with their existing FieldEdge account.</p></div></div>
          <div class="step"><div class="step-num">2</div><div><h4>Intent capture</h4><p>Portal captures the use case so docs and examples can be tailored to the right API.</p></div></div>
          <div class="step"><div class="step-num">3</div><div><h4>Credential issuance</h4><p>Production API key is generated instantly with lightweight usage guardrails.</p></div></div>
          <div class="step"><div class="step-num">4</div><div><h4>Guided first call</h4><p>User lands in a quickstart built around practical workflows like sending a lead into FieldEdge.</p></div></div>
        </div>
      </div>

      <div class="panel">
        <h3>Partner journey</h3>
        <div class="subtle">Designed for partners creating integrations that can scale across multiple customers.</div>
        <div class="timeline">
          <div class="step"><div class="step-num">1</div><div><h4>Application</h4><p>Partner submits company details, use case, timeline, and expected customer value.</p></div></div>
          <div class="step"><div class="step-num">2</div><div><h4>Qualification</h4><p>Product and partnerships review fit, support impact, and roadmap alignment.</p></div></div>
          <div class="step"><div class="step-num">3</div><div><h4>Sandbox onboarding</h4><p>Approved partners receive a sandbox account, credentials, test data, and build checklist.</p></div></div>
          <div class="step"><div class="step-num">4</div><div><h4>Launch readiness</h4><p>Once testing is complete, partner requests production access and moves into marketplace onboarding.</p></div></div>
        </div>
      </div>
    </div>
  </section>

    <section id="booking" class="section container">
    <div class="section-head">
      <div>
        <h2>Online booking</h2>
        <p>A customer-facing booking experience that can be embedded directly on a website or hosted on its own page.</p>
      </div>
      <a class="btn btn-ghost small" href="#paths">Back to portal</a>
    </div>

    <div class="content-grid">
      <div class="panel">
        <h3>Book service online</h3>
        <div class="subtle">Give customers a fast, modern way to request service while keeping final scheduling control with the office.</div>

        <div style="margin-top:18px;border:1px solid var(--line);border-radius:24px;overflow:hidden;background:linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.03));">
          <div style="padding:24px 24px 18px;border-bottom:1px solid var(--line);background:linear-gradient(135deg, rgba(91,140,255,.18), rgba(45,212,191,.12));">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">
              <div>
                <div class="pill blue" style="margin-bottom:10px;">Online booking</div>
                <h3 style="margin:0;font-size:30px;">Request service in minutes</h3>
                <p style="margin:10px 0 0;color:#dbe4ff;max-width:620px;line-height:1.7;">Choose your service, share a few details, and send a request to the office. Your appointment is only confirmed once a team member reviews your request and reaches out.</p>
              </div>
              <div style="min-width:220px;padding:16px;border:1px solid rgba(255,255,255,.12);border-radius:18px;background:rgba(10,15,31,.28);">
                <div style="font-size:13px;color:#c7d2fe;">Experience type</div>
                <div style="margin-top:8px;font-weight:700;">Booking request modal</div>
                <div style="margin-top:6px;font-size:13px;color:#c7d2fe;">Embeddable or hosted</div>
              </div>
            </div>
          </div>

          <div style="padding:22px;display:grid;grid-template-columns:1.05fr .95fr;gap:18px;">
            <div style="display:grid;gap:14px;">
              <div style="padding:16px;border:1px solid var(--line);border-radius:18px;background:rgba(255,255,255,.03);">
                <div style="font-size:13px;color:var(--muted);margin-bottom:8px;">Step 1</div>
                <div style="font-weight:700;margin-bottom:10px;">Select service type</div>
                <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
                  <div class="quick-card" style="margin:0;"><strong>Cooling repair</strong><span>AC not working, warm air, frozen unit</span></div>
                  <div class="quick-card" style="margin:0;"><strong>Heating repair</strong><span>No heat, uneven temps, system issue</span></div>
                  <div class="quick-card" style="margin:0;"><strong>Maintenance</strong><span>Seasonal tune-up or system check</span></div>
                  <div class="quick-card" style="margin:0;"><strong>Estimate</strong><span>New install, replacement, upgrade</span></div>
                </div>
              </div>

              <div style="padding:16px;border:1px solid var(--line);border-radius:18px;background:rgba(255,255,255,.03);">
                <div style="font-size:13px;color:var(--muted);margin-bottom:8px;">Step 2</div>
                <div style="font-weight:700;margin-bottom:10px;">Pick a preferred time window</div>
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
                  <div class="chip" style="padding:14px;border-radius:16px;text-align:center;color:#eef2ff;">Tomorrow AM</div>
                  <div class="chip" style="padding:14px;border-radius:16px;text-align:center;color:#eef2ff;">Tomorrow PM</div>
                  <div class="chip" style="padding:14px;border-radius:16px;text-align:center;color:#eef2ff;">First available</div>
                </div>
              </div>

              <div style="padding:16px;border:1px solid var(--line);border-radius:18px;background:rgba(255,255,255,.03);">
                <div style="font-size:13px;color:var(--muted);margin-bottom:8px;">Step 3</div>
                <div style="font-weight:700;margin-bottom:10px;">Enter contact details</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                  <div class="chip" style="padding:14px;border-radius:16px;color:#eef2ff;">Full name</div>
                  <div class="chip" style="padding:14px;border-radius:16px;color:#eef2ff;">Phone number</div>
                  <div class="chip" style="padding:14px;border-radius:16px;color:#eef2ff;grid-column:1 / -1;">Service address</div>
                  <div class="chip" style="padding:14px;border-radius:16px;color:#eef2ff;grid-column:1 / -1;">Tell us what’s going on</div>
                </div>
              </div>
            </div>

            <div style="display:grid;gap:14px;align-content:start;">
              <div style="padding:18px;border:1px solid rgba(45,212,191,.25);border-radius:18px;background:rgba(45,212,191,.08);">
                <div style="font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--green-2);">Important expectation</div>
                <div style="margin-top:8px;font-size:18px;font-weight:700;">This is a booking request, not an instant booking.</div>
                <p style="margin:10px 0 0;color:#d8fff7;line-height:1.7;">After submission, the request appears in the office workflow for review. A team member confirms the appointment directly with the customer, rather than placing it automatically on the dispatch board.</p>
              </div>

              <div class="quick-card" style="padding:18px;">
                <strong>Ops handoff</strong>
                <span>Requests flow into the leads panel where the office can review, qualify, and dispatch accordingly.</span>
              </div>

              <div class="quick-card" style="padding:18px;">
                <strong>Flexible deployment</strong>
                <span>The experience can be embedded directly on a contractor’s site or hosted on a dedicated booking page.</span>
              </div>

              <div class="quick-card" style="padding:18px;">
                <strong>What makes this valuable</strong>
                <span>It gives customers a modern self-serve entry point while keeping scheduling control with the office team.</span>
              </div>

              <button class="btn btn-primary" style="width:100%;margin-top:6px;">Submit booking request</button>
              <div style="font-size:12px;color:var(--muted);text-align:center;">By submitting, the customer is requesting service. Appointment confirmation happens after office follow-up.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="stack">
        <div class="panel">
          <h3>Why it works</h3>
          <div class="subtle">This shows how FieldEdge can support a polished consumer entry point without losing operational control.</div>
          <div class="timeline">
            <div class="step"><div class="step-num">1</div><div><h4>Clear customer UX</h4><p>The flow feels modern and easy to use, but avoids the false promise of instant booking confirmation.</p></div></div>
            <div class="step"><div class="step-num">2</div><div><h4>Operationally realistic</h4><p>The office team still owns final review and dispatch, which matches the realities of home services scheduling.</p></div></div>
            <div class="step"><div class="step-num">3</div><div><h4>Embeddable product thinking</h4><p>The same experience can live inside a website modal or on a hosted page, which makes it easier to roll out and test.</p></div></div>
          </div>
        </div>

        <div class="panel">
          <h3>Experience summary</h3>
          <div class="subtle">A concise summary of the customer-facing value of the booking experience.</div>
          <div class="code">FieldEdge online booking gives home services businesses a clean, modern way to let customers request service online. The experience opens in a simple modal, captures the information the office needs, and preserves operational control by routing the request for review and confirmation rather than auto-booking directly onto the dispatch board. It can be embedded on a website or hosted on a standalone page.</div>
        </div>
      </div>
    </div>
  </section>

    <div class="modal-overlay" id="customerModal" aria-hidden="true">
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="customerModalTitle">
      <div class="modal-top">
        <div>
          <div class="pill green">Customer access flow</div>
          <h3 class="modal-title" id="customerModalTitle">Get API access with your existing FieldEdge account</h3>
          <div class="subtle">A lightweight path for customers who want to solve a one-off workflow like sending leads into FieldEdge.</div>
        </div>
        <button class="close-btn" data-close-modal="customer" aria-label="Close">×</button>
      </div>
      <div class="modal-grid">
        <div class="flow-card">
          <h4>1. Sign in</h4>
          <p>Authenticate with your existing customer account so the portal knows which FieldEdge business the API key should belong to.</p>
        </div>
        <div class="flow-card">
          <h4>2. Choose your use case</h4>
          <p>Select what you are trying to do so the portal can route you to the right docs, examples, and best practices.</p>
          <div class="mini-fields">
            <div class="mini-field">Use case: Send leads into FieldEdge</div>
            <div class="mini-field">Builder: Internal admin or developer</div>
          </div>
        </div>
        <div class="flow-card">
          <h4>3. Generate production credentials</h4>
          <p>Create an API key tied to your current account. Because you are already a customer, there is no contract workflow and no sandbox requirement.</p>
        </div>
        <div class="flow-card">
          <h4>4. Start building</h4>
          <p>Land in a quickstart experience with sample requests, schema guidance, and a Postman collection for common customer workflows.</p>
        </div>
      </div>
      <div class="success-note">Best-fit use cases include one-off lead intake, customer creation, or lightweight operational workflows where the customer already has a live FieldEdge account.</div>
      <div class="modal-actions">
        <button class="btn btn-accent">Generate API key</button>
        <button class="btn btn-ghost" data-close-modal="customer">Back to portal</button>
      </div>
    </div>
  </div>

  <div class="modal-overlay" id="partnerModal" aria-hidden="true">
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="partnerModalTitle">
      <div class="modal-top">
        <div>
          <div class="pill blue">Partner onboarding flow</div>
          <h3 class="modal-title" id="partnerModalTitle">Apply to build a full FieldEdge integration</h3>
          <div class="subtle">A structured path for ecosystem partners who need a sandbox, technical onboarding, and production approval.</div>
        </div>
        <button class="close-btn" data-close-modal="partner" aria-label="Close">×</button>
      </div>
      <div class="modal-grid">
        <div class="flow-card">
          <h4>1. Submit application</h4>
          <p>Tell us about your company, the integration you want to build, who it serves, and why it belongs in the ecosystem.</p>
          <div class="mini-fields">
            <div class="mini-field">Company name: LeadBridge</div>
            <div class="mini-field">Target use case: Leads + work order lifecycle sync</div>
            <div class="mini-field">Estimated launch timing: Q3</div>
          </div>
        </div>
        <div class="flow-card">
          <h4>2. Internal review</h4>
          <p>Product and partnerships review fit, customer value, support impact, and whether the requested API coverage aligns with roadmap and ecosystem goals.</p>
        </div>
        <div class="flow-card">
          <h4>3. Receive sandbox access</h4>
          <p>Approved partners receive a sandbox account, API credentials, sample data, and a build checklist that covers the core workflows they need to complete.</p>
        </div>
        <div class="flow-card">
          <h4>4. Launch to production</h4>
          <p>After validation, the partner requests production access. Once approved, production credentials are issued and the integration can move into Gobo marketplace onboarding.</p>
        </div>
      </div>
      <div class="success-note">Best-fit use cases include repeatable integrations that multiple customers can adopt, especially when the partner needs a non-customer sandbox environment to build and test safely.</div>
      <div class="modal-actions">
        <button class="btn btn-primary">Submit partner application</button>
        <button class="btn btn-ghost" data-close-modal="partner">Back to portal</button>
      </div>
    </div>
  </div>

  <script>
    const customerModal = document.getElementById('customerModal');
    const partnerModal = document.getElementById('partnerModal');

    function openModal(type) {
      const modal = type === 'partner' ? partnerModal : customerModal;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal(type) {
      const modal = type === 'partner' ? partnerModal : customerModal;
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      if (!customerModal.classList.contains('open') && !partnerModal.classList.contains('open')) {
        document.body.style.overflow = '';
      }
    }

    document.querySelectorAll('[data-open-modal]').forEach(btn => {
      btn.addEventListener('click', () => openModal(btn.getAttribute('data-open-modal')));
    });

    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close-modal')));
    });

    [customerModal, partnerModal].forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
          modal.setAttribute('aria-hidden', 'true');
          if (!customerModal.classList.contains('open') && !partnerModal.classList.contains('open')) {
            document.body.style.overflow = '';
          }
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal('customer');
        closeModal('partner');
      }
    });
  </script>

  <footer class="footer container">
    Explore FieldEdge APIs, partner onboarding, and online booking from a polished customer-facing experience.
  </footer>
  <script>
(function () {
  var ROOT_ID = "fe-booking-root-c51df3a0e584";
  var STYLE_ID = "fe-booking-style-c51df3a0e584";
  var OVERLAY_ID = "fe-booking-overlay-c51df3a0e584";
  var BOOKING_URL = "https://fieldedge.ipstudio.co/book/019b37e4-cb6f-784c-ad4a-c51df3a0e584";
  var INSTANCE_KEY = "__fieldedgeBookingEmbed_c51df3a0e584";

  if (window[INSTANCE_KEY]) return;
  window[INSTANCE_KEY] = true;

  var root = document.getElementById(ROOT_ID);
  if (!root) return;

  if (!document.getElementById(STYLE_ID)) {
    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = ""
      + ".fieldedge-appt-book-button { display:inline-flex; align-items:center; justify-content:center; padding:14px 18px; border-radius:14px; font-weight:700; background:linear-gradient(135deg, #5b8cff, #3d6df0); color:#fff; text-decoration:none; box-shadow:0 16px 40px rgba(61,109,240,.3); }"
      + ".fieldedge-appt-book-button:hover { opacity:.96; }"
      + ".fe-booking-overlay { position:fixed; inset:0; background:rgba(17,24,39,0.65); display:none; align-items:center; justify-content:center; z-index:999999; }"
      + ".fe-booking-modal { position:relative; width:min(960px, 92vw); height:88vh; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 24px 64px rgba(0,0,0,0.25); }"
      + ".fe-booking-close { position:absolute; top:6px; right:10px; border:0; background:transparent; color:#6b7280; font:400 28px/1 Arial,sans-serif; cursor:pointer; z-index:2; padding:0; }"
      + ".fe-booking-close:hover { color:#111827; }"
      + ".fe-booking-frame { width:100%; height:100%; border:0; display:block; }"
      + "@media (max-width: 768px) { .fe-booking-modal { width:100vw; height:100vh; border-radius:0; } .fe-booking-close { top:6px; right:10px; } }";
    document.head.appendChild(style);
  }

  var linkText = root.getAttribute("data-booking-text") || "Book Now";
  var triggerLink = document.createElement("a");
  triggerLink.href = BOOKING_URL;
  triggerLink.textContent = linkText;
  triggerLink.className = "fieldedge-appt-book-button";
  triggerLink.setAttribute("aria-haspopup", "dialog");
  triggerLink.setAttribute("aria-controls", OVERLAY_ID);

  var overlay = document.getElementById(OVERLAY_ID);
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    overlay.className = "fe-booking-overlay";
    overlay.innerHTML = ""
      + "<div class=\"fe-booking-modal\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Book service\">"
      + "<button type=\"button\" class=\"fe-booking-close\" aria-label=\"Close booking\">&times;</button>"
      + "<iframe class=\"fe-booking-frame\" src=\"" + BOOKING_URL + "\" title=\"Book service\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>"
      + "</div>";
    document.body.appendChild(overlay);
  }

  var previousOverflow = "";

  function onEscape(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  function openModal() {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    overlay.style.display = "flex";
    document.addEventListener("keydown", onEscape);
  }

  function closeModal() {
    overlay.style.display = "none";
    document.body.style.overflow = previousOverflow;
    document.removeEventListener("keydown", onEscape);
  }

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closeModal();
    }
  });

  var closeButton = overlay.querySelector(".fe-booking-close");
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  triggerLink.addEventListener("click", function (event) {
    event.preventDefault();
    openModal();
  });

  root.appendChild(triggerLink);
})();
</script>
</body>
</html>


