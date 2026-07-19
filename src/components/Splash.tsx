"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type Lenis from "lenis";

/**
 * Intro splash — plays on every visit / refresh. The dismissal is CSS-driven
 * (see `.splash` in globals) so it can never trap content if JS is slow or
 * absent; this component adds the scroll lock, releases Lenis, and signals the
 * hero to begin once the curtain lifts. Reduced motion collapses it to a blink.
 */
export default function Splash() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduce ? 300 : 3000;

    const win = window as unknown as { __egcLenis?: Lenis; __egcSplashDone?: boolean };

    html.classList.add("is-loading");
    win.__egcLenis?.stop();
    window.scrollTo(0, 0);

    const signal = window.setTimeout(() => {
      win.__egcSplashDone = true;
      window.dispatchEvent(new Event("egc:splashdone"));
    }, Math.max(0, total - 150));

    const finish = window.setTimeout(() => {
      html.classList.remove("is-loading");
      win.__egcLenis?.start();
      setGone(true);
    }, total);

    return () => {
      window.clearTimeout(signal);
      window.clearTimeout(finish);
      html.classList.remove("is-loading");
      win.__egcLenis?.start();
    };
  }, []);

  if (gone) return null;

  return (
    <div className="splash" role="status" aria-label="Eat Good Club is loading">
      <div className="flex flex-col items-center px-6">
        <Image
          src="/brand/logo-cream.webp"
          alt="Eat Good Club"
          width={220}
          height={220}
          priority
          className="splash__logo h-44 w-44 object-contain sm:h-52 sm:w-52"
        />
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-[3px] w-full bg-bg/10"
      >
        <span className="splash__bar block h-full w-full bg-sprout" />
      </div>
    </div>
  );
}
