import type { MetadataRoute } from "next";
import { solutions } from "@/lib/solutions-data";
import { integrationDetails } from "@/lib/integrations-data";
import { caseStudies } from "@/lib/case-studies-data";
import { getAllPosts } from "@/lib/blog-store";

// TODO: replace with your real production domain once deployed
const BASE_URL = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/features",
    "/integrations",
    "/pricing",
    "/solutions",
    "/case-studies",
    "/blog",
    "/contact",
    "/security",
    "/changelog",
    "/roadmap",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const solutionRoutes = solutions.map((s) => ({
    url: `${BASE_URL}/solutions/${s.slug}`,
    lastModified: new Date(),
  }));

  const integrationRoutes = integrationDetails.map((i) => ({
    url: `${BASE_URL}/integrations/${i.slug}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((c) => ({
    url: `${BASE_URL}/case-studies/${c.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = getAllPosts().map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...solutionRoutes, ...integrationRoutes, ...caseStudyRoutes, ...blogRoutes];
}
