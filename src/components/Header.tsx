"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { whatsappUrl } from "@/lib/brand";
import { smoothScrollTo } from "@/lib/scroll";
import { WhatsAppIcon } from "./icons";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Why us", href: "#why" },
  { label: "Occasions", href: "#occasions" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href);
    history.replaceState(null, "", href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-line/70"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[80rem] items-center justify-between px-5 py-2 sm:px-8">
        <a
          href="#top"
          onClick={(e) => handleNav(e, "#top")}
          className="relative -my-5 block h-28 w-28 shrink-0"
          aria-label="Eat Good Club home"
        >
          <Image
            src="/brand/logo-cream.png"
            alt=""
            fill
            sizes="112px"
            priority
            className={`object-contain transition-opacity duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src="/brand/logo-olive.png"
            alt="Eat Good Club"
            fill
            sizes="112px"
            className={`object-contain transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>

        <nav
          className={`hidden items-center gap-9 md:flex transition-colors duration-500 ${
            scrolled ? "text-ink" : "text-bg"
          }`}
          aria-label="Primary"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className={`group relative py-1 font-mono text-[0.9rem] tracking-tight transition-colors ${
                scrolled ? "hover:text-brand" : "hover:text-sprout"
              }`}
            >
              <span
                aria-hidden
                className={`absolute right-full top-1/2 -translate-y-1/2 pr-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  scrolled ? "text-brand" : "text-sprout"
                }`}
              >
                /
              </span>
              {l.label}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.85rem] font-medium tracking-tight transition-colors duration-300 sm:px-5 ${
            scrolled
              ? "bg-brand text-bg hover:bg-ink"
              : "bg-bg/95 text-ink hover:bg-sprout"
          }`}
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Order on WhatsApp</span>
          <span className="sm:hidden">Order</span>
        </a>
      </div>
    </header>
  );
}
