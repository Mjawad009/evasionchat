import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";
import { BlogList } from "@/components/landing/blog-list";
import { NewsletterSignup } from "@/components/landing/newsletter-signup";
import { getAllPosts } from "@/lib/blog-store";

// Posts can be added via /admin/blog at any time, so this page reads
// from disk on every request rather than being statically generated.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical thinking on AI chatbots, customer support, and where automation actually helps a business.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Blog"
        title={
          <>
            Notes on AI, support,
            <br />
            <span className="text-muted-foreground">and running a business.</span>
          </>
        }
        subheading="Practical thinking on AI chatbots, customer support, and where automation actually helps."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <BlogList posts={posts} />
          <div className="mt-16">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
