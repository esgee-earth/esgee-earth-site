"use client";

import { motion } from "framer-motion";

import StepVisualJourney from "@/app/components/StepVisualJourney";
import FounderCard from "@/app/components/FounderCard";
import ClimateRiskSnapshot from "@/app/components/ClimateRiskSnapshot";
import WarmingStripes from "@/app/components/WarmingStripes";
import { AtmosphericJourney } from "@/app/components/AtmosphericJourney";
import { ScrollCrossfadeStack } from "@/app/components/ScrollCrossfadeStack";
import { Factory, DollarSign, FileText, GraduationCap, Building2, Users, HeartHandshake } from "lucide-react";
import { WhatWeDoCards } from "@/app/components/WhatWeDoCards";
import { CommunityScene } from "@/app/components/CommunityScene";

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
          <div className="max-w-3xl text-center space-y-5">
            <motion.h2
              className="font-display text-lg md:text-2xl font-medium text-white"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
            >
              Where disclosure actually starts
            </motion.h2>
            <motion.p
              className="text-sm text-white/75 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Most sustainability disclosure starts with events, spreadsheets, bills, and supplier records that
              don't match up.
            </motion.p>
            <motion.p
              className="text-sm text-white/75 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Even once that&apos;s sorted, the climate science behind your risk numbers has the same
              problem:
            </motion.p>
            <motion.p
              className="text-base text-white font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              Raw data. Inadequate coverage. High uncertainties.
            </motion.p>
            <motion.p
              className="text-sm text-white/75 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              And yet, this is what boards are asked to make decisions on. Frameworks like
              IFRS S2 and TNFD aren&apos;t asking for better narratives. They&apos;re asking for
              physically grounded, decision-useful signals.
            </motion.p>
            <motion.p
              className="text-base font-medium text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              That&apos;s where the science comes in.
            </motion.p>
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

            <WhatWeDoCards />
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
                From earth data to what it means for business
              </p>
            </div>,

            <div key="b" className="max-w-2xl text-center space-y-5">
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

            <div key="e" className="max-w-2xl mx-auto text-center space-y-5">
              <p className="font-display text-lg md:text-4xl font-medium text-white">
                ESG is not just reporting.
              </p>
              <p className="text-lg md:text-xl text-brand-teal-bright font-medium">
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

      {/* ========================= TEAM + COLLABORATIONS (dark instrument panel, full-bleed) ========================= */}
      <div className="scene-credentials relative">
        <div className="instrument-grid" />
        <div className="max-w-4xl mx-auto px-4 pt-10 relative">
          <WarmingStripes height="h-3 md:h-4" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14 space-y-16 relative">

            {/* ========================= TEAM ========================= */}
            <section id="team" className="px-4 md:px-6">
              <div className="max-w-5xl mx-auto space-y-6 text-center">
                <div className="space-y-3">
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 border border-brand-teal-bright/25">
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal-bright">
                        Founding Team
                      </span>
                    </div>
                  </div>

                  <h2 className="font-display text-xl md:text-2xl font-medium tracking-tight text-white">
                    Science-led clarity. Tech-enabled simplicity.
                  </h2>

                  <p className="text-sm md:text-[14px] text-white/70 max-w-3xl mx-auto">
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
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 border border-brand-teal-bright/25">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal-bright">
                      Collaborations
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3 mt-4">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-brand-teal-bright/10 flex items-center justify-center mb-2">
                      <GraduationCap className="w-5 h-5 text-brand-teal-bright" />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wide text-white/40">Academic</span>
                    <div className="mt-2 flex flex-col gap-1.5 text-sm text-white/70">
                      <a href="https://trace.umk.edu.my/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal-bright transition">UMK-TRaCe</a>
                      <a href="https://aibig.umk.edu.my" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal-bright transition">UMK-AIBIG</a>
                      <a href="https://www.ums.edu.my/ibtp/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal-bright transition">UMS-ITBC</a>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-brand-brick/15 flex items-center justify-center mb-2">
                      <Building2 className="w-5 h-5 text-brand-brick" />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wide text-white/40">Industry</span>
                    <div className="mt-2 flex flex-col gap-1.5 text-sm text-white/70">
                      <a href="https://riverstone-enviro.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal-bright transition">Riverstone Environmental Sdn Bhd</a>
                      <a href="https://esgright.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal-bright transition">ESGright Sdn Bhd</a>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/15 flex items-center justify-center mb-2">
                      <Users className="w-5 h-5 text-brand-teal-bright" />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wide text-white/40">Network</span>
                    <div className="mt-2 flex flex-col gap-1.5 text-sm text-white/70">
                      <a href="https://www.esg-mapan.org.my/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal-bright transition">ESG-MAPAN</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

      {/* ========================= BEYOND THE CLIENT WORK (dusk ridge scene, full-bleed) ========================= */}
      <CommunityScene>
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 border border-[#f2b84b]/30">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#f2b84b]">
                Beyond the Client Work
              </span>
            </div>
          </div>

          <h2 className="font-display text-xl md:text-2xl font-medium text-white">
            Climate and nature risk isn&apos;t just a line in a disclosure report
          </h2>

          <p className="text-sm md:text-[14px] text-white/75 max-w-3xl mx-auto">
            It&apos;s lived, every monsoon season, by the communities we come from. 
            Climate Action Sabah is how we give back.
          </p>
          <p className="text-sm md:text-[14px] text-white/75 max-w-3xl mx-auto">
            We advocate for and promote community science, digital storytelling, and
            citizen science across Sabah and beyond.
          </p>
          <p className="text-sm md:text-[14px] text-white/75 max-w-3xl mx-auto">
            Because a better climate future has to include the people already living it.
          </p>

          <div className="rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm p-6 md:p-8 max-w-xl mx-auto flex flex-col items-center text-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f2b84b]/15 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-[#f2b84b]" />
            </div>
            <h3 className="font-display font-medium text-white">Climate Action Sabah</h3>
            <p className="text-sm text-white/70">
              Supported by the British Council Alumni UK Climate Action Grant, in
              collaboration with UMK-TRaCe.
            </p>
            <a
              href="/climate-action-sabah"
              className="inline-flex items-center justify-center rounded-full bg-[#f2b84b] px-5 py-2.5 text-sm font-medium text-[#1c1310] hover:bg-[#f2b84b]/85 transition-colors"
            >
              Learn more →
            </a>
          </div>
        </div>
      </CommunityScene>
    </>
  );
}
