import type { Metadata } from "next";
import { shareMetadata } from "@/lib/share-metadata";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  ...shareMetadata("/services", "Software Development Services", "Full stack software development services: mobile apps, escrow marketplaces, logistics platforms, AI agents, WhatsApp automation, SEO, and more — built by Icha Victory."),
};

export default function ServicesPage() {
  return <ServicesClient />;
}
