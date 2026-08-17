"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const DROPLET_POSITIONS = [12, 24, 38, 52, 66, 78, 90];
const SKYLINE_BARS = [
  14, 34, 20, 58, 26, 44, 68, 30, 50, 22, 62, 36, 48, 18, 56, 28, 40, 64, 24, 46,
  32, 54, 20, 42, 60, 28, 38, 66, 24, 50,
];

const RISE_PARTICLES = [
  { left: "8%", duration: 7 }, { left: "18%", duration: 9 }, { left: "27%", duration: 6.5 },
  { left: "38%", duration: 8 }, { left: "47%", duration: 7.5 }, { left: "56%", duration: 9.5 },
  { left: "64%", duration: 6 }, { left: "73%", duration: 8.5 }, { left: "82%", duration: 7 },
  { left: "91%", duration: 9 },
];

export function Cloud({ width, opacity }: { width: number; opacity: number }) {
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

  return (
    <div
      ref={ref}
      className="relative w-screen left-1/2 right-1/2 -mx-[50vw]"
      style={{ height: `${TOTAL_WEIGHT * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden -z-10">
        <motion.div className="absolute inset-0 scene-space" style={{ opacity: opacities[0] }}>
          <div className="absolute" style={{ top: "16%", right: "10%", width: 6, height: 6 }}>
            <div
              className="rounded-full"
              style={{ width: 6, height: 6, background: "#7dd3d8", boxShadow: "0 0 10px 2px rgba(125,211,216,0.6)" }}
            />
            <div className="scan-ring" style={{ width: 6, height: 6, top: 0, left: 0 }} />
            <div className="scan-ring" style={{ width: 6, height: 6, top: 0, left: 0, animationDelay: "1.4s" }} />
          </div>
        </motion.div>
        <motion.div className="absolute inset-0 scene-ocean" style={{ opacity: opacities[1] }}>
          {DROPLET_POSITIONS.map((left, i) => (
            <span key={left} className="droplet" style={{ left: `${left}%`, animationDelay: `${i * 0.7}s` }} />
          ))}
        </motion.div>
        <motion.div className="absolute inset-0 scene-wind" style={{ opacity: opacities[2] }} />
        <motion.div className="absolute inset-0 scene-forest" style={{ opacity: opacities[3] }}>
          {RISE_PARTICLES.map((p, i) => (
            <div
              key={`rise-${i}`}
              className="rise-particle"
              style={{ left: p.left, animationDuration: `${p.duration}s`, animationDelay: `${i * 0.5}s` }}
            />
          ))}
          <div className="absolute bottom-0 left-0 right-0 flex items-end gap-[3px] px-[6%]" style={{ height: "30%" }}>
            {SKYLINE_BARS.map((h, i) => (
              <div key={i} className="skyline-bar flex-1" style={{ height: `${h}%` }} />
            ))}
          </div>
        </motion.div>

      </div>

      <div className="relative z-10 -mt-[100vh]">
        {children}
      </div>
    </div>
  );
}

export { chapterRange, CHAPTER_ORDER, CHAPTER_WEIGHTS, TOTAL_WEIGHT, BLEND };
