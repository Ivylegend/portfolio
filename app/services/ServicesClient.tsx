"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { motion } from "motion/react";

const services = [
  {
    n: "01",
    t: "Mobile App Development",
    tag: "iOS & Android",
    lead: "Production-grade iOS and Android apps engineered for performance, polish, and scale — built with React Native and Flutter.",
    includes: [
      "Cross-platform React Native or Flutter builds",
      "Custom UI design & design-system implementation",
      "Offline-first architecture with background sync",
      "Push notifications, deep linking, and biometric auth",
      "App Store & Google Play submission and review support",
      "Ongoing maintenance & feature iteration",
    ],
    idealFor: ["Startups", "SMBs", "Consumer apps", "B2B tools"],
    stack: [
      "React Native",
      "Flutter",
      "Expo",
      "TypeScript",
      "Supabase",
      "Firebase",
    ],
  },
  {
    n: "02",
    t: "Escrow-Powered Marketplaces",
    tag: "Trust Infrastructure",
    lead: "Trust-first marketplaces with built-in escrow, milestone-based payouts, dispute flows, and compliant payout rails.",
    includes: [
      "Escrow logic with milestone or delivery-based release",
      "Buyer & seller dashboards with transaction history",
      "Dispute resolution workflows",
      "Stripe Connect / Paystack / Flutterwave payout rails",
      "KYC & identity verification integration",
      "Commission and fee management engine",
    ],
    idealFor: [
      "Marketplace founders",
      "Gig platforms",
      "Creator economies",
      "B2B procurement",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "Stripe Connect",
      "Paystack",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    n: "03",
    t: "Logistics Mobile Apps",
    tag: "Real-Time Tracking",
    lead: "Driver, dispatcher and customer apps with real-time tracking, smart routing, and proof of delivery — built to handle volume.",
    includes: [
      "Real-time GPS tracking with map overlays",
      "Driver and dispatcher management dashboards",
      "Automated route optimization",
      "Proof of delivery (photo + signature capture)",
      "Push alerts for every shipment status change",
      "Analytics and fleet reporting",
    ],
    idealFor: [
      "Logistics companies",
      "3PLs",
      "Last-mile delivery",
      "Supply chain ops",
    ],
    stack: [
      "React Native",
      "Node.js",
      "Google Maps API",
      "Socket.io",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    n: "04",
    t: "Website Design & Development",
    tag: "Web Presence",
    lead: "Marketing sites and product surfaces that feel premium, load fast, and convert visitors into customers.",
    includes: [
      "Custom design with motion & micro-interactions",
      "Next.js / React builds with full CMS integration",
      "Core Web Vitals optimization (LCP, CLS, INP)",
      "Responsive, accessible markup (WCAG 2.1 AA)",
      "Contact forms, lead capture, and email integration",
      "Analytics setup (GA4, Plausible, PostHog)",
    ],
    idealFor: ["Startups", "Agencies", "SaaS products", "Personal brands"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sanity",
      "Framer Motion",
      "Vercel",
    ],
  },
  {
    n: "05",
    t: "AI Agents",
    tag: "Intelligent Automation",
    lead: "Production-grade agents, RAG pipelines, and copilots wired into your operations — not demos, real systems that ship.",
    includes: [
      "Custom LLM agent design with tool-use and memory",
      "RAG pipelines over your proprietary data",
      "Multi-agent orchestration (LangGraph, CrewAI)",
      "Integration into Slack, WhatsApp, email, and internal tools",
      "Evaluation, logging, and model-swap architecture",
      "Cost & latency optimisation",
    ],
    idealFor: [
      "Ops-heavy teams",
      "Customer support",
      "SaaS products",
      "Internal tooling",
    ],
    stack: [
      "OpenAI",
      "Anthropic",
      "LangChain",
      "LangGraph",
      "Pinecone",
      "PostgreSQL + pgvector",
    ],
  },
  {
    n: "06",
    t: "DUNS Number Acquisition",
    tag: "Business Registration",
    lead: "End-to-end DUNS registration support for Nigerian startups going global or onboarding enterprise clients and government contracts.",
    includes: [
      "Business eligibility assessment",
      "Document preparation and review",
      "Submission via Dun & Bradstreet official channels",
      "Status tracking until DUNS is issued",
      "Follow-up for corrections or queries",
      "Advice on using DUNS for grant & procurement applications",
    ],
    idealFor: [
      "Nigerian startups",
      "Exporters",
      "Grant applicants",
      "Enterprise onboarding",
    ],
    stack: ["Dun & Bradstreet", "CAC filing", "Documentation review"],
  },
  {
    n: "07",
    t: "WhatsApp Business Software",
    tag: "Commerce & CRM",
    lead: "WhatsApp commerce flows, automated customer journeys, and CRM built entirely on the official WhatsApp Cloud API.",
    includes: [
      "WhatsApp Cloud API integration & webhook setup",
      "Automated order, booking, and support flows",
      "Interactive buttons, list menus, and catalog integration",
      "Agent handoff with live chat fallback",
      "CRM sync (HubSpot, Notion, custom DB)",
      "Broadcast campaigns and opt-in management",
    ],
    idealFor: ["E-commerce", "Hospitality", "Healthcare", "Financial services"],
    stack: [
      "WhatsApp Cloud API",
      "Meta Business Platform",
      "Node.js",
      "Twilio",
      "PostgreSQL",
    ],
  },
  {
    n: "08",
    t: "SEO Services",
    tag: "Search Growth",
    lead: "Technical SEO, content architecture, and Core Web Vitals tuning that compounds — not vanity metrics, actual traffic growth.",
    includes: [
      "Full technical SEO audit (crawl, indexation, schema)",
      "Core Web Vitals remediation (LCP, CLS, INP)",
      "Content strategy and keyword architecture",
      "On-page optimisation and internal linking",
      "Schema markup (Article, FAQ, Product, LocalBusiness)",
      "Monthly reporting and iteration",
    ],
    idealFor: ["Content sites", "SaaS", "E-commerce", "Local businesses"],
    stack: [
      "Google Search Console",
      "Ahrefs",
      "Screaming Frog",
      "Next.js",
      "structured data",
    ],
  },
];

export function ServicesClient() {
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
              Services
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-display text-gradient text-[clamp(2.75rem,6.5vw,6rem)]">
              Engineering the surfaces
              <br />
              <em className="italic font-normal text-muted-foreground">
                your business runs on.
              </em>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              From a single product surface to a full platform — built with the
              rigour of a platform team and the speed of a founding engineer.
              Here&apos;s exactly what each engagement covers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:pb-32">
        <div className="flex flex-col gap-6">
          {services.map((s) => (
            <Reveal key={s.n} delay={0.04}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-6xl px-4 pb-28 md:pb-40">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl surface-card p-12 md:p-16 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_-10%,oklch(1_0_0/0.05),transparent_70%)]" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-px w-8 bg-muted-foreground/50" />
                Ready to build?
                <span className="h-px w-8 bg-muted-foreground/50" />
              </div>
              <h2 className="text-display text-gradient text-[clamp(2rem,5vw,4.5rem)]">
                Let&apos;s talk about
                <br />
                <em className="italic font-normal text-muted-foreground">
                  your project.
                </em>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                Every engagement starts with a 30-minute discovery call — no
                pitch decks, just an honest conversation about what you&apos;re
                building.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                >
                  Start a project
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-background/10 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
                <a
                  href="https://wa.me/2349122971136"
                  className="inline-flex items-center gap-3 rounded-full hairline px-7 py-3.5 text-sm font-medium transition-colors hover:bg-accent"
                >
                  WhatsApp me →
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

function ServiceCard({
  service: s,
}: {
  service: (typeof services)[0];
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl surface-card"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(40%_40%_at_50%_0%,oklch(1_0_0/0.04),transparent_70%)]" />

      <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-12">
        {/* Left: number + title */}
        <div className="flex items-start gap-6 lg:block lg:w-64 lg:shrink-0">
          <div className="flex items-center justify-between w-full lg:mb-6">
            <span className="font-mono text-xs text-muted-foreground">
              {s.n}
            </span>
            <span className="rounded-full bg-accent px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
              {s.tag}
            </span>
          </div>
          <div className="lg:hidden flex-1">
            <h2 className="text-xl font-medium tracking-tight">{s.t}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.lead}
            </p>
          </div>
        </div>

        {/* Mid: main content */}
        <div>
          {/* Desktop title */}
          <div className="hidden lg:block mb-4">
            <span className="rounded-full bg-accent px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {s.tag}
            </span>
            <h2 className="mt-4 text-2xl font-medium tracking-tight">{s.t}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {s.lead}
            </p>
          </div>

          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {/* What's included */}
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                What&apos;s included
              </div>
              <ul className="flex flex-col gap-2.5">
                {s.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column: Ideal for + Stack */}
            <div className="flex flex-col gap-8">
              <div>
                <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Ideal for
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.idealFor.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full hairline px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Stack & tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-accent px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: CTA arrow */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="group/btn grid h-12 w-12 shrink-0 place-items-center rounded-full hairline transition-all hover:bg-foreground hover:text-background hover:scale-110"
            aria-label={`Start a ${s.t} project`}
          >
            <span className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="border-t border-hairline px-8 py-5 lg:hidden">
        <Link
          href="/contact"
          className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>Start a {s.t} project</span>
          <span>→</span>
        </Link>
      </div>
    </motion.div>
  );
}
