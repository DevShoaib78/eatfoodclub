"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type BrushWordProps = {
  children: React.ReactNode;
  /** CSS color for the painted stroke. */
  color?: string;
  className?: string;
  /** Vertical share of the text the stroke sits behind (0–1, from baseline). */
  band?: number;
};

/**
 * Signature element: a hand-painted brush stroke that "paints on" left→right
 * as the phrase scrolls into view — pulled from the logo's own brush gesture.
 * The stroke sits behind the text like a marker highlight. Reduced motion
 * shows it fully painted with no animation.
 */
export default function BrushWord({
  children,
  color = "var(--color-sprout)",
  className,
  band = 0.42,
}: BrushWordProps) {
  const strokeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = strokeRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(el, { clipPath: "inset(0 0% 0 0)" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 0.85,
          ease: "power2.inOut",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <span className={className} style={{ position: "relative", whiteSpace: "nowrap" }}>
      <svg
        ref={strokeRef}
        aria-hidden="true"
        viewBox="0 0 320 64"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          left: "-0.12em",
          right: "-0.12em",
          bottom: `${band * 0.12}em`,
          width: "calc(100% + 0.24em)",
          height: `${band}em`,
          zIndex: 0,
          clipPath: "inset(0 100% 0 0)",
          pointerEvents: "none",
        }}
      >
        <path
          fill={color}
          d="M6,34 C46,20 118,16 182,20 C238,23 286,18 308,30 C318,36 312,50 268,53 C196,58 104,60 40,53 C14,50 -2,44 6,34 Z"
        />
      </svg>
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </span>
  );
}
