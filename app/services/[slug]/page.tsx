import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { dunsSlug } from "@/lib/service-paths";
import { serviceDetails } from "@/lib/service-details";
import { services } from "@/lib/services-data";
import { shareMetadata } from "@/lib/share-metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  const { title } = serviceDetails[slug];
  return shareMetadata(`/services/${slug}`, title, service.lead);
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const detail = serviceDetails[slug];
  const isDuns = slug === dunsSlug;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: detail.title,
    description: service.lead,
    url: `https://icha.ng/services/${slug}`,
    provider: { "@type": "Person", name: "Icha Victory", url: "https://icha.ng" },
    ...(isDuns ? { areaServed: { "@type": "Country", name: "Nigeria" } } : {}),
  };

  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-32 md:pt-40">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
        <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" aria-hidden /> All services
        </Link>
        <header className="border-b border-hairline pb-12 pt-10">
          <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">{service.tag}</p>
          <h1 className="text-display text-gradient max-w-4xl text-5xl md:text-7xl">{detail.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{service.lead}</p>
          <Link href={isDuns ? "#registration-request" : "/contact"} className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">
            {isDuns ? "Request DUNS support" : "Discuss your project"} <ArrowRight className="size-4" aria-hidden />
          </Link>
        </header>
        <div className="grid gap-12 py-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-9">
            <section>
              <h2 className="text-display text-3xl">Overview</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{detail.overview}</p>
            </section>
            <section>
              <h2 className="text-display text-3xl">How we work</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{detail.approach}</p>
            </section>
            {isDuns && (
              <>
                <section>
                  <h2 className="text-display text-3xl">Can I apply directly?</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Yes. <a className="underline underline-offset-4" href="https://www.dnb.com/en-us/smb/duns/get-a-duns.html">Dun &amp; Bradstreet offers a free direct application</a>. This form requests help with the process; it does not submit an official application or guarantee issuance.
                  </p>
                </section>
                <section>
                  <h2 className="text-display text-3xl">What if I incorporated through Stripe Atlas?</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    If another platform asks for a DUNS number, check which legal entity it wants to verify. Your Nigerian business and a company incorporated through Stripe Atlas are separate entities if registered separately. Start by checking for an existing record for the correct company.
                  </p>
                </section>
              </>
            )}
            <Link href={detail.related[0]} className="inline-flex items-center gap-2 text-sm underline underline-offset-4">
              {detail.related[1]} <ArrowRight className="size-4 shrink-0" aria-hidden />
            </Link>
          </div>
          <section className="border-t border-hairline pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h2 className="text-display text-3xl">What&apos;s included</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              {service.includes.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <h2 className="mt-8 text-display text-3xl">Who it&apos;s for</h2>
            <p className="mt-3 text-muted-foreground">{service.idealFor.join(" · ")}</p>
          </section>
        </div>
        {isDuns && (
          <section id="registration-request" className="max-w-2xl scroll-mt-28">
            <h2 className="mb-6 text-display text-4xl">Request registration support</h2>
            <ContactForm variant="compact" source="DUNS registration page" duns />
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
