"use client";

import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Counter } from "@/components/Counter";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { projects as portfolioProjects } from "@/lib/projects-data";

const heroBg = "/assets/hero-bg.jpg";
const portrait = "/assets/me.JPG";

const services = [
  {
    n: "01",
    t: "Mobile App Development",
    href: "/services#mobile-app-development",
    d: "iOS and Android apps engineered for performance, polish, and scale - React Native and Flutter.",
  },
  {
    n: "02",
    t: "Escrow-Powered Marketplaces",
    href: "/services#escrow-powered-marketplaces",
    d: "Trust-first marketplaces with built-in escrow, dispute flows, and payout rails.",
  },
  {
    n: "03",
    t: "Logistics Mobile Apps",
    href: "/services#logistics-mobile-apps",
    d: "Driver, dispatcher and customer apps with real-time tracking, routing and proof of delivery.",
  },
  {
    n: "04",
    t: "Website Design & Development",
    href: "/services#website-design-development",
    d: "Marketing sites and product surfaces that feel premium and convert.",
  },
  {
    n: "05",
    t: "AI Agents",
    href: "/services#ai-agents",
    d: "Production-grade agents, RAG pipelines and copilots wired into your operations.",
  },
  {
    n: "06",
    t: "DUNS Number Acquisition",
    href: "/services#duns-number-acquisition",
    d: "End-to-end DUNS registration support for startups going global or onboarding enterprise.",
  },
  {
    n: "07",
    t: "WhatsApp Business Software",
    href: "/services#whatsapp-business-software",
    d: "WhatsApp commerce, automation and CRM built on the official Cloud API.",
  },
  {
    n: "08",
    t: "SEO Services",
    href: "/services#seo-services",
    d: "Technical SEO, content architecture and Core Web Vitals tuning that compounds.",
  },
];

const selectedProjects = portfolioProjects.slice(0, 6).map((project, index) => ({
  ...project,
  span: index % 4 === 0 || index % 4 === 3 ? "lg:col-span-7" : "lg:col-span-5",
}));

const process = [
  {
    n: "01",
    t: "Discovery",
    d: "We pressure-test the idea, scope the wedge and define what success looks like.",
  },
  {
    n: "02",
    t: "Planning",
    d: "Architecture, milestones, risks. Tight specs that survive contact with reality.",
  },
  {
    n: "03",
    t: "Design & Development",
    d: "Cross-functional sprints. Design and engineering shipping in lockstep.",
  },
  {
    n: "04",
    t: "Testing",
    d: "Manual + automated. Performance, accessibility and edge cases hardened.",
  },
  {
    n: "05",
    t: "Launch & Growth",
    d: "Calm launches, analytics in place, and the second-week iteration loop.",
  },
];

const testimonials = [
  {
    quote:
      "Icha shipped what an entire team couldn't in a quarter. The product feels considered down to the smallest interaction.",
    name: "Adaeze Okafor",
    role: "Co-founder, Pacely",
  },
  {
    quote:
      "We hired Icha to rebuild our logistics stack. Six weeks later we were tracking 40k shipments a month with zero downtime.",
    name: "Tunde Salami",
    role: "CTO, RouteOne",
  },
  {
    quote:
      "Rare combination - taste, speed, and a real engineering brain. He thinks about the business, not just the code.",
    name: "Hannah Kim",
    role: "CEO, Forma",
  },
  {
    quote:
      "The AI agents he built now handle the majority of our tier-one support. Our team can finally focus on hard problems.",
    name: "Marcus Bell",
    role: "Head of Ops, Northwind",
  },
];

