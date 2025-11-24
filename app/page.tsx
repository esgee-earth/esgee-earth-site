// app/page.tsx
import type { ReactNode } from "react";
import Image from "next/image";
import HeroIllustrations from "./components/HeroIllustrations";


export default function Home() {
  return (
  <div className="mx-auto max-w-16xl px-4 py-12 md:py-16 space-y-16 md:space-y-8">
      {/* ========================= HERO ========================= */}
      <section
        id="home"
        className="relative px-4 md:px-6 pt-12 pb-16 md:pt-16 md:pb-20"
      >
        {/* Full-width contour background */}
        <div className="absolute inset-0 -z-10" />

        {/* Centered hero copy */}
        <div className="mx-auto max-w-6xl text-center">

          {/* Top pill */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 border border-emerald-200">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal">
                For SMEs &amp; supply-chain partners
              </span>
            </div>
          </div>

          {/* Hero headline */}
          <div className="space-y-1 mb-4">
            {/* Line 1 – bigger, darker */}
            <h1
              className="
                text-[28px] md:text-[45px] leading-snug md:leading-tight
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
              <span className="text-brand-teal">ESG-ready data</span> for your
              buyers
            </p>
          </div>

          {/* Supporting sentence */}
          <p className="max-w-2xl mx-auto text-sm md:text-[13px] text-slate-700 leading-relaxed mb-4">
            The bills, receipts and logs you already keep reveal where costs
            build up. Those same details also become the carbon and ESG data
            your buyers look for, helping you optimise operations with
            lower-cost alternatives.
          </p>

          {/* Small print – frameworks */}
          {/*
          <p className="text-[10px] md:text-xs text-slate-600 mb-8">
            Aligned with GHG Protocol, ISSB/IFRS and Malaysia NSRF guidance.
          </p>
          */}

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
      </section>


      {/* Rotating illustrations */}
      <HeroIllustrations />


      {/* ========================= SME–BUYER CLARITY (SECTION 2) ========================= */}
      <section
        id="sme-buyer-clarity"
        className="px-4 md:px-6 pt-2 pb-4 md:pt-4 md:pb-6"
      >
        <HeroDiagramMinimal />
      </section>

      {/* ========================= HOW IT WORKS (NEW) ========================= */}
      <section
        id="how-it-works"
        className="px-4 md:px-6 py-12 md:py-16 bg-slate-50/60"
      >
        <HowItWorksSection />
      </section>

      {/* ========================= FOUNDERS ========================= */}
      <section id="team" className="px-4 md:px-6 py-8 md:py-10">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          {/* Header */}
          <div className="space-y-3">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 border border-emerald-100">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal">
                  Founding team
                </span>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
              Science-led clarity. Tech-enabled simplicity. Built for SMEs.
            </h2>

            <p className="text-sm md:text-[14px] text-slate-700 max-w-3xl mx-auto">
              We translate complex ESG and carbon frameworks into simple, practical
              steps SMEs can use.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-4 md:grid-cols-2">
            <FounderCard
              name="Dr Marieanne Leong"
              role="Founder · Climate Scientist"
              description="6+ years experience in climate and computing as Senior Lecturer, AI Fellow, Microsoft Tech Mentor, and Certified ESG Reporting Practitioner."
              highlight="On a mission to turn complex ESG into clarity and practical action."
              imageSrc="/founders/mae.png"
              linkedin="https://www.linkedin.com/in/marieanneleong"
            />
            <FounderCard
              name="Dr Laurynas Pukenas"
              role="Chief Technology Officer"
              description="6+ years experience in delivering innovative solutions for operations of 3 largest UK railway operators."
              highlight="On a mission to engineer simplicity without sacrificing power."
              imageSrc="/founders/laurynas.png"
              linkedin="https://www.linkedin.com/in/laurynaspukenas"
            />
          </div>
        </div>
      </section>



      {/* ========================= CTA ========================= */}
      <ContactSection />
    </div>
  );
}


/* ============================================================= */
/* ===================== COMPONENTS ============================ */
/* ============================================================= */

function HeroDiagramMinimal() {
  return (
    <div className="max-w-4xl mx-auto space-y-14 md:space-y-16 text-center">
      {/* ===================== HEADER ===================== */}
      <div className="space-y-1 md:space-y-1">
        <h2 className="text-[26px] md:text-[50px] font-semibold tracking-tight leading-tight mb-0">
          <span
            className="
              bg-gradient-to-r from-emerald-600 via-brand-teal to-emerald-500
              bg-clip-text text-transparent font-semibold
            "
          >
            Built for SMEs first.
          </span>
        </h2>

        <p className="text-[13px] md:text-[28px] italic text-slate-900 font-medium mt-0">
          Useful for buyers by design.
        </p>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl mx-auto mt-2">
          We understand the challenges of both SMEs and buyers, and where both
          needs overlap.
        </p>
      </div>

      {/* ===================== SME SECTION ===================== */}
      <div className="space-y-6">
        {/* SME pill – slightly stronger gloss */}
        <div
          className="
            inline-flex items-center justify-center
            px-5 py-2 rounded-full
            bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400
            text-emerald-950 shadow-md
          "
        >
          <span className="text-[12px] font-semibold tracking-wide uppercase">
            Clarity for SMEs
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mt-5">
          <BenefitCardWithIcon
            variant="sme"
            icon="💰"
            title="Save money"
            body="Spot where energy and material costs build up using the bills you already keep."
          />
          <BenefitCardWithIcon
            variant="sme"
            icon="⚙️"
            title="Optimise operations"
            body="Turn scattered receipts and logs into one clear operational view."
          />
          <BenefitCardWithIcon
            variant="sme"
            icon="🧭"
            title="No ESG headache"
            body="Guided prompts that translate ESG frameworks into SME language."
          />
        </div>
      </div>

      {/* ===================== BUYER SECTION ===================== */}
      <div className="space-y-6">
        {/* BUYER pill – lighter gloss, now greyish */}
        <div
          className="
            inline-flex items-center justify-center
            px-5 py-2 rounded-full
            bg-gradient-to-r from-slate-200 via-slate-200 to-slate-300
            text-slate-900 shadow-md
          "
        >
          <span className="text-[12px] font-semibold tracking-wide uppercase">
            Clarity for Buyers
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mt-5">
          <BenefitCardWithIcon
            variant="buyer"
            icon="📦"
            title="Structured data"
            body="Supplier info with evidence in structured format that mapped to Scope 3 categories."
          />
          <BenefitCardWithIcon
            variant="buyer"
            icon="📘"
            title="Framework-aligned"
            body="with the GHG Protocol, IFRS S2 and GRI Standards for consistent, interoperable ESG data.."
          />
          <BenefitCardWithIcon
            variant="buyer"
            icon="✔️"
            title="Stay compliant"
            body="on value-chain reporting requirements as regulations tighten."
          />
        </div>
      </div>


    </div>
  );
}

/* ============== HOW IT WORKS SECTION (NEW) ================= */

function HowItWorksSection() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 md:space-y-14">
    {/* Header */}
    <div className="text-center space-y-3">
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 border border-emerald-100">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal">
            How it works
          </span>
        </div>
      </div>

      <h2 className="mt-8 text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
        From your bills to buyers, with insights that help you{" "}
        <span className="text-emerald-600">cut costs</span>
      </h2>

      {/*<p className="text-sm md:text-base text-slate-700 max-w-3xl mx-auto">
        A guided flow that starts from the bills and logs you already keep,
        cleans and structures them under the hood, and ends with a buyer-ready
        ESG &amp; carbon dataset.
      </p>*/}
    </div>


      {/* Steps */}
      <div className="space-y-10 md:space-y-14">
        {/* STEP 1 */}
        <HowItWorksRow
          step="01"
          icon="📄"
          title="Enter what you already have"
          body="We guide you to add bills, receipts, fuel logs, electricity bills, etc."
          align="left"
        >
          <StepVisualInput />
        </HowItWorksRow>

        {/* STEP 2 */}
        <HowItWorksRow
          step="02"
          icon="🧮"
          title="We clean and structure the data for you"
          body="We standardise units, checks for gaps and organises everything into a clean and neat dataset without a headache."
          align="right"
        >
          <StepVisualProcessing />
        </HowItWorksRow>

        {/* STEP 3 */}
        <HowItWorksRow
          step="03"
          icon="🔍"
          title="See what’s costing more, and where you can save"
          body="View simple trends of your usage so you know where to improve."
          align="left"
        >
          <StepVisualTrends />
        </HowItWorksRow>

        {/* STEP 4 */}
        <HowItWorksRow
          step="04"
          icon="📦"
          title="Export data to your buyers"
          body="Share your clean, trustworthy dataset to your buyers easily."
          detail="Built on data structures mapped to the GHG Protocol, IFRS S2 and GRI Standards for consistent, interoperable ESG data."
          align="right"
        >
          <StepVisualExport />
        </HowItWorksRow>
      </div>
    </div>
  );
}

