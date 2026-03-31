"use client";

import StepVisualJourney from "@/app/components/StepVisualJourney";
import FounderCard from "@/app/components/FounderCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-1 space-y-30">

    {/* ========================= HERO (VIDEO + GLASS) ========================= */}
    <section className="relative overflow-hidden rounded-3xl">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://3lgygfp8v2nfpeqq.public.blob.vercel-storage.com/earth2.mp4" type="video/mp4" />
      </video>

      {/* GRADIENT OVERLAY (your 70–60–50 tuning) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/50" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex justify-center px-6 py-20 md:py-28">

        {/* GLASS PANEL */}
        <div className="max-w-3xl text-center space-y-4 bg-white/45 backdrop-blur-md rounded-2xl px-6 py-8 md:px-10 md:py-10 border border-white/30 shadow-lg">


          {/* HEADLINE (TWO-TONED) */}
          <h1 className="text-[26px] md:text-[42px] font-semibold tracking-tight leading-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
              Climate science.
            </span>{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
              ESG data.
            </span>{" "}
            <span className="text-slate-900 italic whitespace-nowrap">
              Real-world decisions.
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
            We work across climate, ESG data systems, and real-world implementation to help
            businesses move from scattered records to structured, decision-ready data.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            <a
              href="https://app.esgee.earth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-teal px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-monsoon transition-colors"
            >
              Get early access
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white/90 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-white transition-colors shadow-sm"
            >
              Work with us
            </a>
          </div>

        </div>
      </div>

    </section>

      {/* ========================= QUIET TRUTH ========================= */}
      <section className="text-center space-y-4 max-w-3xl mx-auto bg-slate-50/60 rounded-2xl p-6 md:p-10">

        <h2 className="text-lg md:text-xl font-semibold text-slate-900">
          A quieter truth about ESG
        </h2>

        <p className="text-sm text-slate-700 leading-relaxed">
          ESG today is often treated as a reporting exercise.
          But reporting is the last step, not the first.
        </p>

        <p className="text-sm text-slate-700 leading-relaxed">
          Before disclosures, before frameworks, before audits,
          there is data.
        </p>

        <p className="text-base text-amber-700 leading-relaxed font-medium">
          Messy. Incomplete. Unstructured.
        </p>

        <p className="text-sm text-slate-700 leading-relaxed">
          And yet, this is the data decisions are made on.
        </p>

        <p className="text-sm text-slate-700 leading-relaxed">
          Frameworks like the International Sustainability Standards Board (IFRS S1/S2)
          and the Global Reporting Initiative (GRI) are not asking for better narratives.
          They are asking for clear, structured, decision-useful information.
        </p>

        <p className="text-base leading-relaxed font-medium bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
          That starts here.
        </p>

      </section>

      {/* ========================= WHAT WE DO ========================= */}
      <section className="space-y-10 max-w-5xl mx-auto">

        <div className="text-center space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">

            What we do
          </h2>

          <p className="text-sm md:text-[14px] text-slate-700 max-w-2xl mx-auto">
            ESG doesn’t live in one place. It lives across data, systems, and real-world implementation.<br /> And there is where our work lies.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span>🌏</span>
              <h3 className="font-semibold text-slate-900">
                Climate & Nature Intelligence
              </h3>
            </div>
            <p className="text-sm text-slate-600">
              We translate climate risk, nature-related systems, and scenario analyses
              into financial and operational decisions, as well as disclosures aligned with IFRS S2 and related frameworks.
            </p>
            <p className="mt-4 text-sm text-emerald-600">
              Climate Impact Engine (coming soon) →
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span>📊</span>
              <h3 className="font-semibold text-slate-900">
                ESG Data Systems
              </h3>
            </div>
            <p className="text-sm text-slate-600">
              We structure environmental data so it can be used for reporting,
              operations, and compliance with IFRS, GRI and related frameworks.
            </p>
            <a
              href="https://app.esgee.earth"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-emerald-600 hover:underline"
            >
              Get early access (more capabilities coming) →
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span>🌱</span>
              <h3 className="font-semibold text-slate-900">
                Climate Projects & Implementation
              </h3>
            </div>
            <p className="text-sm text-slate-600">
              From Sabah-based work to early-stage carbon and nature projects,
              we connect ESG efforts to real outcomes.
            </p>
            <a
              href="/climate-action-sabah"
              className="mt-4 inline-block text-sm text-emerald-600 hover:underline"
            >
              Climate Action Sabah →
            </a>
          </div>

        </div>

        <div className="hidden text-center">
          <a href="/product" className="text-brand-teal text-sm font-medium">
            See how this works in practice →
          </a>
        </div>

      </section>

      {/* ========================= INSIGHTS (HIDDEN) ========================= */}
      <section className="hidden text-center space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Insights</h2>
        <p className="text-slate-600 text-sm">
          Writing on climate, ESG, and the systems behind them.
        </p>
      </section>


      {/* ======================= A SIMPLE PLACE TO START ====================== */}
      <section className="space-y-10 max-w-5xl mx-auto bg-emerald-50/40 rounded-2xl p-6 md:p-8 border border-emerald-100 text-center">

        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
            A simple place to start
          </h2>

          <p className="text-slate-700 max-w-xl mx-auto text-sm">
            ESG is not something you figure out all at once.
            You don’t need to understand every framework to begin.
          </p>
        </div>

        {/* ANIMATION */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <StepVisualJourney />
          </div>
        </div>

        {/* SUPPORTING TEXT */}
        <div className="space-y-3 max-w-xl mx-auto">
          <p className="text-sm text-slate-700">
            Most businesses already have the data. They just don’t see it that way yet.<br />
            Start with what you already have.
          </p>

          <p className="text-sm text-slate-700 font-medium">
            <br />✔ One simple step, done consistently, is enough to move forward.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-3 pt-2 flex-wrap">

          {/* PRIMARY CTA */}
          <a
            href="https://app.esgee.earth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand-teal px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-monsoon transition-colors"
          >
            Try the app (demo)
          </a>

          {/* SECONDARY CTA */}
          <a
            href="/product"
            className="inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Learn more
          </a>

        </div>

      </section>

      {/* ========================= TEAM ========================= */}
      <section id="team" className="px-4 md:px-6 pt-10 md:pt-2 pb-0">
        <div className="max-w-5xl mx-auto space-y-6 text-center">

          {/* Header */}
          <div className="space-y-3">

            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 border border-emerald-100">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal">
                  Founding Team
                </span>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
              Science-led clarity. Tech-enabled simplicity.
            </h2>

            <p className="text-sm md:text-[14px] text-slate-700 max-w-3xl mx-auto">
              We turn complex climate science and ESG data systems into something usable and practical.
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

      <section className="w-full px-4 md:px-6 py-0">
        <div className="max-w-4xl mx-auto text-center space-y-3">

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 border border-emerald-100">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal">
              Collaborations
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-slate-600 mt-4">

          <a
            href="https://aibig.umk.edu.my"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 transition"
          >
            UMK-AIBIG
          </a>

          <span className="text-slate-300">•</span>

          <a
            href="https://www.esg-mapan.org.my/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 transition"
          >
            ESG-MAPAN
          </a>

          <span className="text-slate-300">•</span>

          <a
            href="https://riverstone-enviro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 transition"
          >
            Riverstone Environmental
          </a>

        </div>

        </div>
      </section>

      {/* subtle divider */}
      <div className="w-25 h-[1px] bg-slate-200 mx-auto mt-10 mb-0"></div>

      {/* ========================= CLOSING ========================= */}
      <section className="text-center py-10 md:py-25 pb-2 bg-gradient-to-b from-transparent to-emerald-50/40">

        <div className="max-w-2xl mx-auto space-y-4">

          <p className="text-lg md:text-4xl font-medium text-slate-900">
            ESG is not just reporting.
            <br />
          </p>
          <p className="text-lg md:text-xl text-emerald-600">
              It's about data you can actually use to make real decisions <br /> in a changing world.
          </p>

        </div>

      </section>


    </div>
  );
}
