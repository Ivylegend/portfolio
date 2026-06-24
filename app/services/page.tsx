import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full stack software development services: mobile apps, escrow marketplaces, logistics platforms, AI agents, WhatsApp automation, SEO, and more — built by Icha Victory.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Icha Victory",
    description:
      "A complete breakdown of every service I offer — from mobile apps and fintech rails to AI agents and SEO-ready websites.",
    url: "https://icha.ng/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
