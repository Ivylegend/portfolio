import type { Metadata } from "next";
import { shareMetadata } from "@/lib/share-metadata";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  keywords: [
    "hire software developer Nigeria",
    "contact app developer",
    "hire full stack developer",
    "build escrow marketplace",
    "build AI agent",
    "WhatsApp business software developer",
    "SEO website developer",
  ],
  ...shareMetadata("/contact", "Contact for Software and App Development", "Start a software development project with Icha Victory. Build custom web apps, mobile apps, escrow marketplaces, AI agents, logistics software, WhatsApp business tools, or SEO-ready websites."),
};

export default function ContactPage() {
  return <ContactClient />;
}
