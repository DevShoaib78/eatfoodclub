"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Vertical rise distance in px. */
  y?: number;
  /** Seconds to delay after the trigger. */
  delay?: number;
  duration?: number;
  as?: React.ElementType;
};

/**
 * Enhances an already-visible element with a rise + fade as it scrolls in.
 * JS owns the hidden state, so SSR / no-JS renders fully visible. Reduced
 * motion resolves instantly.
 */
export default function Reveal({
  children,
  className,
  y = 22,
  delay = 0,
  duration = 0.9,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [y, delay, duration]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
