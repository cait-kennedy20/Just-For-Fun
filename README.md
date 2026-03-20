export default function DeveloperPortalDemo() {
  const customerSteps = [
    {
      title: "Sign in with your FieldEdge account",
      body: "Use your existing customer credentials to access the portal. No separate developer account required.",
      cta: "Continue to sign in",
    },
    {
      title: "Choose your API use case",
      body: "Tell us what you're trying to do so we can guide you to the right docs and examples.",
      cta: "Select use case",
      options: ["Send leads into FieldEdge", "Create customers", "Build automation", "Something else"],
    },
    {
      title: "Generate your API key",
      body: "Provision a production key tied to your existing account. Sandbox access is not needed for this path.",
      cta: "Generate key",
    },
    {
      title: "Start building",
      body: "View your quickstart, copy sample requests, and open a Postman collection built for your account.",
      cta: "View quickstart",
    },
  ];

  const partnerSteps = [
    {
      title: "Apply as a partner",
      body: "Tell us about your company, your integration, and who it is for.",
      cta: "Start application",
    },
    {
      title: "Review and qualification",
      body: "Our team reviews alignment, support needs, and ecosystem fit before granting sandbox access.",
      cta: "See review criteria",
    },
    {
      title: "Receive sandbox access",
      body: "Get a sandbox account, API credentials, sample data, and integration guides to begin building.",
      cta: "Explore sandbox kit",
    },
    {
      title: "Launch to production",
      body: "Complete launch checks, receive production credentials, and prepare for marketplace onboarding in Gobo.",
      cta: "View launch checklist",
    },
  ];

  const ScreenCard = ({ eyebrow, title, children, footer }) => (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="border-b border-slate-100 px-6 py-4 bg-slate-50">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
      {footer ? <div className="border-t border-slate-100 px-6 py-4 bg-slate-50">{footer}</div> : null}
    </div>
  );

  const BrowserFrame = ({ children }) => (
    <div className="rounded-[28px] border border-slate-200 bg-white shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-3 bg-slate-50">
        <div className="h-3 w-3 rounded-full bg-slate-300" />
        <div className="h-3 w-3 rounded-full bg-slate-300" />
        <div className="h-3 w-3 rounded-full bg-slate-300" />
        <div className="ml-4 rounded-full bg-white border border-slate-200 px-4 py-1 text-sm text-slate-500">developer.fieldedge.com</div>
      </div>
      {children}
    </div>
  );

  const StepList = ({ steps, accent }) => (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={step.title} className="rounded-2xl border border-slate-200 p-4">
          <div className="flex items-start gap-4">
            <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl ${accent} text-white font-semibold`}>
              {index + 1}
            </div>
            <div className="min-w-0">
              <h4 className="text-base font-semibold text-slate-900">{step.title}</h4>
              <p className="mt-1 text-sm leading-6 text-slate-600">{step.body}</p>
              {step.options ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {step.options.map((option) => (
                    <span key={option} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{option}</span>
                  ))}
                </div>
              ) : null}
              <button className="mt-4 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                {step.cta}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Demo concept for FieldEdge developer portal
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 lg:text-6xl">
              A single front door with two clear API onboarding paths.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              This demo shows how customers can self-serve API access instantly while partners move through a more structured sandbox and approval flow before entering the marketplace.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Customer path</p>
              <p className="mt-1 text-2xl font-semibold">Instant</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Partner path</p>
              <p className="mt-1 text-2xl font-semibold">Qualified</p>
            </div>
          </div>
        </div>

        <BrowserFrame>
          <div className="grid gap-10 px-6 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-10">
            <div>
              <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Developer Portal</p>
                    <h2 className="mt-3 text-3xl font-semibold">Build on FieldEdge APIs</h2>
                    <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
                      Whether you're a customer solving a one-off workflow or a partner building a full integration, start here and we'll route you to the right onboarding experience.
                    </p>
                  </div>
                  <div className="hidden rounded-3xl border border-white/10 bg-white/5 p-4 text-right lg:block">
                    <p className="text-sm text-slate-300">Docs coverage</p>
                    <p className="mt-1 text-3xl font-semibold">Leads + Customers</p>
                    <p className="mt-1 text-sm text-slate-400">Work orders coming next</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-lg">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-slate-500">For customers</p>
                        <h3 className="mt-1 text-2xl font-semibold">Use the API for your business</h3>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Fast path</span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      Use your existing FieldEdge account, generate credentials, and send data into production with docs tailored to common customer workflows.
                    </p>
                    <div className="mt-5 space-y-2 text-sm text-slate-700">
                      <div className="rounded-xl bg-slate-50 px-3 py-2">No contract required</div>
                      <div className="rounded-xl bg-slate-50 px-3 py-2">No sandbox required</div>
                      <div className="rounded-xl bg-slate-50 px-3 py-2">Quickstart in minutes</div>
                    </div>
                    <button className="mt-6 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white hover:opacity-95">
                      Get API Access
                    </button>
                  </div>

                  <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-lg">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-slate-500">For partners</p>
                        <h3 className="mt-1 text-2xl font-semibold">Build an integration</h3>
                      </div>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Structured path</span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      Apply for sandbox access, build against test data, complete launch checks, and prepare for publication in the partner ecosystem.
                    </p>
                    <div className="mt-5 space-y-2 text-sm text-slate-700">
                      <div className="rounded-xl bg-slate-50 px-3 py-2">Sandbox + credentials</div>
                      <div className="rounded-xl bg-slate-50 px-3 py-2">Partner review workflow</div>
                      <div className="rounded-xl bg-slate-50 px-3 py-2">Marketplace handoff to Gobo</div>
                    </div>
                    <button className="mt-6 w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:opacity-95">
                      Apply as a Partner
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                <ScreenCard eyebrow="Screen 2" title="Customer access request">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Company account</label>
                      <div className="mt-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-500">Acme Heating & Cooling</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">What are you trying to do?</label>
                      <div className="mt-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900">Send leads into FieldEdge</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Who is building this?</label>
                      <div className="mt-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900">Our internal admin / developer</div>
                    </div>
                    <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900">
                      This workflow uses your existing production account. No sandbox is needed.
                    </div>
                  </div>
                  footer={<button className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white">Generate API Key</button>} 
                </ScreenCard>

                <ScreenCard eyebrow="Screen 3" title="Partner application">
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium text-slate-700">Company name</label>
                        <div className="mt-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-500">Enter company</div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700">Primary contact</label>
                        <div className="mt-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-500">name@company.com</div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">What are you building?</label>
                      <div className="mt-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-500">Describe your integration and intended customer value</div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium text-slate-700">Target launch timing</label>
                        <div className="mt-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-500">Choose timeline</div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700">Estimated mutual customers</label>
                        <div className="mt-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-500">Select range</div>
                      </div>
                    </div>
                  </div>
                  footer={<button className="w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white">Submit application</button>}
                </ScreenCard>

                <ScreenCard eyebrow="Screen 4" title="Launch readiness">
                  <div className="space-y-3">
                    {[
                      "Authentication configured",
                      "Required endpoints tested",
                      "Error handling validated",
                      "Support owner assigned",
                      "Production access approved",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-800">
                        <div className="h-5 w-5 rounded-md border border-slate-300 bg-white" />
                        {item}
                      </div>
                    ))}
                    <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-600">
                      Once complete, partner metadata can flow into your Gobo marketplace onboarding process.
                    </div>
                  </div>
                  footer={<button className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white">Request production access</button>}
                </ScreenCard>
              </div>
            </div>

            <div className="space-y-6">
              <ScreenCard eyebrow="Customer journey" title="Self-serve onboarding flow">
                <StepList steps={customerSteps} accent="bg-emerald-600" />
              </ScreenCard>

              <ScreenCard eyebrow="Partner journey" title="Structured integration onboarding">
                <StepList steps={partnerSteps} accent="bg-blue-600" />
              </ScreenCard>

              <ScreenCard eyebrow="Admin view" title="What your internal team needs to manage">
                <div className="space-y-3 text-sm text-slate-700">
                  {[
                    ["Customer requests", "Mostly automated key issuance tied to existing accounts"],
                    ["Partner applications", "Status pipeline: New → Reviewing → Approved → Building → Launching"],
                    ["Credentials", "Separate sandbox and production keys for partners"],
                    ["Marketplace handoff", "Only after production readiness and commercial onboarding"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 p-4">
                      <p className="font-semibold text-slate-900">{label}</p>
                      <p className="mt-1 leading-6 text-slate-600">{value}</p>
                    </div>
                  ))}
                </div>
              </ScreenCard>
            </div>
          </div>
        </BrowserFrame>
      </div>
    </div>
  );
}

