import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Icha Victory for Software and App Development",
  description:
    "Start a software development project with Icha Victory. Build custom web apps, mobile apps, escrow marketplaces, AI agents, logistics software, WhatsApp business tools, or SEO-ready websites.",
  keywords: [
    "hire software developer Nigeria",
    "contact app developer",
    "hire full stack developer",
    "build escrow marketplace",
    "build AI agent",
    "WhatsApp business software developer",
    "SEO website developer",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact - Icha Victory",
    description:
      "Let's build something remarkable: custom software, app development, escrow platforms, AI agents, logistics tools, WhatsApp automation, and SEO-ready websites.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
