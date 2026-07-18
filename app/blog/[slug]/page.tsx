import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { CtaSection } from "@/components/landing/cta-section";
import { getAllPosts, getPostBySlug } from "@/lib/blog-store";

// New posts can be added via /admin/blog at any time, so post pages are
// rendered dynamically per request rather than statically generated —
// this way a freshly-published post is live immediately, no rebuild needed.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — [Product Name] Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    articleSection: post.category,
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navigation />

      <article className="relative pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-[840px] mx-auto px-6 lg:px-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to blog
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-6">
            <span>{post.category}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display tracking-tight leading-[1.05] mb-12">
            {post.title}
          </h1>

          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {related.length > 0 && (
            <div className="mt-20 pt-12 border-t border-foreground/10">
              <h2 className="text-sm font-mono text-muted-foreground mb-6">More on {post.category}</h2>
              <div className="space-y-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex items-center justify-between gap-4"
                  >
                    <span className="font-medium group-hover:text-muted-foreground transition-colors">
                      {r.title}
                    </span>
                    <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
