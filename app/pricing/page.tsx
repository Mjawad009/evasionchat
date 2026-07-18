import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";
import { PricingSection } from "@/components/landing/pricing-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FaqAccordion } from "@/components/landing/faq-accordion";
import { faqPageJsonLd } from "@/lib/seo";

const pricingFaqs = [
  {
    question: "Can I switch plans later?",
    answer: "Yes — upgrade, downgrade, or cancel at any time. Changes take effect on your next billing cycle, and you keep your chatbot's training and conversation history either way.",
  },
  {
    question: "What happens if I go over my conversation limit?",
    answer: "We'll let you know as you approach your plan's limit so you can upgrade if needed — your chatbot won't suddenly stop answering customers mid-month.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No. Every plan, including Free, includes setup at no extra cost.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "You can export your conversation history and chatbot configuration at any time, including after cancellation.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes — annual billing is discounted compared to paying monthly. You'll see the annual price when you toggle billing frequency above.",
  },
];

export const metadata: Metadata = {
  title: "Pricing",
  description: "Start free. Every plan includes a trained AI chatbot, conversation history, and standard integrations — no setup fees, cancel anytime.",
};

export default function PricingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(pricingFaqs)) }}
      />
      <Navigation />

      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Start free.
            <br />
            <span className="text-muted-foreground">Scale when you&apos;re ready.</span>
          </>
        }
        subheading="Every plan includes a trained AI chatbot, conversation history, and standard integrations. No setup fees, cancel anytime."
      />

      <PricingSection showHeader={false} />

      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground mb-6">
            Common questions
          </span>
          <FaqAccordion items={pricingFaqs} />
        </div>
      </section>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
