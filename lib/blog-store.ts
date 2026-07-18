import fs from "fs";
import path from "path";

// TODO (production): This store writes to a JSON file on disk. That's fine
// for local development or a self-hosted server with a persistent disk, but
// on serverless platforms (e.g. Vercel) the filesystem is read-only/ephemeral
// in production, so admin edits won't persist across deploys or instances.
// Before going to production on serverless, swap this module's internals for
// a real database (Postgres, Supabase, etc.) or a headless CMS — the
// exported function signatures below (getAllPosts, getPostBySlug, createPost,
// updatePost, deletePost) are the only things the rest of the app relies on,
// so the swap doesn't require touching any page or API route.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date, e.g. "2026-07-01"
  readTime: string;
  category: string;
  content: string[]; // one entry per paragraph
}

const DATA_PATH = path.join(process.cwd(), "data", "blog-posts.json");

function readPosts(): BlogPost[] {
  try {
    const raw = fs.readFileSync(DATA_PATH, "utf-8");
    return JSON.parse(raw) as BlogPost[];
  } catch {
    return [];
  }
}

function writePosts(posts: BlogPost[]) {
  fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
  fs.writeFileSync(DATA_PATH, JSON.stringify(posts, null, 2), "utf-8");
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function estimateReadTime(content: string[]): string {
  const words = content.join(" ").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function getAllPosts(): BlogPost[] {
  return readPosts().sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return readPosts().find((p) => p.slug === slug);
}

export function createPost(input: {
  title: string;
  excerpt: string;
  category: string;
  content: string[];
  date?: string;
}): BlogPost {
  const posts = readPosts();
  let slug = slugify(input.title);
  // Ensure uniqueness if a post with the same slug already exists.
  let suffix = 2;
  const baseSlug = slug;
  while (posts.some((p) => p.slug === slug)) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  const post: BlogPost = {
    slug,
    title: input.title,
    excerpt: input.excerpt,
    category: input.category,
    content: input.content,
    date: input.date || new Date().toISOString().slice(0, 10),
    readTime: estimateReadTime(input.content),
  };

  posts.push(post);
  writePosts(posts);
  return post;
}

export function deletePost(slug: string): boolean {
  const posts = readPosts();
  const next = posts.filter((p) => p.slug !== slug);
  if (next.length === posts.length) return false;
  writePosts(next);
  return true;
}
