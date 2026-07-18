import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";

// Starter changelog entries — replace with your real release notes as you ship.
const entries = [
  {
    date: "July 2026",
    title: "Blog and content hub",
    items: [
      "Added a public blog with category filtering",
      "New per-industry solutions pages",
      "New individual case study pages",
    ],
  },
  {
    date: "June 2026",
    title: "Platform launch",
    items: [
      "Train a chatbot on your website, PDFs, and FAQs",
      "Multi-tenant dashboard for agencies managing multiple clients",
      "Conversation history and basic analytics",
    ],
  },
];

export const metadata: Metadata = {
  title: "Changelog",
  description: "A running record of what's shipped on the platform.",
};

export default function ChangelogPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Changelog"
        title={
          <>
            What&apos;s new,
            <br />
            <span className="text-muted-foreground">as it ships.</span>
          </>
        }
        subheading="A running record of what's changed on the platform."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[880px] mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {entries.map((entry) => (
              <div key={entry.date} className="grid sm:grid-cols-[140px_1fr] gap-6">
                <span className="text-sm font-mono text-muted-foreground">{entry.date}</span>
                <div>
                  <h2 className="text-xl font-medium mb-4">{entry.title}</h2>
                  <ul className="space-y-2">
                    {entry.items.map((item) => (
                      <li key={item} className="text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-[#eca8d6] shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
