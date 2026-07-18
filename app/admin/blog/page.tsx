"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Trash2, Plus } from "lucide-react";
import type { BlogPost } from "@/lib/blog-store";

const SESSION_KEY = "admin_password";

export default function AdminBlogPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [checkingSession, setCheckingSession] = useState(true);

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // On mount, try a previously-entered password from this browser session.
  useEffect(() => {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      tryAuth(saved);
    } else {
      setCheckingSession(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function tryAuth(pw: string) {
    setAuthError("");
    const res = await fetch("/api/admin/blog", {
      headers: { "x-admin-password": pw },
    });
    if (res.ok) {
      const data = await res.json();
      setPosts(data.posts || []);
      setAuthed(true);
      sessionStorage.setItem(SESSION_KEY, pw);
    } else {
      sessionStorage.removeItem(SESSION_KEY);
      setAuthError("Incorrect password.");
    }
    setCheckingSession(false);
  }

  async function refreshPosts() {
    const pw = sessionStorage.getItem(SESSION_KEY) || password;
    setLoading(true);
    const res = await fetch("/api/admin/blog", {
      headers: { "x-admin-password": pw },
    });
    if (res.ok) {
      const data = await res.json();
      setPosts(data.posts || []);
    }
    setLoading(false);
  }

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");

    if (!title.trim() || !excerpt.trim() || !category.trim() || !content.trim()) {
      setFormError("All fields are required.");
      return;
    }

    setSubmitting(true);
    const pw = sessionStorage.getItem(SESSION_KEY) || password;
    const res = await fetch("/api/admin/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": pw,
      },
      body: JSON.stringify({ title, excerpt, category, content }),
    });

    if (res.ok) {
      setTitle("");
      setCategory("");
      setExcerpt("");
      setContent("");
      await refreshPosts();
    } else {
      const data = await res.json().catch(() => ({}));
      setFormError(data.error || "Something went wrong.");
    }
    setSubmitting(false);
  }

  async function handleDelete(slug: string) {
    if (!confirm("Delete this post? This can't be undone.")) return;
    const pw = sessionStorage.getItem(SESSION_KEY) || password;
    const res = await fetch(`/api/admin/blog/${slug}`, {
      method: "DELETE",
      headers: { "x-admin-password": pw },
    });
    if (res.ok) {
      setPosts((prev) => prev.filter((p) => p.slug !== slug));
    }
  }

  if (checkingSession) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-muted-foreground font-mono">Loading...</p>
      </main>
    );
  }

  if (!authed) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-display mb-2">Blog admin</h1>
          <p className="text-sm text-muted-foreground mb-8">Enter the admin password to continue.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              tryAuth(password);
            }}
            className="space-y-4"
          >
            <Input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            {authError && <p className="text-sm text-red-400">{authError}</p>}
            <Button type="submit" className="w-full rounded-full">
              Continue
            </Button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen px-6 lg:px-12 py-16 max-w-[1000px] mx-auto">
      <div className="flex items-center justify-between mb-16">
        <div>
          <h1 className="text-3xl font-display mb-1">Blog admin</h1>
          <p className="text-sm text-muted-foreground">Add and remove posts from the public blog.</p>
        </div>
        <a href="/blog" target="_blank" className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground">
          View live blog →
        </a>
      </div>

      {/* New post form */}
      <section className="mb-20 border border-foreground/10 rounded-2xl p-8">
        <h2 className="text-lg font-medium mb-6 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New post
        </h2>
        <form onSubmit={handleCreate} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="5 signs your team needs..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input id="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Support" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="One or two sentences shown on the blog index."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              rows={10}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={"Write each paragraph separated by a blank line.\n\nLike this — a blank line between paragraphs becomes a new paragraph on the post."}
            />
          </div>

          {formError && <p className="text-sm text-red-400">{formError}</p>}

          <Button type="submit" disabled={submitting} className="rounded-full">
            {submitting ? "Publishing..." : "Publish post"}
          </Button>
        </form>
      </section>

      {/* Existing posts */}
      <section>
        <h2 className="text-lg font-medium mb-6">
          Published posts {loading && <span className="text-sm text-muted-foreground font-normal">(refreshing...)</span>}
        </h2>
        <div className="divide-y divide-foreground/10">
          {posts.length === 0 && (
            <p className="text-sm text-muted-foreground py-6">No posts yet.</p>
          )}
          {posts.map((post) => (
            <div key={post.slug} className="flex items-center justify-between gap-4 py-5">
              <div>
                <p className="font-medium">{post.title}</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">
                  {post.category} &middot; {post.date} &middot; {post.readTime}
                </p>
              </div>
              <button
                onClick={() => handleDelete(post.slug)}
                className="text-muted-foreground hover:text-red-400 transition-colors p-2"
                aria-label={`Delete ${post.title}`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
