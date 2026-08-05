import type { Metadata } from "next";
import {
  RAINFALL_ANOMALY_PCT,
  TEMP_ANOMALY_C,
  MONTHLY_TIMELINE,
  SEVERITY_STYLES,
  ONI,
  LATEST_ONI,
  VERY_STRONG_ODDS,
  COMPOSITE_YEARS,
  type AnalogValue,
  type TimelineCell,
} from "./data";

export const metadata: Metadata = {
  title: "Climate Outlook – ESGee Earth",
  description:
    "Seasonal climate outlook translating El Nino and other climate signals into practical impacts for Malaysian businesses.",
};

function fmtPct(v: number) {
  const sign = v > 0 ? "+" : v < 0 ? "-" : "";
  return `${sign}${Math.abs(v).toFixed(1)}%`;
}
function fmtC(v: number) {
  const sign = v > 0 ? "+" : v < 0 ? "-" : "";
  return `${sign}${Math.abs(v).toFixed(2)}°C`;
}

function StatCell({ value, kind }: { value: number; kind: "pct" | "c" }) {
  const negative = value < 0;
  const color = kind === "pct" ? (negative ? "text-brand-brick" : "text-brand-teal") : "text-brand-brick";
  return (
    <span className={`font-data font-semibold text-sm ${color}`}>
      {kind === "pct" ? fmtPct(value) : fmtC(value)}
    </span>
  );
}

