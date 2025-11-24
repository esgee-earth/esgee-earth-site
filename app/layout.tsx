import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Inter } from "next/font/google";
import { EnvelopeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ESGee Earth – Practical ESG & carbon clarity",
  description:
    "SME-first ESG and carbon workspace that turns everyday records into buyer-ready data, aligned with GHG Protocol, IFRS S2 and Bursa SEDG.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <a id="top" />
        <Header />
        <main className="mt-4">{children}</main>

        <footer className="mt-0 bg-emerald-50/40 border-t border-emerald-100 py-6 text-xs text-slate-600">
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-4">

            {/* Left side – copyright */}
            <p className="text-center md:text-left">
              © {new Date().getFullYear()}
              <span className="font-semibold text-slate-700"> ESGee Earth</span> · ESG for everyone, everywhere; with Earth in mind
            </p>

            {/* Right side – Contact icons */}
            <div className="flex items-center justify-center md:justify-end gap-4">

              {/* Email */}
              <a
                href="mailto:hello@esgee.earth"
                className="flex items-center gap-1 text-brand-teal hover:underline font-medium"
              >
                <EnvelopeIcon className="w-4 h-4" />
                hello@esgee.earth
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/esgee"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-brand-teal hover:underline font-medium"
              >
                {/* LinkedIn icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-brand-teal"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.4 8.4h4.1V24H.4zM8.3 8.4h3.9v2.1h.1c.5-.9 1.8-2.1 3.9-2.1 4.2 0 5 2.7 5 6.2V24h-4.1v-7c0-1.7 0-3.9-2.4-3.9-2.4 0-2.7 1.9-2.7 3.8V24H8.3z" />
                </svg>

                ESGee
              </a>

            </div>
          </div>

          {/* Storyset attribution */}
          <p className="mt-1 px-40 text-center md:text-left text-[10px] text-slate-400/80 italic">
            Illustrations by{" "}
            <a
              href="https://storyset.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-slate-500"
            >
              Storyset
            </a>
          </p>

        </footer>

      </body>
    </html>
  );
}