type HowItWorksRowProps = {
  step: string;
  icon: string;
  title: string;
  body: string;
  detail?: string;
  align?: "left" | "right";
  children: ReactNode;
};

function HowItWorksRow({
  step,
  icon,
  title,
  body,
  detail,
  align = "left",
  children,
}: HowItWorksRowProps) {
  const isRight = align === "right";

  return (
    <div
      className={`
        flex flex-col gap-6 md:gap-10
        ${isRight ? "md:flex-row-reverse" : "md:flex-row"}
        items-stretch
      `}
    >
      {/* Text block */}
      <div className="md:w-1/2 space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-brand-teal">
            {step}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal">
            Step
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <h3 className="text-sm md:text-base font-semibold text-slate-900">
            {title}
          </h3>
        </div>

        <p className="text-sm text-slate-700">{body}</p>
        {detail && (
          <p className="text-xs md:text-[13px] text-slate-500">{detail}</p>
        )}
      </div>

      {/* Visual block */}
      <div className="md:w-1/2">{children}</div>
    </div>
  );
}

/* ============== HOW IT WORKS VISUAL PLACEHOLDERS ============= */

function StepVisualInput() {
  return (
    <div
      className="
        rounded-2xl
        border border-emerald-100
        bg-gradient-to-br from-emerald-50 via-white to-emerald-50
        shadow-sm
        p-4
        flex flex-col gap-4 items-center text-center
      "
    >
      <div className="relative flex items-center justify-center gap-20 py-4">

        {/* Left circle: bills & receipts */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="
              flex flex-col items-center justify-center
              h-25 w-25
              rounded-full bg-white
              border border-slate-100
              shadow-sm
              text-3xl
            "
          >
            <span>📑</span>
            <span>🧾</span>
          </div>
        </div>

        {/* Animated hand */}
        <span
          className="
            absolute top-10 left-1/2
            text-4xl text-emerald-500
            animate-hand-drag
          "
        >
          🤚
        </span>

        {/* Right circle: organised place */}
        <div
          className="
            flex items-center justify-center
            h-25 w-25
            rounded-full bg-white
            border  border-emerald-200
            shadow-sm
            text-[15px] font-semibold text-emerald-600 leading-tight text-center
          "
        >
          ESGee<br />Earth
        </div>
      </div>
    </div>
  );
}





function StepVisualProcessing() {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 shadow-sm p-4 flex flex-col gap-3 py-6">


    {/* Header chip + 'and you get' */}
    {/*<div className="flex flex-col items-center justify-center gap-1 text-[10px] text-slate-500">
    <p className="text-[11px] font-medium text-slate-700 mb-3">
      Clean and neat dataset
    </p>
    </div>*/}


      {/* 3 simple visual steps */}
      <div className="grid grid-cols-3 gap-3 mt-1 text-center text-[11px] md:text-[12px]">

        {/* Step 1 */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-100 shadow-sm">
            <span className="text-lg">✨</span>
          </div>
          <span className="text-slate-700 font-medium">Clean data</span>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-emerald-100 shadow-sm">
            <span className="text-lg">CO₂</span>
          </div>
          <span className="text-slate-700 font-medium whitespace-nowrap">
            Carbon data
          </span>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-emerald-200 shadow-sm">
            <span className="text-lg">🌱</span>
          </div>
          <span className="text-slate-700 font-medium text-[10px] md:text-[11px]">
            ESG data
          </span>
        </div>
      </div>

    </div>
  );
}


function StepVisualTrends() {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 shadow-sm p-4 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-medium text-slate-700">
          Cost hotspots &amp; savings
        </p>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] text-slate-500">
          Last 3 months
        </span>
      </div>

      {/* 3 spacious tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">

        {/* Higher cost */}
        <div className="flex flex-col items-center gap-2 rounded-xl border border-amber-100 bg-amber-50/60 px-4 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
            <span className="text-xl">🔺</span>
          </div>
          <span className="font-semibold text-amber-700 text-[11px]">
            Higher than usual
          </span>
          <span className="text-[10px] text-slate-700">
            Diesel – vehicles · < br />RM 4,200
          </span>
        </div>

        {/* On track */}
        <div className="flex flex-col items-center gap-2 rounded-xl border border-sky-100 bg-sky-50/70 px-4 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
            <span className="text-xl">⚖️</span>
          </div>
          <span className="font-semibold text-sky-700 text-[11px]">
            On track
          </span>
          <span className="text-[10px] text-slate-700">
            Electricity – main site · < br />RM 3,100
          </span>
        </div>

        {/* Saving opportunity */}
        <div className="flex flex-col items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/70 px-4 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
            <span className="text-xl">💡</span>
          </div>
          <span className="font-semibold text-emerald-700 text-[11px]">
            Saving opportunity
          </span>
          <span className="text-[10px] text-slate-700">
            Packaging materials · < br />save RM 1,250
          </span>
        </div>

      </div>

    </div>
  );
}



