"use client";

import { useState } from "react";
import ClimateRiskSnapshot from "@/app/components/ClimateRiskSnapshot";
import WarmingStripes from "@/app/components/WarmingStripes";
import { CLIMATE_LOCATIONS } from "@/app/climate/data";

export default function ClimatePage() {
  const [activeId, setActiveId] = useState(CLIMATE_LOCATIONS[0].id);
  const active = CLIMATE_LOCATIONS.find((l) => l.id === activeId)!;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 space-y-10">

      {/* HEADER */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 border border-emerald-100 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal">
          Climate Impact Engine
        </span>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          From downscaled climate models to a physical risk signal
        </h1>
        <p className="text-sm md:text-base text-slate-700">
          Built on downscaled climate, hydrological and satellite datasets — bias-corrected
          to fine resolution. Pick a location to see how heat and rainfall extremes shift
          under two emissions pathways.
        </p>
      </div>

      <WarmingStripes />

      {/* WHAT THE SCENARIOS MEAN — the educating bit */}
      <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto text-sm">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="font-medium text-emerald-700">SSP1-2.6</p>
          <p className="text-slate-600 mt-1">
            A low-emissions pathway consistent with strong, near-term global mitigation
            — roughly in line with limiting warming well below 2°C.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="font-medium text-amber-700">SSP3-7.0</p>
          <p className="text-slate-600 mt-1">
            A high-emissions pathway with limited climate policy action — used as the
            upper-range case in most physical risk and disclosure scenario work.
          </p>
        </div>
      </div>

      {/* LOCATION PICKER */}
      <div className="flex justify-center gap-2 flex-wrap">
        {CLIMATE_LOCATIONS.map((loc) => (
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

      <p className="text-center text-xs text-slate-400 max-w-lg mx-auto">
        Every location shown here uses the same illustrative-preview labelling until a
        finalised multi-model run is published.{" "}
        <a href="/contact" className="underline hover:text-emerald-600">
          Get in touch
        </a>{" "}
        for a location-specific analysis.
      </p>

    </div>
  );
}
