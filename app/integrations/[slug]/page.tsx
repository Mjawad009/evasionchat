import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";
import { CtaSection } from "@/components/landing/cta-section";
import { integrationDetails, getIntegrationBySlug } from "@/lib/integrations-data";

export function generateStaticParams() {
  return integrationDetails.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const integration = getIntegrationBySlug(slug);
  if (!integration) return {};
  return {
    title: `${integration.name} — [Product Name]`,
    description: integration.description,
  };
}

export default async function IntegrationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const integration = getIntegrationBySlug(slug);
  if (!integration) notFound();

  const others = integrationDetails.filter((i) => i.slug !== integration.slug).slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow={`Integrations / ${integration.name}`}
        title={integration.value}
        subheading={integration.description}
      />

      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-sm font-mono text-muted-foreground mb-6">Explore other capabilities</h2>
          <div className="grid sm:grid-cols-3 gap-px bg-foreground/10">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/integrations/${item.slug}`}
                className="group bg-background p-8 transition-colors hover:bg-foreground/[0.03]"
              >
                <item.icon className="w-6 h-6 mb-6 text-[#eca8d6]" />
                <h3 className="font-medium mb-1">{item.name}</h3>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors inline-flex items-center gap-1">
                  See how <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/integrations" className="text-sm underline underline-offset-4 hover:text-foreground text-muted-foreground">
              See all integrations →
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
