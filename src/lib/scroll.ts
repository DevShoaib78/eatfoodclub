import type Lenis from "lenis";

/** Smoothly scroll to an in-page anchor via Lenis, with a native fallback. */
export function smoothScrollTo(hash: string) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const target = document.getElementById(id);
  if (!target) return;

  const lenis = (window as unknown as { __egcLenis?: Lenis }).__egcLenis;
  if (lenis && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    lenis.scrollTo(target, { offset: -8, duration: 1.2 });
  } else {
    target.scrollIntoView({ behavior: "auto", block: "start" });
  }
}
