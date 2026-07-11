"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { occasions } from "@/lib/brand";

gsap.registerPlugin(ScrollTrigger);

export default function PerfectFor() {
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!stage || !track) return;

    const mm = gsap.matchMedia();

    // Desktop + motion-ok: pin the stage and scrub the track horizontally.
    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const distance = () => track.scrollWidth - stage.offsetWidth;
        stage.style.overflowX = "hidden";

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: () => "+=" + distance(),
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current)
                gsap.set(progressRef.current, { scaleX: self.progress });
            },
          },
        });

        return () => {
          tween.kill();
          stage.style.overflowX = "";
          gsap.set(track, { clearProps: "transform" });
        };
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section id="occasions" className="bg-bg">
      <div
        ref={stageRef}
        className="hide-scrollbar relative flex snap-x snap-mandatory items-stretch overflow-x-auto md:h-[100svh] md:items-center"
      >
        <div
          ref={trackRef}
          className="flex gap-4 px-5 py-20 sm:gap-5 sm:px-8 md:h-[76vh] md:py-0"
        >
          {/* Intro panel */}
          <article className="flex w-[82vw] shrink-0 snap-center flex-col justify-center pr-2 sm:w-[58vw] md:w-[40vw] lg:w-[34vw]">
            <h2 className="text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.02] text-ink">
              Good food for the whole of it.
            </h2>
            <p className="mt-6 max-w-sm text-[1.05rem] leading-relaxed text-ink-soft">
              From an ordinary Tuesday to a table full of people, there&apos;s an
              Eat Good Club order for the moment.
            </p>
            <p className="mt-8 font-mono text-[0.78rem] text-brand/70">
              Scroll across &rarr;
            </p>
          </article>

          {/* Occasion panels — alternating tone for rhythm */}
          {occasions.map((o, i) => {
            const dark = i % 2 === 1;
            return (
              <article
                key={o.title}
                className={`group relative flex w-[82vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[1.75rem] p-8 sm:w-[58vw] sm:p-10 md:w-[40vw] md:h-full lg:w-[34vw] ${
                  dark ? "bg-brand-deep text-bg" : "bg-surface text-ink"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-transform duration-500 group-hover:scale-[2] ${
                      dark ? "bg-sprout" : "bg-brand"
                    }`}
                  />
                  <span
                    className={`font-mono text-[0.72rem] ${
                      dark ? "text-bg/45" : "text-ink-soft"
                    }`}
                  >
                    0{i + 1} / 0{occasions.length}
                  </span>
                </div>

                <div>
                  <h3 className="text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.03]">
                    {o.title}
                  </h3>
                  <p
                    className={`mt-4 max-w-xs text-[1rem] leading-relaxed ${
                      dark ? "text-bg/70" : "text-ink-soft"
                    }`}
                  >
                    {o.note}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Scroll progress (desktop) */}
        <div
          aria-hidden
          className="absolute bottom-8 left-8 right-8 hidden h-px origin-left bg-line md:block"
        >
          <span
            ref={progressRef}
            className="absolute inset-0 block origin-left scale-x-0 bg-brand"
          />
        </div>
      </div>
    </section>
  );
}
