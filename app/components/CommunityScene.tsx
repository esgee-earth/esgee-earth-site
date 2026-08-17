"use client";

import type { ReactNode } from "react";
import { Bird } from "@/app/components/HillsJourney";

// Small amber lights along the ridge, standing in for a village at dusk —
// the same idea as the old illustrated "people gathered on a ridge," just
// not drawn as literal clip-art figures.
const VILLAGE_LIGHTS = [
  { left: "18%", bottom: "15%", delay: "0s" },
  { left: "24%", bottom: "19%", delay: "0.4s" },
  { left: "30%", bottom: "16%", delay: "0.8s" },
  { left: "38%", bottom: "21%", delay: "1.2s" },
  { left: "44%", bottom: "17%", delay: "1.6s" },
  { left: "52%", bottom: "20%", delay: "2s" },
  { left: "58%", bottom: "16%", delay: "0.6s" },
  { left: "66%", bottom: "19%", delay: "1s" },
  { left: "72%", bottom: "15%", delay: "1.4s" },
  { left: "80%", bottom: "18%", delay: "1.8s" },
];

// Same drifting-bird motif already used on the climate-action-sabah dusk scene.
const BIRDS = [
  { left: "14%", top: "16%", size: 20, opacity: 0.4, delay: "0s" },
  { left: "58%", top: "10%", size: 24, opacity: 0.45, delay: "1.1s" },
  { left: "78%", top: "20%", size: 16, opacity: 0.35, delay: "2s" },
];

export function CommunityScene({ children }: { children: ReactNode }) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden scene-dusk">
      {/* birds drifting across the upper sky */}
      {BIRDS.map((b, i) => (
        <div
          key={i}
          className="absolute bird-float pointer-events-none"
          style={{ left: b.left, top: b.top, animationDelay: b.delay }}
        >
          <Bird size={b.size} opacity={b.opacity} />
        </div>
      ))}

      {/* ridge as a single-stroke contour line, not filled illustrated hills */}
      <svg
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-[40%] pointer-events-none"
      >
        <path
          d="M0,180 C180,140 340,170 520,150 C700,130 860,165 1040,140 C1220,118 1340,150 1440,130 L1440,300 L0,300 Z"
          fill="rgba(0,0,0,0.28)"
        />
        <path
          d="M0,180 C180,140 340,170 520,150 C700,130 860,165 1040,140 C1220,118 1340,150 1440,130"
          fill="none"
          stroke="rgba(242,184,75,0.4)"
          strokeWidth="1"
        />
      </svg>

      {/* village lights along the ridge */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] pointer-events-none">
        {VILLAGE_LIGHTS.map((l, i) => (
          <div
            key={i}
            className="village-light"
            style={{ left: l.left, bottom: l.bottom, animationDelay: l.delay }}
          />
        ))}
      </div>

      {/* foreground content */}
      <div className="relative z-10 w-full px-4 md:px-6">{children}</div>
    </section>
  );
}
