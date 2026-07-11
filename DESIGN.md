# Design

Visual system for Eat Good Club. Register: brand. Platform: web. Strategy: **committed olive** on a crisp off-white — the brand colour is structure, not garnish. Every colour sits on the logo's own hue axis (~120°). No warm cream, no leafy clip-art, no gradient text.

## Color

OKLCH, all derived from the logo olive `#607018`.

| Token | OKLCH | Hex | Role |
|---|---|---|---|
| `--bg` | `oklch(96.9% 0.007 106.5)` | `#F5F5F0` | Page background — crisp near-white, chroma ~0, *not* cream |
| `--surface` | `oklch(92.1% 0.014 115.8)` | `#E4E6DC` | Light panels, cards, dividers — brand-hued neutral |
| `--ink` | `oklch(25.5% 0.049 119.6)` | `#202608` | Body text & headings — tinted deep olive, never pure black |
| `--brand` | `oklch(51.5% 0.111 119.7)` | `#607018` | Brand olive — structural blocks, links, key accents |
| `--brand-deep` | `oklch(30% 0.06 121)` | `#2C3410` | Drenched dark-olive feature sections (hero panel, Order) |
| `--moss` | `oklch(38.5% 0.080 121.6)` | `#3D4A12` | Mid olive — secondary surfaces, hovers on dark |
| `--sprout` | `oklch(77.0% 0.147 121.2)` | `#A6C24C` | Bright accent — used sparingly (≤5%): highlights, small marks |

Contrast: ink-on-bg and bg-on-brand-deep both clear 4.5:1. Brand olive is used for large text / accents, not long body copy. On dark olive surfaces, text is `--bg` or `--sprout`, never gray.

## Typography

Contrast-axis pairing (serif + humanist sans + mono), self-hosted via `next/font/google`.

- **Display — Young Serif.** Organic, chunky, hand-carved editorial serif for hero and section headings. Distinctive and wholesome without the Playfair/Fraunces default. Letter-spacing ≥ -0.03em; clamp max ≤ 6rem.
- **Body — Hanken Grotesk.** Warm humanist sans, highly readable. Weights 400/500/600. Line length capped 65–75ch; `text-wrap: pretty` on prose, `balance` on headings.
- **Mono — Spline Sans Mono.** Deli-label / receipt texture. Used *only* for real data moments (phone number, dietary tags, the motto strip) — never as a tiny uppercase eyebrow above sections.
- **Logo — the existing brush script** (SVG/PNG). It is the one script on the page; no additional script type is added.

## Signature

1. **Brushstroke reveal** — key hero/section words carry a hand-painted olive stroke that paints on via GSAP clip-path when scrolled into view (respects reduced motion → appears instantly). Pulled directly from the logo's own brush gesture. This is *the* memorable element.
2. **Club stamp seal** — a single circular "Fresh · Honest · Made with Care" stamp used once as a payoff mark near the Why/Order moment. Secondary; not repeated per section.

## Layout

One-page smooth-scroll (Lenis), 5 sections mapped to the brand's five slides: Hero → What We Serve (menu) → Why Eat Good Club → Perfect For → Order / Join the Club. Generous, varied vertical rhythm (not uniform). Content max-width ~72rem; menu uses `repeat(auto-fit, minmax(...))` not fixed breakpoints. Real produce photography (Unsplash-curated) supplies natural colour; AI imagery only as a last-resort fallback. No nested cards; the menu is an editorial list, not an icon-card grid. Semantic z-index scale.

## Motion

Lenis smooth scroll + GSAP ScrollTrigger. Ease-out (expo/quart) only — no bounce, no elastic. Staggered reveals tuned per section, not one uniform entrance. Magnetic CTAs, subtle image parallax, the brushstroke paint-on. Every animation has a `prefers-reduced-motion: reduce` fallback (crossfade/instant) and content is visible by default (reveals enhance, never gate). Custom-hidden scrollbar with full wheel/keyboard scroll preserved.

## Bans honoured

No gradient text · no glassmorphism · no side-stripe borders · no hero-metric template · no identical card grids · no per-section uppercase eyebrows · no numbered section markers · no cream/sand/paper body bg · no bounce easing · no pure-black/untinted-gray · no Inter/Arial.
