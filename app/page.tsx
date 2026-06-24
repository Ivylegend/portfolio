import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "Full Stack Software Developer for Apps, AI Agents and Escrow Platforms",
  description:
    "Icha Victory builds custom software products that help businesses launch, scale, and grow: web apps, mobile apps, escrow marketplaces, logistics systems, fintech tools, AI agents, WhatsApp automation, and SEO-ready websites.",
  keywords: [
    "Icha Victory",
    "full stack software developer",
    "software development Nigeria",
    "app development Nigeria",
    "escrow payment software",
    "logistics app developer",
    "AI agents developer",
    "WhatsApp business software",
    "SEO website development",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Icha Victory - Full Stack Software Developer",
    description:
      "Premium product engineering for startups and businesses: web, mobile, fintech, escrow, logistics, AI, WhatsApp automation, and SEO.",
    url: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
