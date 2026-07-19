import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${brand.name} · Making Good Food the New Normal`,
    short_name: brand.name,
    description: brand.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f5f0",
    theme_color: "#607018",
    icons: [
      { src: "/brand/logo-olive.webp", sizes: "512x512", type: "image/webp" },
    ],
  };
}
