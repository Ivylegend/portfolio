"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";
import { motion } from "motion/react";

const tagColors: Record<string, string> = {
  Marketplaces: "bg-violet-500/10 text-violet-400",
  Logistics: "bg-amber-500/10 text-amber-400",
  AI: "bg-cyan-500/10 text-cyan-400",
  WhatsApp: "bg-green-500/10 text-green-400",
  SEO: "bg-orange-500/10 text-orange-400",
  Business: "bg-blue-500/10 text-blue-400",
  FinTech: "bg-emerald-500/10 text-emerald-400",
  "Web Dev": "bg-pink-500/10 text-pink-400",
};

export function BlogClient() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative isolate flex min-h-[52vh] items-end pb-20 pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.3_0.01_270/0.55),transparent_70%)]" />
        </div>
        <div className="mx-auto w-full max-w-6xl px-4">
          <Reveal>
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-muted-foreground/50" />
              Blog
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-display text-gradient text-[clamp(2.75rem,6.5vw,6rem)]">
              Insights from the<br />
              <em className="italic font-normal text-muted-foreground">build room.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Practical writing on mobile apps, AI agents, fintech, logistics platforms, WhatsApp automation, and the craft of shipping software products.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-32">
        {/* Featured post */}
        <Reveal>
          <Link href={`/blog/${featured.slug}`} className="group mb-6 block">
            <motion.article
              className="relative overflow-hidden rounded-3xl surface-card p-10 md:p-14"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(50%_60%_at_50%_0%,oklch(1_0_0/0.04),transparent_70%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${tagColors[featured.tag] ?? "bg-accent text-muted-foreground"}`}>
                      {featured.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">{featured.readTime}</span>
                    <span className="text-xs text-muted-foreground">{featured.date}</span>
                  </div>
                  <h2 className="text-display text-gradient text-[clamp(1.75rem,3.5vw,3rem)] max-w-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full hairline transition-all group-hover:bg-foreground group-hover:text-background group-hover:scale-110 group-hover:rotate-[-30deg]">
                  <span className="text-lg">↗</span>
                </div>
              </div>
            </motion.article>
          </Link>
        </Reveal>

        {/* Grid of remaining posts */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.07}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PostCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <motion.article
        className="relative flex h-full flex-col overflow-hidden rounded-3xl surface-card p-7 transition-colors hover:bg-surface"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(50%_50%_at_50%_0%,oklch(1_0_0/0.04),transparent_70%)]" />
        <div className="relative flex flex-1 flex-col">
          <div className="mb-5 flex items-center justify-between">
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${tagColors[post.tag] ?? "bg-accent text-muted-foreground"}`}>
              {post.tag}
            </span>
            <span className="text-xs text-muted-foreground">{post.readTime}</span>
          </div>
          <h3 className="text-lg font-medium tracking-tight leading-snug flex-1">{post.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">{post.excerpt}</p>
          <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground">
            <span>{post.date}</span>
            <span className="flex items-center gap-1.5 transition-transform group-hover:translate-x-0.5">
              Read <span>→</span>
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
