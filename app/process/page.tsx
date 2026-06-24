import type { Metadata } from "next";
import { ProcessClient } from "./ProcessClient";

export const metadata: Metadata = {
  title: "Software Development Process",
  description:
    "A calm software development process for custom apps, escrow products, logistics software, AI agents, and SEO-ready websites: discovery, planning, design, development, testing, launch, and growth.",
  keywords: [
    "software development process",
    "app development process",
    "custom software launch",
    "AI agent development process",
    "escrow marketplace development process",
    "logistics app development",
  ],
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Process - How I Build",
    description:
      "The five-step rhythm I use to ship custom software products, mobile apps, escrow platforms, and AI systems founders trust.",
    url: "/process",
  },
};

export default function ProcessPage() {
  return <ProcessClient />;
}
