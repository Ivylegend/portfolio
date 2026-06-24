import type { Metadata } from "next";
import { BlogClient } from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on mobile app development, escrow marketplaces, AI agents, WhatsApp automation, SEO, fintech, and logistics software — by Icha Victory.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Icha Victory",
    description:
      "Practical insights on building software products — from logistics apps and AI agents to fintech onboarding and SEO.",
    url: "https://icha.ng/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
