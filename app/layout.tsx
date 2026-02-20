import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Celeb Sync | Premium Celebrity & Influencer Marketing Agency",
  description: "Celeb Sync is a global influencer marketing powerhouse connecting brands with top celebrities and creators for strategic impact.",
  keywords: ["influencer marketing", "celebrity endorsements", "brand campaigns", "content strategy", "digital influence"],
  authors: [{ name: "Celeb Sync" }],
  openGraph: {
    title: "Celeb Sync | Premium Influencer Marketing",
    description: "Global celebrity and influencer marketing agency delivering measurable impact.",
    type: "website",
    siteName: "Celeb Sync",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

import Navbar from "@/components/Navbar";
import PremiumCursor from "@/components/PremiumCursor";
import Preloader from "@/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-black text-white antialiased`}>
        <Preloader />
        <PremiumCursor />
        {/* Extreme Premium Noise Overlay */}
        <div className="noise-overlay" />
        <main className="animate-reveal">
          {children}
        </main>
      </body>
    </html>
  );
}
