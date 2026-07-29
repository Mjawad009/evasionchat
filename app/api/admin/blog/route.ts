import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthorized } from "@/lib/admin-auth";
import { getAllPosts, createPost } from "@/lib/blog-store";
import type { BlogSection } from "@/lib/blog-store";

export async function GET(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const posts = await getAllPosts();
  return NextResponse.json({ posts });
}

function isValidSections(value: unknown): value is BlogSection[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(
      (s) =>
        s &&
        typeof s === "object" &&
        typeof (s as any).heading === "string" &&
        (s as any).heading.trim().length > 0 &&
        Array.isArray((s as any).body) &&
        (s as any).body.length > 0 &&
        (s as any).body.every((p: unknown) => typeof p === "string" && p.trim().length > 0)
    )
  );
}

export async function POST(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);

  if (
    !body?.title ||
    !body?.excerpt ||
    !body?.category ||
    !body?.quickAnswer ||
    !body?.content
  ) {
    return NextResponse.json(
      { error: "Missing required fields: title, excerpt, category, quickAnswer, and content are all required." },
      { status: 400 }
    );
  }

  let content: BlogSection[];
  if (isValidSections(body.content)) {
    content = body.content.map((s: BlogSection) => ({
      heading: s.heading.trim(),
      body: s.body.map((p) => p.trim()).filter(Boolean),
    }));
  } else if (Array.isArray(body.content) || typeof body.content === "string") {
    const paragraphs: string[] = Array.isArray(body.content)
      ? body.content
      : String(body.content)
          .split(/\n\s*\n/)
          .map((p: string) => p.trim())
          .filter(Boolean);

    if (paragraphs.length === 0) {
      return NextResponse.json({ error: "Content cannot be empty." }, { status: 400 });
    }

    content = [{ heading: body.title, body: paragraphs }];
  } else {
    return NextResponse.json({ error: "Content is malformed." }, { status: 400 });
  }

  const tags: string[] = Array.isArray(body.tags)
    ? body.tags.map((t: unknown) => String(t).trim()).filter(Boolean)
    : typeof body.tags === "string"
    ? body.tags.split(",").map((t: string) => t.trim()).filter(Boolean)
    : [];

  const post = await createPost({
    title: body.title,
    excerpt: body.excerpt,
    category: body.category,
    quickAnswer: body.quickAnswer,
    tags,
    image: typeof body.image === "string" && body.image.trim() ? body.image.trim() : undefined,
    imageAlt: typeof body.imageAlt === "string" && body.imageAlt.trim() ? body.imageAlt.trim() : undefined,
    content,
  });

  return NextResponse.json({ post }, { status: 201 });
}
