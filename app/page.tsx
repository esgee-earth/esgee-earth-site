"use client";

import StepVisualJourney from "@/app/components/StepVisualJourney";
import FounderCard from "@/app/components/FounderCard";
import ClimateRiskSnapshot from "@/app/components/ClimateRiskSnapshot";
import WarmingStripes from "@/app/components/WarmingStripes";
import { AtmosphericJourney } from "@/app/components/AtmosphericJourney";
import { ScrollCrossfadeStack } from "@/app/components/ScrollCrossfadeStack";
import { CloudSun, TreePine, Database, HeartHandshake, Factory, DollarSign, FileText } from "lucide-react";

export default function Home() {
  return (
    <>
      <AtmosphericJourney>

        {/* ===================== CHAPTER 1 — THE WHOLE PICTURE ===================== */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-3xl text-center space-y-5">
            <h1 className="font-display text-[28px] md:text-[46px] font-medium tracking-tight leading-tight text-white">
              Climate science. Nature risk.{" "}
              <span className="italic text-white/80">Boardroom decisions.</span>
            </h1>
            <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto">
              We translate atmospheric and nature-related science into climate- and
              nature-risk disclosure for corporates, financial institutions, and regulated
              entities navigating a changing climate.
            </p>
            <div className="flex justify-center gap-3 mt-4 flex-wrap">
              <a href="/climate" className="inline-flex items-center justify-center rounded-full bg-brand-teal px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-monsoon transition-colors">
                See the Climate Impact Engine
              </a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition-colors">
                Work with us
              </a>
            </div>
          </div>
        </section>

        {/* ===================== CHAPTER 2 — WHERE THE DATA STARTS ===================== */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-2xl text-center space-y-4">
            <h2 className="font-display text-lg md:text-2xl font-medium text-white">
              A quieter truth about climate risk
            </h2>
            <p className="text-sm text-white/75 leading-relaxed">
              Climate and nature risk disclosure is often treated as a compliance exercise.
              But the real work happens earlier, in the science itself.
            </p>
            <p className="text-sm text-white/75 leading-relaxed">
              Before IFRS S2/TCFD, before TNFD, before scenario tables, there is raw model output,
              incomplete rainfall records, and ecological data that was never meant for a
              spreadsheet.
            </p>
            <p className="text-base text-white font-medium">
              Messy. Incomplete. Unstructured.
            </p>
            <p className="text-sm text-white/75 leading-relaxed">
              And yet, this is what boards are asked to make decisions on. Frameworks like
              IFRS S2 and TNFD aren&apos;t asking for better narratives — they&apos;re asking for
              physically grounded, decision-useful signals.
            </p>
            <p className="text-base font-medium text-white">
              That&apos;s where the science comes in.
            </p>
          </div>
        </section>

        {/* ===================== CHAPTER 3 — WHAT MOVES IT ===================== */}
        <section className="min-h-screen flex items-center justify-center px-4 md:px-6 py-24">
          <div className="w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm overflow-hidden">

            <div className="text-center p-6 md:p-8 border-b border-slate-100">
              <h2 className="font-display text-xl md:text-2xl font-medium text-brand-navy">
                What we do
              </h2>
              <p className="text-sm text-slate-700 mt-2">
                Climate and nature risk don&apos;t live in one place. They move through science,
                disclosure, and the ground itself. And that is exactly where our work lies.
              </p>
            </div>

            <div className="divide-y divide-slate-100">

              <div className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-8 p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="font-data text-2xl text-brand-teal/25 leading-none">01</span>
                  <div className="flex items-center gap-2 pt-0.5">
                    <CloudSun className="w-4 h-4 text-brand-teal shrink-0" />
                    <h3 className="font-display font-medium text-slate-900">
                      Climate &amp; Nature Risk
                    </h3>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-600">
                    Physical and transition climate risk, scenario analysis, and nature-related risk for
                    regulatory disclosures (e.g. IFRS S2/TCFD/TNFD), SBTi-aligned net zero &amp; transition planning,
                    and operational &amp; strategic planning.
                  </p>
                  <a href="/climate" className="mt-2 inline-block text-sm text-brand-teal hover:underline">
                    Explore the Climate Impact Engine (preview) →
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-8 p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="font-data text-2xl text-brand-teal/25 leading-none">02</span>
                  <div className="flex items-center gap-2 pt-0.5">
                    <TreePine className="w-4 h-4 text-brand-teal shrink-0" />
                    <h3 className="font-display font-medium text-slate-900">
                      Carbon Project Development
                    </h3>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-600">
                    Carbon credit project development and carbon stock assessment: from
                    satellite-based feasibility screening through field verification and
                    methodology design.
                  </p>
                  <a href="/contact" className="mt-2 inline-block text-sm text-brand-teal hover:underline">
                    Talk to us →
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-8 p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="font-data text-2xl text-brand-teal/25 leading-none">03</span>
                  <div className="flex items-center gap-2 pt-0.5">
                    <Database className="w-4 h-4 text-brand-teal shrink-0" />
                    <h3 className="font-display font-medium text-slate-900">
                      ESG Data Systems
                    </h3>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-600">
                    We structure environmental data so it can be used for reporting,
                    operations, and compliance with IFRS, GRI and related frameworks.
                  </p>
                  <a href="/sme" className="mt-2 inline-block text-sm text-brand-teal hover:underline">
                    See the SME preview →
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-8 p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <span className="font-data text-2xl text-brand-teal/25 leading-none">04</span>
                  <div className="pt-0.5">
                    <div className="flex items-center gap-2">
                      <HeartHandshake className="w-4 h-4 text-brand-teal shrink-0" />
                      <h3 className="font-display font-medium text-slate-900">
                        Climate Action Sabah
                      </h3>
                    </div>
                    <span className="inline-block text-[10px] font-medium uppercase tracking-wide text-slate-400 mt-1">
                      Community Initiative
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-600">
                    Community environmental knowledge, digital storytelling, and citizen
                    science across Sabah.
                  </p>
                  <a href="/climate-action-sabah" className="mt-2 inline-block text-sm text-brand-teal hover:underline">
                    Learn more →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== CHAPTER 4 — WHERE IT LANDS (5 crossfading beats) ===================== */}
        <ScrollCrossfadeStack
          beats={[
            <div key="a" className="text-center">
              <p className="font-display text-2xl md:text-4xl font-medium text-white">
                Where the science starts
              </p>
              <p className="text-white/55 text-sm mt-2">
                From atmospheric data to what it means on the ground
              </p>
            </div>,

            <div key="b" className="max-w-2xl text-center space-y-3">
              <h2 className="font-display text-xl md:text-3xl font-medium text-white">
                From raw climate and nature models to a boardroom-ready signal
              </h2>
              <p className="text-sm md:text-base text-white/75 leading-relaxed">
                Physical risk disclosure under IFRS S2/TCFD starts with climate model
                output, not a template. Nature-related disclosure under TNFD starts the
                same way, with land-use, ecosystem condition, and species data most tools
                never touch. We work directly with both to translate hazard and
                dependency signals into decision-ready metrics.
              </p>
            </div>,

            <ClimateRiskSnapshot key="c" />,

            <div key="c2" className="max-w-3xl text-center space-y-6">
              <div>
                <h2 className="font-display text-xl md:text-3xl font-medium text-white">
                  What that number means for a balance sheet
                </h2>
                <p className="text-sm text-white/60 mt-2">
                  Same location, same scenario — 46 hot days a year by the 2050s under SSP3-7.0.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white/90 rounded-2xl p-4 text-left">
                  <Factory className="w-4 h-4 text-brand-teal mb-2" />
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400 mb-1">Operational</p>
                  <p className="text-sm text-slate-700">
                    Cooling load, outdoor workforce safety windows, and equipment
                    derating during peak heat.
                  </p>
                </div>
                <div className="bg-white/90 rounded-2xl p-4 text-left">
                  <DollarSign className="w-4 h-4 text-brand-teal mb-2" />
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400 mb-1">Financial</p>
                  <p className="text-sm text-slate-700">
                    Capex for resilience upgrades, insurance repricing, and
                    asset-level impairment exposure.
                  </p>
                </div>
                <div className="bg-white/90 rounded-2xl p-4 text-left">
                  <FileText className="w-4 h-4 text-brand-teal mb-2" />
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400 mb-1">Disclosure</p>
                  <p className="text-sm text-slate-700">
                    Feeds IFRS S2 Metrics &amp; Targets and TCFD Strategy as a
                    quantified exposure, not a narrative.
                  </p>
                </div>
              </div>
            </div>,

            <div key="d" className="max-w-md w-full space-y-4">
              <div className="text-center">
                <p className="font-display text-lg md:text-xl font-medium text-white">
                  Start with what you already have
                </p>
                <p className="text-white/55 text-xs mt-1">
                  One simple step, done consistently, is enough to move forward
                </p>
              </div>
              <StepVisualJourney />
            </div>,

            <div key="e" className="max-w-2xl mx-auto text-center space-y-3">
              <p className="font-display text-lg md:text-4xl font-medium text-white">
                ESG is not just reporting.
              </p>
              <p className="text-lg md:text-xl text-brand-teal">
                It&apos;s about data you can actually use to make real decisions in a changing
                world — monitored continuously, not reported once.
              </p>
            </div>,
          ]}
        />

      </AtmosphericJourney>

      {/* ========================= INSIGHTS (HIDDEN) ========================= */}
      <section className="hidden text-center space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Insights</h2>
        <p className="text-slate-600 text-sm">
          Writing on climate, ESG, and the systems behind them.
        </p>
      </section>

      {/* ========================= TEAM + COLLABORATIONS (textured band) ========================= */}
      <div className="bg-gradient-to-b from-brand-mist/50 to-white">
        <div className="max-w-4xl mx-auto px-4 pt-8">
          <WarmingStripes height="h-3 md:h-4" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14 space-y-16">

          {/* ========================= TEAM ========================= */}
          <section id="team" className="px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-6 text-center">
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-brand-teal/15">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal">
                      Founding Team
                    </span>
                  </div>
                </div>

                <h2 className="font-display text-xl md:text-2xl font-medium tracking-tight text-slate-900">
                  Science-led clarity. Tech-enabled simplicity.
                </h2>

                <p className="text-sm md:text-[14px] text-slate-700 max-w-3xl mx-auto">
                  We turn complex climate science and ESG data systems into something usable and practical.
                </p>
              </div>

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

          {/* ========================= COLLABORATIONS ========================= */}
          <section className="w-full px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-3">
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-brand-teal/15">
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal">
                    Collaborations
                  </span>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3 mt-4 text-left">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">Academic</span>
                  <div className="mt-2 flex flex-col gap-1.5 text-sm text-slate-600">
                    <a href="https://trace.umk.edu.my/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition">UMK-TRaCe</a>
                    <a href="https://aibig.umk.edu.my" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition">UMK-AIBIG</a>
                    <a href="https://www.ums.edu.my/ibtp/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition">UMS ITBC</a>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">Industry</span>
                  <div className="mt-2 flex flex-col gap-1.5 text-sm text-slate-600">
                    <a href="https://riverstone-enviro.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition">Riverstone Environmental Sdn Bhd</a>
                    <a href="https://esgright.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition">ESGright Sdn Bhd</a>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">Network</span>
                  <div className="mt-2 flex flex-col gap-1.5 text-sm text-slate-600">
                    <a href="https://www.esg-mapan.org.my/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition">ESG-MAPAN</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
