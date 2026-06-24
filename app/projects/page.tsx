import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Software Development Projects and Selected Work",
  description:
    "Explore software products built by Icha Victory across logistics, healthtech, escrow marketplaces, AI agents, SaaS dashboards, and fintech apps.",
  keywords: [
    "software development portfolio",
    "app development projects",
    "escrow marketplace project",
    "logistics software project",
    "AI agents portfolio",
    "fintech app developer",
    "Icha Victory projects",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects - Icha Victory",
    description:
      "Selected software development work across logistics, healthtech, AI, SaaS, fintech and escrow marketplaces.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
