# Photo credits

All photography is **Eat Good Club's own product photography**, supplied by the client.
Sourced images are stored as optimised WebP in `public/`.

- `public/photos/hero.webp` — branded tea-tin flat-lay (site hero)
- `public/photos/why.webp` — fresh fruit platter (Why section)
- `public/photos/menu-*.webp` — one product shot per menu category
- `public/photos/*.webp` (chickpea salad, date stack, parfaits, chia puddings) — spare product
  shots kept for future use
- `public/og.png` — social share card, composited from the fruit platter + brand overlay
  (kept as PNG for WhatsApp/link-preview compatibility)

To swap any image, drop a replacement at the same path (WebP preferred) and the layout picks
it up. Menu images are referenced from `src/lib/brand.ts`.
