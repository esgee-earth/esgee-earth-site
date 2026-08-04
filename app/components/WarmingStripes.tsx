// Stylised warming stripes — inspired by Ed Hawkins' (University of Reading)
// #ShowYourStripes climate visualisation. The values below are an illustrative
// approximation of the shape of the global warming trend, not a plotted dataset —
// this is a design motif, not a chart. Swap in a real annual-anomaly series later
// if you want it to be a literal chart rather than a signature visual element.
const ANOMALY_SHAPE = [
  -0.3, -0.35, -0.25, -0.4, -0.3, -0.2, -0.25, -0.15, -0.2, -0.1, -0.15, -0.05,
  -0.1, 0.0, -0.05, 0.05, 0.0, 0.1, 0.05, 0.15, 0.1, 0.2, 0.15, 0.25, 0.2, 0.3,
  0.25, 0.35, 0.3, 0.4, 0.35, 0.45, 0.5, 0.45, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8,
  0.85, 0.9, 1.0, 1.1,
];

function anomalyToColor(v: number) {
  // Diverging blue -> white -> red scale, roughly -0.4 to 1.1 range.
  const min = -0.4;
  const max = 1.1;
  const t = Math.max(0, Math.min(1, (v - min) / (max - min)));
  const stops: [number, string][] = [
    [0, "#08306b"],
    [0.35, "#4292c6"],
    [0.5, "#f7f7f7"],
    [0.65, "#fc9272"],
    [1, "#67000d"],
  ];
  for (let i = 0; i < stops.length - 1; i++) {
    const [t0, c0] = stops[i];
    const [t1, c1] = stops[i + 1];
    if (t >= t0 && t <= t1) {
      const localT = (t - t0) / (t1 - t0);
      return lerpColor(c0, c1, localT);
    }
  }
  return stops[stops.length - 1][1];
}

function lerpColor(a: string, b: string, t: number) {
  const pa = hexToRgb(a);
  const pb = hexToRgb(b);
  const r = Math.round(pa[0] + (pb[0] - pa[0]) * t);
  const g = Math.round(pa[1] + (pb[1] - pa[1]) * t);
  const bch = Math.round(pa[2] + (pb[2] - pa[2]) * t);
  return `rgb(${r}, ${g}, ${bch})`;
}

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export default function WarmingStripes({
  className = "",
  height = "h-10 md:h-14",
}: {
  className?: string;
  height?: string;
}) {
  return (
    <div
      className={`w-full ${height} flex ${className}`}
      role="img"
      aria-label="Stylised warming stripes representing rising global temperature trend"
    >
      {ANOMALY_SHAPE.map((v, i) => (
        <div
          key={i}
          className="flex-1 h-full"
          style={{ backgroundColor: anomalyToColor(v) }}
        />
      ))}
    </div>
  );
}
