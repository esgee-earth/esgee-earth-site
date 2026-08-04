"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const DROPLET_POSITIONS = [12, 24, 38, 52, 66, 78, 90];
const CANOPY_BUMPS = [
  { left: "0%", width: 90, height: 40, kind: "tree" },
  { left: "8%", width: 36, height: 70, kind: "building" },
  { left: "15%", width: 100, height: 48, kind: "tree" },
  { left: "24%", width: 28, height: 100, kind: "building" },
  { left: "30%", width: 140, height: 74, kind: "tree" },
  { left: "41%", width: 44, height: 58, kind: "building" },
  { left: "49%", width: 110, height: 54, kind: "tree" },
  { left: "58%", width: 32, height: 86, kind: "building" },
  { left: "64%", width: 100, height: 46, kind: "tree" },
  { left: "72%", width: 38, height: 66, kind: "building" },
  { left: "79%", width: 130, height: 72, kind: "tree" },
  { left: "90%", width: 90, height: 40, kind: "tree" },
];

const CLOUD_PUFFS = [
  { left: "0%", top: 60, width: 220, opacity: 0.28 },
  { left: "18%", top: 100, width: 160, opacity: 0.2 },
  { left: "33%", top: 70, width: 260, opacity: 0.32 },
  { left: "56%", top: 110, width: 180, opacity: 0.22 },
  { left: "72%", top: 65, width: 240, opacity: 0.3 },
  { left: "90%", top: 95, width: 170, opacity: 0.24 },
];

function Cloud({ width, opacity }: { width: number; opacity: number }) {
  return (
    <svg
      viewBox="0 0 200 100"
      width={width}
      height={width * 0.5}
      fill="white"
      fillOpacity={opacity}
    >
      <ellipse cx="55" cy="65" rx="40" ry="26" />
      <ellipse cx="95" cy="45" rx="50" ry="34" />
      <ellipse cx="140" cy="62" rx="38" ry="24" />
      <ellipse cx="115" cy="70" rx="45" ry="22" />
      <ellipse cx="70" cy="72" rx="35" ry="20" />
    </svg>
  );
}

// Chapters and their share of total journey height (vh units, arbitrary ratio).
// Forest gets 6x the others because it now holds 6 crossfading content beats
// (tagline, model framing, snapshot, financial bridge, how-it-works, closing).
const CHAPTER_WEIGHTS = { space: 1, ocean: 1, wind: 1, forest: 6 };
const CHAPTER_ORDER: (keyof typeof CHAPTER_WEIGHTS)[] = ["space", "ocean", "wind", "forest"];
const TOTAL_WEIGHT = CHAPTER_ORDER.reduce((sum, k) => sum + CHAPTER_WEIGHTS[k], 0);
const BLEND = 0.02; // fraction of total scroll used for crossfade between chapters

function chapterRange(index: number) {
  const startWeight = CHAPTER_ORDER.slice(0, index).reduce((s, k) => s + CHAPTER_WEIGHTS[k], 0);
  const start = startWeight / TOTAL_WEIGHT;
  const end = (startWeight + CHAPTER_WEIGHTS[CHAPTER_ORDER[index]]) / TOTAL_WEIGHT;
  return { start, end };
}

function useChapterOpacity(progress: MotionValue<number>, index: number) {
  const { start, end } = chapterRange(index);
  const fadeInStart = index === 0 ? start : start - BLEND;
  const fadeOutEnd = index === CHAPTER_ORDER.length - 1 ? end : end + BLEND;
  return useTransform(
    progress,
    [fadeInStart, start, end, fadeOutEnd],
    [index === 0 ? 1 : 0, 1, 1, index === CHAPTER_ORDER.length - 1 ? 1 : 0]
  );
}

export function AtmosphericJourney({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const opacitySpace = useChapterOpacity(scrollYProgress, 0);
  const opacityOcean = useChapterOpacity(scrollYProgress, 1);
  const opacityWind = useChapterOpacity(scrollYProgress, 2);
  const opacityForest = useChapterOpacity(scrollYProgress, 3);
  const opacities = [opacitySpace, opacityOcean, opacityWind, opacityForest];
  const labels = [
    " ·  · ",
    "SEA SURFACE · DATA ORIGIN",
    "ATMOSPHERIC TRANSPORT",
    "CANOPY · GROUND TRUTH",
  ];

  return (
    <div
      ref={ref}
      className="relative w-screen left-1/2 right-1/2 -mx-[50vw]"
      style={{ height: `${TOTAL_WEIGHT * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden -z-10">
        <motion.div className="absolute inset-0 scene-space" style={{ opacity: opacities[0] }} />
        <motion.div className="absolute inset-0 scene-ocean" style={{ opacity: opacities[1] }}>
          {DROPLET_POSITIONS.map((left, i) => (
            <span key={left} className="droplet" style={{ left: `${left}%`, animationDelay: `${i * 0.7}s` }} />
          ))}
        </motion.div>
        <motion.div className="absolute inset-0 scene-wind" style={{ opacity: opacities[2] }} />
        <motion.div className="absolute inset-0 scene-forest" style={{ opacity: opacities[3] }}>
          {CLOUD_PUFFS.map((c, i) => (
            <div
              key={`cloud-${i}`}
              className="absolute"
              style={{ left: c.left, top: c.top }}
            >
              <Cloud width={c.width} opacity={c.opacity} />
            </div>
          ))}
          {CANOPY_BUMPS.map((b, i) =>
            b.kind === "building" ? (
              <div
                key={i}
                className="absolute bottom-0 bg-black/25"
                style={{ left: b.left, width: b.width, height: b.height }}
              />
            ) : (
              <div
                key={i}
                className="absolute bottom-0 flex flex-col items-center"
                style={{ left: b.left, width: b.width }}
              >
                <div
                  className="rounded-full bg-black/20"
                  style={{ width: b.width * 0.75, height: b.width * 0.75 }}
                />
                <div
                  className="bg-black/30"
                  style={{ width: Math.max(4, b.width * 0.1), height: b.height * 0.4 }}
                />
              </div>
            )
          )}
        </motion.div>

        <div className="absolute top-6 left-6 md:top-8 md:left-8 font-data text-[10px] tracking-[0.25em] uppercase">
          {labels.map((label, i) => (
            <motion.span
              key={label}
              className="text-white/45"
              style={{ opacity: opacities[i], position: i === 0 ? "static" : "absolute", top: 0, left: 0 }}
            >
              {label}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="relative z-10 -mt-[100vh]">
        {children}
      </div>
    </div>
  );
}

export { chapterRange, CHAPTER_ORDER, CHAPTER_WEIGHTS, TOTAL_WEIGHT, BLEND };
