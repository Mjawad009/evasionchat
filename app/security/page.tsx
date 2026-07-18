import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";
import { SecuritySection } from "@/components/landing/security-section";
import { FaqAccordion } from "@/components/landing/faq-accordion";
import { faqPageJsonLd } from "@/lib/seo";
import { CtaSection } from "@/components/landing/cta-section";

const securityFaqs = [
  {
    question: "Where is my data stored?",
    answer: "Your documents and conversations are stored in isolated, encrypted storage — never mixed with another business's data.",
  },
  {
    question: "Who can access our chatbot's data?",
    answer: "Only people on your team with the right permissions. You control who can view, edit, or manage your chatbot and its data.",
  },
  {
    question: "Is our data used to train other customers' chatbots?",
    answer: "No. Your content is used only to answer your own customers' questions — it is never shared with or used to train any other business's chatbot.",
  },
  {
    question: "What happens to our data if we cancel?",
    answer: "You can export your conversation history and configuration at any time, including after cancellation.",
  },
  {
    question: "Do you support single sign-on (SSO)?",
    answer: "SSO and advanced access controls are available on Enterprise plans — talk to us about your organization's requirements.",
  },
];

export const metadata: Metadata = {
  title: "Security",
  description: "How your data is protected: encryption, strict data isolation, and enterprise-grade privacy by default.",
};

export default function SecurityPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(securityFaqs)) }}
      />
      <Navigation />

      <PageHero
        eyebrow="Security"
        title={
          <>
            Smart AI.
            <br />
            <span className="text-muted-foreground">Locked-down data.</span>
          </>
        }
        subheading="A closer look at how your data is protected — worth bookmarking or sharing with your own security and compliance team."
      />

      <SecuritySection showHeader={false} />

      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground mb-6">
            Security FAQ
          </span>
          <FaqAccordion items={securityFaqs} />
        </div>
      </section>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
