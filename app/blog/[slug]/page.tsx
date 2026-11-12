import type { Metadata } from "next";
import { shareMetadata } from "@/lib/share-metadata";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";
import { BlogPostClient } from "./BlogPostClient";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return shareMetadata(`/blog/${slug}`, post.title, post.excerpt, undefined, "article");
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  return <BlogPostClient post={post} related={related} />;
}
