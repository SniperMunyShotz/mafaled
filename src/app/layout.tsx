import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MAFALED Pro Clean Solutions | Professional Drone Cleaning Services",
  description:
    "Safer. Faster. Smarter cleaning for hard-to-reach surfaces. We use cutting-edge drone technology to clean buildings, windows, solar panels, and industrial structures — without scaffolding, lifts, or risk to people.",
  keywords: [
    "drone cleaning",
    "window cleaning",
    "building cleaning",
    "solar panel cleaning",
    "facade cleaning",
    "commercial cleaning",
    "drone services",
    "MAFALED",
  ],
  openGraph: {
    title: "MAFALED Pro Clean Solutions | Professional Drone Cleaning",
    description:
      "Cutting-edge drone technology for building, window, solar panel, and industrial cleaning. No scaffolding. No risk.",
    type: "website",
    siteName: "MAFALED Pro Clean Solutions",
    images: ["/mafaled-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAFALED Pro Clean Solutions",
    description:
      "Professional drone-powered cleaning services for hard-to-reach surfaces.",
    images: ["/mafaled-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
