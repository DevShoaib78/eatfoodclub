import Image from "next/image";
import { brand, whatsappUrl } from "@/lib/brand";
import { WhatsAppIcon, InstagramIcon } from "./icons";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Why us", href: "#why" },
  { label: "Occasions", href: "#occasions" },
  { label: "Order", href: "#order" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-bg/70">
      <div className="mx-auto max-w-[80rem] px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Image
              src="/brand/logo-cream.webp"
              alt="Eat Good Club"
              width={72}
              height={72}
              className="h-16 w-16 object-contain"
            />
            <p className="mt-5 text-[0.95rem] leading-relaxed text-bg/60">
              {brand.tagline.charAt(0).toUpperCase() + brand.tagline.slice(1)} Fresh,
              honest food made with care in {brand.areaServed}.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-8 gap-y-3 text-[0.95rem]"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-bg/70 transition-colors hover:text-sprout"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-bg/20 transition-colors hover:border-sprout hover:text-sprout"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Eat Good Club on Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-bg/20 transition-colors hover:border-sprout hover:text-sprout"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-bg/10 pt-6 text-center">
          <p className="text-[0.82rem] text-bg/45">
            © 2026 {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
