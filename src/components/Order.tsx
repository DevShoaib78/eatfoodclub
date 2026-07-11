import { brand, whatsappUrl } from "@/lib/brand";
import Reveal from "./Reveal";
import BrushWord from "./BrushWord";
import { WhatsAppIcon, InstagramIcon, ArrowIcon } from "./icons";

export default function Order() {
  return (
    <section id="order" className="relative overflow-hidden bg-brand-deep text-bg">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(100% 80% at 15% 100%, oklch(38.5% 0.08 121.6 / 0.5), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-[80rem] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-[clamp(2.3rem,5.5vw,4.4rem)] leading-[1.02]">
              Let&apos;s eat <BrushWord color="var(--color-brand)">good</BrushWord>{" "}
              together.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-lg text-[1.08rem] leading-relaxed text-bg/75">
              Ready to order, or have something special in mind? Tell us the
              occasion and we&apos;ll help you choose the perfect menu for your day,
              then handle the rest.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between gap-10 rounded-[1.5rem] bg-bg p-7 text-ink transition-transform duration-300 hover:-translate-y-1 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <WhatsAppIcon className="h-7 w-7 text-brand" />
                <ArrowIcon className="h-5 w-5 -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
              <div>
                <p className="font-mono text-[0.8rem] tracking-tight text-ink-soft">
                  WhatsApp us for orders
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-[1.7rem] leading-tight">
                  {brand.phoneDisplay}
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between gap-10 rounded-[1.5rem] border border-bg/20 p-7 transition-colors duration-300 hover:border-bg/50 hover:bg-moss/40 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <InstagramIcon className="h-7 w-7 text-sprout" />
                <ArrowIcon className="h-5 w-5 -translate-x-1 text-sprout opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
              <div>
                <p className="font-mono text-[0.8rem] tracking-tight text-bg/70">
                  DM us on Instagram · ask for our latest menu
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-[1.7rem] leading-tight">
                  {brand.instagramHandle}
                </p>
              </div>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-xl text-center text-[0.98rem] leading-relaxed text-bg/70">
            Thank you for supporting our dream. Every product is made with care,
            honesty, and lots of love, and we hope it brings a little more goodness
            to your day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
