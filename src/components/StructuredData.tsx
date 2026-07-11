import { brand, SITE_URL, menu, faqs } from "@/lib/brand";

/**
 * JSON-LD graph for search + answer engines (AEO). Describes the business, its
 * menu, and common questions so Google/Bing rich results and LLM assistants can
 * answer "what is Eat Good Club / what do they make / how do I order" directly.
 */
export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: brand.name,
        description: brand.description,
        publisher: { "@id": `${SITE_URL}/#business` },
        inLanguage: "en",
      },
      {
        "@type": ["FoodEstablishment", "Organization"],
        "@id": `${SITE_URL}/#business`,
        name: brand.name,
        legalName: brand.legalName,
        url: SITE_URL,
        description: brand.description,
        slogan: "Making good food the new normal.",
        logo: `${SITE_URL}/brand/logo-olive.png`,
        image: `${SITE_URL}/og.png`,
        telephone: `+${brand.phoneRaw}`,
        priceRange: "$$",
        servesCuisine: [
          "Healthy",
          "Fresh fruit platters",
          "Salads",
          "Cold-pressed juices",
          "Yogurt bowls",
          "Herbal teas",
        ],
        areaServed: { "@type": "Country", name: brand.areaServed },
        sameAs: [brand.instagramUrl],
        hasMenu: { "@id": `${SITE_URL}/#menu` },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: `+${brand.phoneRaw}`,
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "Menu",
        "@id": `${SITE_URL}/#menu`,
        name: "Eat Good Club Menu",
        hasMenuItem: menu.map((m) => ({
          "@type": "MenuItem",
          name: m.name,
          description: m.blurb,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
