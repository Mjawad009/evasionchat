import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"],
    },
    // TODO: replace with your real production domain once deployed
    sitemap: "https://example.com/sitemap.xml",
  };
}
