"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "App", href: "/product" },
  { label: "Team", href: "/#team" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo + brand */}
        <Link href="#top" className="flex items-center gap-2" onClick={close}>
          <Image
            src="/esgee-earth-logo-navbar.png"
            alt="ESGee Earth logo"
            width={120}
            height={32}
            className="object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-teal px-4 py-1.5 text-sm font-medium text-white hover:bg-brand-monsoon transition-colors"
          >
            Talk to us
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={toggle}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-300 text-slate-700"
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-[5px]">
            <span className="block h-[2px] w-4 bg-slate-700 rounded" />
            <span className="block h-[2px] w-4 bg-slate-700 rounded" />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="text-sm text-slate-700 py-1"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={close}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-brand-teal px-4 py-2 text-sm font-medium text-white hover:bg-brand-monsoon transition-colors w-max"
            >
              Talk to us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
