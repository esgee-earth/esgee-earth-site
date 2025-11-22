// app/page.tsx

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
      <div className="space-y-10 md:space-y-14">
        {/* HERO */}
        <section>
          <div className="rounded-3xl border border-slate-200 bg-white/95 px-4 py-6 md:px-6 md:py-8 grid gap-10 md:grid-cols-[1.3fr,1fr] md:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-700/80 mb-3">
                For Southeast Asian SMEs &amp; supply-chain partners
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                Turn ESG and carbon reporting into simple, usable data.
              </h1>
              <p className="text-sm md:text-base text-slate-600 mb-6 max-w-xl">
                ESGee Earth helps SMEs and suppliers organise emissions, energy,
                ESG and climate data so they can respond to buyers, banks and
                regulators without drowning in spreadsheets.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 transition-colors"
                >
                  Talk to us
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  See how it works
                </a>
              </div>

              <div className="inline-flex items-start gap-2 rounded-2xl border border-emerald-100 bg-emerald-50/90 px-3 py-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-700" />
                <p className="text-[11px] leading-relaxed text-slate-700 max-w-md">
                  Data structure is informed by standards like the GHG Protocol
                  and IFRS S2 climate-related disclosures, plus local guidance
                  such as Bursa Malaysia&apos;s Sustainability Reporting Guide
                  &amp; SEDG.
                </p>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-emerald-50 via-slate-50 to-slate-100 opacity-80" />
              <div className="rounded-3xl border border-slate-200 bg-white/85 backdrop-blur p-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs font-medium text-slate-700">
                      ESGee Earth workspace
                    </p>
                    <p className="text-[10px] text-slate-500">
                      ESG &amp; emissions data in one place
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-800">
                    Guided
                  </span>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-3 py-2">
                    <p className="text-[11px] font-medium text-slate-700">
                      Core emissions
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Fuel, electricity, refrigerants, travel
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
                    <p className="text-[11px] font-medium text-slate-700">
                      ESG records
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Policies, training, safety, governance
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2">
                    <p className="text-[11px] font-medium text-slate-700">
                      Supply-chain data
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Key inputs &amp; activities from suppliers
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-3">
                  <p className="text-[11px] font-medium text-slate-700 mb-2">
                    At-a-glance
                  </p>
                  <div className="space-y-2">
                    <MiniMetric
                      label="Scope 1 &amp; 2 coverage"
                      status="Structured"
                      tone="success"
                    />
                    <MiniMetric
                      label="Supplier data"
                      status="Growing"
                      tone="warning"
                    />
                    <MiniMetric
                      label="ESG records"
                      status="Organised"
                      tone="neutral"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -inset-x-10 -bottom-10 -z-20 opacity-40">
                <div className="h-24 rounded-[36px] border border-dashed border-emerald-100" />
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section
          id="who-for"
          className="rounded-3xl border border-slate-200 bg-slate-50/90 px-4 py-6 md:px-6 md:py-7"
        >
          <div className="mb-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-700/80 mb-2">
              Fit
            </p>
            <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-2">
              Who this is for
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              ESGee Earth is for real businesses and partners in and around
              Southeast Asia&apos;s supply chains who need to keep ESG and
              emissions data under control, without turning into full-time
              sustainability departments.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                SMEs &amp; suppliers
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                For teams who know ESG and climate are coming, but don&apos;t
                have the capacity for a full corporate-style reporting process.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li>• Manufacturers and processors</li>
                <li>
                  • Field-service and maintenance SMEs (e.g. O&amp;G, utilities)
                </li>
                <li>• Community enterprises and social businesses</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Corporates, buyers &amp; financiers
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                For organisations who rely on SME suppliers and want better data
                quality without overwhelming them with complex templates.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li>• Companies with Scope 3 or supplier ESG targets</li>
                <li>• Banks assessing SME portfolios and climate risks</li>
                <li>• Ecosystem partners working on just, practical transitions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROBLEM – WHY IT'S HARD NOW */}
        <section className="rounded-3xl border border-slate-200 bg-white/95 px-4 py-6 md:px-6 md:py-7">
          <div className="mb-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-700/80 mb-2">
              The reality
            </p>
            <h2
              id="problem-heading"
              className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-2"
            >
              ESG and carbon are becoming non-optional – but the data is messy.
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Buyers, banks and regulators are asking for ESG and emissions
              data. Most SMEs were never set up to track it, and value chains
              struggle to get consistent, usable numbers.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <ProblemCard
              title="Scattered evidence"
              description="Bills, invoices, travel claims, HR files and WhatsApp chats all contain pieces of the story. Very little is structured in a way that can be reused."
            />
            <ProblemCard
              title="Unclear thresholds"
              description="Standards like the GHG Protocol, IFRS S2 and Bursa’s guidance can feel abstract. SMEs need a practical ‘good enough’ starting point, not a 200-page manual."
            />
            <ProblemCard
              title="Top-down pressure"
              description="Larger companies are being nudged toward Scope 3 and climate risk disclosures. That pressure flows to suppliers, who risk being left behind if they can’t respond."
            />
          </div>
        </section>

        {/* WHAT ESGEE EARTH DOES */}
        <section
          id="solutions"
          className="rounded-3xl border border-slate-200 bg-emerald-50/80 px-4 py-6 md:px-6 md:py-7"
        >
          <div className="mb-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-800 mb-2">
              What ESGee Earth does
            </p>
            <h2
              id="solutions-heading"
              className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-2"
            >
              A calm, guided way to keep ESG &amp; carbon data in one place.
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl">
              We help you decide what to track, structure it into a simple
              workspace, and make it easier to reuse the same data for different
              requests.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <SolutionCard
              title="Clarify what to collect"
              description="We define a realistic minimum dataset for ESG &amp; emissions based on your business model and pressures."
              detail="Anchored in GHG Protocol scopes, IFRS S2 expectations and local guidance."
            />
            <SolutionCard
              title="Organise it into a workspace"
              description="Energy, fuel, travel, water, waste and key ESG records live in a structured, guided environment instead of ad-hoc files."
              detail="Recurring prompts support monthly or quarterly updates without overloading your team."
            />
            <SolutionCard
              title="Make conversations easier"
              description="Structured data makes it easier to respond to questionnaires, talk to banks and brief boards or owners."
              detail="You don’t need to ‘do reporting’ from day one – just keep your data in shape."
            />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="rounded-3xl border border-slate-200 bg-slate-50/90 px-4 py-6 md:px-6 md:py-7"
        >
          <div className="mb-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-700/80 mb-2">
              Process
            </p>
            <h2
              id="how-heading"
              className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-2"
            >
              How it works
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              We start from your reality, not from a template. The goal is a
              workspace you can actually maintain.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <StepCard
              step="01"
              title="Understand your context"
              description="We learn how your business runs, who is asking you for data, and what matters most right now."
            />
            <StepCard
              step="02"
              title="Map existing data"
              description="We identify what you already have – bills, logs, HR records – and what’s realistic to add."
            />
            <StepCard
              step="03"
              title="Set up the workspace"
              description="We structure this into clear categories and prompts so updates feel manageable."
            />
            <StepCard
              step="04"
              title="Use &amp; refine"
              description="You use the data for requests and reporting. We refine the structure as needs evolve."
            />
          </div>
        </section>

        {/* UNDER THE HOOD */}
        <section className="rounded-3xl border border-slate-200 bg-white/95 px-4 py-6 md:px-6 md:py-7">
          <div className="mb-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-700/80 mb-2">
              Under the hood
            </p>
            <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-2">
              Built where climate science, ESG frameworks and local realities
              meet.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.1fr,1fr] md:items-start">
            <p className="text-sm text-slate-700 max-w-xl">
              The way ESGee Earth structures data is informed by global
              standards and grounded in Southeast Asian realities. We care about
              what auditors and analysts ask for, but we design for how real
              teams in SMEs and communities actually work.
            </p>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-[11px] text-slate-700 space-y-2">
              <div>
                <p className="font-semibold text-slate-800 mb-1">
                  Global anchors
                </p>
                <ul className="space-y-1">
                  <li>• GHG Protocol – scopes &amp; value chain logic</li>
                  <li>• IFRS S2 – climate-related financial disclosures</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-1">
                  Local guidance
                </p>
                <ul className="space-y-1">
                  <li>• Bursa Malaysia Sustainability Reporting Guide</li>
                  <li>• Bursa SEDG – ESG disclosures for listed issuers</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-1">
                  Practical lens
                </p>
                <p>
                  We focus on a data trail that can stand up to questions over
                  time, without asking SMEs to behave like large listed
                  companies from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-6 md:px-6 md:py-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-1">
                Ready to make your ESG and carbon data less chaotic?
              </h2>
              <p className="text-sm text-slate-600 max-w-xl">
                We&apos;re working with a small number of SMEs, suppliers and
                partners to refine the ESGee Earth workspace. Share a bit about
                your context and we&apos;ll explore if there&apos;s a fit.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-800 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

