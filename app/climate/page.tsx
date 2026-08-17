"use client";

import { useState } from "react";
import ClimateRiskSnapshot from "@/app/components/ClimateRiskSnapshot";
import WarmingStripes from "@/app/components/WarmingStripes";
import { HEAT_LOCATIONS, HAZARD_CATEGORIES } from "@/app/climate/data";

export default function ClimatePage() {
  const [categoryId, setCategoryId] = useState(HAZARD_CATEGORIES[0].id);
  const category = HAZARD_CATEGORIES.find((c) => c.id === categoryId)!;

  const [activeId, setActiveId] = useState(HEAT_LOCATIONS[0].id);
  const active = HEAT_LOCATIONS.find((l) => l.id === activeId)!;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 space-y-10">

      {/* HEADER */}
      <div className="text-center space-y-5 max-w-2xl mx-auto">
        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 border border-emerald-100 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal">
          Climate Impact Engine
        </span>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          Your physical climate risk, hazard by hazard
        </h1>
        <p className="text-sm md:text-base text-slate-700">
          Downscaled CMIP6 projections translated into the hazard indicators and business
          impacts behind IFRS S2/NSRF, Bursa and GRI reporting.
        </p>
      </div>

      <WarmingStripes />

      {/* HAZARD CATEGORY ROW */}
      <div className="flex justify-center gap-2 flex-wrap">
        {HAZARD_CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategoryId(c.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${
              c.id === categoryId
                ? "bg-brand-navy text-white border-brand-navy"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
            }`}
          >
            {c.label}
            {c.status === "coming-soon" && (
              <span className="ml-1.5 text-[10px] uppercase tracking-wide opacity-60">
                Coming soon
              </span>
            )}
          </button>
        ))}
      </div>

      {category.status === "coming-soon" ? (
        /* COMING-SOON CATEGORY — no placeholder numbers, just an honest
           "not yet" plus a way to turn the dead end into a lead. */
        <div className="max-w-md mx-auto text-center rounded-2xl border border-slate-200 bg-white p-8 space-y-3">
          <p className="text-sm font-medium text-slate-900">{category.label} — coming soon</p>
          <p className="text-sm text-slate-600">
            This hazard category isn&apos;t live yet. Want it prioritised for your sector or location?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-teal px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-monsoon transition-colors"
          >
            Get in touch
          </a>
        </div>
      ) : (
        <>
          {/* LOCATION PICKER — Heat only, real WBGT locations */}
          <div className="flex justify-center gap-2 flex-wrap">
            {HEAT_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveId(loc.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${
                  loc.id === activeId
                    ? "bg-brand-teal text-white border-brand-teal"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                }`}
              >
                {loc.location}
              </button>
            ))}
          </div>

          {/* SNAPSHOT */}
          <div className="max-w-md mx-auto">
            <ClimateRiskSnapshot
              location={active.location}
              coordinates={active.coordinates}
              metrics={active.metrics}
            />
          </div>

          <div className="text-center space-y-2">
            <a
              href="/climate/sample-report"
              className="inline-flex items-center justify-center rounded-full bg-brand-teal px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-monsoon transition-colors"
            >
              See what a full disclosure-ready analysis looks like →
            </a>
            <p className="text-center text-xs text-slate-400 max-w-lg mx-auto">
              <a href="/contact" className="underline hover:text-emerald-600">
                Get in touch
              </a>{" "}
              for your preferred locations or asset-specific analysis.
            </p>
          </div>
        </>
      )}

    </div>
  );
}
