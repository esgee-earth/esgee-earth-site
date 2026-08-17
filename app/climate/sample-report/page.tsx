import HazardVulnerabilitySnapshot from "@/app/components/HazardVulnerabilitySnapshot";

export default function SampleReportPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 space-y-8">

      {/* BACK LINK — its own row, top-left, deliberately understated so it
          doesn't compete with the "Sample Analysis" badge below (which
          follows the same centered-eyebrow-above-h1 pattern used on
          /climate and elsewhere on the site). */}
      <a
        href="/climate"
        className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-brand-teal transition-colors"
      >
        ← Back to the Climate Impact Engine
      </a>

      {/* HEADER */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 border border-emerald-100 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-teal">
          Sample Analysis
        </span>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          From hazard data to a disclosure-ready financial narrative
        </h1>
        <p className="text-sm md:text-base text-slate-700">
          A worked example showing the full translation layer: physical hazard projections,
          operational vulnerability, financial impact, adaptation ROI, and audit-ready
          disclosure copy.
        </p>
      </div>

      {/* DISCLAIMER — kept prominent, not footer-buried, since the figures
          below read as specific enough that a reader could otherwise mistake
          this for a real client's confidential numbers. */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 max-w-3xl mx-auto text-sm">
        <p className="font-medium text-amber-800">Illustrative example</p>
        <p className="text-amber-900/80 mt-1 leading-relaxed">
          The hazard data below (outdoor WBGT projections) is derived from 11-model CMIP6 output for
          Kota Kinabalu, Sabah. The client sector, workforce size, wage rate, and adaptation
          costings are illustrative, built to demonstrate how that hazard data
          translates into a disclosure-ready financial narrative.
        </p>
      </div>

      {/* THE SAMPLE REPORT ITSELF */}
      <HazardVulnerabilitySnapshot />

      {/* CLOSING CTA */}
      <div className="text-center space-y-2 pt-4">
        <p className="text-sm text-slate-600">
          Want this for your own asset, portfolio, or hazard type?
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-brand-teal px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-monsoon transition-colors"
        >
          Get in touch
        </a>
      </div>

    </div>
  );
}
