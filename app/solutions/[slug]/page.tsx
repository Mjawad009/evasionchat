import { notFound } from "next/navigation";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";
import { CtaSection } from "@/components/landing/cta-section";
import { ChatWidgetMockup } from "@/components/landing/chat-widget-mockup";
import { FaqAccordion } from "@/components/landing/faq-accordion";
import { faqPageJsonLd } from "@/lib/seo";
import { solutions, getSolutionBySlug } from "@/lib/solutions-data";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return {
    title: `AI Chatbot for ${solution.industry} — [Product Name]`,
    description: solution.subheading,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(solution.faqs)) }}
      />
      <Navigation />

      <PageHero
        eyebrow={`Solutions / ${solution.industry}`}
        title={solution.headline}
        subheading={solution.subheading}
      />

      {/* Stat bar */}
      <section className="border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 grid sm:grid-cols-3 gap-8">
          {solution.stats.map((stat) => (
            <div key={stat.label}>
              <span className="text-3xl lg:text-4xl font-display block mb-1">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-12">
              {solution.painPoints.map((point) => (
                <div key={point.title} className="border-l-2 border-[#eca8d6]/40 pl-6">
                  <h2 className="text-xl font-medium mb-2">{point.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-10">
                <div className="flex justify-center lg:justify-start">
                  <ChatWidgetMockup />
                </div>
                <blockquote className="border-t border-foreground/10 pt-6">
                  <p className="text-lg leading-relaxed mb-4">&ldquo;{solution.quote.text}&rdquo;</p>
                  <footer className="text-sm text-muted-foreground">
                    {solution.quote.role}, {solution.quote.company}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-specific FAQ */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground mb-6">
            Common questions
          </span>
          <FaqAccordion items={solution.faqs} />
        </div>
      </section>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
