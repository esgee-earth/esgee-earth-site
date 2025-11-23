// app/page.tsx
import Image from "next/image";
import { MagnifyCostIcon } from "./components/icons/MagnifyCostIcon";
import { MagnifyESGIcon } from "./components/icons/MagnifyESGIcon";


export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-16 md:space-y-20">
    {/* ========================= HERO ========================= */}
    <section
      id="home"
      className="relative px-4 md:px-6 pt-12 pb-16 md:pt-16 md:pb-20"
    >
      {/* Full-width contour background */}
      <div className="absolute inset-0  -z-10" />

      {/* Centered hero copy */}
      <div className="mx-auto max-w-6xl text-center">
        {/* Top pill */}
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal mb-4">
          For SMEs &amp; supply-chain partners
        </p>

        {/* Hero headline */}
        <div className="space-y-1 mb-4">
          {/* Line 1 – bigger, darker */}
          <h1
            className="
              text-[28px] md:text-[42px] leading-snug md:leading-tight
              font-semibold tracking-tight
              bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-800
              bg-clip-text text-transparent
            "
          >
            Save money on fuel, electricity and materials
          </h1>


          {/* Line 2 – slightly smaller, softer colour */}
          <p className="text-lg md:text-[26px] leading-snug md:leading-tight font-medium text-slate-800">
            and turn the same bills into{" "}
            <span className="text-brand-teal">
              ESG-ready data
            </span>{" "}
            for your buyers.
          </p>
        </div>

        {/* Supporting sentence */}
        <p className="max-w-2xl mx-auto text-sm md:text-[13px] text-slate-700 leading-relaxed mb-4">
          The bills, receipts and logs you already keep reveal where costs build up.
          Those same details also become the carbon and ESG data your buyers look for,
          helping you optimise operations with lower-cost alternatives.
        </p>

        {/* Small print – frameworks */}
        <p className="text-[10px] md:text-xs text-slate-600 mb-8">
          Aligned with GHG Protocol, ISSB/IFRS and Malaysia NSRF guidance.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-teal px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-monsoon transition-colors"
          >
            Explore pilot for your SME
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
          >
            How it works
          </a>
        </div>
      </div>

      {/* Diagram in its own card, below hero */}
      <div className="mt-30 mx-auto max-w-4xl px-4 md:px-20">
        <HeroDiagramMinimal />
      </div>
    </section>


      {/* ========================= CORE STORY (WHY IT MATTERS) ========================= */}
      <section
        id="about"
        className="section-shell px-6 py-10 md:px-10 shadow-sm space-y-10 md:space-y-12"
      >
        {/* Header */}
        <div className="space-y-3">
          <p className="text-[11px] uppercase font-medium tracking-[0.18em] text-brand-teal">
            Why this matters &amp; what we actually do
          </p>

          <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 max-w-3xl">
            ESGee Earth is an SME-first ESG &amp; carbon workspace. When SMEs can
            keep a small, realistic dataset, supplier data finally becomes useful
            to buyers.
          </h2>
        </div>

        {/* ========================= PROBLEM ========================= */}
        <section className="pt-10 space-y-6">
          <SectionHeaderLine number="1" label="The problem" />

          <h3 className="text-sm md:text-base font-semibold text-brand-teal">
            SMEs juggle ESG &amp; carbon requests with no clear starting point.
          </h3>

          <p className="text-sm text-slate-700 max-w-3xl">
            SMEs receive ESG and carbon questions from customers, banks and
            programmes that all look different. They rely on bills, receipts, HR
            basics and supplier info spread across PDFs, WhatsApp and
            spreadsheets, none of which are designed for GHG Protocol or
            IFRS&nbsp;S2 thinking.
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

          <h3 className="text-sm md:text-base font-semibold text-brand-teal">
            SME-first: keep it small, repeatable, and standard-aware.
          </h3>

          <p className="text-sm text-slate-700 max-w-3xl">
            We do not ask SMEs to become ESG experts. We define a tiny, realistic
            starting set based on what they already hold, then shape it into a
            structure that still makes sense for GHG Protocol and IFRS&nbsp;S2.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <ApproachCard
              icon="📋"
              title="Start with essentials"
              description="Energy, fuel and a few ESG records that show up again and again in questionnaires."
              detail="Grounded in GHG Protocol and IFRS S2 themes, translated into SME language."
            />
            <ApproachCard
              icon="🧩"
              title="Fit SME reality"
              description="Use existing bills, receipts, HR basics and supplier info, no reconstruction needed."
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
        <section id="how-it-works" className="pt-10 space-y-6 scroll-mt-24">
          <SectionHeaderLine number="3" label="How it works" />

          <h3 className="text-sm md:text-base font-semibold text-brand-teal">
            How it works for an SME, step by step.
          </h3>

          <p className="text-sm text-slate-700 max-w-3xl">
            A light onboarding and a small workspace, supported by guidance when
            needed. Enough structure to be useful for buyers; simple enough to
            live with every year.
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
              description="A small ESG and carbon view tailored to your SME, not a giant template."
            />
            <StepCard
              step="03"
              title="Update on a simple rhythm"
              description="Monthly or quarterly prompts keep data fresh without affecting operations."
            />
            <StepCard
              step="04"
              title="Share with buyers and banks"
              description="Export views aligned to the recurring data your buyers and financiers ask for."
            />
          </div>
        </section>
      </section>

      {/* ========================= SME-FIRST STATEMENT ========================= */}
      <section className="section-muted px-6 py-10 md:px-10">
        <h2 className="text-lg md:text-xl font-semibold text-brand-teal mb-2">
          Built for SMEs first. Useful for buyers by design.
        </h2>

        <p className="text-sm text-slate-700 max-w-3xl mb-6">
        ESGee Earth is a lightweight, SME-oriented workspace that makes it
        easier for suppliers to keep their basics in order. The spillover
        effect is better supplier data for buyers and Scope 3 teams increasingly
        working with the GHG Protocol and IFRS&nbsp;S2.
        </p>

        <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-4 md:gap-6">
          {/* SMEs card */}
          <DiagramCard
            icon="🧾"
            label="For SMEs"
            title="Simple SME workspace"
            text="Keep energy, fuel, people and supplier basics in one place."
          />

          {/* Buyers card */}
          <DiagramCard
            icon="📊"
            label="For buyers"
            title="Buyer-ready data"
            text="Feeds Scope 3, risk and ESG reporting (GHG Protocol, IFRS S2, SEDG)."
          />

          {/* Shared set card */}
          <DiagramCard
            icon="🧮"
            label="For everyone"
            title="A shared language"
            text="Bridging real-world SME operations with ESG and carbon frameworks."
          />

        </div>
      </section>


      {/* ========================= FOUNDERS ========================= */}
      <section id="team" className="section-shell px-6 py-10 md:px-10 shadow-sm">
        <p className="text-[11px] uppercase font-medium tracking-[0.18em] text-brand-teal mb-2">
          Founding team
        </p>

        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 mb-4">
          Science-led clarity. Tech-enabled simplicity. Built for SMEs.
        </h2>

        <p className="text-sm md:text-[14px] text-slate-900 leading-relaxed max-w-5xl mb-6">
          We translate complex ESG and carbon frameworks into simple, practical steps SMEs can use.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <FounderCard
            name="Dr Marieanne Leong"
            role="Founder and Climate Scientist"
            description="6+ years experience in climate and computing as Senior Lecturer, AI Fellow, Microsoft Tech Mentor, and Certified ESG Reporting Practitioner."
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

      {/* ========================= CTA ========================= */}
      <section
        id="contact"
        className="section-shell px-6 py-10 md:px-10 shadow-sm"
      >
        <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
          Want a simple ESG and carbon starting point for your SME?
        </h2>
        <p className="text-sm text-slate-700 max-w-xl mb-4">
          We are working with a small group of SMEs and supply-chain partners to
          shape the ESGee Earth workspace. If you would like to explore how this
          could work for you, we're here for you.
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
    <div className="space-y-8">
      {/* Pill + heading */}
      <div className="text-center space-y-4">
        {/* CLARITY pill */}
        <div className="inline-flex items-center justify-center rounded-full
                        bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400
                        px-4 py-1 shadow-md shadow-emerald-200/60">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
            Clarity
          </span>
        </div>

        {/* Heading */}
        <h3 className="text-2xl md:text-3xl tracking-tight">
          {/* First line – glossy + thicker */}
          <span
            className="
              block
              font-bold
              bg-gradient-to-r from-emerald-700 via-brand-teal to-emerald-600
              bg-clip-text text-transparent
            "
          >
            Built for SMEs first.
          </span>

          {/* Second line – black, italic, lighter weight */}
          <span className="block font-medium italic text-slate-900">
            Useful for buyers by design.
          </span>
        </h3>
      </div>

      {/* Two cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* SME card */}
        <div
          className="
            rounded-3xl border border-emerald-100/80 bg-white
            px-7 py-7 md:px-8 md:py-8
            shadow-lg shadow-emerald-100/70
            ring-1 ring-emerald-100/80
          "
        >
          <div className="flex items-center gap-3 mb-4">
            <MagnifyCostIcon className="h-10 w-10" />
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                SME
              </p>
              <p className="text-sm md:text-base font-semibold text-slate-900">
                Cost lens
              </p>
            </div>
          </div>

          <ul className="space-y-1.5 text-xs md:text-sm text-slate-800">
            <li>✓ Save money</li>
            <li>✓ Optimise operations</li>
            <li>✓ No ESG headache</li>
          </ul>
        </div>

        {/* Buyer card */}
        <div
          className="
            rounded-3xl border border-teal-100/80 bg-white
            px-7 py-7 md:px-8 md:py-8
            shadow-lg shadow-teal-100/70
            ring-1 ring-teal-100/80
          "
        >
          <div className="flex items-center gap-3 mb-4">
            <MagnifyESGIcon className="h-10 w-10" />
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Buyer
              </p>
              <p className="text-sm md:text-base font-semibold text-slate-900">
                ESG &amp; carbon lens
              </p>
            </div>
          </div>

          <ul className="space-y-1.5 text-xs md:text-sm text-slate-800">
            <li>✓ Structured data from SMEs</li>
            <li>✓ Trustworthy, framework-aligned</li>
            <li>✓ Stay compliant</li>
          </ul>
        </div>
      </div>

      {/* Tagline at the bottom */}
      <p className="text-xs md:text-sm text-slate-600 text-center">
        One set of data, two big wins.
      </p>
    </div>
  );
}



