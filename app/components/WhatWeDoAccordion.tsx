"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CloudSun, TreePine, Database, HeartHandshake } from "lucide-react";

type Service = {
  numeral: string;
  icon: typeof CloudSun;
  title: string;
  group: string;
  teaser: string;
  description: string;
  link: { href: string; label: string };
};

const SERVICES: Service[] = [
  {
    numeral: "01",
    icon: CloudSun,
    title: "Climate & Nature Risk",
    group: "Assessment & Advisory",
    teaser: "Physical, transition, and nature-related risk quantification (aligned with IFRS S2/TCFD, TNFD, SBTi, GRI)",
    description:
      "We assess how climate and nature risks affect your operations and finances, then translate that into disclosure your board and regulators can act on.",
    link: { href: "/climate", label: "Explore the Climate Impact Engine (preview) →" },
  },
  {
    numeral: "02",
    icon: TreePine,
    title: "Carbon Project Development",
    group: "Assessment & Advisory",
    teaser: "From satellite screening to field verification (aligned with Verra and Gold Standard)",
    description:
      "Carbon credit project development and carbon stock assessment: from satellite-based feasibility screening through field verification and methodology design.",
    link: { href: "/contact", label: "Talk to us →" },
  },
  {
    numeral: "03",
    icon: Database,
    title: "ESG Data Systems",
    group: "Data Systems",
    teaser: "The data layer your climate and nature disclosure runs on.",
    description:
      "The infrastructure behind the work above. We structure environmental data so climate and nature disclosure has something solid to stand on.",
    link: { href: "/data-systems", label: "See preview →" },
  },
  {
    numeral: "04",
    icon: HeartHandshake,
    title: "Climate Action Sabah",
    group: "Community Initiative",
    teaser: "Community science and storytelling",
    description:
      "Community environmental knowledge, digital storytelling, and citizen science across Sabah and beyond.",
    link: { href: "/climate-action-sabah", label: "Learn more →" },
  },
];

export function WhatWeDoAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-slate-100">
      {SERVICES.map((service, i) => {
        const isOpen = openIndex === i;
        const Icon = service.icon;
        const prevGroup = i > 0 ? SERVICES[i - 1].group : undefined;
        const showGroupHeader = service.group !== prevGroup;

        return (
          <div key={service.title}>
            {showGroupHeader && (
              <div className="px-6 md:px-8 pt-6 pb-2 bg-brand-mist/40">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
                  {service.group}
                </span>
              </div>
            )}

            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start gap-3 p-6 md:p-8 text-left border-l-2 border-l-brand-teal/20 hover:bg-brand-teal/10 hover:border-l-brand-teal transition-colors"
            >
              <span className="font-data text-2xl text-brand-teal/25 leading-none shrink-0">
                {service.numeral}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-brand-teal shrink-0" />
                  <h3 className="font-display font-medium text-slate-900">{service.title}</h3>
                </div>
                {!isOpen && (
                  <p className="text-sm text-slate-500 mt-1">{service.teaser}</p>
                )}
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 shrink-0 mt-1 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden border-l-2 border-l-brand-teal/20"
                >
                  <div className="pl-10 md:pl-14 pr-6 md:pr-8 pb-6 md:pb-8">
                    <p className="text-sm text-slate-600">{service.description}</p>
                    <a
                      href={service.link.href}
                      className="mt-2 inline-block text-sm text-brand-teal hover:underline"
                    >
                      {service.link.label}
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
