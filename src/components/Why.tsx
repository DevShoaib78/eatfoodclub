import Image from "next/image";
import Reveal from "./Reveal";
import Stamp from "./Stamp";
import BrushWord from "./BrushWord";

export default function Why() {
  return (
    <section id="why" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-[80rem] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image + stamp */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] ring-1 ring-ink/10">
            <Image
              src="/photos/why.jpg"
              alt="Fresh ingredients being prepared by hand at Eat Good Club."
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-7 -right-3 hidden rounded-full bg-bg p-3 shadow-[0_18px_40px_-18px_oklch(29%_0.055_121_/_0.5)] sm:block">
            <Stamp size={148} ring="var(--color-brand)" center="var(--color-brand)" />
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="text-[clamp(2rem,4.5vw,3.4rem)] text-ink">
              Why <BrushWord color="var(--color-sprout)">Eat Good</BrushWord> Club?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
              We believe healthy food should be simple, delicious, and made with
              love. Every product is freshly prepared using quality ingredients,
              so you can enjoy food that nourishes both your body and your day.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
              Whether it&apos;s your everyday meal or a special celebration,
              we&apos;re here to make every moment a little healthier.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-9 font-[family-name:var(--font-display)] text-[clamp(1.6rem,3vw,2.3rem)] leading-tight text-brand">
              Fresh. Honest. Made with care.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
