// app/page.tsx

import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-16 md:space-y-20">

      {/* ========================= HERO ========================= */}
      <section className="section-shell px-6 py-12 md:px-10 shadow-sm">
        <div className="grid gap-10 md:grid-cols-[1.3fr,0.9fr] md:items-center">
          {/* LEFT TEXT */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-700/90 mb-3">
              For SMEs &amp; supply-chain partners in Southeast Asia
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4 max-w-xl">
              Simple ESG &amp; carbon basics for SMEs that don&apos;t disrupt daily operations
            </h1>

            <p className="text-sm md:text-base text-slate-700 max-w-xl mb-6">
              Start with the bills, receipts and records you already have. Once you track them, you&apos;ll
              naturally see where fuel, electricity and materials are being overused, which leads to
              smoother operations and real cost savings over time.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-teal px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-monsoon transition-colors"
              >
                Explore pilot for your SME
              </a>

              <a
                href="#core"
                className="inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                How it works
              </a>
            </div>

            <p className="text-[11px] leading-relaxed text-slate-500 max-w-sm">
              Structured around the GHG Protocol, IFRS&nbsp;S2 climate disclosures, and Bursa Malaysia&apos;s
              Sustainability Reporting Guide, but translated into SME reality.
            </p>
          </div>

          {/* RIGHT DIAGRAM */}
          <HeroDiagramMinimal />
        </div>
      </section>

      {/* ========================= CORE STORY (WHY IT MATTERS) ========================= */}
      <section id="core" className="section-shell px-6 py-10 md:px-10 shadow-sm space-y-10 md:space-y-12">

        {/* Header */}
        <div className="space-y-3">
          <p className="text-[11px] uppercase font-medium tracking-[0.18em] text-brand-teal">
            Why this matters &amp; what we actually do
          </p>

          <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 max-w-3xl">
            ESGee Earth is an SME-first ESG &amp; carbon workspace. When SMEs can keep a small,
            realistic dataset, supplier data finally becomes useful to buyers.
          </h2>
        </div>

        {/* ========================= PROBLEM ========================= */}
        <section className="pt-10 space-y-6">

          <SectionHeaderLine number="1" label="The problem" />

          <h3 className="text-sm md:text-base font-semibold text-slate-900">
            SMEs juggle ESG &amp; carbon requests with no clear starting point.
          </h3>

          <p className="text-sm text-slate-700 max-w-3xl">
            SMEs receive ESG and carbon questions from customers, banks and programmes that all look
            different. They rely on bills, receipts, HR basics and supplier info spread across PDFs,
            WhatsApp and spreadsheets — none of which are designed for GHG Protocol or IFRS&nbsp;S2 thinking.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <ProblemCard
              title="Scattered information"
              text="Energy, fuel, HR and supplier details live in different files and people’s heads, making each new request painful."
            />
            <ProblemCard
              title="No shared language"
              text="SMEs see everyday bills; buyers speak in Scope 1/2/3 and IFRS S2 disclosures."
            />
            <ProblemCard
              title="Tools built for corporates"
              text="Most ESG software is priced and designed for large companies, not SMEs still figuring out the basics."
            />
          </div>
        </section>

        {/* ========================= APPROACH ========================= */}
        <section className="pt-10 space-y-6">

          <SectionHeaderLine number="2" label="Our approach" />

          <h3 className="text-sm md:text-base font-semibold text-slate-900">
            SME-first: keep it small, repeatable, and standard-aware.
          </h3>

          <p className="text-sm text-slate-700 max-w-3xl">
            We don’t ask SMEs to become ESG experts. We define a tiny, realistic starting set based on
            what they already hold, then shape it into a structure that still makes sense for GHG
            Protocol and IFRS&nbsp;S2.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <ApproachCard
              icon="📋"
              title="Start with essentials"
              description="Energy, fuel and a few ESG records that show up again and again in questionnaires."
              detail="Grounded in GHG Protocol & IFRS S2 themes, translated into SME language."
            />
            <ApproachCard
              icon="🧩"
              title="Fit SME reality"
              description="Use existing bills, receipts, HR basics and supplier info — no reconstruction needed."
              detail="Guided prompts instead of blank templates."
            />
            <ApproachCard
              icon="🔁"
              title="Make it reusable"
              description="One small dataset that answers many different buyer and bank requests."
              detail="A shared language between SME documents and corporate frameworks."
            />
          </div>
        </section>

        {/* ========================= HOW IT WORKS ========================= */}
        <section className="pt-10 space-y-6">

          <SectionHeaderLine number="3" label="How it works" />

          <h3 className="text-sm md:text-base font-semibold text-slate-900">
            How it works for an SME, step by step.
          </h3>

          <p className="text-sm text-slate-700 max-w-3xl">
            A light onboarding and a small workspace, supported by guidance when needed. Enough
            structure to be useful for buyers; simple enough to live with every year.
          </p>

          <div className="grid gap-4 md:grid-cols-4">
            <StepCard
              step="01"
              title="Map what you already have"
              description="Bills, receipts, HR basics and supplier info form your starting dataset."
            />
            <StepCard
              step="02"
              title="Set up your workspace"
              description="A small ESG & carbon view tailored to your SME — not a giant template."
            />
            <StepCard
              step="03"
              title="Update on a simple rhythm"
              description="Monthly/quarterly prompts keep data fresh without affecting operations."
            />
            <StepCard
              step="04"
              title="Share with buyers & banks"
              description="Export views aligned to the recurring data your buyers and financiers ask for."
            />
          </div>
        </section>
      </section>

      {/* ========================= SME-FIRST STATEMENT ========================= */}
      <section className="section-muted px-6 py-10 md:px-10">
        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-3">
          Built for SMEs first. Useful for buyers by design.
        </h2>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl mb-4">
          ESGee Earth is not a corporate ESG platform. It is a lightweight, SME-oriented workspace that
          makes it easier for suppliers to keep their basics in order. The spillover effect is better
          supplier data for buyers, Scope 3 teams and financiers increasingly working with the GHG
          Protocol and IFRS&nbsp;S2.
        </p>

        <ul className="text-sm text-slate-700 space-y-1.5">
          <li>• For SMEs: clarity, affordability, and a realistic starting point.</li>
          <li>• For buyers/banks: consistent, auditable supplier data.</li>
          <li>• For everyone: a shared language between real-world bills and ESG frameworks.</li>
        </ul>
      </section>

      {/* ========================= FOUNDERS ========================= */}
      <section id="founder" className="section-shell px-6 py-10 md:px-10 shadow-sm">
        <p className="text-[11px] uppercase font-medium tracking-[0.18em] text-brand-teal mb-2">
          Founding team
        </p>

        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-4">
        Two nerds —one in climate, one in tech— using our brains to make climate action doable for businesses.
        </h2>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl mb-6">
          ESGee Earth is led by a climate scientist with experience in physical climate risk, carbon accounting and
          ESG reporting, and a background in teaching and science communication. This lets us translate complex frameworks
          into simple, practical steps SMEs can actually use. We’re supported by product and data partners who build simple
          tools around complex needs, and by sustainability practitioners who guide our approach.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <FounderCard
            name="Dr Marieanne Leong"
            role="Founder &amp; Climate Scientist"
            description="6+ years experience in climate & computing as Senior Lecturer, AI Fellow, Microsoft Tech Mentor, and
Certified ESG Reporting Practitioner."
            highlight="On a mission to make ESG efforts climate-action ready for all."
            imageSrc="/founders/mae.png"
            linkedin="https://www.linkedin.com/in/marieanneleong"
          />
          <FounderCard
            name="Dr Laurynas Pukenas"
            role="Chief Technology Officer"
            description="6+ years experience in delivering innovative solutions for operations of 3 largest UK railway operators."
            highlight="Now applying enterprise-grade tech to ESG and supply chain ecosystem."
            imageSrc="/founders/laurynas.png"
            linkedin="https://www.linkedin.com/in/laurynaspukenas"
          />
        </div>
      </section>


      {/* ========================= EARLY SIGNALS ========================= */}
      {/*}
      <section className="section-muted px-6 py-10 md:px-10">
        <p className="text-[11px] uppercase font-medium tracking-[0.18em] text-brand-teal mb-2">
          Early validation
        </p>

        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-4">
          Signs that SMEs and buyers are asking for this.
        </h2>

        <ul className="text-sm text-slate-700 space-y-2">
          <li>• SMEs across Sabah & Peninsular Malaysia confirming ESG & carbon confusion.</li>
          <li>• Buyers looking for supplier-friendly ways to collect recurring data.</li>
          <li>• Climate grant support for related storytelling & community work.</li>
          <li>• Early adopter list forming for the SME workspace.</li>
        </ul>
      </section>
      */}

      {/* ========================= CTA ========================= */}
      <section className="section-shell px-6 py-10 md:px-10 shadow-sm">
        <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
          Want a simple ESG &amp; carbon starting point for your SME?
        </h2>
        <p className="text-sm text-slate-700 max-w-xl mb-4">
          We&apos;re working with a small group of SMEs and supply-chain partners to shape the
          ESGee Earth workspace. If you&apos;d like to explore a fit, tell us about your context.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-monsoon transition-colors"
        >
          Get in touch
        </a>
      </section>
    </div>
  );
}

