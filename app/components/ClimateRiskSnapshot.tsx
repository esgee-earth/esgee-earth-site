"use client";

import type { ClimateMetric } from "@/app/climate/data";

type ClimateRiskSnapshotProps = {
  location?: string;
  coordinates?: string;
  metrics?: ClimateMetric[];
  note?: string;
  /** Small chip in the top-right corner, e.g. "11-model ensemble" for real
   * data or "Illustrative" for a placeholder preview. Kept as a prop rather
   * than hardcoded so this component stays honest if it's ever reused for a
   * category that isn't backed by real data yet. */
  badgeLabel?: string;
  badgeTone?: "amber" | "teal";
};

// Fallback default — Kota Kinabalu Heat data, matching app/climate/data.ts.
// Only used if no metrics are passed in; every real call site should pass
// its own location/coordinates/metrics explicitly.
const DEFAULT_METRICS: ClimateMetric[] = [
  {
    label: "Outdoor WBGT (Kong-Huber, daily mean)",
    unit: "°C",
    baseline: 31.8,
    ssp126: 33.1,
    ssp245: 33.3,
    ssp585: 33.9,
  },
];

function Bar({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
}) {
  const width = Math.max(4, Math.round((value / max) * 100));
  return (
    <div className="flex items-center gap-3">
      <span className="w-32 shrink-0 text-xs text-slate-600">{label}</span>
      <div className="flex-1 h-2.5 rounded-full bg-slate-100">
        <div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${width}%` }}
        />
      </div>
      <span className="w-10 shrink-0 text-right text-xs font-medium text-slate-800">
        {value}
      </span>
    </div>
  );
}

export default function ClimateRiskSnapshot({
  location = "Kota Kinabalu, Sabah",
  coordinates = "5.97°N, 116.07°E",
  metrics = DEFAULT_METRICS,
  note = "11-model CMIP6 ensemble median (Kong-Huber method). Mid-century horizon (2041–2060), baseline 1995–2014.",
  badgeLabel = "11-model ensemble",
  badgeTone = "teal",
}: ClimateRiskSnapshotProps) {
  const badgeClasses =
    badgeTone === "teal"
      ? "bg-emerald-50 border-emerald-100 text-brand-teal"
      : "bg-amber-50 border-amber-200 text-amber-700";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-semibold text-slate-900">Physical risk snapshot</h3>
        <span
          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${badgeClasses}`}
        >
          {badgeLabel}
        </span>
      </div>

      <p className="text-xs text-slate-500 mb-4">
        {location} · {coordinates} · Downscaled daily climate projections
      </p>

      <div className="space-y-5">
        {metrics.map((m) => {
          const max = Math.max(m.baseline, m.ssp126, m.ssp245, m.ssp585) * 1.15;
          return (
            <div key={m.label} className="space-y-1.5">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-slate-800">{m.label}</span>
                <span className="text-[11px] text-slate-400">{m.unit}</span>
              </div>
              <Bar label="Baseline (1995–2014)" value={m.baseline} max={max} color="bg-slate-400" />
              <Bar label="Mid-century · SSP1-2.6" value={m.ssp126} max={max} color="bg-emerald-500" />
              <Bar label="Mid-century · SSP2-4.5" value={m.ssp245} max={max} color="bg-amber-500" />
              <Bar label="Mid-century · SSP5-8.5" value={m.ssp585} max={max} color="bg-brand-brick" />
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-slate-400 border-t border-slate-100 pt-3">
        {note}
      </p>
    </div>
  );
}
