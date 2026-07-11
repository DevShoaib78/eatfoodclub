"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wires Lenis smooth scrolling into GSAP's ticker so ScrollTrigger stays in
 * sync. Skips smoothing entirely when the visitor prefers reduced motion —
 * native scroll then handles everything.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    // Expose for smooth in-page anchor navigation from the header.
    const win = window as unknown as { __egcLenis?: Lenis; __egcSplashDone?: boolean };
    win.__egcLenis = lenis;

    // Hold scrolling while the intro splash is on screen.
    let onSplashDone: (() => void) | null = null;
    if (!win.__egcSplashDone) {
      lenis.stop();
      onSplashDone = () => lenis.start();
      window.addEventListener("egc:splashdone", onSplashDone, { once: true });
    }

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Let images/fonts settle, then recompute trigger positions.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 600);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete win.__egcLenis;
      if (onSplashDone) window.removeEventListener("egc:splashdone", onSplashDone);
      window.removeEventListener("load", refresh);
      window.clearTimeout(t);
    };
  }, []);

  return <>{children}</>;
}
