type StampProps = {
  className?: string;
  ring?: string; // color of ring text + border
  center?: string; // color of center mark
  size?: number;
};

/**
 * Club stamp seal — the payoff mark. Circular "Fresh · Honest · Made with Care"
 * lettering around a small sprig. Used once near the Why / Order moment, not
 * repeated per section. Rotation is decorative and pauses under reduced motion.
 */
export default function Stamp({
  className = "",
  ring = "var(--color-sprout)",
  center = "var(--color-sprout)",
  size = 168,
}: StampProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label="Fresh, honest, made with care."
      className={className}
    >
      <defs>
        <path
          id="stamp-ring"
          d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
        />
      </defs>

      <circle cx="100" cy="100" r="88" fill="none" stroke={ring} strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="100" cy="100" r="52" fill="none" stroke={ring} strokeOpacity="0.5" strokeWidth="1" />

      <g className="animate-spin-slow">
        <text
          fill={ring}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.5px",
          }}
        >
          <textPath href="#stamp-ring" startOffset="0%">
            Fresh · Honest · Made with care · Est. Eat Good Club ·
          </textPath>
        </text>
      </g>

      {/* center sprig */}
      <g stroke={center} strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M100,120 C100,104 100,96 100,82" />
        <path d="M100,104 C92,100 88,94 88,86 C96,88 100,94 100,102" fill={center} stroke="none" />
        <path d="M100,110 C108,106 112,100 112,92 C104,94 100,100 100,108" fill={center} stroke="none" />
      </g>
    </svg>
  );
}
