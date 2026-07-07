import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import BlogDetailClient from "./BlogDetailClient";

// Simple MDX-to-HTML (without full MDX pipeline for now — can upgrade to next-mdx-remote)
// This renders basic markdown syntax for the mock posts
import { marked } from "marked";

// Install marked if needed: it's a lightweight md->html converter
// For a production upgrade, swap to next-mdx-remote for full MDX support

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    openGraph: { title: post.meta.title, description: post.meta.excerpt },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  // Convert markdown content to HTML
  const contentHtml = await marked.parse(post.content, { gfm: true });

  return <BlogDetailClient meta={post.meta} contentHtml={contentHtml} />;
}
