type Milestone = {
  label: string;
  sub: string;
  status: "done" | "current" | "next";
};

const MILESTONES: Milestone[] = [
  { label: "Babagon", sub: "2025", status: "done" },
  { label: "Weather Detective", sub: "now", status: "current" },
  { label: "What's next", sub: "still being written", status: "next" },
];

const STEP_COUNT = 16;
const PAD_X = 40;
const WIDTH = 920;
const TRACK = WIDTH - PAD_X * 2;

const STEPS = Array.from({ length: STEP_COUNT }, (_, i) => {
  const x = PAD_X + (i * TRACK) / (STEP_COUNT - 1);
  const y = 115 + Math.sin(i * 0.9) * 45;
  return { x, y, offset: i % 2 === 0 ? -7 : 7 };
});

const MILESTONE_INDICES = MILESTONES.map((_, i) =>
  Math.round(((i + 1) / (MILESTONES.length + 1)) * (STEP_COUNT - 1))
);

const STATUS_FILL: Record<Milestone["status"], string> = {
  done: "#94a3b8",
  current: "#2b7a94",
  next: "transparent",
};

export function TrailPath() {
  const flagX = STEPS[STEP_COUNT - 1].x + 34;
  const flagY = STEPS[STEP_COUNT - 1].y - 30;

  return (
    <div className="w-full">
      <svg viewBox="0 0 920 200" className="w-full h-auto" role="img" aria-label="A trail of footsteps leading toward a flag, marking Babagon, Weather Detective, and what comes next">
        {/* footsteps */}
        {STEPS.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y + s.offset} r={3.2} fill="#cbd5e1" />
        ))}

        {/* milestone markers */}
        {MILESTONES.map((m, i) => {
          const step = STEPS[MILESTONE_INDICES[i]];
          const isNext = m.status === "next";
          return (
            <g key={m.label}>
              <circle
                cx={step.x}
                cy={step.y}
                r={9}
                fill={STATUS_FILL[m.status]}
                stroke={isNext ? "#94a3b8" : "none"}
                strokeWidth={isNext ? 1.5 : 0}
                strokeDasharray={isNext ? "3 3" : undefined}
              />
              <text
                x={step.x}
                y={step.y - 20}
                textAnchor="middle"
                className="fill-slate-900"
                style={{ fontSize: 13, fontWeight: 500 }}
              >
                {m.label}
              </text>
              <text
                x={step.x}
                y={step.y - 6}
                textAnchor="middle"
                className="fill-slate-400"
                style={{ fontSize: 11 }}
              >
                {m.sub}
              </text>
            </g>
          );
        })}

        {/* the goal, still ahead */}
        <line x1={flagX} y1={flagY} x2={flagX} y2={flagY + 40} stroke="#2b7a94" strokeWidth={1.5} strokeDasharray="3 3" />
        <path
          d={`M${flagX},${flagY} L${flagX + 28},${flagY + 8} L${flagX},${flagY + 16} Z`}
          fill="none"
          stroke="#2b7a94"
          strokeWidth={1.5}
          strokeDasharray="3 3"
        />
      </svg>
    </div>
  );
}
