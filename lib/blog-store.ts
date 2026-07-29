import { neon } from "@neondatabase/serverless";

export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  quickAnswer: string;
  content: BlogSection[];
};

export type CreatePostInput = {
  title: string;
  excerpt: string;
  category: string;
  quickAnswer: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  content: BlogSection[];
};

const sql = neon(process.env.DATABASE_URL!);

// Run once in the Neon SQL editor before seeding/using this store:
//
// CREATE TABLE IF NOT EXISTS blog_posts (
//   slug TEXT PRIMARY KEY,
//   title TEXT NOT NULL,
//   excerpt TEXT NOT NULL,
//   date DATE NOT NULL DEFAULT CURRENT_DATE,
//   read_time TEXT NOT NULL,
//   category TEXT NOT NULL,
//   tags TEXT[] NOT NULL DEFAULT '{}',
//   image TEXT,
//   image_alt TEXT,
//   quick_answer TEXT NOT NULL,
//   content JSONB NOT NULL
// );

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function calculateReadTime(content: BlogSection[]): string {
  const wordCount = content.reduce((total, section) => {
    const headingWords = section.heading.split(/\s+/).filter(Boolean).length;
    const bodyWords = section.body.reduce(
      (sum, p) => sum + p.split(/\s+/).filter(Boolean).length,
      0
    );
    return total + headingWords + bodyWords;
  }, 0);
  const minutes = Math.max(1, Math.round(wordCount / 200));
  return `${minutes} min read`;
}

function rowToPost(row: any): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    date: row.date instanceof Date ? row.date.toISOString().slice(0, 10) : row.date,
    readTime: row.read_time,
    category: row.category,
    tags: row.tags ?? [],
    image: row.image ?? undefined,
    imageAlt: row.image_alt ?? undefined,
    quickAnswer: row.quick_answer,
    content: row.content,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const rows = await sql`
    SELECT * FROM blog_posts ORDER BY date DESC
  `;
  return rows.map(rowToPost);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const rows = await sql`
    SELECT * FROM blog_posts WHERE slug = ${slug} LIMIT 1
  `;
  return rows[0] ? rowToPost(rows[0]) : undefined;
}

async function uniqueSlug(base: string): Promise<string> {
  const existing = await sql`
    SELECT slug FROM blog_posts WHERE slug = ${base} OR slug LIKE ${base + "-%"}
  `;
  const taken = new Set(existing.map((r: any) => r.slug));
  if (!taken.has(base)) return base;
  let i = 2;
  while (taken.has(`${base}-${i}`)) i++;
  return `${base}-${i}`;
}

export async function createPost(input: CreatePostInput): Promise<BlogPost> {
  const slug = await uniqueSlug(slugify(input.title));
  const readTime = calculateReadTime(input.content);

  const rows = await sql`
    INSERT INTO blog_posts (slug, title, excerpt, read_time, category, tags, image, image_alt, quick_answer, content)
    VALUES (
      ${slug},
      ${input.title},
      ${input.excerpt},
      ${readTime},
      ${input.category},
      ${input.tags},
      ${input.image ?? null},
      ${input.imageAlt ?? null},
      ${input.quickAnswer},
      ${JSON.stringify(input.content)}
    )
    RETURNING *
  `;
  return rowToPost(rows[0]);
}

export async function deletePost(slug: string): Promise<boolean> {
  const rows = await sql`
    DELETE FROM blog_posts WHERE slug = ${slug} RETURNING slug
  `;
  return rows.length > 0;
}
