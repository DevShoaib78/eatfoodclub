import type { Metadata, Viewport } from "next";
import { Young_Serif, Hanken_Grotesk, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Splash from "@/components/Splash";
import { brand, SITE_URL } from "@/lib/brand";

const youngSerif = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-young-serif",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-spline-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Eat Good Club · Making Good Food the New Normal",
    template: "%s · Eat Good Club",
  },
  description: brand.description,
  keywords: [
    "healthy food",
    "fresh fruit platters",
    "wellness juice",
    "fresh salads",
    "wellness shots",
    "yogurt bowls",
    "herbal tea",
    "healthy catering",
    "corporate catering",
    "healthy gifting",
    "Eat Good Club",
  ],
  authors: [{ name: brand.name }],
  creator: brand.name,
  applicationName: brand.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: brand.name,
    title: "Eat Good Club · Making Good Food the New Normal",
    description: brand.description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Eat Good Club: fresh, wholesome food made with care.",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eat Good Club · Making Good Food the New Normal",
    description: brand.description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "food",
};

export const viewport: Viewport = {
  themeColor: "#f5f5f0",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${youngSerif.variable} ${hanken.variable} ${splineMono.variable}`}
    >
      <body>
        <Splash />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
