"use client";

import { useState } from "react";
import {
  MONTHS,
  STATE_TABS,
  RAINFALL_MONTHLY_AVG,
  TEMP_MONTHLY_AVG,
  HAZE_MONTHLY,
  SEVERITY_STYLES,
  droughtSeverity,
  heatSeverity,
  type Severity,
} from "./data";

function Cell({ severity, value }: { severity: Severity; value?: string }) {
  return (
    <div className={`rounded-md text-white text-center py-2 px-1 ${SEVERITY_STYLES[severity]}`}>
      <span className="block font-data text-[9px] uppercase font-semibold">{severity}</span>
      {value && <span className="block font-data text-[9px] opacity-85 mt-0.5">{value}</span>}
    </div>
  );
}

function fmt(v: number, unit: "c" | "pct") {
  const sign = v >= 0 ? "+" : "";
  return unit === "c" ? `${sign}${v.toFixed(1)}°C` : `${sign}${v.toFixed(0)}%`;
}

export default function MonthlyTimeline() {
  const [selected, setSelected] = useState(STATE_TABS[0].key);
  const tab = STATE_TABS.find((t) => t.key === selected) ?? STATE_TABS[0];
  const rainfall = RAINFALL_MONTHLY_AVG[tab.rainfallKey];
  const temp = TEMP_MONTHLY_AVG[tab.tempKey];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-5">
        {STATE_TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setSelected(t.key)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${
              t.key === selected
                ? "bg-brand-navy text-white border-brand-navy"
                : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[560px]">
          <div className="grid grid-cols-[80px_repeat(6,1fr)] gap-1.5 mb-1.5">
            <div />
            {MONTHS.map((m) => (
              <div key={m} className="font-data text-[10px] uppercase text-slate-400 text-center">
                {m}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-[80px_repeat(6,1fr)] gap-1.5 mb-1.5">
            <div className="flex items-center font-data text-[10px] uppercase text-slate-500">Heat</div>
            {MONTHS.map((m) => {
              const v = temp[m];
              return <Cell key={m} severity={heatSeverity(v)} value={fmt(v, "c")} />;
            })}
          </div>

          <div className="grid grid-cols-[80px_repeat(6,1fr)] gap-1.5 mb-1.5">
            <div className="flex items-center font-data text-[10px] uppercase text-slate-500">Drought</div>
            {MONTHS.map((m) => {
              const v = rainfall[m];
              return <Cell key={m} severity={droughtSeverity(v)} value={fmt(v, "pct")} />;
            })}
          </div>

          <div className="grid grid-cols-[80px_repeat(6,1fr)] gap-1.5 mb-1.5">
            <div className="flex items-center font-data text-[10px] uppercase text-slate-500">Haze*</div>
            {MONTHS.map((m) => (
              <Cell key={m} severity={HAZE_MONTHLY[m]} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        {(["Monitor", "Elevated", "High", "Severe"] as const).map((lvl) => (
          <span key={lvl} className="flex items-center gap-1.5 font-data text-[10px] uppercase text-slate-500">
            <span className={`inline-block w-2.5 h-2.5 rounded-sm ${SEVERITY_STYLES[lvl]}`} />
            {lvl}
          </span>
        ))}
      </div>
    </div>
  );
}
