"use client";

import type { ReactNode } from "react";

const TREES = [
  { left: "6%", width: 48 },
  { left: "14%", width: 32 },
  { left: "20%", width: 40 },
  { left: "80%", width: 38 },
  { left: "86%", width: 30 },
  { left: "93%", width: 44 },
];

const PEOPLE = [
  { left: "41%", height: 44 },
  { left: "46%", height: 52 },
  { left: "51%", height: 46 },
  { left: "56%", height: 50 },
  { left: "61%", height: 42 },
];

const SILHOUETTE = "#33503f";

function Tree({ width }: { width: number }) {
  return (
    <div className="flex flex-col items-center" style={{ width }}>
      <div
        className="rounded-full"
        style={{ width: width * 0.75, height: width * 0.75, background: SILHOUETTE }}
      />
      <div style={{ width: Math.max(4, width * 0.12), height: width * 0.5, background: SILHOUETTE }} />
    </div>
  );
}

function Person({ height }: { height: number }) {
  return (
    <div className="flex flex-col items-center" style={{ width: height * 0.55 }}>
      <div
        className="rounded-full"
        style={{ width: height * 0.3, height: height * 0.3, background: SILHOUETTE }}
      />
      <div
        style={{
          width: height * 0.46,
          height: height * 0.62,
          borderRadius: "45% 45% 15% 15%",
          marginTop: 2,
          background: SILHOUETTE,
        }}
      />
    </div>
  );
}

export function CommunityScene({ children }: { children: ReactNode }) {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #eef3f5 0%, #f8ecdb 55%, #f4d9bc 100%)" }}
    >
      {/* soft warm glow, low sun */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 340,
          height: 340,
          left: "50%",
          top: "28%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(180,71,47,0.28), transparent 70%)",
          filter: "blur(6px)",
        }}
      />

      {/* rolling hills, back to front */}
      <svg
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-[45%] pointer-events-none"
      >
        <path
          d="M0,260 C240,200 420,240 660,210 C900,180 1100,230 1440,200 L1440,400 L0,400 Z"
          fill="#c3ddd3"
          opacity="0.6"
        />
        <path
          d="M0,300 C260,260 480,295 700,270 C920,245 1140,285 1440,255 L1440,400 L0,400 Z"
          fill="#8fbaac"
          opacity="0.75"
        />
        <path
          d="M0,345 C220,320 460,340 700,325 C960,308 1180,335 1440,318 L1440,400 L0,400 Z"
          fill="#4d7a67"
          opacity="0.95"
        />
      </svg>

      {/* trees along the ridge */}
      <div className="absolute bottom-0 left-0 w-full h-[16%] pointer-events-none">
        {TREES.map((t, i) => (
          <div key={i} className="absolute bottom-0" style={{ left: t.left }}>
            <Tree width={t.width} />
          </div>
        ))}
      </div>

      {/* people, gathered on the ridge */}
      <div className="absolute bottom-0 left-0 w-full h-[14%] pointer-events-none">
        {PEOPLE.map((p, i) => (
          <div key={i} className="absolute bottom-0" style={{ left: p.left }}>
            <Person height={p.height} />
          </div>
        ))}
      </div>

      {/* foreground content */}
      <div className="relative z-10 w-full px-4 md:px-6">{children}</div>
    </section>
  );
}
