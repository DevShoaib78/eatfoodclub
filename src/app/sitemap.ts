import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(), // stamped at build time, so it reflects each deploy
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
