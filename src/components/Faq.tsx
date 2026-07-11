import { faqs } from "@/lib/brand";
import Reveal from "./Reveal";

export default function Faq() {
  return (
    <section id="faq" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-[80rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <h2 className="text-[clamp(2rem,4.5vw,3.4rem)] text-ink">Good to know.</h2>
          <p className="mt-6 max-w-xs text-ink-soft">
            Everything else is a WhatsApp message away.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="border-t border-line">
          <dl>
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border-b border-line [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[1.15rem] text-ink transition-colors duration-200 hover:text-brand">
                  <dt>{f.q}</dt>
                  <span
                    aria-hidden
                    className="relative h-4 w-4 shrink-0 text-brand"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <dd className="max-w-lg pb-6 text-[1rem] leading-relaxed text-ink-soft">
                  {f.a}
                </dd>
              </details>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
