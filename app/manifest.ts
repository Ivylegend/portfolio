import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Icha Victory | Full Stack Software Developer",
    short_name: "Icha Victory",
    description:
      "Build custom software, mobile apps, escrow-powered marketplaces, logistics platforms, AI agents, WhatsApp business software, and SEO-ready websites with Icha Victory.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#151517",
    theme_color: "#151517",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
