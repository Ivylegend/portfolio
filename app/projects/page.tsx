import type { Metadata } from "next";
import { shareMetadata } from "@/lib/share-metadata";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  keywords: [
    "software development portfolio",
    "app development projects",
    "escrow marketplace project",
    "logistics software project",
    "AI agents portfolio",
    "fintech app developer",
    "Icha Victory projects",
  ],
  ...shareMetadata("/projects", "Software Development Projects and Selected Work", "Explore software products built by Icha Victory across logistics, healthtech, escrow marketplaces, AI agents, SaaS dashboards, and fintech apps."),
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