/* ============================================================= */
/* ===================== COMPONENTS ============================ */
/* ============================================================= */

function HeroDiagramMinimal() {
  return (
    <div className="relative">
      {/* Soft background */}
      <div className="absolute -inset-3 -z-10 rounded-3xl bg-slate-50" />

      <div className="rounded-3xl border border-slate-200 bg-white/95 px-6 py-7 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
        <p className="text-[15px] font-medium text-slate-600 mb-5">
          From everyday documents to buyer-ready clarity
        </p>

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* LEFT: SME everyday records */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 mb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-slate-700">
                SME
              </span>
              <span className="text-[11px] font-medium text-slate-700">
                Your existing records
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 max-w-[200px]">
              <div className="rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-[11px] text-slate-700 flex items-center gap-2">
                <span>🧾</span>
                <span>Bills &amp; receipts</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-[11px] text-slate-700 flex items-center gap-2">
                <span>⛽️</span>
                <span>Fuel &amp; travel</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-[11px] text-slate-700 flex items-center gap-2">
                <span>💡</span>
                <span>Utility usage</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-[11px] text-slate-700 flex items-center gap-2">
                <span>📲</span>
                <span>Simple sheets / chats</span>
              </div>
            </div>
          </div>

          {/* Arrow 1: SME -> ESGee */}
          <div className="hidden md:flex md:flex-col md:items-center md:justify-center px-1">
            <FlowArrow />
          </div>

          {/* MIDDLE: ESGee node */}
          <div className="flex-shrink-0 flex flex-col items-center text-center max-w-[180px]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 shadow-sm">
              <span className="text-[11px] font-semibold text-brand-teal">ESGee</span>
            </div>
            <p className="mt-2 text-[11px] text-slate-600">
              We quietly organise this into a small, reusable ESG &amp; carbon set.
            </p>
          </div>

          {/* Arrow 2: ESGee -> Buyers/Banks */}
          <div className="hidden md:flex md:flex-col md:items-center md:justify-center px-1">
            <FlowArrow />
          </div>

          {/* RIGHT: what buyers & banks see */}
          <div className="flex-1 md:flex md:justify-end">
            <div className="w-full max-w-[230px] rounded-2xl bg-slate-900 px-4 py-4 text-left shadow-[0_14px_30px_rgba(15,23,42,0.5)]">
              <p className="text-[10px] font-medium tracking-[0.16em] text-slate-300 uppercase mb-1">
                What buyers see
              </p>
              <p className="text-xs font-semibold text-white mb-1.5">
                Clean, reusable supplier data.
              </p>
              <p className="text-[11px] text-slate-200 mb-2">
                Carbon &amp; ESG basics ready for their own reporting and risk tools,
                without extra chasing.
              </p>
              <p className="text-[10px] text-slate-400">
                Works with GHG Protocol, IFRS&nbsp;S2 and SEDG expectations.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-5 text-[10px] text-slate-500 leading-relaxed">
          The value isn&apos;t more forms. It&apos;s turning the records you already have into a
          small, standard-aware dataset that your buyers can reuse.
        </p>
      </div>
    </div>
  );
}

