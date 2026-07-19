// Single source of truth for brand content, mirrors the client's five slides.

// Absolute site origin. Link previews (WhatsApp/Telegram/Instagram/X) need the
// og:image URL to match the live domain, so this is resolved from the
// environment: set NEXT_PUBLIC_SITE_URL to your real domain on deploy. On
// Vercel it auto-detects the production URL; otherwise it falls back below.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "") ||
  "https://eatgoodclub.com"
).replace(/\/+$/, "");

export const brand = {
  name: "Eat Good Club",
  tagline: "Making good food the new normal.",
  legalName: "Eat Good Club",
  description:
    "Eat Good Club makes fresh, wholesome food the easy choice: fruit platters, salads, wellness juices and shots, nutty chocolate dates, yogurt bowls, and herbal teas, all made fresh with care and ordered over WhatsApp.",
  phoneDisplay: "+91 76759 94430",
  phoneRaw: "917675994430",
  instagramHandle: "@eatgoodclub.com_",
  instagramUrl: "https://www.instagram.com/eatgoodclub.com_/",
  areaServed: "India",
} as const;

export const whatsappMessage =
  "Hi Eat Good Club! I'd love to see your latest menu and place an order.";

export const whatsappUrl = `https://wa.me/${brand.phoneRaw}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export type MenuItem = {
  id: string;
  name: string;
  blurb: string;
  tag: string; // short mono label, a real descriptor, not an eyebrow
  image: string;
  alt: string;
};

export const menu: MenuItem[] = [
  {
    id: "fruit-platters",
    name: "Fresh Fruit Platters & Cups",
    blurb:
      "Hand-cut seasonal fruit, arranged to share. Perfect for snacking, gifting, and gatherings.",
    tag: "share / gift",
    image: "/photos/menu-fruit-platters.webp",
    alt: "A colourful Eat Good Club fresh fruit platter of berries, grapes, pineapple and orange.",
  },
  {
    id: "salads",
    name: "Fresh Salads",
    blurb: "Wholesome, colourful bowls built from crisp produce and honest dressings.",
    tag: "everyday",
    image: "/photos/menu-salads.webp",
    alt: "A fresh Eat Good Club salad bowl with grilled chicken, greens, tomatoes and almonds.",
  },
  {
    id: "juices-shots",
    name: "Wellness Juices & Shots",
    blurb: "Made fresh, never from concentrate. A clean jolt of energy for the day ahead.",
    tag: "energise",
    image: "/photos/menu-juices.webp",
    alt: "A basket of Eat Good Club wellness juices in bright pink, orange and green.",
  },
  {
    id: "chocolate-dates",
    name: "Nutty Chocolate Dates",
    blurb: "Soft dates, roasted nuts, real dark chocolate. A naturally sweet treat, done right.",
    tag: "sweet / natural",
    image: "/photos/menu-chocolate-dates.webp",
    alt: "A box of Eat Good Club nutty chocolate-dipped dates topped with almonds.",
  },
  {
    id: "yogurt-bowls",
    name: "Yogurt Bowls",
    blurb: "Creamy and nourishing, topped with fresh fruit and a proper crunch.",
    tag: "breakfast",
    image: "/photos/menu-yogurt-bowls.webp",
    alt: "An Eat Good Club yogurt cup layered with granola, blueberries and strawberries.",
  },
  {
    id: "herbal-teas",
    name: "Herbal Teas",
    blurb: "A calming collection of wellness blends to refresh your body and settle your mind.",
    tag: "caffeine-free",
    image: "/photos/menu-herbal-teas.webp",
    alt: "Eat Good Club herbal tea blends of dried flowers and herbs with a glass teapot.",
  },
];

export type Occasion = { title: string; note: string };

export const occasions: Occasion[] = [
  { title: "Daily wellness", note: "A fresher default for ordinary days." },
  { title: "Birthdays & celebrations", note: "Platters that make the table." },
  { title: "Office & corporate", note: "Meetings and teams, fed well." },
  { title: "Gifting", note: "Send good food, say it properly." },
  { title: "Family gatherings", note: "Enough goodness to go around." },
];

export const faqs = [
  {
    q: "How do I place an order?",
    a: "Message us on WhatsApp at +91 76759 94430 or DM us on Instagram. Tell us the occasion and we'll help you build the perfect menu, then confirm timing and delivery.",
  },
  {
    q: "What does Eat Good Club make?",
    a: "Fresh fruit platters and cups, fresh salads, wellness juices and shots, nutty chocolate dates, yogurt bowls, and herbal teas, all prepared fresh using quality ingredients.",
  },
  {
    q: "Do you cater for offices, birthdays, and events?",
    a: "Yes. We prepare for daily wellness, birthdays and celebrations, office meetings and corporate events, gifting, and family gatherings. Share your headcount and occasion on WhatsApp and we'll tailor a menu.",
  },
  {
    q: "How fresh is the food?",
    a: "Everything is made fresh to order with quality ingredients, nothing mass-produced. Fresh, honest, and made with care is the whole point.",
  },
];
