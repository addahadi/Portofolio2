import type { MetadataRoute } from "next";
// import { getAllPosts } from "@/lib/posts";
import { projects } from "@/data/projects";

const BASE_URL = "https://yourportfolio.vercel.app"; // TODO: replace with real domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/skills",
    "/projects",
    "/experience",
    // "/testimonials",
    "/books",
    // "/blog",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // const blogRoutes = getAllPosts().map((p) => ({
  //   url: `${BASE_URL}/blog/${p.slug}`,
  //   lastModified: new Date(p.date),
  //   changeFrequency: "never" as const,
  //   priority: 0.6,
  // }));

  return [...staticRoutes, ...projectRoutes];
}