/* Reusable “hand-drawn” style arrow */

function FlowArrow() {
  return (
    <svg
      className="h-10 w-20 text-slate-300"
      viewBox="0 0 100 40"
      fill="none"
    >
      <path
        d="M2 28C25 18 50 15 78 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M70 14l9 3-5 8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}



/* ============== SECTION HEADER (Option A) ================= */

function SectionHeaderLine({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="w-full mb-4">
      <div className="relative flex items-center justify-center">
        {/* Horizontal line */}
        <div className="absolute left-0 right-0 h-px bg-slate-200" />

        {/* Pill on top */}
        <div className="relative bg-white px-4">
          <CorePill number={number} label={label} />
        </div>
      </div>
    </div>
  );
}

/* ============= CORE PILL =============== */

function CorePill({ number, label }: { number: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 shadow-sm">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[10px] font-semibold text-slate-700">
        {number}
      </span>
      <span className="text-[11px] font-medium text-slate-700">{label}</span>
    </div>
  );
}

/* ============= CARDS =================== */

function ProblemCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

function ApproachCard({
  icon,
  title,
  description,
  detail,
}: {
  icon: string;
  title: string;
  description: string;
  detail?: string;
}) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm">
      <div className="flex items-center gap-2 text-[11px] text-brand-teal mb-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
          {icon}
        </span>
        <span>What we put in place</span>
      </div>
      <h3 className="text-sm font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-xs text-slate-700 mb-1">{description}</p>
      {detail && <p className="text-[11px] text-slate-600">{detail}</p>}
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
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm flex flex-col gap-2">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[11px] font-semibold text-brand-teal">
        {step}
      </span>
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="text-xs text-slate-600">{description}</p>
    </div>
  );
}

/* ============= FOUNDERS ================= */

type FounderCardProps = {
  name: string;
  role: string;
  description: string;
  highlight?: string;
  imageSrc: string;
  linkedin?: string;
};

function FounderCard({
  name,
  role,
  description,
  highlight,
  imageSrc,
  linkedin,
}: FounderCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm flex flex-col h-full">
      {/* Photo + Name + Role */}
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 h-16 w-16 rounded-full overflow-hidden bg-slate-100">
          <Image
            src={imageSrc}
            alt={name}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-900">{name}</h3>
          <p className="text-[12px] font-medium text-brand-earth">
            {role}
          </p>
        </div>
      </div>

      {/* Description – give it a fixed min height so highlights line up */}
      <p className="mt-4 text-sm leading-relaxed text-slate-700 min-h-[84px]">
        {description}
      </p>

      {/* Highlight + LinkedIn */}
      <div className="mt-2 flex flex-col">
        {highlight && (
          <p className="text-sm font-semibold text-brand-earth">
            {highlight}
          </p>
        )}

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-brand-teal hover:underline mt-3"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
