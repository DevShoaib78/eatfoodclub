"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { whatsappUrl } from "@/lib/brand";
import { smoothScrollTo } from "@/lib/scroll";
import BrushWord from "./BrushWord";
import MagneticButton from "./MagneticButton";
import { WhatsAppIcon, ArrowIcon } from "./icons";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const imgWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: gsap.Context | undefined;
    const play = () => {
      ctx = gsap.context(() => {
        const targets = gsap.utils.toArray<HTMLElement>(
          ".hero-line, .hero-sub, .hero-cta, .hero-meta",
        );
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          // Never leave body copy semi-transparent: strip inline opacity/transform
          // once the intro resolves so crawlers / slow paints see opaque text.
          onComplete: () => gsap.set(targets, { clearProps: "opacity,transform" }),
        });
        tl.from(imgWrap.current, { scale: 1.12, duration: 1.6, ease: "power2.out" }, 0)
          .from(".hero-line", { yPercent: 118, duration: 0.9, stagger: 0.1 }, 0.15)
          .from(".hero-sub", { y: 18, opacity: 0, duration: 0.5 }, "-=0.45")
          .from(".hero-cta", { y: 14, opacity: 0, duration: 0.45, stagger: 0.08 }, "-=0.3")
          .from(".hero-meta", { opacity: 0, duration: 0.5 }, "-=0.25");
      }, root);
    };

    // Begin as the splash lifts, so the reveal isn't wasted behind the curtain.
    const win = window as unknown as { __egcSplashDone?: boolean };
    let fallback: number | undefined;
    if (win.__egcSplashDone) {
      play();
    } else {
      const onDone = () => {
        window.clearTimeout(fallback);
        play();
      };
      window.addEventListener("egc:splashdone", onDone, { once: true });
      // Safety: never leave the hero un-animated if the event never arrives.
      fallback = window.setTimeout(() => {
        window.removeEventListener("egc:splashdone", onDone);
        play();
      }, 3600);
      return () => {
        window.removeEventListener("egc:splashdone", onDone);
        window.clearTimeout(fallback);
        ctx?.revert();
      };
    }

    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-deep text-bg"
    >
      {/* Full-bleed landscape image */}
      <div ref={imgWrap} aria-hidden className="absolute inset-0">
        <Image
          src="/photos/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Scrims. Left-to-right shade keeps the copy readable while the right of
          the photo stays clear; a top/bottom veil handles nav + depth. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(20% 0.04 121 / 0.62) 0%, oklch(20% 0.04 121 / 0.1) 22%, transparent 55%, oklch(20% 0.04 121 / 0.55) 100%)",
        }}
      />
      {/* Mobile: text sits over the image, so lean heavier and vertical */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 sm:hidden"
        style={{
          background:
            "linear-gradient(90deg, oklch(20% 0.04 121 / 0.86) 0%, oklch(20% 0.04 121 / 0.7) 55%, oklch(20% 0.04 121 / 0.4) 100%)",
        }}
      />
      {/* Desktop: horizontal shade from the left, gone by mid-screen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          background:
            "linear-gradient(90deg, oklch(20% 0.04 121 / 0.92) 0%, oklch(22% 0.045 121 / 0.82) 26%, oklch(24% 0.05 121 / 0.4) 48%, transparent 66%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[80rem] px-5 pb-16 pt-28 sm:px-8">
        <div className="max-w-xl">
          <h1 className="text-[clamp(2.75rem,7vw,5.6rem)] leading-[0.98]">
            <span className="block overflow-hidden">
              <span className="hero-line block">Making</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block">
                <BrushWord color="var(--color-brand)">good</BrushWord> food
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block">the new normal.</span>
            </span>
          </h1>

          <p className="hero-sub mt-7 max-w-md text-[1.05rem] leading-relaxed text-bg">
            Healthy eating shouldn&apos;t feel complicated. Fresh platters, salads,
            wellness juices and more, thoughtfully made to help you eat well,
            feel good, and enjoy every bite.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <span className="hero-cta">
              <MagneticButton href={whatsappUrl} external tone="light" variant="solid">
                <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" />
                Order on WhatsApp
              </MagneticButton>
            </span>
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("#menu");
              }}
              className="hero-cta group inline-flex items-center gap-2 rounded-full border border-bg/30 px-6 py-3.5 text-[0.95rem] font-medium tracking-tight text-bg/90 backdrop-blur-[2px] transition-colors duration-300 hover:border-bg/70 hover:text-bg"
            >
              See the menu
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <p className="hero-meta mt-8 text-[0.82rem] text-bg/75">
            Ordered over WhatsApp &amp; Instagram · Made fresh across the day
          </p>
        </div>
      </div>
    </section>
  );
}
