import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

const routes = ["", "/projects", "/process", "/contact", "/services", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map((route) => ({
    url: `https://icha.ng${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1 : route === "/services" || route === "/blog" ? 0.9 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `https://icha.ng/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}

