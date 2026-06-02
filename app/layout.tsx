import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourportfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gianpaolo Ingrassia — Freelance Full-Stack Developer",
    template: "%s | Gianpaolo Ingrassia",
  },
  description:
    "I help startups ship production-ready SaaS products fast. Specialised in Next.js, Stripe, and AI automation. Available for freelance projects on Fiverr.",
  keywords: [
    "freelance developer",
    "Next.js developer",
    "SaaS developer",
    "Stripe integration",
    "AI automation",
    "full-stack developer",
    "Fiverr developer",
  ],
  authors: [{ name: "Gianpaolo Ingrassia", url: SITE_URL }],
  creator: "Gianpaolo Ingrassia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Gianpaolo Ingrassia — Freelance Developer",
    title: "Gianpaolo Ingrassia — Freelance Full-Stack Developer",
    description:
      "I help startups ship production-ready SaaS products fast. Next.js · Stripe · AI Automation.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Gianpaolo Ingrassia — Freelance Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gianpaolo Ingrassia — Freelance Full-Stack Developer",
    description:
      "I help startups ship production-ready SaaS products fast. Next.js · Stripe · AI Automation.",
    images: ["/og"],
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