/* ============== SECTION HEADER ================= */
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
    <div
      className="
        inline-flex items-center gap-2 rounded-full
        border border-brand-teal/40
        bg-white
        px-3 py-1.5
        shadow-[0_0_8px_rgba(16,185,129,0.25)]
      "
    >
      <span
        className="
          inline-flex h-5 w-5 items-center justify-center
          rounded-full
          bg-emerald-50
          text-[10px] font-semibold text-brand-teal
          shadow-[0_0_4px_rgba(16,185,129,0.25)]
        "
      >
        {number}
      </span>
      <span className="text-[11px] font-medium text-brand-teal">
        {label}
      </span>
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
          <p className="text-[12px] font-medium text-brand-earth">{role}</p>
        </div>
      </div>

      {/* Description – min height so highlights line up */}
      <p className="mt-4 text-sm leading-relaxed text-slate-700 min-h-[84px]">
        {description}
      </p>

      {/* Highlight + LinkedIn */}
      <div className="mt-2 flex flex-col">
        {highlight && (
          <p className="text-sm font-semibold text-brand-earth">{highlight}</p>
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

function DiagramCard({
  icon,
  label,
  title,
  text,
}: {
  icon: string;
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 text-[11px] text-brand-teal mb-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50">
          {icon}
        </span>
        <span className="font-medium">{label}</span>
      </div>
      <h3 className="text-sm font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}