function StepVisualExport() {
  return (
    <div
      className="
        rounded-2xl border border-emerald-100
        bg-gradient-to-br from-emerald-50 via-white to-emerald-50
        shadow-sm p-5
        flex flex-col items-center
      "
    >
      <div
        className="
          w-full
          flex flex-col md:flex-row
          items-center md:items-center
          justify-center md:justify-between
          gap-6 md:gap-16
          px-2
        "
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-3xl">
            🗂️
          </div>
          <p className="text-slate-700 text-center text-sm">
            Your clean, <br /> trustworthy data
          </p>
        </div>

        {/* MIDDLE: arrow + button */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-2xl text-slate-400 hidden md:inline">→</span>
          <span className="text-2xl text-slate-400 md:hidden">↓</span>
          <button className="px-5 py-2 text-sm rounded-lg bg-emerald-500 text-white shadow-sm hover:bg-emerald-600">
            Export file
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-3xl">
            📤
          </div>
          <p className="text-slate-700 text-center text-sm">Buyer</p>
        </div>
      </div>
    </div>
  );
}




/* ============= SMALL BENEFIT CARD WITH ICON (CLARITY SECTION) ============= */
function BenefitCardWithIcon({
  icon,
  title,
  body,
  variant = "sme", // "sme" or "buyer"
}: {
  icon: string;
  title: string;
  body: string;
  variant?: "sme" | "buyer";
}) {
  const borderClasses =
    variant === "sme"
      ? "border-emerald-500 bg-emerald-50" // SME — clear green
      : "border-slate-300 bg-slate-50"; // Buyer — faded grey-green

  return (
    <div
      className={`
        rounded-2xl
        ${borderClasses}
        px-4 py-4
        shadow-sm
        text-left
      `}
    >
      {/* Icon at top */}
      <div className="mb-2 text-[22px]">{icon}</div>

      {/* Title */}
      <h4 className="text-sm md:text-[14px] font-semibold text-slate-900 mb-1">
        {title}
      </h4>

      {/* Subtitle */}
      <p className="text-[12px] md:text-[13px] text-slate-500 leading-relaxed">
        {body}
      </p>
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
    <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm flex flex-col h-full text-center">
      {/* Photo + Name + Role */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex-shrink-0 h-20 w-20 rounded-full overflow-hidden bg-slate-100">
          <Image
            src={imageSrc}
            alt={name}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-900">{name}</h3>
          <p className="text-[12px] font-medium text-brand-teal">{role}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-slate-700 min-h-[84px]">
        {description}
      </p>

      {/* Highlight + LinkedIn */}
      <div className="mt-2 flex flex-col items-center">
        {highlight && (
          <p className="text-sm font-semibold text-brand-teal">
            {highlight}
          </p>
        )}

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center
              px-4 py-1.5
              mt-4
              rounded-full
              bg-emerald-50
              text-[11px] font-medium text-emerald-700
              shadow-sm
              hover:bg-emerald-100
              transition
            "
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}



function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full px-4 md:px-6 py-12 md:py-16"
    >
      <div className="max-w-5xl mx-auto rounded-3xl border border-emerald-300 bg-white shadow-md bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-6 md:px-10 py-8 md:py-10 space-y-4 text-left md:text-center">
        {/* Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 border border-emerald-100">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal">
              Pilot &amp; collaboration
            </span>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 text-center">
          You already have 80% of the data you need.
        </h2>

        <p className="mt-4 text-sm md:text-[15px] text-slate-700 max-w-3xl mx-auto leading-relaxed text-center">
          We help you fill the gaps and make your costs clearer along the way.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-monsoon transition-colors"
          >
            Get started
          </a>

        </div>
      </div>
    </section>
  );
}
