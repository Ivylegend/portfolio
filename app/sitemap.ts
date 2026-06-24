import type { MetadataRoute } from "next";

const routes = ["", "/projects", "/process", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://icha.ng${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
