type IconProps = { className?: string };

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
} as const;

export function VisionIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path
        d="M2 12c2.4-4.2 6-6.5 10-6.5s7.6 2.3 10 6.5c-2.4 4.2-6 6.5-10 6.5S4.4 16.2 2 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function CodeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path
        d="M9 6.5 3.5 12 9 17.5M15 6.5 20.5 12 15 17.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NetworkIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path
        d="M12 6v5M12 11 6 16M12 11l6 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="5" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function DataIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path
        d="M4 18V10M9.5 18V6M15 18v-7M20 18V9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LeadershipIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M15.5 5.3c1.3.4 2.2 1.6 2.2 3s-.9 2.6-2.2 3M17 19c0-2.5-1.4-4.3-3.5-4.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
