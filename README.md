# Eat Good Club

Marketing site for **Eat Good Club** — _Making good food the new normal._ A one-page,
smooth-scrolling site for a fresh, made-with-care healthy food maker (fruit platters,
salads, cold-pressed juices, wellness shots, nutty chocolate dates, yogurt bowls,
herbal teas). Orders happen over WhatsApp / Instagram — there is no cart.

## Stack

- **Next.js 16** (App Router) · **TypeScript** · **Tailwind CSS v4** (CSS-first `@theme`)
- **GSAP** + **ScrollTrigger** (scroll reveals, hero intro, magnetic CTAs, brush signature)
- **Lenis** (smooth scrolling, synced to GSAP)
- Self-hosted fonts via `next/font`: **Young Serif** (display), **Hanken Grotesk** (body),
  **Spline Sans Mono** (labels)

## Design system

The full brand + visual system lives in [`DESIGN.md`](./DESIGN.md) and
[`PRODUCT.md`](./PRODUCT.md) (Impeccable context). In short:

- **Palette** is derived entirely from the logo olive `#607018`, in OKLCH. Strategy is
  _committed olive_ on a crisp off-white (deliberately **not** the AI "cream + green" default).
- **Signature**: a hand-brush stroke (from the logo) that paints on when scrolled into view,
  plus a single "Fresh · Honest · Made with care" stamp seal.
- Tokens are defined in `src/app/globals.css` under `@theme`. Change a color there and it
  propagates across the site.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Editing content

All copy, the menu, occasions, and FAQs live in **`src/lib/brand.ts`** — one file, no CMS.
Update the phone number, Instagram handle, menu items, etc. there.

Set the production domain in `SITE_URL` (top of `src/lib/brand.ts`) so canonical URLs,
sitemap, robots, and structured data point at the live site.

## Swapping photography

Drop real Eat Good Club product photos at these paths (same names) and the layout picks
them up — no code change needed:

- `public/photos/hero.jpg` — hero (portrait, ~4:5 works best)
- `public/photos/why.jpg` — "Why us" section

Regenerate `public/og.png` (1200×630) if you want the social card to match. Current
placeholders are credited in [`PHOTO-CREDITS.md`](./PHOTO-CREDITS.md) (Unsplash).

## Design QA (Impeccable)

The project has the [Impeccable](https://impeccable.style) detector installed (`.claude/`),
with a hook that scans UI edits for AI-slop / quality issues. Run it manually against a
running dev server:

```bash
node .claude/skills/impeccable/scripts/detect.mjs --json http://localhost:3000
```

The current build passes with **zero findings**.

## SEO / AEO

- Per-page metadata, OpenGraph + Twitter cards, canonical URL (`src/app/layout.tsx`)
- JSON-LD graph — `WebSite`, `FoodEstablishment`/`Organization`, `Menu`, `FAQPage`
  (`src/components/StructuredData.tsx`)
- A visible FAQ section mirrors the FAQ schema for answer engines
- `robots.ts`, `sitemap.ts`, `manifest.ts` metadata routes; brand favicon via `app/icon.png`

## Accessibility

WCAG AA targeted: semantic headings/landmarks, visible keyboard focus, descriptive alt
text, and full `prefers-reduced-motion` fallbacks for every animation. The scrollbar is
hidden by design; wheel and keyboard scrolling remain fully functional.