export function HomeClient() {
  return (
    <div
      id="top"
      className="relative min-h-screen overflow-x-hidden bg-background text-foreground"
    >
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Work />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 40);
      my.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-svh items-center pt-32 pb-24"
    >
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/20 to-background" />
      </motion.div>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full"
        aria-hidden
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,oklch(1_0_0/0.08),transparent_60%)] blur-3xl" />
      </motion.div>
      <div className="mx-auto w-full max-w-6xl px-4">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/60 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
            </span>
            Available for select Q3 engagements
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-display text-gradient text-[clamp(2.75rem,7.5vw,7.5rem)]">
            I build software
            <br />
            products that help
            <br />
            businesses{" "}
            <em className="italic font-normal text-muted-foreground">
              launch,
            </em>
            <br />
            scale, and grow.
          </h1>
        </Reveal>
        <Reveal delay={0.5} className="mt-10 max-w-2xl">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&apos;m <span className="text-foreground">Icha Victory</span>, a
            full stack software developer with over 4 years of experience
            building web applications, mobile apps, fintech products, logistics
            systems, AI tools, and startup software.
          </p>
        </Reveal>
        <Reveal
          delay={0.65}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            Work with me{" "}
            <span className="grid h-6 w-6 place-items-center rounded-full bg-background/10 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-3 rounded-full hairline px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            View projects
          </a>
        </Reveal>
      </div>
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Scroll
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    "React",
    "TypeScript",
    "Next.js",
    "React Native",
    "Node",
    "Postgres",
    "Supabase",
    "AWS",
    "Stripe",
    "WhatsApp Cloud API",
    "OpenAI",
    "TanStack",
  ];
  return (
    <div className="overflow-hidden border-y border-hairline py-6">
      <motion.div
        className="flex gap-12 whitespace-nowrap text-sm text-muted-foreground"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {[...words, ...words, ...words].map((w, i) => (
          <span key={`${w}-${i}`} className="flex items-center gap-12">
            {w}
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Stats() {
  const items = [
    { v: 4, s: "+", l: "Years of experience" },
    { v: 16, s: "+", l: "Startups served" },
    { v: 4.8, s: "", l: "Average rating", d: 1, icon: "star" },
    { v: 22, s: "+", l: "Projects completed" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <div className="grid gap-px overflow-hidden rounded-3xl hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.l} delay={i * 0.08}>
            <div className="bg-background p-8 md:p-10">
              <div className="flex items-center gap-2 text-display text-5xl text-gradient md:text-6xl">
                <Counter to={it.v} suffix={it.s} decimals={it.d ?? 0} />
                {it.icon === "star" && <Star className="h-8 w-8 fill-current md:h-10 md:w-10" aria-hidden />}
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{it.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: React.ReactNode;
  lead?: string;
}) {
  return (
    <div className="mb-16 max-w-3xl">
      <Reveal>
        <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-8 bg-muted-foreground/50" />
          {kicker}
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-display text-gradient text-[clamp(2rem,4.5vw,4rem)]">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <SectionHeading
        kicker="Services"
        title={
          <>
            Engineering the surfaces
            <br />
            your business runs on.
          </>
        }
        lead="From a single product surface to a full stack - built with the rigor of a platform team and the speed of a founding engineer."
      />
      <div className="grid gap-px overflow-hidden rounded-3xl hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.n} delay={(i % 4) * 0.06}>
            <a
              href={s.href}
              className="group relative block h-full bg-background p-7 transition-colors hover:bg-surface"
            >
              <div className="mb-10 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-mono">{s.n}</span>
                <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
              </div>
              <h3 className="text-lg font-medium tracking-tight">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.d}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <SectionHeading
        kicker="Selected work"
        title={
          <>
            Products in production.
            <br />
            Calm, considered, useful.
          </>
        }
        lead="A look at recent engagements across logistics, healthtech, marketplaces, AI, SaaS and fintech."
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {selectedProjects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08} className={p.span}>
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  categories,
  title,
  summary,
  image,
  slug,
}: {
  categories: string[];
  title: string;
  summary: string;
  image: string;
  slug: string;
}) {
  return (
    <a href={`/projects/${slug}`} className="group relative block h-full overflow-hidden rounded-3xl surface-card">
      <div className="aspect-16/10 overflow-hidden">
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
      <div className="flex items-start justify-between gap-4 p-7">
        <div className="min-w-0">
          <div className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {categories[0]}
          </div>
          <h3 className="truncate text-lg font-medium tracking-tight">
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {summary}
          </p>
        </div>
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full hairline transition-transform group-hover:rotate-[-30deg]">
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </div>
      </div>
    </a>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl surface-card">
              <Image
                src={portrait}
                alt="Icha Victory"
                width={896}
                height={1152}
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <SectionHeading
            kicker="About"
            title={
              <>
                A Nigerian full stack developer turning ideas into scalable
                software products.
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I partner with founders, product teams and operators to design and
              engineer software that earns trust. Four years in, my work spans
              fintech rails, logistics platforms, AI tooling and the marketing
              surfaces that bring it all to market.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I care about the unglamorous parts - onboarding, error states,
              performance budgets, accessibility - because that&apos;s where
              products are actually made.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl hairline bg-hairline">
              {[
                ["Based in", "Lagos, Nigeria"],
                ["Working", "Worldwide, async"],
                ["Stack", "TS - React - Node - RN - Python - FastAPI"],
                ["Style", "Tight scope, fast loops"],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {k}
                  </div>
                  <div className="mt-2 text-sm">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <SectionHeading
        kicker="Process"
        title={
          <>
            A calm, predictable
            <br />
            path to launch.
          </>
        }
        lead="The same five-step rhythm whether we're shipping a landing page or a full platform."
      />
      <div className="relative">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-hairline lg:block" />
        <div className="grid gap-6 lg:grid-cols-5">
          {process.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-full glass font-mono text-sm">
                  {s.n}
                </div>
                <h3 className="mt-6 text-base font-medium">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <SectionHeading
        kicker="Testimonials"
        title={
          <>
            Trusted by founders
            <br />
            who ship.
          </>
        }
      />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={(i % 2) * 0.08}>
            <figure className="h-full rounded-3xl surface-card p-8 md:p-10">
              <div className="text-2xl leading-none text-muted-foreground">
                &quot;
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 text-sm">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-surface-elevated font-mono text-xs text-muted-foreground">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="block">{t.name}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-4 py-24 md:py-40"
    >
      <div className="pointer-events-none absolute inset-x-4 top-0 -z-10 h-[400px] rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_0%,oklch(1_0_0/0.06),transparent_70%)]" />
      <Reveal>
        <div className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-8 bg-muted-foreground/50" />
          Contact
          <span className="h-px w-8 bg-muted-foreground/50" />
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-display text-gradient text-center text-[clamp(2.5rem,7vw,6.5rem)]">
          Let&apos;s build something
          <br />
          <em className="italic font-normal text-muted-foreground">
            remarkable.
          </em>
        </h2>
      </Reveal>
      <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <ContactForm variant="compact" source="Homepage contact form" />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="flex h-full flex-col gap-3">
            <CtaCard
              label="WhatsApp"
              value="Chat with me"
              href="https://wa.me/2349122971136"
              hint="Fastest reply, usually within hours."
            />
            <CtaCard
              label="Email"
              value="victoryicha2@gmail.com"
              href="mailto:victoryicha2@gmail.com"
              hint="For briefs, RFPs and decks."
            />
            <CtaCard
              label="Book a call"
              value="30-min intro"
              href="#"
              hint="Pick a time that works for you."
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CtaCard({
  label,
  value,
  hint,
  href,
}: {
  label: string;
  value: string;
  hint: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex-1 rounded-3xl surface-card p-7 transition-colors hover:bg-surface"
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
        <span className="transition-transform group-hover:translate-x-0.5">
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      </div>
      <div className="mt-6 text-2xl font-medium tracking-tight">{value}</div>
      <div className="mt-2 text-sm text-muted-foreground">{hint}</div>
    </a>
  );
}
