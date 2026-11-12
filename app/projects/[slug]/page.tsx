import type { Metadata } from "next";
import { shareMetadata } from "@/lib/share-metadata";
import { notFound } from "next/navigation";
import { ProjectDetailClient } from "./ProjectDetailClient";
import { getProject, projects } from "@/lib/projects-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    keywords: project.seoKeywords,
    ...shareMetadata(`/projects/${slug}`, `${project.title} Case Study`, project.summary, project.image.replace(/\.webp$/, ".png")),
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
