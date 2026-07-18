import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";
import { ChatWidgetMockup } from "@/components/landing/chat-widget-mockup";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/case-studies-data";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real businesses using an AI chatbot trained on their own content to answer customers, capture leads, and save their team hours.",
};

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Case studies"
        title={
          <>
            Real businesses.
            <br />
            <span className="text-muted-foreground">Real results.</span>
          </>
        }
        subheading="A look at how different businesses put their AI chatbot to work — and what changed once they did."
      />

      {/* Case study cards */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-px bg-foreground/10">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group bg-background p-8 lg:p-10 flex flex-col transition-colors hover:bg-foreground/[0.03]"
              >
                <span className="text-xs font-mono text-muted-foreground mb-6">{study.industry}</span>
                <div className="mb-8">
                  <span className="text-4xl font-display block mb-1">{study.result}</span>
                  <span className="text-sm text-muted-foreground">{study.resultLabel}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">{study.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{study.company}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Live demo panel */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-[#eca8d6]" />
                See it for yourself
              </span>
              <h2 className="text-4xl md:text-5xl font-display tracking-tight leading-[1.05] mb-6">
                Don&apos;t just read about it.
                <br />
                <span className="text-muted-foreground">Talk to it.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
                The fastest way to know if this fits your business is to see it answer real questions —
                trained on real content. Book a short call and we&apos;ll show you a chatbot trained on
                your own website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group">
                  <Link href="/contact">
                    Book a live demo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-2 mt-8 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#eca8d6]" />
                  No pressure
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#eca8d6]" />
                  15 minutes
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#eca8d6]" />
                  See it on your own content
                </span>
              </div>
            </div>

            {/* TODO: once the real chatbot exists, replace <ChatWidgetMockup />
                below with a live, embedded demo visitors can actually use. */}
            <div className="lg:col-span-6 flex justify-center">
              <ChatWidgetMockup />
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