function AnalogTable({ title, data, kind }: { title: string; data: Record<string, AnalogValue>; kind: "pct" | "c" }) {
  return (
    <div className="mt-8 max-w-3xl">
      <p className="font-data text-[11px] uppercase tracking-[0.14em] text-slate-500 mb-2">{title}</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-sm min-w-[480px]">
          <thead>
            <tr className="bg-brand-mist/70 text-left">
              <th className="px-3 py-2 font-medium text-slate-600">Region</th>
              <th className="px-3 py-2 font-medium text-slate-600">1997 to 98</th>
              <th className="px-3 py-2 font-medium text-slate-600">2015 to 16</th>
              <th className="px-3 py-2 font-medium text-slate-600">5-Event Average</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([region, v]) => (
              <tr key={region} className="border-t border-slate-100">
                <td className="px-3 py-2 font-medium text-slate-800">{region}</td>
                <td className="px-3 py-2"><StatCell value={v.y1997} kind={kind} /></td>
                <td className="px-3 py-2"><StatCell value={v.y2015} kind={kind} /></td>
                <td className="px-3 py-2"><StatCell value={v.avg} kind={kind} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TimelineRow({ label, data }: { label: string; data: TimelineCell[] }) {
  return (
    <div className="grid grid-cols-[80px_repeat(6,1fr)] gap-1.5 mb-1.5">
      <div className="flex items-center font-data text-[10px] uppercase text-slate-500">{label}</div>
      {data.map((cell, i) => (
        <div key={i} className={`rounded-md text-white text-center py-2 px-1 ${SEVERITY_STYLES[cell.level]}`}>
          <span className="block font-data text-[9px] uppercase font-semibold">{cell.level}</span>
          {cell.value && <span className="block font-data text-[9px] opacity-85 mt-0.5">{cell.value}</span>}
        </div>
      ))}
    </div>
  );
}

export default function OutlookPage() {
  const oniPct = (v: number) => ((v - 0.5) / 2.5) * 100;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 space-y-14">
      {/* ================= HERO: one unified dark card ================= */}
      <section className="scene-space relative rounded-3xl overflow-hidden p-7 md:p-12 text-white">
        <div className="relative">
          <div className="flex justify-between items-center font-data text-[11px] uppercase tracking-[0.14em] text-brand-teal-bright border-b border-white/15 pb-4 mb-7">
            <span>Seasonal Climate Outlook</span>
            <span>Issued August 2026</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            What a <span className="text-brand-brick">very strong El Niño</span> means for Malaysia
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-xl mb-9 leading-relaxed">
            What to expect on heat, drought and haze from November 2026 to
            January 2027, and what it could mean for manufacturing and
            agriculture or plantation operations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 mb-10">
            {[
              { label: "Status", value: "El Nino Advisory (NOAA/CPC)" },
              { label: "Confirmed", value: "June 2026" },
              { label: "Expected peak", value: "Nov 2026 to Jan 2027" },
              { label: "Likely to last until", value: "Spring 2027 (97% odds)" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-data text-[10px] uppercase tracking-[0.1em] text-slate-400">{item.label}</p>
                <p className="text-sm font-medium mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-5">
            <p className="font-data text-[10px] uppercase tracking-[0.14em] text-brand-teal-bright mb-4">
              Ocean Nino Index (ONI): how strong is this event?
            </p>
            <div
              className="relative h-2.5 rounded-full mb-2 mx-1"
              style={{
                background:
                  "linear-gradient(to right, #1d5a70 0%, #1d5a70 16%, #6e5b3e 16%, #6e5b3e 36%, #9a5a34 36%, #9a5a34 56%, #b4472f 56%, #7a2c1c 100%)",
              }}
            >
              <div className="absolute -top-3.5 w-0.5 h-9 bg-white/85" style={{ left: `${oniPct(ONI.y1997)}%` }} />
              <div
                className="absolute -top-8 -translate-x-1/2 whitespace-nowrap rounded bg-brand-navy border border-white/15 px-1.5 py-0.5 font-data text-[9px]"
                style={{ left: `${oniPct(ONI.y1997)}%` }}
              >
                1997 to 98: {ONI.y1997}°C
              </div>
              <div className="absolute -top-3.5 w-0.5 h-9 bg-white/85" style={{ left: `${oniPct(ONI.y2015)}%` }} />
              <div
                className="absolute -top-8 -translate-x-1/2 whitespace-nowrap rounded bg-brand-navy border border-white/15 px-1.5 py-0.5 font-data text-[9px]"
                style={{ left: `${oniPct(ONI.y2015)}%` }}
              >
                2015 to 16: {ONI.y2015}°C
              </div>
              <div className="absolute -top-3.5 w-0.5 h-9 bg-amber-400" style={{ left: `${oniPct(LATEST_ONI.value)}%` }} />
              <div
                className="absolute -top-8 -translate-x-1/2 whitespace-nowrap rounded bg-amber-400 text-brand-navy px-1.5 py-0.5 font-data text-[9px] font-semibold flex items-center gap-1.5"
                style={{ left: `${oniPct(LATEST_ONI.value)}%` }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-navy opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-navy" />
                </span>
                Now ({LATEST_ONI.period}): {LATEST_ONI.value}°C
              </div>
            </div>
            <div className="flex justify-between font-data text-[9px] uppercase tracking-[0.05em] text-slate-400 mt-7 px-1">
              <span>Weak</span>
              <span>Moderate</span>
              <span>Strong</span>
              <span>Very strong (2.0°C or higher)</span>
            </div>
            <p className="text-xs text-slate-400 mt-5 leading-relaxed">
              This event is still building. NOAA&apos;s Climate Prediction
              Center expects it to cross into very strong territory (2.0°C
              or higher) between {VERY_STRONG_ODDS.peakWindow}, and put the
              odds of that at {VERY_STRONG_ODDS.asOfJuly}% in their July
              2026 update, up from {VERY_STRONG_ODDS.asOfJune}% just a
              month earlier.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 01 KEY RISKS ================= */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          <span className="font-data text-brand-brick mr-2">01</span>
          Key risks at a glance
        </h2>
        <p className="text-sm text-slate-600 max-w-5xl leading-relaxed">
          NOAA and the US Climate Prediction Center issued an El Nino
          Advisory in June 2026, when they put the odds of a very strong
          event (ONI at or above 2.0°C) at around {VERY_STRONG_ODDS.asOfJune}%.
          By their July 9 update, that had risen to {VERY_STRONG_ODDS.asOfJuly}%,
          with a peak expected between {VERY_STRONG_ODDS.peakWindow}. This
          strength has only happened twice before since reliable satellite
          records began, in 1997 to 98 and 2015 to 16. A July 2026 forecast
          from the International Research Institute for Climate and
          Society, using 23 of 26 models, also points to a very strong
          event.
        </p>
        <div className="grid gap-4 md:grid-cols-3 mt-5 max-w-5xl">
          {[
            {
              label: "Heat",
              level: "Elevated",
              border: "border-t-brand-brick",
              copy: "Daytime highs ran about 0.4°C to 0.9°C warmer than normal during past similar events. Sabah's palm oil region saw the biggest increase, close to 0.9°C.",
            },
            {
              label: "Drought",
              level: "Elevated",
              border: "border-t-amber-600",
              copy: "Sabah's rainfall from November to January averaged 37% below normal across past similar events. In 1997 to 98 it dropped by 57%, the worst on record for the state.",
            },
            {
              label: "Haze",
              level: "Monitor",
              border: "border-t-violet-500",
              copy: "Fires in Sumatra and Kalimantan tend to increase during strong El Nino years, raising the risk of haze drifting into Malaysia. Worth watching from September onward.",
            },
          ].map((tile) => (
            <div key={tile.label} className={`rounded-xl border border-slate-200 border-t-[3px] ${tile.border} bg-white p-4`}>
              <p className="font-data text-[10px] uppercase tracking-[0.1em] text-slate-500">{tile.label}</p>
              <p className="text-lg font-semibold text-slate-900 mt-1 mb-2">{tile.level}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{tile.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 02 WHAT HAPPENED LAST TIME ================= */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          <span className="font-data text-brand-brick mr-2">02</span>
          What happened last time
        </h2>
        <p className="text-sm text-slate-600 max-w-5xl leading-relaxed">
          1997 to 98 (ONI {ONI.y1997}°C) and 2015 to 16 (ONI {ONI.y2015}°C)
          are the only past events this strong with reliable satellite
          records. The 5-event average is based on every past event that
          independently reached this same strength: {COMPOSITE_YEARS.join(", ")}.
          Think of it as a realistic expectation based on history, not a
          guaranteed forecast for 2026 to 27.
        </p>

        <div className="mt-6 rounded-xl bg-brand-navy text-white p-5 flex flex-wrap items-baseline gap-4 max-w-5xl">
          <span className="font-data text-5xl font-bold text-brand-brick">-37%</span>
          <p className="text-xs text-slate-300 flex-1 min-w-[220px] leading-relaxed">
            How far below normal Sabah&apos;s rainfall ran on average across
            five past very strong El Nino events. It is the deepest drop of
            any state we tracked, reaching 57% below normal in 1997 to 98
            alone.
          </p>
        </div>

        <AnalogTable title="Rainfall vs Normal (November to January)" data={RAINFALL_ANOMALY_PCT} kind="pct" />
        <AnalogTable title="Daytime Heat vs Normal (November to January)" data={TEMP_ANOMALY_C} kind="c" />

        <p className="text-xs text-slate-500 mt-4 max-w-3xl leading-relaxed">
          Haze was severe in both past events (September to November 1997,
          and September to October 2015). Water rationing was confirmed in
          the Klang Valley in 1998, with localized reports again in 2016.
          Interestingly, Sarawak and Pulau Pinang both saw slightly more
          rain than normal in 2015 to 16, even though the overall event was
          severe. A statewide average can hide a flooded district sitting
          right next to a dry one.
        </p>
      </section>

      {/* ================= 03 MANUFACTURING ================= */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h2 className="text-xl font-semibold text-slate-900">
            <span className="font-data text-brand-brick mr-2">03</span>
            What this means for manufacturing
          </h2>
          <span className="shrink-0 rounded-full border border-brand-brick text-brand-brick font-data text-[10px] uppercase tracking-[0.05em] px-2.5 py-1">
            Heat and water risk
          </span>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Factories without full air conditioning face higher heat risk,
          especially around Penang, Kulim and the Klang Valley. Water supply
          could also tighten in these areas.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-5 text-sm">
          <div>
            <p className="font-data text-[10px] uppercase tracking-[0.08em] text-slate-500 mb-2">What to watch</p>
            <ul className="space-y-2 text-slate-700 list-disc list-inside">
              <li>
                Workers outdoors or in non-air-conditioned areas face higher
                heat risk, affecting both productivity and safety rules. On
                average, daytime highs ran <StatCell value={0.51} kind="c" /> warmer
                than normal in Penang/Kulim, and <StatCell value={0.64} kind="c" /> warmer
                in the Klang Valley
              </li>
              <li>Cooling and air conditioning costs are likely to rise</li>
              <li>
                Factories that use a lot of water, like semiconductor
                plants, are exposed if reservoir levels drop
              </li>
            </ul>
          </div>
          <div>
            <p className="font-data text-[10px] uppercase tracking-[0.08em] text-slate-500 mb-2">When to plan for</p>
            <ul className="space-y-2 text-slate-700 list-disc list-inside">
              <li>Peak exposure: November 2026 to January 2027</li>
              <li>Water stress risk could continue into early 2027</li>
              <li>This happened before: Klang Valley had water rationing in 1998</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 rounded-xl bg-brand-mist/70 border border-brand-teal/15 p-4 text-xs text-slate-700 leading-relaxed">
          If your heat or water contingency plans were built around a
          typical year, they may not hold up this time. Check them against
          what actually happened in 1997 to 98 and 2015 to 16, not against
          an average year.
        </div>
      </section>

      {/* ================= 04 AGRICULTURE ================= */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h2 className="text-xl font-semibold text-slate-900">
            <span className="font-data text-brand-brick mr-2">04</span>
            What this means for agriculture and plantations
          </h2>
          <span className="shrink-0 rounded-full border border-amber-600 text-amber-700 font-data text-[10px] uppercase tracking-[0.05em] px-2.5 py-1">
            Drought and delayed yield risk
          </span>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Oil palm growing areas in Johor, Sabah, Sarawak and Perak face two
          separate risks: drought happening now, and a delayed drop in
          yield later, caused by how the fruit develops.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-5 text-sm">
          <div>
            <p className="font-data text-[10px] uppercase tracking-[0.08em] text-slate-500 mb-2">What to watch</p>
            <ul className="space-y-2 text-slate-700 list-disc list-inside">
              <li>
                Rainfall could run well below normal from November to
                January. On average across past similar events, Sabah saw{" "}
                <StatCell value={-37.1} kind="pct" /> less rain than normal,
                Perak <StatCell value={-9.4} kind="pct" />, and Sarawak{" "}
                <StatCell value={-7.3} kind="pct" />. In 1997 to 98, Sabah
                alone saw a <StatCell value={-56.6} kind="pct" /> drop
              </li>
              <li>
                Drought now can reduce how much fruit the palms produce
                later. This shows up 6 to 12 months afterward, not right
                away
              </li>
              <li>
                Palm oil prices have moved sharply after past events like
                this, as supply tightened
              </li>
            </ul>
          </div>
          <div>
            <p className="font-data text-[10px] uppercase tracking-[0.08em] text-slate-500 mb-2">When to plan for</p>
            <ul className="space-y-2 text-slate-700 list-disc list-inside">
              <li>Drought signal now: November 2026 to January 2027</li>
              <li>Yield impact expected: mid to late 2027</li>
              <li>This period covers the cause. The actual drop in harvest comes later</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 rounded-xl bg-brand-mist/70 border border-brand-teal/15 p-4 text-xs text-slate-700 leading-relaxed">
          The yield loss is a future risk, not a current one. Looking only
          at today&apos;s conditions will underestimate the financial
          impact. Make sure the 2027 timing is spelled out clearly in any
          planning.
        </div>
      </section>

      {/* ================= 05 RISK BY MONTH ================= */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          <span className="font-data text-brand-brick mr-2">05</span>
          Risk by month
        </h2>
        <p className="text-sm text-slate-600 max-w-5xl leading-relaxed">
          The Heat and Drought rows use Sabah&apos;s average across five
          past very strong events ({COMPOSITE_YEARS.join(", ")}), since
          Sabah shows the strongest signal. Each month is compared to what
          is normal for that specific month, since November and March are
          naturally very different seasons. The Haze row (marked with *) is
          a general estimate based on typical fire season patterns in the
          region, not from our data pipeline.
        </p>

        <div className="overflow-x-auto mt-5 max-w-5xl">
          <div className="min-w-[560px]">
            <div className="grid grid-cols-[80px_repeat(6,1fr)] gap-1.5 mb-1.5">
              <div />
              {MONTHLY_TIMELINE.map((m) => (
                <div key={m.month} className="font-data text-[10px] uppercase text-slate-400 text-center">{m.month}</div>
              ))}
            </div>
            <TimelineRow label="Heat" data={MONTHLY_TIMELINE.map((m) => m.heat)} />
            <TimelineRow label="Drought" data={MONTHLY_TIMELINE.map((m) => m.drought)} />
            <TimelineRow label="Haze*" data={MONTHLY_TIMELINE.map((m) => ({ level: m.haze.level }))} />
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

        <p className="text-sm text-slate-600 mt-4 max-w-5xl leading-relaxed">
          Notice the pattern: both risks are mildest in November, then build
          steadily, and peak later than most people would expect. Heat
          peaks in March, and drought also peaks in March with an earlier
          spike in January. Stopping the analysis at January would have
          missed the worst of it.
        </p>
      </section>

      {/* ================= 06 WHERE THIS DATA COMES FROM ================= */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          <span className="font-data text-brand-brick mr-2">06</span>
          Where this data comes from
        </h2>
        <p className="text-sm text-slate-600 max-w-5xl leading-relaxed mb-4">
          This uses the same data pipeline originally built for hyperlocal
          flood warning, adapted here to look at seasonal, sector level
          risk instead.
        </p>
        <div className="rounded-xl border border-slate-200 divide-y divide-slate-100 max-w-5xl">
          {[
            ["ENSO classification", "NOAA CPC ONI, 5-season persistence rule"],
            ["Rainfall", "CHIRPS Daily, via Google Earth Engine"],
            ["Temperature", "ERA5, via Open-Meteo Historical Weather API"],
            ["Forecast confirmation", "NOAA/CPC ENSO Advisory and IRI/CPC model plume"],
            ["Monthly breakdown", "Nov to Apr, each month compared to its own 1991-2020 baseline"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4 px-4 py-2.5 text-sm">
              <span className="font-data text-slate-500 text-xs">{label}</span>
              <span className="text-slate-800 text-right">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-brand-navy text-white p-6 md:p-7 max-w-5xl">
          <p className="font-data text-[10px] uppercase tracking-[0.14em] text-amber-400 mb-2">Want more detail?</p>
          <h3 className="text-lg font-semibold mb-2">This outlook covers Malaysia at state level.</h3>
          <p className="text-sm text-slate-300 mb-5">
            For facility or estate specific risk scores, plus a written plan
            for your sector, get in touch and we can put one together for
            you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-brand-navy hover:bg-slate-100 transition-colors"
          >
            Talk to us
          </a>
        </div>
      </section>

      <p className="text-center text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
        Rainfall and temperature numbers come from our own climate data
        pipeline. The average columns are based on real past events, not a
        guaranteed forecast for 2026 to 2027.
      </p>
    </div>
  );
}
