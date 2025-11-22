// app/page.tsx

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-16 md:space-y-20">

      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-white px-6 py-10 md:px-10 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-700/80 mb-3">
          For SMEs & supply-chain partners in Southeast Asia
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 max-w-3xl">
          Making ESG & carbon reporting simple, practical, and usable — not overwhelming.
        </h1>

        <p className="text-sm md:text-base text-slate-600 max-w-2xl mb-6">
          ESGee Earth helps SMEs track the minimum ESG & emissions data they need
          to satisfy buyers, banks and emerging regulations — without turning into 
          a full sustainability department.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-800 transition-colors"
          >
            Join the early pilot
          </a>

          <a
            href="#why"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Why now?
          </a>
        </div>
      </section>


      {/* WHY NOW */}
      <section id="why" className="rounded-3xl border border-slate-200 bg-slate-50/80 px-6 py-10 md:px-10">
        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-4">
          ESG & carbon reporting is accelerating — but SMEs are not ready.
        </h2>

        <p className="text-sm md:text-base text-slate-600 max-w-3xl mb-8">
          Supply chains across Southeast Asia are facing increasing pressure from buyers,
          financiers and regulators. Most SMEs aren’t equipped to track ESG or emissions 
          in a structured, re-usable way.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            title="Multiple questionnaires"
            text="Suppliers receive ESG & carbon data requests in different formats from different customers — none aligned."
          />
          <StatCard
            title="Rising regulatory pressure"
            text="IFRS S2 climate disclosures & Bursa SEDG guidance push large companies to request better data from SMEs."
          />
          <StatCard
            title="Messy, inconsistent data"
            text="Bills, receipts, HR records, fuel logs and supplier claims sit scattered across spreadsheets & WhatsApp."
          />
        </div>
      </section>


      {/* APPROACH */}
      <section id="approach" className="rounded-3xl border border-slate-200 bg-white px-6 py-10 md:px-10 shadow-sm">
        <p className="text-[11px] uppercase font-medium tracking-[0.18em] text-emerald-800 mb-2">
          Our approach
        </p>

        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-4">
          A practical, guided ESG & carbon data workspace for SMEs.
        </h2>

        <p className="text-sm md:text-base text-slate-600 max-w-3xl mb-8">
          Instead of asking SMEs to become ESG experts, we define what’s realistic to track,
          structure it into a simple workspace, and make sure it aligns with global standards
          and local guidance.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <SolutionCard
            title="Define the minimum dataset"
            description="We help identify the essential ESG & emissions data SMEs should track."
            detail="Anchored in GHG Protocol & IFRS S2 expectations."
          />
          <SolutionCard
            title="Structure it for real-life workflows"
            description="Bills, travel logs, receipts and HR records become a tidy, recurring dataset."
            detail="Simple monthly or quarterly updates."
          />
          <SolutionCard
            title="Make the data re-usable"
            description="One dataset, reused for questionnaires, reporting & buyer requests."
            detail="No more starting from zero each time."
          />
        </div>
      </section>


      {/* PROCESS */}
      <section className="rounded-3xl border border-slate-200 bg-emerald-50/80 px-6 py-10 md:px-10">
        <p className="text-[11px] uppercase font-medium tracking-[0.18em] text-emerald-800 mb-2">
          How it works
        </p>

        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-4">
          Built with SMEs — not imposed on them.
        </h2>

        <div className="grid gap-4 md:grid-cols-4">
          <StepCard
            step="01"
            title="Understand context"
            description="We learn who is asking you for ESG/carbon data and what matters now."
          />
          <StepCard
            step="02"
            title="Map existing data"
            description="We start from your reality: bills, logs, receipts, supplier info."
          />
          <StepCard
            step="03"
            title="Set up workspace"
            description="Clear categories, recurring prompts, and simple structure."
          />
          <StepCard
            step="04"
            title="Use & evolve"
            description="Use the data for clients, banks & reporting. We refine as needed."
          />
        </div>
      </section>


      {/* FOUNDER */}
      <section
        id="founder"
        className="rounded-3xl border border-slate-200 bg-white px-6 py-10 md:px-10 shadow-sm"
      >
        <p className="text-[11px] uppercase font-medium tracking-[0.18em] text-emerald-800 mb-2">
          Founder
        </p>

        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-4">
          Led by climate science & grounded in Southeast Asian realities.
        </h2>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl mb-6">
          ESGee Earth is founded by a climate scientist with deep experience in GHG accounting,
          sustainability frameworks, community climate work, and regional research networks.
          Our work bridges scientific clarity with local practicality.
        </p>

        <ul className="text-xs text-slate-600 space-y-1">
          <li>• Expertise across GHG Protocol, IFRS S2 & climate risk</li>
          <li>• Experience working with SMEs, suppliers & communities</li>
          <li>• Climate storytelling & data projects across Sabah & Malaysia</li>
          <li>• Recipient of sustainability & climate action grants</li>
        </ul>
      </section>


      {/* EARLY SIGNALS */}
      <section className="rounded-3xl border border-slate-200 bg-slate-50/90 px-6 py-10 md:px-10">
        <p className="text-[11px] uppercase font-medium tracking-[0.18em] text-emerald-800 mb-2">
          Early validation
        </p>

        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-4">
          Signals that the market wants this.
        </h2>

        <ul className="text-sm text-slate-700 space-y-2">
          <li>• Interviews with SMEs across Sabah & Peninsular Malaysia confirming data confusion</li>
          <li>• Pilot interest from supply-chain sustainability teams</li>
          <li>• Climate action grant support for related community work</li>
          <li>• Early adopter waitlist forming for the ESGee Earth workspace</li>
        </ul>
      </section>


      {/* CTA */}
      <section className="rounded-3xl border border-slate-200 bg-white px-6 py-10 md:px-10 shadow-sm">
        <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
          Join the early pilot
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mb-4">
          We’re onboarding early SMEs, suppliers & partners to shape a practical ESG & carbon 
          data workspace. If you'd like to explore a fit, get in touch.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-800 transition-colors"
        >
          Get in touch
        </a>
      </section>

    </div>
  );
}


// COMPONENTS

function StatCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <h3 className="text-sm font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-xs text-slate-600">{text}</p>
    </div>
  );
}

function SolutionCard({
  title,
  description,
  detail,
}: {
  title: string;
  description: string;
  detail?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <h3 className="text-sm font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-xs text-slate-600 mb-2">{description}</p>
      {detail && <p className="text-[11px] text-slate-500">{detail}</p>}
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-2">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-semibold text-emerald-800">
        {step}
      </span>
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="text-xs text-slate-600">{description}</p>
    </div>
  );
}

