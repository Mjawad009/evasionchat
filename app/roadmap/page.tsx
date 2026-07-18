import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";

// Starter roadmap — a public roadmap builds trust, but keep this genuinely
// up to date; a stale one does the opposite.
const columns = [
  {
    title: "Shipped",
    items: ["Website & document training", "Multi-tenant dashboard for agencies", "Conversation history & analytics"],
  },
  {
    title: "In progress",
    items: ["Live chatbot widget embed", "Deeper CRM integrations", "Custom chatbot personas"],
  },
  {
    title: "Planned",
    items: ["Multi-language support", "Voice input", "Team roles & permissions"],
  },
];

export const metadata: Metadata = {
  title: "Roadmap",
  description: "What's shipped, in progress, and planned next.",
};

export default function RoadmapPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Roadmap"
        title={
          <>
            What we&apos;re
            <br />
            <span className="text-muted-foreground">building next.</span>
          </>
        }
        subheading="A public look at what's shipped, in progress, and planned. Have a request? Let us know."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
            {columns.map((col) => (
              <div key={col.title} className="bg-background p-8 lg:p-10">
                <h2 className="text-sm font-mono text-muted-foreground mb-8">{col.title}</h2>
                <ul className="space-y-4">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed border-l-2 border-[#eca8d6]/40 pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-12">
            Want to request a feature?{" "}
            <a href="/contact" className="underline underline-offset-4 hover:text-foreground">
              Tell us here
            </a>
            .
          </p>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
