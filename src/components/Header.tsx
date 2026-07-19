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
  const [menuOpen, setMenuOpen] = useState(false);

  // Solid header whenever we've scrolled OR the mobile menu is open.
  const solid = scrolled || menuOpen;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setMenuOpen(false); // any scroll dismisses the mobile menu
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    smoothScrollTo(href);
    history.replaceState(null, "", href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        solid ? "bg-bg/90 backdrop-blur-md border-b border-line/70" : "bg-transparent"
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
            src="/brand/logo-cream.webp"
            alt=""
            fill
            sizes="112px"
            priority
            className={`object-contain transition-opacity duration-500 ${
              solid ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src="/brand/logo-olive.webp"
            alt="Eat Good Club"
            fill
            sizes="112px"
            className={`object-contain transition-opacity duration-500 ${
              solid ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>

        <nav
          className={`hidden items-center gap-9 md:flex transition-colors duration-500 ${
            solid ? "text-ink" : "text-bg"
          }`}
          aria-label="Primary"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className={`group relative py-1 font-mono text-[0.9rem] tracking-tight transition-colors ${
                solid ? "hover:text-brand" : "hover:text-sprout"
              }`}
            >
              <span
                aria-hidden
                className={`absolute right-full top-1/2 -translate-y-1/2 pr-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  solid ? "text-brand" : "text-sprout"
                }`}
              >
                /
              </span>
              {l.label}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.85rem] font-medium tracking-tight transition-colors duration-300 sm:px-5 ${
              solid ? "bg-brand text-bg hover:bg-ink" : "bg-bg/95 text-ink hover:bg-sprout"
            }`}
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Order on WhatsApp</span>
            <span className="sm:hidden">Order</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center transition-colors md:hidden ${
              solid ? "text-ink" : "text-bg"
            }`}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Tap-outside catcher (mobile) */}
      <button
        aria-hidden
        tabIndex={-1}
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 -z-10 cursor-default md:hidden ${menuOpen ? "block" : "hidden"}`}
      />

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full border-b border-line bg-bg/95 backdrop-blur-md shadow-[0_20px_44px_-26px_oklch(29%_0.055_121_/_0.5)] transition-all duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[80rem] flex-col px-5 sm:px-8" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="flex items-center justify-between border-b border-line/60 py-4 font-mono text-[1.05rem] text-ink transition-colors last:border-0 hover:text-brand"
            >
              {l.label}
              <span aria-hidden className="text-brand/50">
                /
              </span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
