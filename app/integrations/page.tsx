import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { AppIntegrationsGrid } from "@/components/landing/app-integrations-grid";
import { DevelopersSection } from "@/components/landing/developers-section";
import { CtaSection } from "@/components/landing/cta-section";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect your AI chatbot to your CRM, help desk, and the 1,000+ apps your business already runs on.",
};

export default function IntegrationsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Integrations"
        title={
          <>
            We optimize the way
            <br />
            <span className="text-muted-foreground">you already work / want.</span>
          </>
        }
        subheading="Train it on your website and documents, connect it to the tools you already run your business on, and it goes to work — no extra software to learn."
      />

      <IntegrationsSection showHeader={false} />

      {/* Named app integrations, powered by our automation layer */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground mb-6">
            The tools you already use
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05] mb-6 max-w-2xl">
            Connect it to your CRM, your inbox,
            <span className="text-muted-foreground"> your whole stack.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-2xl">
            Under the hood, we use a workflow automation engine that speaks to over a thousand apps —
            so a conversation with your chatbot can also update a CRM record, send a Slack alert, or
            create a support ticket, automatically.
          </p>

          <AppIntegrationsGrid />
        </div>
      </section>

      <DevelopersSection />

      {/* Request an integration */}
      <section className="relative py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-display mb-2">Don&apos;t see what you need?</h2>
            <p className="text-muted-foreground">Tell us what you&apos;re trying to connect and we&apos;ll see if it fits the roadmap.</p>
          </div>
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors shrink-0"
          >
            Request an integration
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
