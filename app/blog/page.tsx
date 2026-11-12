import type { Metadata } from "next";
import { shareMetadata } from "@/lib/share-metadata";
import { BlogClient } from "./BlogClient";

export const metadata: Metadata = {
  ...shareMetadata("/blog", "Software Development Blog", "Practical guides on mobile app development, escrow marketplaces, AI agents, WhatsApp automation, SEO, fintech, and logistics software — by Icha Victory."),
};

export default function BlogPage() {
  return <BlogClient />;
}
