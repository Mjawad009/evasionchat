import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";
import { CtaSection } from "@/components/landing/cta-section";
import { solutions } from "@/lib/solutions-data";

export const metadata: Metadata = {
  title: "Solutions by Industry",
  description: "See how e-commerce, healthcare, education, agencies, SaaS companies, and professional services use an AI chatbot trained on their own content.",
};

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Built for your
            <br />
            <span className="text-muted-foreground">kind of business.</span>
          </>
        }
        subheading="Every industry asks different questions. See how businesses like yours put their AI chatbot to work."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group relative bg-background p-8 lg:p-10 transition-colors hover:bg-foreground/[0.03]"
              >
                <solution.icon className="w-7 h-7 mb-8 text-[#eca8d6]" />
                <h2 className="text-xl font-medium mb-3">{solution.industry}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {solution.headline}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  See how
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
