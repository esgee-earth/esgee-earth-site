import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";

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
      <body className="bg-slate-50 text-slate-900">
        <a id="top" />
        <Header />
        <main className="mt-4">{children}</main>
      
        <footer className="mt-16 border-t border-slate-200 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()}
          <span className="font-semibold text-slate-700"> ESGee Earth</span> · ESG
          for everyone, everywhere; with Earth in mind
        </footer>
      </body>
    </html>
  );
}