// PRESENTATIONAL COMPONENTS

type CardProps = {
  title: string;
  description: string;
  detail?: string;
};

function ProblemCard({ title, description }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/95 p-4">
      <h3 className="text-sm font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-xs text-slate-600">{description}</p>
    </div>
  );
}

function SolutionCard({ title, description, detail }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/95 p-4">
      <h3 className="text-sm font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-xs text-slate-600 mb-2">{description}</p>
      {detail && <p className="text-[11px] text-slate-500">{detail}</p>}
    </div>
  );
}

type StepProps = {
  step: string;
  title: string;
  description: string;
};

function StepCard({ step, title, description }: StepProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/95 p-4 flex flex-col gap-2">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-semibold text-emerald-800">
        {step}
      </span>
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="text-xs text-slate-600">{description}</p>
    </div>
  );
}

type MiniMetricProps = {
  label: string;
  status: string;
  tone: "success" | "warning" | "neutral";
};

function MiniMetric({ label, status, tone }: MiniMetricProps) {
  const toneClass =
    tone === "success"
      ? "text-emerald-700"
      : tone === "warning"
      ? "text-amber-700"
      : "text-slate-700";

  return (
    <div className="flex items-center justify-between">
      <span className="text-[10px] text-slate-500">{label}</span>
      <span className={`text-[10px] font-medium ${toneClass}`}>{status}</span>
    </div>
  );
}
