import { menu } from "@/lib/brand";
import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";

export default function Menu() {
  return (
    <section id="menu" className="bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal>
            <h2 className="max-w-2xl text-[clamp(2rem,4.5vw,3.4rem)] text-ink">
              Made fresh. Made with care.
              <br className="hidden sm:block" /> Made for every lifestyle.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-ink-soft md:text-right">
              Six things we make well, from platters that carry a party to a
              quiet cup that settles the day.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 border-b border-line">
          {menu.map((item, i) => (
            <Reveal as="li" key={item.id} delay={Math.min(i * 0.05, 0.25)}>
              <div className="group relative grid grid-cols-1 gap-y-2 border-t border-line py-7 transition-colors duration-300 hover:bg-surface/60 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_auto] sm:items-baseline sm:gap-x-10 sm:px-4 sm:[margin-inline:-1rem]">
                <h3 className="text-[1.5rem] leading-tight text-ink transition-colors duration-300 group-hover:text-brand sm:text-[1.75rem]">
                  {item.name}
                </h3>
                <p className="max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
                  {item.blurb}
                </p>
                <div className="flex items-center gap-4 sm:justify-end">
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-brand/70">
                    {item.tag}
                  </span>
                  <ArrowIcon className="hidden h-5 w-5 shrink-0 -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block" />
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
