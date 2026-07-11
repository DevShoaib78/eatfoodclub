"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";

type Variant = "solid" | "outline" | "ghost";
type Tone = "light" | "dark";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * A CTA that leans a few pixels toward the cursor and springs back on leave.
 * Pointer-only enhancement; touch and reduced-motion users get a plain button
 * with the same hit target.
 */
export default function MagneticButton({
  href,
  children,
  variant = "solid",
  tone = "dark",
  external = false,
  className = "",
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    gsap.to(el, { x: x * 0.28, y: y * 0.32, duration: 0.5, ease: "power3.out" });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "power4.out" });
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[0.95rem] font-medium tracking-tight transition-colors duration-300 will-change-transform";

  const variants: Record<Variant, Record<Tone, string>> = {
    solid: {
      dark: "bg-brand text-bg hover:bg-ink",
      light: "bg-sprout text-ink hover:bg-bg",
    },
    outline: {
      dark: "border border-brand/40 text-ink hover:border-brand hover:bg-brand hover:text-bg",
      light: "border border-bg/35 text-bg hover:bg-bg hover:text-ink",
    },
    ghost: {
      dark: "text-ink hover:text-brand",
      light: "text-bg/85 hover:text-bg",
    },
  };

  const cls = `${base} ${variants[variant][tone]} ${className}`;

  return (
    <a
      ref={ref}
      href={href}
      className={cls}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
