import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";
import { FeaturesSection } from "@/components/landing/features-section";
import { SecuritySection } from "@/components/landing/security-section";
import { CtaSection } from "@/components/landing/cta-section";
import { Shield, MessageSquare, Users, BarChart3, Search, Zap, Check, Minus } from "lucide-react";
import { solutions } from "@/lib/solutions-data";

const comparisonRows = [
  { feature: "AI chatbots", free: "1", business: "Up to 25", enterprise: "Unlimited" },
  { feature: "Conversations / month", free: "[Message Limit]", business: "[Message Limit]", enterprise: "Unlimited" },
  { feature: "Conversation history & analytics", free: "Basic", business: "Full", enterprise: "Full" },
  { feature: "Custom chatbot personality", free: false, business: true, enterprise: true },
  { feature: "Team workspaces", free: false, business: true, enterprise: true },
  { feature: "On-premise deployment", free: false, business: false, enterprise: true },
  { feature: "Dedicated support", free: "Community", business: "Priority", enterprise: "24/7 dedicated" },
];

const detailedCapabilities = [
  {
    icon: MessageSquare,
    title: "Answers in your own voice",
    description: "Set the tone, personality, and language your chatbot uses — friendly, formal, or anything in between.",
  },
  {
    icon: Users,
    title: "Hands off to a human, smoothly",
    description: "When a question needs a person, the conversation is flagged and handed off with full context — nothing gets lost.",
  },
  {
    icon: BarChart3,
    title: "Shows you what customers actually ask",
    description: "Every conversation is logged, searchable, and summarized — a live view into what your customers care about.",
  },
  {
    icon: Search,
    title: "Finds answers buried in long documents",
    description: "Upload a 50-page policy document or a spreadsheet of SKUs — it finds the exact answer, not just the closest page.",
  },
  {
    icon: Zap,
    title: "Updates the moment your content changes",
    description: "Edit your website or re-upload a document, and your chatbot's knowledge updates automatically.",
  },
  {
    icon: Shield,
    title: "Never guesses when it isn't sure",
    description: "If the answer isn't in your content, it says so — and can capture the question for your team to follow up on.",
  },
];

export const metadata: Metadata = {
  title: "AI Chatbot Features",
  description: "Everything a business-trained AI chatbot needs: accurate answers, 24/7 availability, multi-tenant support for agencies, and enterprise-grade privacy.",
};

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="What it does"
        title={
          <>
            Everything your business
            <br />
            <span className="text-muted-foreground">needs to answer and grow.</span>
          </>
        }
        subheading="One AI chatbot, trained on your content, that handles support, answers questions, and captures leads — without adding headcount."
      />

      <FeaturesSection showHeader={false} />

      {/* Detailed capability grid */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground mb-6">
            Under the hood
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05] mb-16 max-w-2xl">
            The details that make it feel
            <span className="text-muted-foreground"> like your team wrote it.</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
            {detailedCapabilities.map((item) => (
              <div key={item.title} className="bg-background p-8 lg:p-10">
                <item.icon className="w-6 h-6 mb-6 text-[#eca8d6]" />
                <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground mb-6">
            Who it&apos;s for
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05] mb-16 max-w-2xl">
            Built for the businesses
            <span className="text-muted-foreground"> that answer questions all day.</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group bg-background p-8 lg:p-10 transition-colors hover:bg-foreground/[0.03]"
              >
                <solution.icon className="w-6 h-6 mb-6 text-[#eca8d6]" />
                <h3 className="text-lg font-medium mb-1">{solution.industry}</h3>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  See how →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Plan comparison table */}
      <section className="relative py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground mb-6">
            Compare plans
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05] mb-16 max-w-2xl">
            Every plan includes the basics.
            <span className="text-muted-foreground"> Here&apos;s what changes.</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-foreground/10">
                  <th className="text-left font-normal text-muted-foreground py-4 pr-6">Feature</th>
                  <th className="text-left font-medium py-4 px-6">Free</th>
                  <th className="text-left font-medium py-4 px-6">Business</th>
                  <th className="text-left font-medium py-4 px-6">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-foreground/5">
                    <td className="py-4 pr-6 text-muted-foreground">{row.feature}</td>
                    {[row.free, row.business, row.enterprise].map((value, i) => (
                      <td key={i} className="py-4 px-6">
                        {typeof value === "boolean" ? (
                          value ? (
                            <Check className="w-4 h-4 text-[#eca8d6]" />
                          ) : (
                            <Minus className="w-4 h-4 text-muted-foreground/30" />
                          )
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <Link href="/pricing" className="text-sm underline underline-offset-4 hover:text-foreground text-muted-foreground">
              See full pricing details →
            </Link>
          </div>
        </div>
      </section>

      <SecuritySection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
