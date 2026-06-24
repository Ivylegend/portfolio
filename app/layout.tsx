import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Icha Victory",
  url: "https://icha.ng",
  image: "https://icha.ng/assets/hero-bg.jpg",
  founder: {
    "@type": "Person",
    name: "Icha Victory",
    jobTitle: "Full Stack Software Developer",
  },
  areaServed: ["Nigeria", "Lagos", "Worldwide"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  description:
    "Full stack software development for custom web apps, mobile apps, escrow marketplaces, logistics platforms, fintech products, AI agents, WhatsApp business software, and SEO-ready websites.",
  serviceType: [
    "Custom Software Development",
    "Mobile App Development",
    "Escrow Marketplace Development",
    "Logistics App Development",
    "AI Agent Development",
    "WhatsApp Business Software",
    "Website Design and Development",
    "SEO Services",
    "DUNS Number Acquisition Support",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "FinTech",
    "Logistics Software",
    "Escrow Payments",
    "AI Agents",
    "WhatsApp Cloud API",
    "SEO",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://icha.ng"),
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  title: {
    default: "Icha Victory - Full Stack Software Developer",
    template: "%s | Icha Victory",
  },
  description:
    "Icha Victory builds custom software, mobile apps, escrow-powered marketplaces, logistics platforms, AI agents, WhatsApp business software, and SEO-ready websites for startups and growing businesses.",
  applicationName: "Icha Victory",
  keywords: [
    "Icha Victory",
    "software developer in Nigeria",
    "full stack developer",
    "app development",
    "mobile app development",
    "custom software development",
    "escrow payment platform",
    "escrow marketplace developer",
    "logistics app development",
    "AI agents developer",
    "WhatsApp business software",
    "SEO services Nigeria",
    "Next.js developer",
    "React Native developer",
    "fintech software developer",
  ],
  authors: [{ name: "Icha Victory", url: "https://icha.ng" }],
  creator: "Icha Victory",
  publisher: "Icha Victory",
  category: "Software Development",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://icha.ng",
    siteName: "Icha Victory",
    title: "Icha Victory - Full Stack Software Developer",
    description:
      "Custom software, app development, escrow marketplaces, logistics systems, AI agents, WhatsApp automation, and SEO-ready websites.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Icha Victory software development portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Icha Victory - Full Stack Software Developer",
    description:
      "Software development, app development, escrow payments, logistics apps, AI agents, WhatsApp business tools, and SEO-ready websites.",
    images: ["/assets/og-image.png"],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
