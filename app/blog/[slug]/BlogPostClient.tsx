"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import type { BlogPost } from "@/lib/blog-data";
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

function parseMarkdown(md: string): React.ReactNode[] {
  const lines = md.trim().split("\n");
  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      nodes.push(
        <h2 key={i} className="mt-12 mb-4 text-display text-gradient text-[clamp(1.5rem,3vw,2.25rem)]">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      nodes.push(
        <p key={i} className="mt-6 font-medium text-foreground text-base">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      nodes.push(
        <ul key={`ul-${i}`} className="mt-4 flex flex-col gap-2.5">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30" />
              <span dangerouslySetInnerHTML={{ __html: renderInline(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      nodes.push(
        <p key={i} className="mt-5 text-base leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: renderInline(line) }}
        />
      );
    }
    i++;
  }

  return nodes;
}

function renderInline(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong class='font-medium text-foreground'>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-foreground underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground/60 transition-all">$1</a>');
}

export function BlogPostClient({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogPost[];
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative isolate pt-40 pb-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,oklch(0.3_0.01_270/0.5),transparent_70%)]" />
        </div>
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <Link
                href="/blog"
                className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <span>←</span> Blog
              </Link>
              <span className="h-px flex-1 bg-hairline" />
            </div>
          </Reveal>
          <Reveal delay={0.04}>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${tagColors[post.tag] ?? "bg-accent text-muted-foreground"}`}>
                {post.tag}
              </span>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-display text-gradient text-[clamp(2rem,5vw,3.75rem)]">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {post.excerpt}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex items-center gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-surface-elevated font-mono text-xs text-muted-foreground">
                IV
              </span>
              <div className="text-sm">
                <div className="text-foreground">Icha Victory</div>
                <div className="text-muted-foreground">Full Stack Developer</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <div className="h-px bg-hairline" />
        </Reveal>
      </div>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-4 py-16">
        <Reveal>
          <div className="prose-custom">
            {parseMarkdown(post.content)}
          </div>
        </Reveal>
      </article>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-4 pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl surface-card p-10 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_-10%,oklch(1_0_0/0.05),transparent_70%)]" />
            <div className="relative">
              <div className="text-display text-gradient text-[clamp(1.5rem,4vw,2.5rem)]">
                Ready to build?
              </div>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Every engagement starts with a conversation. Let&apos;s talk about what you&apos;re building.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                >
                  Start a project <span className="grid h-5 w-5 place-items-center rounded-full bg-background/10 transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full hairline px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
                >
                  View services →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-32">
          <Reveal>
            <div className="mb-10 flex items-center gap-4">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">More from the blog</div>
              <span className="h-px flex-1 bg-hairline" />
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <Link href={`/blog/${p.slug}`} className="group block h-full">
                  <motion.article
                    className="relative flex h-full flex-col overflow-hidden rounded-3xl surface-card p-7 transition-colors hover:bg-surface"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${tagColors[p.tag] ?? "bg-accent text-muted-foreground"}`}>
                        {p.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">{p.readTime}</span>
                    </div>
                    <h3 className="flex-1 text-base font-medium tracking-tight leading-snug">{p.title}</h3>
                    <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{p.date}</span>
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
