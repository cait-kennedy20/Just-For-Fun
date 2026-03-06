<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cait's Cooling | Fast & Reliable AC Service</title>
  <style>
    :root {
      --primary: #1e6fd9;
      --primary-dark: #1557ad;
      --secondary: #00aeef;
      --accent: #ff7a00;
      --text: #16324f;
      --muted: #5e748c;
      --bg: #f5f9fd;
      --white: #ffffff;
      --border: #dbe7f3;
      --success: #1f8f5f;
      --shadow: 0 18px 40px rgba(22, 50, 79, 0.10);
      --radius: 18px;
      --max: 1180px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      color: var(--text);
      background: var(--white);
      line-height: 1.5;
    }

    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; display: block; }

    .container {
      width: min(var(--max), calc(100% - 32px));
      margin: 0 auto;
    }

    .topbar {
      background: var(--primary-dark);
      color: var(--white);
      font-size: 14px;
    }

    .topbar-inner {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      padding: 10px 0;
      flex-wrap: wrap;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(255,255,255,0.96);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(219, 231, 243, 0.9);
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding: 16px 0;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 700;
      font-size: 24px;
      color: var(--primary-dark);
      white-space: nowrap;
    }

    .brand-badge {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      display: grid;
      place-items: center;
      color: white;
      font-size: 24px;
      box-shadow: var(--shadow);
    }

    .nav-links {
      display: flex;
      gap: 24px;
      align-items: center;
      font-size: 15px;
      color: var(--muted);
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 14px 22px;
      border-radius: 999px;
      border: none;
      cursor: pointer;
      font-weight: 700;
      font-size: 15px;
      transition: 0.2s ease;
    }

    .btn:hover {
      transform: translateY(-1px);
    }

    .btn-primary {
      background: var(--accent);
      color: white;
      box-shadow: 0 12px 28px rgba(255, 122, 0, 0.25);
    }

    .btn-secondary {
      background: white;
      color: var(--primary-dark);
      border: 1px solid var(--border);
    }

    .hero {
      background:
        radial-gradient(circle at top right, rgba(0, 174, 239, 0.18), transparent 24%),
        linear-gradient(180deg, #f8fbff 0%, #eef6fd 100%);
      padding: 68px 0 52px;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 38px;
      align-items: center;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: .08em;
      text-transform: uppercase;
      color: var(--primary);
      background: rgba(30, 111, 217, 0.08);
      border: 1px solid rgba(30, 111, 217, 0.12);
      border-radius: 999px;
      padding: 8px 12px;
      margin-bottom: 18px;
    }

    h1 {
      font-size: clamp(38px, 6vw, 62px);
      line-height: 1.02;
      margin: 0 0 18px;
      letter-spacing: -0.03em;
      max-width: 11ch;
    }

    .hero p {
      color: var(--muted);
      font-size: 18px;
      max-width: 56ch;
      margin: 0 0 28px;
    }

    .hero-actions {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-bottom: 28px;
    }

    .trust-row {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      color: var(--text);
      font-size: 14px;
      font-weight: 700;
    }

    .trust-row span {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .hero-card {
      background: white;
      border-radius: 28px;
      box-shadow: var(--shadow);
      overflow: hidden;
      border: 1px solid rgba(219, 231, 243, 0.9);
    }

    .hero-image {
      min-height: 240px;
      background:
        linear-gradient(rgba(22,50,79,.15), rgba(22,50,79,.15)),
        url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80') center/cover;
    }

    .hero-panel {
      padding: 22px;
      display: grid;
      gap: 14px;
    }

    .stat-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .stat {
      background: var(--bg);
      border-radius: 16px;
      padding: 14px;
      text-align: center;
    }

    .stat strong {
      display: block;
      font-size: 22px;
      color: var(--primary-dark);
      margin-bottom: 4px;
    }

    section {
      padding: 72px 0;
    }

    .section-title {
      font-size: clamp(28px, 4vw, 42px);
      margin: 0 0 14px;
      letter-spacing: -0.02em;
    }

    .section-copy {
      color: var(--muted);
      max-width: 64ch;
      margin: 0 auto 0 0;
      font-size: 17px;
    }

    .section-head {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      align-items: end;
      margin-bottom: 32px;
      flex-wrap: wrap;
    }

    .services {
      background: var(--white);
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .card {
      background: white;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 24px;
      box-shadow: 0 10px 24px rgba(22, 50, 79, 0.05);
    }

    .card-icon {
      width: 54px;
      height: 54px;
      border-radius: 14px;
      display: grid;
      place-items: center;
      font-size: 26px;
      background: linear-gradient(135deg, rgba(30,111,217,0.14), rgba(0,174,239,0.16));
      margin-bottom: 18px;
    }

    .card h3 {
      margin: 0 0 10px;
      font-size: 21px;
    }

    .card p {
      margin: 0 0 14px;
      color: var(--muted);
      font-size: 15px;
    }

    .mini-link {
      color: var(--primary-dark);
      font-weight: 700;
      font-size: 14px;
    }

    .why {
      background: var(--bg);
    }

    .why-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      align-items: start;
    }

    .feature-list {
      display: grid;
      gap: 14px;
    }

    .feature-item {
      background: white;
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 18px;
      display: flex;
      gap: 14px;
      align-items: start;
    }

    .check {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: rgba(31, 143, 95, 0.12);
      color: var(--success);
      flex: 0 0 auto;
      font-weight: 700;
    }

    .panel {
      background: linear-gradient(180deg, var(--primary-dark), var(--primary));
      color: white;
      border-radius: 24px;
      padding: 30px;
      box-shadow: var(--shadow);
    }

    .panel h3 {
      margin-top: 0;
      margin-bottom: 12px;
      font-size: 28px;
    }

    .panel ul {
      padding-left: 18px;
      margin: 16px 0 24px;
    }

    .panel li {
      margin-bottom: 10px;
    }

    .booking {
      scroll-margin-top: 110px;
    }

    .booking-wrap {
      background: linear-gradient(180deg, #f9fcff, #eef6fd);
      border: 1px solid var(--border);
      border-radius: 28px;
      padding: 30px;
      box-shadow: var(--shadow);
    }

    .booking-grid {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 28px;
      align-items: start;
    }

    .booking-steps {
      display: grid;
      gap: 12px;
      margin-top: 20px;
    }

    .step {
      display: flex;
      gap: 12px;
      align-items: start;
      background: white;
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 16px;
    }

    .step-num {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: var(--primary);
      color: white;
      display: grid;
      place-items: center;
      font-weight: 700;
      flex: 0 0 auto;
    }

    .embed-shell {
      background: white;
      border-radius: 20px;
      border: 1px dashed #9fc6ee;
      min-height: 520px;
      padding: 20px;
      display: grid;
      place-items: center;
      color: var(--muted);
      text-align: center;
    }

    .embed-note {
      max-width: 42ch;
    }

    .testimonials {
      background: white;
    }

    .testimonial-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .quote {
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 24px;
      background: #fff;
      box-shadow: 0 10px 24px rgba(22,50,79,0.05);
    }

    .stars {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .quote p {
      color: var(--muted);
      margin: 0 0 16px;
    }

    .quote strong {
      display: block;
      color: var(--text);
    }

    .cta {
      background: linear-gradient(135deg, var(--primary-dark), var(--secondary));
      color: white;
    }

    .cta-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    footer {
      background: #10253b;
      color: rgba(255,255,255,0.9);
      padding: 34px 0;
    }

    .footer-grid {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
      align-items: center;
    }

    .footer-links {
      display: flex;
      gap: 18px;
      flex-wrap: wrap;
      color: rgba(255,255,255,0.78);
      font-size: 14px;
    }

    .tag {
      display: inline-block;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(255,255,255,0.12);
      margin-right: 8px;
      margin-bottom: 8px;
      font-size: 13px;
      font-weight: 700;
    }

    @media (max-width: 1024px) {
      .hero-grid,
      .why-grid,
      .booking-grid,
      .card-grid,
      .testimonial-grid {
        grid-template-columns: 1fr 1fr;
      }

      .booking-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 760px) {
      .nav {
        align-items: flex-start;
        flex-direction: column;
      }

      .nav-links {
        justify-content: flex-start;
      }

      .hero-grid,
      .why-grid,
      .card-grid,
      .testimonial-grid,
      .stat-grid {
        grid-template-columns: 1fr;
      }

      .hero {
        padding-top: 42px;
      }

      h1 {
        max-width: none;
      }

      .section-head,
      .cta-wrap,
      .footer-grid,
      .topbar-inner {
        flex-direction: column;
        align-items: flex-start;
      }

      .booking-wrap,
      .panel,
      .card,
      .quote {
        padding: 22px;
      }
    }
  </style>
</head>
<body>
  <div class="topbar">
    <div class="container topbar-inner">
      <div>Serving homeowners with fast, dependable AC service</div>
      <div>Call now: <strong>(555) 218-COOL</strong></div>
    </div>
  </div>

  <header>
    <div class="container nav">
      <a class="brand" href="#top">
        <span class="brand-badge">❄️</span>
        <span>Cait's Cooling</span>
      </a>
      <nav class="nav-links">
        <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
          <span style="font-size:14px; color: var(--muted); font-weight:700;">Fast online service requests</span>
          <span style="font-size:14px; color: var(--muted);">•</span>
          <span style="font-size:14px; color: var(--muted);">Office confirmation required</span>
        </div>
      </nav>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <div class="eyebrow">Trusted HVAC Professionals</div>
          <h1>Fast, reliable air conditioning service.</h1>
          <p>
            From emergency AC repair to seasonal tune-ups and system replacements, Cait's Cooling helps homeowners stay comfortable with transparent pricing and easy online booking.
          </p>
          <div class="hero-actions">
            <div id="fe-booking-root-c51df3a0e584" data-booking-text="Book Service"></div>
            <a class="btn btn-secondary" href="tel:5552182665">Call Now</a>
          </div>
          <div class="trust-row">
            <span>✅ Same-day appointments</span>
            <span>✅ Licensed & insured</span>
            <span>✅ 5-star local service</span>
          </div>
        </div>

        <div class="hero-card">
          <div class="hero-image" style="background:none; padding:0; overflow:hidden; border-radius:28px 28px 0 0;">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAYACAIAAABn4K39AADjfmNhQlgAAON+anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANvVqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOmNiNWI1Njc4LWI2ZjktNDhiNy1hNTY5LTAyODA5OTlmNDM1MAAAAAHBanVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAA5Wp1bWIAAAApanVtZGNib3IAEQAQgAAAqgA4m3EDYzJwYS5hY3Rpb25zLnYyAAAAALRjYm9yoWdhY3Rpb25zgqNmYWN0aW9ubGMycGEuY3JlYXRlZG1zb2Z0d2FyZUFnZW50v2RuYW1lZkdQVC00b/9xZGlnaXRhbFNvdXJjZVR5cGV4Rmh0dHA6Ly9jdi5pcHRjLm9yZy9uZXdzY29kZXMvZGlnaXRhbHNvdXJjZXR5cGUvdHJhaW5lZEFsZ29yaXRobWljTWVkaWGhZmFjdGlvbm5jMnBhLmNvbnZlcnRlZAAAAKtqdW1iAAAAKGp1bWRjYm9yABEAEIAAAKoAOJtxA2MycGEuaGFzaC5kYXRhAAAAAHtjYm9ypWpleGNsdXNpb25zgaJlc3RhcnQYIWZsZW5ndGgZNydkbmFtZW5qdW1iZiBtYW5pZmVzdGNhbGdmc2hhMjU2ZGhhc2hYIKViOP7r4opBaGQi1K6QXuvN5TZPb6fcG3WovShLa9RvY3BhZEgAAAAAAAAAAAAAAe5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAABv2Nib3Kmamluc3RhbmNlSUR4LHhtcDppaWQ6YmU1YWFmM2QtZmQyYS00Y2I2LThhZTItNDYyYzM2MDhmODRjdGNsYWltX2dlbmVyYXRvcl9pbmZvv2RuYW1lZ0NoYXRHUFR3b3JnLmNvbnRlbnRhdXRoLmMycGFfcnNmMC42Ny4x/2lzaWduYXR1cmV4TXNlbGYjanVtYmY9L2MycGEvdXJuOmMycGE6Y2I1YjU2NzgtYjZmOS00OGI3LWE1NjktMDI4MDk5OWY0MzUwL2MycGEuc2lnbmF0dXJlcmNyZWF0ZWRfYXNzZXJ0aW9uc4KiY3Vy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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" alt="Austin from Cait's Cooling" style="width:100%; height:100%; object-fit:cover; display:block;" />
</div>
          <div class="hero-panel">
            <strong style="font-size: 20px;">Why homeowners choose Cait's Cooling</strong>
            <div class="stat-grid">
              <div class="stat">
                <strong>24/7</strong>
                <span>Emergency Help</span>
              </div>
              <div class="stat">
                <strong>500+</strong>
                <span>Happy Clients</span>
              </div>
              <div class="stat">
                <strong>4.9★</strong>
                <span>Average Rating</span>
              </div>
            </div>
            <div style="color: var(--muted); font-size: 15px;">
              Quick scheduling, clean technicians, and a booking process that makes getting service simple.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services" id="services">
      <div class="container">
        <div class="section-head">
          <div>
            <h2 class="section-title">Cooling services built for busy homeowners</h2>
            <p class="section-copy">Use this section to make the demo feel like a real service business before driving visitors into the booking flow.</p>
          </div>
        </div>

        <div class="card-grid">
          <article class="card">
            <div class="card-icon">🛠️</div>
            <h3>AC Repair</h3>
            <p>Fast diagnostics and repairs for common cooling issues including weak airflow, strange noises, leaks, and warm air.</p>
            <a class="mini-link" href="#booking">Book repair →</a>
          </article>

          <article class="card">
            <div class="card-icon">❄️</div>
            <h3>AC Installation</h3>
            <p>Replace aging systems with efficient cooling solutions designed for long-term comfort and lower energy bills.</p>
            <a class="mini-link" href="#booking">Book estimate →</a>
          </article>

          <article class="card">
            <div class="card-icon">🧰</div>
            <h3>Maintenance</h3>
            <p>Seasonal tune-ups help prevent breakdowns, improve performance, and extend the life of your HVAC equipment.</p>
            <a class="mini-link" href="#booking">Schedule tune-up →</a>
          </article>

          <article class="card">
            <div class="card-icon">⚡</div>
            <h3>Emergency Service</h3>
            <p>When the system stops working on the hottest day of the year, our team is ready to respond quickly.</p>
            <a class="mini-link" href="#booking">Request emergency help →</a>
          </article>
        </div>
      </div>
    </section>

    <section class="why" id="why-us">
      <div class="container why-grid">
        <div>
          <h2 class="section-title">Professional service with a modern customer experience</h2>
          <p class="section-copy">This section helps position the online booking flow as part of a polished, trustworthy business experience.</p>
          <div class="feature-list" style="margin-top: 24px;">
            <div class="feature-item">
              <div class="check">✓</div>
              <div>
                <strong>Transparent scheduling</strong>
                <div style="color: var(--muted);">Customers can request service without phone tag or back-and-forth availability checks.</div>
              </div>
            </div>
            <div class="feature-item">
              <div class="check">✓</div>
              <div>
                <strong>Friendly local brand</strong>
                <div style="color: var(--muted);">Warm, approachable messaging makes the business feel real instead of like a product demo.</div>
              </div>
            </div>
            <div class="feature-item">
              <div class="check">✓</div>
              <div>
                <strong>High-converting calls to action</strong>
                <div style="color: var(--muted);">Strong placement of “Book Service” buttons keeps the main conversion path obvious.</div>
              </div>
            </div>
          </div>
        </div>

        <aside class="panel">
          <div class="tag">Same-Day Service</div>
          <div class="tag">Locally Owned</div>
          <div class="tag">Easy Online Booking</div>
          <h3>Your comfort comes first</h3>
          <p>Whether your AC quits unexpectedly or you just need routine maintenance, Cait's Cooling makes it easy to get help fast.</p>
          <ul>
            <li>Residential cooling experts</li>
            <li>Convenient appointment requests</li>
            <li>Clear communication from booking to service</li>
            <li>Designed to feel trustworthy, clean, and premium</li>
          </ul>
          <a class="btn btn-primary" href="#booking">Start Your Booking</a>
        </aside>
      </div>
    </section>

    <section class="booking" id="booking">
      <div class="container">
        <div class="booking-wrap">
          <div class="section-head">
            <div>
              <h2 class="section-title">Book your appointment online</h2>
              <p class="section-copy">Paste your online booking embed in the area below. This gives you a strong demo experience without needing a full custom site build.</p>
            </div>
          </div>

          <div class="booking-grid">
            <div>
              <h3 style="margin-top: 0; font-size: 26px;">What customers can expect</h3>
              <p class="section-copy" style="margin: 0;">A simple, professional flow that lets visitors request service in just a few steps.</p>
              <div class="booking-steps">
                <div class="step">
                  <div class="step-num">1</div>
                  <div>
                    <strong>Select a service</strong>
                    <div style="color: var(--muted);">AC repair, install estimate, maintenance, or emergency service.</div>
                  </div>
                </div>
                <div class="step">
                  <div class="step-num">2</div>
                  <div>
                    <strong>Choose a time</strong>
                    <div style="color: var(--muted);">Make scheduling feel self-serve and convenient.</div>
                  </div>
                </div>
                <div class="step">
                  <div class="step-num">3</div>
                  <div>
                    <strong>Enter contact info</strong>
                    <div style="color: var(--muted);">Capture the lead and create a smooth path to conversion.</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="embed-shell">
              <div class="embed-note">
                <strong style="font-size: 22px; display: block; margin-bottom: 10px; color: var(--primary-dark);">Paste your booking widget here</strong>
                <p style="margin: 0 0 10px;">Replace this placeholder with your Squarespace code block or embedded Online Booking script.</p>
                <p style="margin: 0; font-size: 14px;">You can paste the exact customer-facing snippet into this section once you move the layout into Squarespace.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials" id="reviews">
      <div class="container">
        <div class="section-head">
          <div>
            <h2 class="section-title">What customers are saying</h2>
            <p class="section-copy">Even in a demo, testimonials make the experience feel more believable and help support the booking CTA.</p>
          </div>
        </div>

        <div class="testimonial-grid">
          <article class="quote">
            <div class="stars">★★★★★</div>
            <p>Our AC went out during a heat wave and Cait's Cooling had us scheduled in no time. The whole process was easy from booking to repair.</p>
            <strong>— Sarah M.</strong>
          </article>
          <article class="quote">
            <div class="stars">★★★★★</div>
            <p>Super professional, on time, and easy to work with. I loved being able to request service online instead of calling around.</p>
            <strong>— James R.</strong>
          </article>
          <article class="quote">
            <div class="stars">★★★★★</div>
            <p>Great experience from start to finish. Clear communication, fair pricing, and the technician explained everything really well.</p>
            <strong>— Emily T.</strong>
          </article>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container cta-wrap">
        <div>
          <h2 style="margin: 0 0 10px; font-size: clamp(28px, 4vw, 42px);">Need cooling service fast?</h2>
          <p style="margin: 0; max-width: 54ch; color: rgba(255,255,255,0.9);">Schedule your appointment online today and let Cait's Cooling take care of the rest.</p>
        </div>
        <div id="fe-booking-root-c51df3a0e584" data-booking-text="Book Service"></div>
      </div>
    </section>
  </main>

  <footer id="contact">
    <div class="container footer-grid">
      <div>
        <div style="font-size: 22px; font-weight: 700; margin-bottom: 6px;">Cait's Cooling</div>
        <div style="color: rgba(255,255,255,0.75); font-size: 14px;">Fast & Reliable AC Service</div>
      </div>
      <div class="footer-links">
        <span>(555) 218-COOL</span>
        <span>service@caitscooling.com</span>
        <span>Mon–Sat • 7:00 AM – 8:00 PM</span>
      </div>
    </div>
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
      + ".fe-booking-overlay { position:fixed; inset:0; background:rgba(17,24,39,0.65); display:none; align-items:center; justify-content:center; z-index:999999; }"
      + ".fe-booking-modal { position:relative; width:min(960px, 92vw); height:88vh; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 24px 64px rgba(0,0,0,0.25); }"
      + ".fe-booking-close { position:absolute; top:6px; right:10px; border:0; background:transparent; color:#6b7280; font:400 28px/1 Arial,sans-serif; cursor:pointer; z-index:2; padding:0; }"
      + ".fe-booking-close:hover { color:#111827; }"
      + ".fe-booking-frame { width:100%; height:100%; border:0; display:block; }"
      + ".fieldedge-appt-book-button { display:inline-flex; align-items:center; justify-content:center; padding:14px 22px; border-radius:999px; font-weight:700; font-size:15px; background:#ff7a00; color:#fff; text-decoration:none; box-shadow:0 12px 28px rgba(255,122,0,.25);}"
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
