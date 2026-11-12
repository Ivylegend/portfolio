import type { Metadata } from "next";
import { shareMetadata } from "@/lib/share-metadata";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
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
  ...shareMetadata("/", "Full Stack Software Developer for Apps, AI Agents and Escrow Platforms", "Icha Victory builds custom software products that help businesses launch, scale, and grow: web apps, mobile apps, escrow marketplaces, logistics systems, fintech tools, AI agents, WhatsApp automation, and SEO-ready websites."),
};

export default function Home() {
  return <HomeClient />;
}
