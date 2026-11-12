import type { Metadata } from "next";

export function shareMetadata(
  path: string,
  title: string,
  description: string,
  image = "/assets/og-image.png",
  type: "website" | "article" = "website",
): Metadata {
  const url = new URL(path, "https://icha.ng").href;
  const shareTitle = `${title} | Icha Victory`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: shareTitle, description, type, url, siteName: "Icha Victory",
      locale: "en_NG", images: [{ url: image, alt: title }] },
    twitter: { card: "summary_large_image", title: shareTitle, description,
      images: [{ url: image, alt: title }] },
  };
}
