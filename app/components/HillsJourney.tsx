"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Cloud } from "@/app/components/AtmosphericJourney";

const CLOUD_PUFFS = [
  { left: "6%", top: 40, width: 190, opacity: 0.55 },
  { left: "28%", top: 20, width: 240, opacity: 0.65 },
  { left: "52%", top: 55, width: 210, opacity: 0.5 },
  { left: "76%", top: 25, width: 220, opacity: 0.6 },
];

const RAIN_LINES = [8, 16, 24, 33, 41, 49, 57, 65, 73, 81, 89, 96];

// Drifting birds against the clearing dusk sky, at a few depths.
const BIRDS = [
  { left: "14%", top: "16%", size: 22, opacity: 0.5, delay: "0s" },
  { left: "26%", top: "9%", size: 15, opacity: 0.4, delay: "1.3s" },
  { left: "58%", top: "20%", size: 26, opacity: 0.55, delay: "0.6s" },
  { left: "70%", top: "12%", size: 17, opacity: 0.42, delay: "2s" },
  { left: "44%", top: "7%", size: 13, opacity: 0.35, delay: "0.9s" },
  { left: "84%", top: "22%", size: 19, opacity: 0.45, delay: "1.6s" },
];

function Bird({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg viewBox="0 0 24 12" width={size} height={size * 0.5}>
      <path
        d="M0,8 Q6,0 12,8 Q18,0 24,8"
        fill="none"
        stroke="#3a4a5a"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity={opacity}
      />
    </svg>
  );
}

function HillLayers({ colors, opacity = 1 }: { colors: [string, string]; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 1440 300"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 w-full h-[38%] pointer-events-none"
      style={{ opacity }}
    >
      <path
        d="M0,190 C240,140 420,175 660,155 C900,135 1100,180 1440,150 L1440,300 L0,300 Z"
        fill={colors[0]}
        opacity="0.75"
      />
      <path
        d="M0,230 C260,200 480,225 700,210 C920,195 1140,220 1440,205 L1440,300 L0,300 Z"
        fill={colors[1]}
        opacity="0.95"
      />
    </svg>
  );
}

/* Every chapter's content height is measured live via ResizeObserver, rather
   than assumed. Dawn and hujan are simple single-viewport sections and will
   just measure out to ~one viewport, but flood and question now contain
   internal scroll-crossfades (via ScrollCrossfadeStack) that are taller than
   one viewport, and their own content can keep changing size, so nothing
   here is hardcoded. This is what keeps every scene's background sticky for
   exactly as long as its content is on screen, no more, no less. */

function useMeasuredHeight(defaultHeight: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(defaultHeight);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => setHeight(entries[0].contentRect.height));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, height] as const;
}

function useSceneOpacity(
  progress: MotionValue<number>,
  startPx: number,
  endPx: number,
  totalPx: number,
  blendPx: number,
  isFirst: boolean,
  isLast: boolean
) {
  const fadeInStart = (isFirst ? startPx : startPx - blendPx) / totalPx;
  const start = startPx / totalPx;
  const end = endPx / totalPx;
  const fadeOutEnd = (isLast ? endPx : endPx + blendPx) / totalPx;
  return useTransform(
    progress,
    [fadeInStart, start, end, fadeOutEnd],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
  );
}

export function HillsJourney({
  dawn,
  hujan,
  flood,
  question,
}: {
  dawn: React.ReactNode;
  hujan: React.ReactNode;
  flood: React.ReactNode;
  question: React.ReactNode;
}) {
  const [dawnRef, dawnH] = useMeasuredHeight(900);
  const [hujanRef, hujanH] = useMeasuredHeight(900);
  const [floodRef, floodH] = useMeasuredHeight(1800);
  const [questionRef, questionH] = useMeasuredHeight(2600);

  const b0: [number, number] = [0, dawnH];
  const b1: [number, number] = [b0[1], b0[1] + hujanH];
  const b2: [number, number] = [b1[1], b1[1] + floodH];
  const b3: [number, number] = [b2[1], b2[1] + questionH];
  const totalPx = b3[1];
  const blendPx = 20;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const opacityDawn = useSceneOpacity(scrollYProgress, b0[0], b0[1], totalPx, blendPx, true, false);
  const opacityHujan = useSceneOpacity(scrollYProgress, b1[0], b1[1], totalPx, blendPx, false, false);
  const opacityFlood = useSceneOpacity(scrollYProgress, b2[0], b2[1], totalPx, blendPx, false, false);
  const opacityQuestion = useSceneOpacity(scrollYProgress, b3[0], b3[1], totalPx, blendPx, false, true);

  return (
    <div
      ref={ref}
      className="relative w-screen left-1/2 right-1/2 -mx-[50vw]"
      style={{ height: `${totalPx}px` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden -z-10">
        {/* Dawn: first light over the hills */}
        <motion.div className="absolute inset-0 scene-dawn" style={{ opacity: opacityDawn }}>
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 300,
              height: 300,
              left: "50%",
              top: "20%",
              transform: "translateX(-50%)",
              background: "radial-gradient(circle, rgba(180,71,47,0.22), transparent 70%)",
              filter: "blur(6px)",
            }}
          />
          <HillLayers colors={["#c3ddd3", "#8fbaac"]} />
        </motion.div>

        {/* Hujan bukit: cloud building over the ridge */}
        <motion.div className="absolute inset-0 scene-hujan" style={{ opacity: opacityHujan }}>
          {CLOUD_PUFFS.map((c, i) => (
            <div key={i} className="absolute" style={{ left: c.left, top: c.top }}>
              <Cloud width={c.width} opacity={c.opacity} />
            </div>
          ))}
          <HillLayers colors={["#2f4f4a", "#16282c"]} />
        </motion.div>

        {/* The flood: rain reaching the ground */}
        <motion.div className="absolute inset-0 scene-flood" style={{ opacity: opacityFlood }}>
          {RAIN_LINES.map((left, i) => (
            <span
              key={i}
              className="rain-line"
              style={{ left: `${left}%`, animationDelay: `${(i % 6) * 0.15}s` }}
            />
          ))}
          <HillLayers colors={["#12222a", "#0b1e33"]} />
        </motion.div>

        {/* The question: a clearing dusk sky, easing the contrast down from
            the dark flood scene above. Stays as the backdrop for the pivot
            beats, the sky-patterns library, and the contribute form. */}
        <motion.div className="absolute inset-0 scene-question" style={{ opacity: opacityQuestion }}>
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 380,
              height: 380,
              left: "72%",
              top: "38%",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(251,191,140,0.4), transparent 70%)",
              filter: "blur(14px)",
            }}
          />
          {BIRDS.map((b, i) => (
            <div
              key={i}
              className="absolute bird-float"
              style={{ left: b.left, top: b.top, animationDelay: b.delay }}
            >
              <Bird size={b.size} opacity={b.opacity} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 -mt-[100vh]">
        <div ref={dawnRef}>{dawn}</div>
        <div ref={hujanRef}>{hujan}</div>
        <div ref={floodRef}>{flood}</div>
        <div ref={questionRef}>{question}</div>
      </div>
    </div>
  );
}
