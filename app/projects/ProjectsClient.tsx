"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects-data";

export function ProjectsClient() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="mx-auto max-w-6xl px-4 pt-40 pb-16 md:pt-48">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/50" />
            Projects · Selected work
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-display text-gradient text-[clamp(2.5rem,7vw,6.5rem)]">
            Real products I&apos;ve
            <br />
            <em className="italic font-normal text-muted-foreground">
              shipped across industries.
            </em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A focused archive of marketplace, fintech, education, AI, payments,
            agency, and real estate projects. Each case study breaks down the
            product positioning, user journey, and growth opportunities.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 md:pb-32">
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 0.06}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <article className="grid gap-6 overflow-hidden rounded-3xl surface-card md:grid-cols-12 md:gap-0">
                  <div className="overflow-hidden md:col-span-7">
                    <motion.div
                      className="relative aspect-[16/10] h-full w-full overflow-hidden"
                      whileHover={{ scale: 1.04 }}
                      transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="flex flex-col justify-between gap-8 p-8 md:col-span-5 md:p-10">
                    <div>
                      <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        <span>{project.categories[0]}</span>
                        {project.region && <span>{project.region}</span>}
                      </div>
                      <h2 className="mt-5 text-2xl font-medium tracking-tight md:text-3xl">
                        {project.title}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {project.summary}
                      </p>
                    </div>
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.categories.map((category) => (
                          <span
                            key={category}
                            className="rounded-full hairline px-3 py-1 text-xs text-muted-foreground"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full hairline transition-all group-hover:bg-foreground group-hover:text-background group-hover:rotate-[-30deg]">
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-32">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl surface-card p-10 md:flex-row md:items-center md:p-14">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Next
            </div>
            <h3 className="mt-3 text-display text-gradient text-3xl md:text-5xl">
              Have a product in mind?
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            Start a project <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
