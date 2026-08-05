// Real output from our own ENSO-phase composite pipeline (NOAA CPC ONI,
// CHIRPS/GEE, ERA5/Open-Meteo). The "5-event average" columns are a
// historical average across five past events of the same strength
// (1972, 1982, 1997, 2015, 2023), not a forecast of 2026-27 outcomes.

export type AnalogValue = { y1997: number; y2015: number; avg: number };

export const COMPOSITE_YEARS = [1972, 1982, 1997, 2015, 2023];

export const ONI = { y1997: 2.39, y2015: 2.75 };

// Latest confirmed 3-month ONI reading, same metric as the two analog
// years above, sourced from NOAA CPC. Update this each time CPC issues
// a new monthly ENSO Diagnostic Discussion (roughly monthly).
export const LATEST_ONI = { period: "Apr to Jun 2026", value: 1.0 };

// NOAA CPC's probability of a very strong event, also update on each
// CPC ENSO Diagnostic Discussion. Odds rose from 63% (June 2026
// Advisory) to 81% (9 July 2026 discussion) as the event strengthened.
export const VERY_STRONG_ODDS = {
  asOfJune: 63,
  asOfJuly: 81,
  peakWindow: "October to December 2026",
};

export const RAINFALL_ANOMALY_PCT: Record<string, AnalogValue> = {
  Sabah: { y1997: -56.6, y2015: -43.3, avg: -37.1 },
  Sarawak: { y1997: -20.6, y2015: 0.6, avg: -7.3 },
  Johor: { y1997: -14.0, y2015: -26.9, avg: 0.7 },
  Perak: { y1997: -17.2, y2015: -13.5, avg: -9.4 },
  "Pulau Pinang": { y1997: -17.7, y2015: 7.2, avg: -6.3 },
  Selangor: { y1997: -6.3, y2015: -5.0, avg: -2.1 },
};

export const TEMP_ANOMALY_C: Record<string, AnalogValue> = {
  "Sabah (palm belt)": { y1997: 0.88, y2015: 0.61, avg: 0.87 },
  "Sarawak (palm belt)": { y1997: 0.84, y2015: 0.48, avg: 0.86 },
  "Johor (palm belt)": { y1997: 0.13, y2015: 0.74, avg: 0.62 },
  "Perak (palm belt)": { y1997: 0.39, y2015: 0.85, avg: 0.61 },
  "Penang / Kulim (manufacturing)": { y1997: 0.36, y2015: 0.79, avg: 0.51 },
  "Klang Valley (manufacturing)": { y1997: 0.41, y2015: 0.63, avg: 0.64 },
};

export type Severity = "Monitor" | "Elevated" | "High" | "Severe";
export type TimelineCell = { level: Severity; value?: string };
export type TimelineMonth = {
  month: string;
  heat: TimelineCell;
  drought: TimelineCell;
  haze: TimelineCell;
};

// Heat & Drought: Sabah's average across five past very-strong events, the
// deepest signal in the breakdown above. Each month vs. its own
// 1991-2020 calendar-month baseline. Haze has no pipeline data behind it,
// it's a qualitative estimate from general SE Asian fire-season
// climatology, flagged as such in the UI.
export const MONTHLY_TIMELINE: TimelineMonth[] = [
  { month: "Nov", heat: { level: "Monitor", value: "+0.0°C" }, drought: { level: "Monitor", value: "-10%" }, haze: { level: "Elevated" } },
  { month: "Dec", heat: { level: "Elevated", value: "+0.9°C" }, drought: { level: "Elevated", value: "-35%" }, haze: { level: "Monitor" } },
  { month: "Jan", heat: { level: "High", value: "+1.7°C" }, drought: { level: "Severe", value: "-64%" }, haze: { level: "Monitor" } },
  { month: "Feb", heat: { level: "Severe", value: "+2.2°C" }, drought: { level: "High", value: "-58%" }, haze: { level: "Monitor" } },
  { month: "Mar", heat: { level: "Severe", value: "+2.4°C" }, drought: { level: "Severe", value: "-75%" }, haze: { level: "Elevated" } },
  { month: "Apr", heat: { level: "Severe", value: "+2.2°C" }, drought: { level: "Elevated", value: "-31%" }, haze: { level: "Elevated" } },
];

export const SEVERITY_STYLES: Record<Severity, string> = {
  Monitor: "bg-slate-400",
  Elevated: "bg-amber-600",
  High: "bg-orange-600",
  Severe: "bg-brand-brick",
};
