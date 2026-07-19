import Image from "next/image";
import { menu } from "@/lib/brand";
import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";

export default function Menu() {
  return (
    <section id="menu" className="bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(2rem,4.5vw,3.4rem)] text-ink">
            Made fresh. Made with care.
            <br className="hidden sm:block" /> Made for every lifestyle.
          </h2>
        </Reveal>

        <ul className="mt-14 border-b border-line">
          {menu.map((item, i) => (
            <Reveal as="li" key={item.id} delay={Math.min(i * 0.05, 0.25)}>
              <div className="group relative flex items-center gap-5 border-t border-line py-6 transition-colors duration-300 hover:bg-surface/50 sm:gap-7 sm:px-4 sm:[margin-inline:-1rem]">
                <div className="relative aspect-square w-[4.5rem] shrink-0 overflow-hidden rounded-2xl ring-1 ring-ink/10 sm:w-24">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 72px, 96px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="min-w-0 flex-1 sm:grid sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.1fr)_auto] sm:items-center sm:gap-x-10">
                  <h3 className="text-[1.35rem] leading-tight text-ink transition-colors duration-300 group-hover:text-brand sm:text-[1.7rem]">
                    {item.name}
                  </h3>
                  <p className="mt-1 max-w-md text-[0.95rem] leading-relaxed text-ink-soft sm:mt-0">
                    {item.blurb}
                  </p>
                  <div className="mt-2 flex items-center gap-4 sm:mt-0 sm:justify-end">
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-brand/70">
                      {item.tag}
                    </span>
                    <ArrowIcon className="hidden h-5 w-5 shrink-0 -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-md text-[0.95rem] text-ink-soft">
            Menus rotate with the season.{" "}
            <span className="text-ink">Ask us for this week&apos;s list</span> and
            we&apos;ll help you build the right spread.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
