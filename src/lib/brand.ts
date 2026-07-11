// Single source of truth for brand content — mirrors the client's five slides.

export const SITE_URL = "https://eatgoodclub.com";

export const brand = {
  name: "Eat Good Club",
  tagline: "Making good food the new normal.",
  legalName: "Eat Good Club",
  description:
    "Eat Good Club makes fresh, wholesome food the easy choice: fruit platters, salads, cold-pressed juices, wellness shots, nutty chocolate dates, yogurt bowls, and herbal teas, all made fresh with care and ordered over WhatsApp.",
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
  tag: string; // short mono label — a real descriptor, not an eyebrow
};

export const menu: MenuItem[] = [
  {
    id: "fruit-platters",
    name: "Fresh Fruit Platters & Cups",
    blurb:
      "Hand-cut seasonal fruit, arranged to share. Perfect for snacking, gifting, and gatherings.",
    tag: "share / gift",
  },
  {
    id: "salads",
    name: "Fresh Salads",
    blurb: "Wholesome, colourful bowls built from crisp produce and honest dressings.",
    tag: "everyday",
  },
  {
    id: "juices-shots",
    name: "Cold-Pressed Juices & Wellness Shots",
    blurb: "Pressed fresh, never from concentrate. A clean jolt of energy for the day ahead.",
    tag: "cold-pressed",
  },
  {
    id: "chocolate-dates",
    name: "Nutty Chocolate Dates",
    blurb: "Medjool dates, roasted nuts, real dark chocolate. A naturally sweet treat, done right.",
    tag: "sweet / natural",
  },
  {
    id: "yogurt-bowls",
    name: "Yogurt Bowls",
    blurb: "Creamy and nourishing, topped with fresh fruit and a proper crunch.",
    tag: "breakfast",
  },
  {
    id: "herbal-teas",
    name: "Herbal Teas",
    blurb: "A calming collection of wellness blends to refresh your body and settle your mind.",
    tag: "caffeine-free",
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
    a: "Fresh fruit platters and cups, fresh salads, cold-pressed juices and wellness shots, nutty chocolate dates, yogurt bowls, and herbal teas, all prepared fresh using quality ingredients.",
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
