"use client";

import { CloudSun, TreePine, FileText } from "lucide-react";

type Service = {
  numeral: string;
  icon: typeof CloudSun;
  title: string;
  frameworks: string[];
  description: string;
  link: { href: string; label: string };
};

const SERVICES: Service[] = [
  {
    numeral: "01",
    icon: CloudSun,
    title: "Climate & Nature Risk",
    frameworks: ["IFRS S2", "TCFD", "TNFD", "GRI", "SBTi"],
    description:
      "We assess how climate and nature risks affect your operations and finances, then translate that into disclosure your board and regulators can act on.",
    link: { href: "/climate", label: "Explore the Climate Impact Engine (preview) →" },
  },
  {
    numeral: "02",
    icon: TreePine,
    title: "Carbon Project Development",
    frameworks: ["Verra", "Gold Standard"],
    description:
      "Carbon credit project development and carbon stock assessment: from satellite-based feasibility screening through field verification and methodology design.",
    link: { href: "/contact", label: "Talk to us →" },
  },
  {
    numeral: "03",
    icon: FileText,
    title: "Disclosure & Reporting",
    frameworks: ["NSRF", "IFRS S2", "TCFD", "GRI"],
    description:
      "We assess your disclosure readiness against the frameworks that apply to you, then draft the governance, strategy, and metrics that make it real, including net zero targets and transition plans.",
    link: { href: "/contact", label: "Talk to us →" },
  },
];

export function WhatWeDoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
      {SERVICES.map((service) => {
        const Icon = service.icon;
        return (
          <div key={service.title} className="p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-data text-2xl text-brand-teal/25 leading-none">
                {service.numeral}
              </span>
              <Icon className="w-4 h-4 text-brand-teal" />
            </div>
            <h3 className="font-display font-medium text-slate-900 mb-1">
              {service.title}
            </h3>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400 mb-3">
              {service.frameworks.join(" · ")}
            </p>
            <p className="text-sm text-slate-600 flex-1">{service.description}</p>
            <a
              href={service.link.href}
              className="mt-4 inline-block text-sm text-brand-teal hover:underline"
            >
              {service.link.label}
            </a>
          </div>
        );
      })}
    </div>
  );
}
