"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const DROPLET_POSITIONS = [12, 24, 38, 52, 66, 78, 90];
const RAIN_BARS = [
  { left: "3%", height: 46, duration: 4.2, delay: 0 }, { left: "8%", height: 62, duration: 5.1, delay: 1.4 },
  { left: "14%", height: 38, duration: 3.8, delay: 2.6 }, { left: "19%", height: 70, duration: 5.6, delay: 0.6 },
  { left: "24%", height: 50, duration: 4.5, delay: 3.2 }, { left: "30%", height: 58, duration: 4.9, delay: 1.9 },
  { left: "36%", height: 40, duration: 3.6, delay: 0.2 }, { left: "41%", height: 66, duration: 5.3, delay: 2.1 },
  { left: "47%", height: 48, duration: 4.1, delay: 3.7 }, { left: "53%", height: 72, duration: 5.8, delay: 0.9 },
  { left: "58%", height: 44, duration: 3.9, delay: 2.4 }, { left: "64%", height: 60, duration: 5.0, delay: 1.1 },
  { left: "69%", height: 52, duration: 4.4, delay: 3.5 }, { left: "75%", height: 68, duration: 5.5, delay: 0.4 },
  { left: "81%", height: 42, duration: 3.7, delay: 2.9 }, { left: "86%", height: 56, duration: 4.8, delay: 1.6 },
  { left: "91%", height: 64, duration: 5.2, delay: 3.0 }, { left: "96%", height: 46, duration: 4.0, delay: 0.8 },
  { left: "11%", height: 54, duration: 4.6, delay: 2.2 }, { left: "27%", height: 62, duration: 5.1, delay: 1.3 },
  { left: "44%", height: 40, duration: 3.8, delay: 3.4 }, { left: "61%", height: 58, duration: 4.9, delay: 0.7 },
  { left: "78%", height: 50, duration: 4.3, delay: 2.7 }, { left: "89%", height: 66, duration: 5.4, delay: 1.8 },
];
const SKYLINE_BARS = [
  22, 58, 34, 72, 44, 60, 84, 40, 66, 30, 76, 48, 62, 26, 70, 38, 54, 80, 32, 58,
  44, 68, 28, 56, 78, 36, 50, 82, 30, 64, 42, 74, 24, 52, 66, 34, 60, 46, 72, 38,
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
          <div className="absolute" style={{ top: "18%", right: "12%" }}>
            <div
              className="hero-aperture"
              style={{ top: "50%", left: "50%", width: 220, height: 220, transform: "translate(-50%, -50%)" }}
            />
            <div
              className="rounded-full absolute"
              style={{
                top: "50%", left: "50%", width: 10, height: 10, transform: "translate(-50%, -50%)",
                background: "#7dd3d8", boxShadow: "0 0 18px 4px rgba(125,211,216,0.75)",
              }}
            />
            <div className="hero-ping-ring" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
            <div
              className="hero-ping-ring"
              style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", animationDelay: "1.6s" }}
            />
          </div>
        </motion.div>
        <motion.div className="absolute inset-0 scene-ocean" style={{ opacity: opacities[1] }}>
          {DROPLET_POSITIONS.map((left, i) => (
            <span key={left} className="droplet" style={{ left: `${left}%`, animationDelay: `${i * 0.7}s` }} />
          ))}
        </motion.div>
        <motion.div className="absolute inset-0 scene-wind" style={{ opacity: opacities[2] }}>
          <div className="contour-lines" />
          {RAIN_BARS.map((b, i) => (
            <div
              key={`rain-${i}`}
              className="rain-bar"
              style={{ left: b.left, height: b.height, animationDuration: `${b.duration}s`, animationDelay: `${b.delay}s` }}
            />
          ))}
        </motion.div>
        <motion.div className="absolute inset-0 scene-forest" style={{ opacity: opacities[3] }}>
          {RISE_PARTICLES.map((p, i) => (
            <div
              key={`rise-${i}`}
              className="rise-particle"
              style={{ left: p.left, animationDuration: `${p.duration}s`, animationDelay: `${i * 0.5}s` }}
            />
          ))}
          <div className="absolute bottom-0 left-0 right-0 flex items-end gap-[3px] px-[6%]" style={{ height: "34%" }}>
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
