import { NextRequest } from "next/server";

// TODO (production): This is intentionally simple — a single shared password
// checked on every request, no sessions, no user accounts, no rate limiting.
// It's enough to keep the blog-admin page from being wide open to the public,
// but it is NOT real authentication. Before this is exposed on a public
// domain, replace it with proper auth (NextAuth, Clerk, a real login system).
export function isAdminAuthorized(request: NextRequest): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false; // fail closed if no password is configured
  const provided = request.headers.get("x-admin-password");
  return provided === expected;
}
