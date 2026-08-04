"use client";

type ClimateMetric = {
  label: string;
  unit: string;
  baseline: number;
  ssp126: number;
  ssp370: number;
};

type ClimateRiskSnapshotProps = {
  location?: string;
  coordinates?: string;
  metrics?: ClimateMetric[];
  note?: string;
};

// PLACEHOLDER DATA — replace with real model output before publishing.
// These numbers are illustrative only; they are not derived from a model run.
const DEFAULT_METRICS: ClimateMetric[] = [
  {
    label: "Hot days (>35°C)",
    unit: "days / year",
    baseline: 4,
    ssp126: 18,
    ssp370: 46,
  },
  {
    label: "Heavy rainfall days (>50mm)",
    unit: "days / year",
    baseline: 12,
    ssp126: 15,
    ssp370: 21,
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
      <span className="w-8 shrink-0 text-right text-xs font-medium text-slate-800">
        {value}
      </span>
    </div>
  );
}

export default function ClimateRiskSnapshot({
  location = "Kota Kinabalu, Sabah",
  coordinates = "5.97°N, 116.07°E",
  metrics = DEFAULT_METRICS,
  note = "Illustrative example — single-model preview pending final analysis. Full multi-model ensemble available on request.",
}: ClimateRiskSnapshotProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-semibold text-slate-900">Physical risk snapshot</h3>
        <span className="inline-flex items-center rounded-full bg-amber-50 border border-amber-200 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-700">
          Illustrative
        </span>
      </div>

      <p className="text-xs text-slate-500 mb-4">
        {location} · {coordinates} · Downscaled daily climate projections
      </p>

      <div className="space-y-5">
        {metrics.map((m) => {
          const max = Math.max(m.baseline, m.ssp126, m.ssp370) * 1.15;
          return (
            <div key={m.label} className="space-y-1.5">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-slate-800">{m.label}</span>
                <span className="text-[11px] text-slate-400">{m.unit}</span>
              </div>
              <Bar label="Baseline (1995–2014)" value={m.baseline} max={max} color="bg-slate-400" />
              <Bar label="2050s · SSP1-2.6" value={m.ssp126} max={max} color="bg-emerald-500" />
              <Bar label="2050s · SSP3-7.0" value={m.ssp370} max={max} color="bg-amber-500" />
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
