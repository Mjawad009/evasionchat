import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthorized } from "@/lib/admin-auth";
import { getAllPosts, createPost } from "@/lib/blog-store";

export async function GET(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ posts: getAllPosts() });
}

export async function POST(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body?.title || !body?.excerpt || !body?.category || !body?.content) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const content: string[] = Array.isArray(body.content)
    ? body.content
    : String(body.content)
        .split(/\n\s*\n/)
        .map((p: string) => p.trim())
        .filter(Boolean);

  const post = createPost({
    title: body.title,
    excerpt: body.excerpt,
    category: body.category,
    content,
  });

  return NextResponse.json({ post }, { status: 201 });
}
