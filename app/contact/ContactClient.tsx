"use client";

import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "How quickly can we start?",
    a: "Most engagements kick off within 1-2 weeks of the discovery call.",
  },
  {
    q: "Do you take equity?",
    a: "Open to a hybrid of cash + equity for the right early-stage teams.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Often. I translate product vision into a buildable plan and own the engineering end-to-end.",
  },
  {
    q: "What size of project is a good fit?",
    a: "From a tight 2-week sprint to multi-month platform builds - as long as the scope is real.",
  },
];

export function ContactClient() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      <section className="relative mx-auto max-w-6xl px-4 pt-40 pb-16 md:pt-48">
        <div className="pointer-events-none absolute inset-x-4 top-20 -z-10 h-[400px] rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.5_0_0/0.18),transparent_70%)]" />
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/50" />
            Contact
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-display text-gradient text-[clamp(2.5rem,8vw,7rem)]">
            Let&apos;s build something
            <br />
            <em className="italic font-normal text-muted-foreground">
              remarkable.
            </em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell me about what you&apos;re building. I respond personally to
            every message, usually within a few hours. Briefs, RFPs and rough
            ideas all welcome.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <ContactForm source="Contact page form" />
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
              <div className="mt-2 rounded-3xl surface-card p-7">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Working hours
                </div>
                <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Mon - Fri · 9am to 7pm WAT
                  <br />
                  Async-friendly worldwide.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-32">
        <Reveal>
          <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/50" />
            FAQ
          </div>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-3xl hairline bg-hairline md:grid-cols-2">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={(i % 2) * 0.05}>
              <div className="h-full bg-background p-8">
                <div className="text-base font-medium">{f.q}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
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
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </div>
      <div className="mt-6 text-2xl font-medium tracking-tight">{value}</div>
      <div className="mt-2 text-sm text-muted-foreground">{hint}</div>
    </a>
  );
}
