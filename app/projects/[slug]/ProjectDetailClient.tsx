"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ExternalLink, Search } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/lib/projects-data";

export function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      <section className="mx-auto max-w-6xl px-4 pt-36 pb-16 md:pt-44">
        <Reveal>
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to projects
          </Link>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {project.categories.map((category) => (
              <span
                key={category}
                className="rounded-full hairline px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground"
              >
                {category}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="text-display text-gradient text-[clamp(2.75rem,7vw,6.75rem)]">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap gap-3">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
              >
                Visit website <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full hairline px-6 py-3.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              Start a similar project <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <Reveal>
          <motion.div
            className="relative aspect-[16/10] overflow-hidden rounded-3xl surface-card"
            initial={false}
            whileHover={{ scale: 0.995 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={project.image}
              alt={`${project.title} website screenshot`}
              fill
              priority
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
          </motion.div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-24 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14 md:pb-32">
        <div>
          <Reveal>
            <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-muted-foreground/50" />
              Project overview
            </div>
          </Reveal>
          <div className="space-y-5">
            {project.overview.map((paragraph, index) => (
              <Reveal key={paragraph} delay={(index % 3) * 0.04}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.08}>
          <aside className="rounded-3xl surface-card p-7 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Snapshot
            </div>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Project
                </dt>
                <dd className="mt-2 text-sm">{project.title}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Category
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <span key={category} className="rounded-full hairline px-3 py-1 text-xs text-muted-foreground">
                      {category}
                    </span>
                  ))}
                </dd>
              </div>
              {project.region && (
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Region
                  </dt>
                  <dd className="mt-2 text-sm">{project.region}</dd>
                </div>
              )}
            </dl>
          </aside>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 md:pb-32">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-3xl surface-card p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <CheckCircle2 className="h-4 w-4" aria-hidden />
                Key work
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground/70" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl surface-card p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <Search className="h-4 w-4" aria-hidden />
                SEO angles
              </div>
              <div className="flex flex-wrap gap-2">
                {project.seoKeywords.map((keyword) => (
                  <span key={keyword} className="rounded-full bg-accent px-3 py-1.5 text-xs text-muted-foreground">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 md:pb-32">
        <Reveal>
          <div className="rounded-3xl surface-card p-8 md:p-10">
            <div className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Useful paths
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {project.internalPaths.map((path) => (
                <div key={path} className="bg-background p-5 text-sm text-muted-foreground">
                  {path}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-32">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl surface-card p-10 md:flex-row md:items-center md:p-14">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Build next
            </div>
            <h2 className="mt-3 text-display text-gradient text-3xl md:text-5xl">
              Need a product like {project.title}?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            Start a project <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
