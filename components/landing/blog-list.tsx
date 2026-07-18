"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-store";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [posts]);

  const [active, setActive] = useState("All");

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      {/* Category filter chips */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-mono transition-colors border ${
              active === cat
                ? "bg-foreground text-background border-foreground"
                : "border-foreground/15 text-muted-foreground hover:border-foreground/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground py-12 text-center">No posts in this category yet.</p>
      ) : (
        <div className="divide-y divide-foreground/10">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-10"
            >
              <div>
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-3">
                  <span>{post.category}</span>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-display mb-2 group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground max-w-xl">{post.excerpt}</p>
              </div>
              <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
