const ROOT_CLUSTERS = [
  { left: "4%", scale: 0.75, opacity: 0.16 },
  { left: "20%", scale: 1.05, opacity: 0.2 },
  { left: "38%", scale: 0.85, opacity: 0.14 },
  { left: "56%", scale: 1.15, opacity: 0.18 },
  { left: "74%", scale: 0.9, opacity: 0.15 },
  { left: "90%", scale: 1.0, opacity: 0.17 },
];

function RootCluster() {
  return (
    <svg
      viewBox="0 0 80 100"
      width="80"
      height="100"
      fill="none"
      stroke="#3f6355"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M40,0 L40,30 M40,30 L20,55 M40,30 L58,50 M20,55 L10,80 M20,55 L28,82 M58,50 L50,78 M58,50 L68,76" />
    </svg>
  );
}

export function RootsBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute rounded-full"
        style={{
          width: 420,
          height: 420,
          left: "50%",
          top: "-8%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(180,71,47,0.14), transparent 70%)",
          filter: "blur(10px)",
        }}
      />
      <div className="absolute bottom-0 left-0 w-full h-[42%]">
        {ROOT_CLUSTERS.map((r, i) => (
          <div
            key={i}
            className="absolute bottom-0"
            style={{ left: r.left, opacity: r.opacity, transform: `scale(${r.scale})`, transformOrigin: "bottom" }}
          >
            <RootCluster />
          </div>
        ))}
      </div>
    </div>
  );
}
