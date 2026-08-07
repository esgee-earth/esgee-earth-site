"use client";

import { motion } from "framer-motion";

type Stage = {
  year: string;
  title: string;
  desc: string;
  variant: "seed" | "sprout" | "canopy";
  link?: { label: string; href: string };
};

const STAGES: Stage[] = [
  {
    year: "2025",
    title: "Digital Climate Storytelling",
    desc: "Piloted in Upper Moyog, Penampang, Sabah.",
    variant: "seed",
    link: { label: "Learn more", href: "/climate-action-sabah/climate-storytelling" },
  },
  {
    year: "2026",
    title: "Weather Detective",
    desc: "Local signs, checked against data.",
    variant: "sprout",
  },
  {
    year: "Beyond",
    title: "An integrated knowledge network",
    desc: "Every community's knowledge feeding early warning, disaster preparedness, and science.",
    variant: "canopy",
  },
];

function PlantIcon({ variant }: { variant: Stage["variant"] }) {
  const stem = variant === "seed" ? 22 : variant === "sprout" ? 42 : 66;
  const dashed = variant === "canopy";
  const stroke = "#2b7a94";
  const fill = dashed ? "none" : "#2b7a94";
  const top = 96 - stem;

  return (
    <svg viewBox="0 0 90 110" width={variant === "canopy" ? 88 : variant === "sprout" ? 60 : 40} height="104">
      <line x1="0" y1="96" x2="90" y2="96" stroke="#e2e8f0" strokeWidth="1.5" />
      <line
        x1="45"
        y1="96"
        x2="45"
        y2={top}
        stroke={stroke}
        strokeWidth="2"
        strokeDasharray={dashed ? "3 3" : undefined}
      />
      {variant === "canopy" ? (
        <circle cx="45" cy={top - 16} r="24" fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray="3 3" />
      ) : (
        <>
          <path
            d={`M45,${top + 4} C30,${top - 8} 20,${top + 8} 33,${top + 15} C38,${top + 13} 42,${top + 9} 45,${top + 4}`}
            fill={fill}
            opacity="0.85"
          />
          <path
            d={`M45,${top + 4} C60,${top - 8} 70,${top + 8} 57,${top + 15} C52,${top + 13} 48,${top + 9} 45,${top + 4}`}
            fill={fill}
            opacity="0.85"
          />
          {variant === "sprout" && (
            <>
              <path
                d={`M45,${top + 20} C33,${top + 10} 24,${top + 24} 36,${top + 30} C40,${top + 28} 43,${top + 24} 45,${top + 20}`}
                fill={fill}
                opacity="0.65"
              />
              <path
                d={`M45,${top + 20} C57,${top + 10} 66,${top + 24} 54,${top + 30} C50,${top + 28} 47,${top + 24} 45,${top + 20}`}
                fill={fill}
                opacity="0.65"
              />
            </>
          )}
        </>
      )}
    </svg>
  );
}

export function GrowthPath() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-8 sm:gap-4">
      {STAGES.map((s, i) => (
        <motion.div
          key={s.year}
          className="flex flex-col items-center text-center w-full sm:w-1/3 max-w-[220px]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: i * 0.3 }}
        >
          <p className="text-xs font-medium uppercase tracking-wide text-brand-teal mb-1">{s.year}</p>
          <PlantIcon variant={s.variant} />
          <p className="font-display text-sm font-medium text-slate-900 mt-2">{s.title}</p>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{s.desc}</p>
          {s.link && (
            <a
              href={s.link.href}
              className="text-[11px] font-medium text-brand-teal hover:underline mt-1.5 inline-block"
            >
              {s.link.label}
            </a>
          )}
        </motion.div>
      ))}
    </div>
  );
}
