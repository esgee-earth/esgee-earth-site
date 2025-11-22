// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ESGee Earth – Practical ESG & Carbon Clarity for SMEs",
  description:
    "ESGee Earth helps Southeast Asian SMEs and supply-chain partners turn ESG and carbon requirements into simple, usable data, aligned with GHG Protocol, IFRS S2 and Bursa SEDG.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <div className="min-h-screen flex flex-col">

          {/* Nav */}
          <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
              <a href="/" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-emerald-700 flex items-center justify-center text-white text-xs font-semibold">
                  EE
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold tracking-tight">
                    ESGee Earth
                  </span>
                  <span className="text-xs text-slate-500">
                    Practical ESG & carbon clarity
                  </span>
                </div>
              </a>

              <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
                <a href="#why" className="hover:text-slate-900">Why now</a>
                <a href="#approach" className="hover:text-slate-900">Approach</a>
                <a href="#founder" className="hover:text-slate-900">Founder</a>
                <a href="/contact" className="hover:text-slate-900">Contact</a>
              </nav>

              <a
                href="/contact"
                className="hidden md:inline-flex items-center justify-center rounded-full border border-emerald-700 bg-emerald-700 px-4 py-1.5 text-sm font-medium text-white hover:bg-emerald-800 transition-colors"
              >
                Talk to us
              </a>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-slate-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                © {new Date().getFullYear()} ESGee Earth. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-3">
                <span>Aligned with GHG Protocol · IFRS S2 · Bursa SEDG</span>
              </div>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}

