// components/icons/MagnifyCostIcon.tsx
export function MagnifyCostIcon({ className = "h-12 w-12" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Glass */}
      <circle cx="28" cy="28" r="16" fill="#E7F8EF" stroke="#0B8C68" strokeWidth="3" />

      {/* Handle */}
      <line
        x1="38"
        y1="38"
        x2="54"
        y2="54"
        stroke="#0B8C68"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

