"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BLEND = 0.03;
const MAX_BEATS = 8;

function useBeatOpacity(
  progress: ReturnType<typeof useScroll>["scrollYProgress"],
  index: number,
  total: number
) {
  const start = index / total;
  const end = (index + 1) / total;
  const fadeInStart = index === 0 ? start : start - BLEND;
  const fadeOutEnd = index === total - 1 ? end : end + BLEND;
  return useTransform(
    progress,
    [fadeInStart, start, end, fadeOutEnd],
    [index === 0 ? 1 : 0, 1, 1, index === total - 1 ? 1 : 0]
  );
}

/**
 * Any number of content beats (up to MAX_BEATS), crossfading in place within one
 * sticky viewport-height slot as the user scrolls through this component's height.
 * Used where a single background chapter needs to tell more than one beat of content.
 * Pass `background` when this stack isn't already sitting inside something like
 * HillsJourney that manages its own persistent backdrop.
 */
export function ScrollCrossfadeStack({
  beats,
  heightVh = 100,
  background,
}: {
  beats: ReactNode[];
  heightVh?: number;
  background?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const total = beats.length || 1;

  // Hooks must be called unconditionally and in the same order every render, so we
  // always call MAX_BEATS of them and only render as many as `beats` actually has.
  const opacity0 = useBeatOpacity(scrollYProgress, 0, total);
  const opacity1 = useBeatOpacity(scrollYProgress, 1, total);
  const opacity2 = useBeatOpacity(scrollYProgress, 2, total);
  const opacity3 = useBeatOpacity(scrollYProgress, 3, total);
  const opacity4 = useBeatOpacity(scrollYProgress, 4, total);
  const opacity5 = useBeatOpacity(scrollYProgress, 5, total);
  const opacity6 = useBeatOpacity(scrollYProgress, 6, total);
  const opacity7 = useBeatOpacity(scrollYProgress, 7, total);
  const opacities = [opacity0, opacity1, opacity2, opacity3, opacity4, opacity5, opacity6, opacity7];

  if (beats.length > MAX_BEATS) {
    throw new Error(`ScrollCrossfadeStack supports at most ${MAX_BEATS} beats, got ${beats.length}`);
  }

  return (
    <div ref={ref} className="relative" style={{ height: `${beats.length * heightVh}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {background}
        {beats.map((beat, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 flex items-center justify-center px-6"
            style={{ opacity: opacities[i] }}
          >
            {beat}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
