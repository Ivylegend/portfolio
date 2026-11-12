import type { Metadata } from "next";
import { shareMetadata } from "@/lib/share-metadata";
import { ProcessClient } from "./ProcessClient";

export const metadata: Metadata = {
  keywords: [
    "software development process",
    "app development process",
    "custom software launch",
    "AI agent development process",
    "escrow marketplace development process",
    "logistics app development",
  ],
  ...shareMetadata("/process", "Software Development Process", "A calm software development process for custom apps, escrow products, logistics software, AI agents, and SEO-ready websites: discovery, planning, design, development, testing, launch, and growth."),
};

export default function ProcessPage() {
  return <ProcessClient />;
}
