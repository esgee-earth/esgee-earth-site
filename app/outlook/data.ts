// Real output from our own ENSO-phase composite pipeline (NOAA CPC ONI,
// CHIRPS/GEE, ERA5/Open-Meteo). "avg" columns are a historical average
// across five past events of the same strength (1972, 1982, 1997, 2015,
// 2023), not a forecast of 2026-27 outcomes.

export type AnalogValue = { y1997: number; y2015: number; avg: number };

export const COMPOSITE_YEARS = [1972, 1982, 1997, 2015, 2023];

export const ONI = { y1997: 2.39, y2015: 2.75 };

// Latest confirmed 3-month ONI reading, same metric as the two analog
// years above, sourced from NOAA CPC. Update this each time CPC issues
// a new monthly ENSO Diagnostic Discussion (roughly monthly). NOAA's own
// Seasonal Climate Forecast rounds this to +1.0C and calls it "the
// Moderate El Nino zone"; IRI's more precise reading is +0.98C, which is
// technically still in the Weak band before rounding. Both readings
// describe the same underlying observation.
export const LATEST_ONI = { period: "Apr to Jun 2026", value: 1.0, label: "Moderate" };

// NOAA CPC's probability of a very strong event, also update on each
// CPC ENSO Diagnostic Discussion. Odds rose from 63% (June 2026
// Advisory) to 81% (9 July 2026 discussion, reconfirmed 4 Aug 2026) as
// the event strengthened.
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

export const SEVERITY_STYLES: Record<Severity, string> = {
  Monitor: "bg-slate-400",
  Elevated: "bg-amber-600",
  High: "bg-orange-600",
  Severe: "bg-brand-brick",
};

export const MONTHS = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"] as const;
export type Month = (typeof MONTHS)[number];

// Same thresholds applied to every state/region, so severity is
// comparable across the tabs, not state-relative.
export function droughtSeverity(pctAnomaly: number): Severity {
  if (pctAnomaly >= -15) return "Monitor";
  if (pctAnomaly >= -35) return "Elevated";
  if (pctAnomaly >= -60) return "High";
  return "Severe";
}
export function heatSeverity(cAnomaly: number): Severity {
  if (cAnomaly < 0.5) return "Monitor";
  if (cAnomaly < 1.2) return "Elevated";
  if (cAnomaly < 2.0) return "High";
  return "Severe";
}

// Full monthly breakdown (Nov-Apr), 5-event average, one entry per
// calendar month, for every state/region -- not Sabah-only. Each month
// vs. its own 1991-2020 calendar-month baseline.
export const RAINFALL_MONTHLY_AVG: Record<string, Record<Month, number>> = {
  Sabah: { Nov: -10.23, Dec: -34.59, Jan: -63.53, Feb: -57.86, Mar: -75.39, Apr: -31.14 },
  Sarawak: { Nov: 4.93, Dec: -3.2, Jan: -22.3, Feb: -23.79, Mar: -13.82, Apr: -3.0 },
  Johor: { Nov: -8.54, Dec: 0.21, Jan: 10.54, Feb: -36.78, Mar: -46.13, Apr: -14.33 },
  Perak: { Nov: -1.6, Dec: -13.49, Jan: -16.2, Feb: -37.5, Mar: -56.11, Apr: -45.0 },
  "Pulau Pinang": { Nov: 5.25, Dec: -18.59, Jan: -16.12, Feb: -46.48, Mar: -74.07, Apr: -53.85 },
  Selangor: { Nov: 4.28, Dec: -7.45, Jan: -6.68, Feb: -15.4, Mar: -49.94, Apr: -28.14 },
};

export const TEMP_MONTHLY_AVG: Record<string, Record<Month, number>> = {
  Sabah_palm: { Nov: 0.03, Dec: 0.86, Jan: 1.7, Feb: 2.15, Mar: 2.38, Apr: 2.18 },
  Sarawak_palm: { Nov: 0.44, Dec: 0.85, Jan: 1.27, Feb: 0.85, Mar: 0.58, Apr: 0.49 },
  Johor_palm: { Nov: 0.6, Dec: 0.49, Jan: 0.77, Feb: 0.69, Mar: 1.31, Apr: 1.83 },
  Perak_palm: { Nov: 0.43, Dec: 0.62, Jan: 0.78, Feb: 1.1, Mar: 1.34, Apr: 1.51 },
  Penang_Kulim_manufacturing: { Nov: 0.27, Dec: 0.52, Jan: 0.73, Feb: 1.41, Mar: 1.97, Apr: 1.73 },
  Klang_Valley_manufacturing: { Nov: 0.53, Dec: 0.71, Jan: 0.68, Feb: 0.91, Mar: 1.19, Apr: 1.46 },
};

// Which rainfall series + which temp series to pair for each tab. Rain
// is tracked by state; temperature by the nearest sector-relevant point,
// so Pulau Pinang state pairs with the Penang/Kulim manufacturing series
// and Selangor state pairs with the Klang Valley manufacturing series.
export type StateTab = { key: string; label: string; rainfallKey: string; tempKey: string };

export const STATE_TABS: StateTab[] = [
  { key: "Sabah", label: "Sabah", rainfallKey: "Sabah", tempKey: "Sabah_palm" },
  { key: "Sarawak", label: "Sarawak", rainfallKey: "Sarawak", tempKey: "Sarawak_palm" },
  { key: "Johor", label: "Johor", rainfallKey: "Johor", tempKey: "Johor_palm" },
  { key: "Perak", label: "Perak", rainfallKey: "Perak", tempKey: "Perak_palm" },
  { key: "PulauPinang", label: "Pulau Pinang", rainfallKey: "Pulau Pinang", tempKey: "Penang_Kulim_manufacturing" },
  { key: "Selangor", label: "Selangor", rainfallKey: "Selangor", tempKey: "Klang_Valley_manufacturing" },
];

// Haze has no pipeline data behind it, it's a qualitative estimate from
// general SE Asian fire-season climatology, the same for every state,
// flagged as such in the UI.
export const HAZE_MONTHLY: Record<Month, Severity> = {
  Nov: "Elevated",
  Dec: "Monitor",
  Jan: "Monitor",
  Feb: "Monitor",
  Mar: "Elevated",
  Apr: "Elevated",
};
