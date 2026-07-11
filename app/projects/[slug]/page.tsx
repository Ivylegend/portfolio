import type { Metadata } from "next";
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
    title: `${project.title} Case Study`,
    description: project.summary,
    keywords: project.seoKeywords,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} Case Study | Icha Victory`,
      description: project.summary,
      url: `https://icha.ng/projects/${project.slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 800,
          alt: `${project.title} case study preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study | Icha Victory`,
      description: project.summary,
      images: [project.image],
    },
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
