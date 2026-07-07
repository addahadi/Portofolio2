import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/types";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? "Untitled",
        date: data.date ?? "",
        readTime: data.readTime ?? "5 min read",
        category: data.category ?? "General",
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title ?? "Untitled",
      date: data.date ?? "",
      readTime: data.readTime ?? "5 min read",
      category: data.category ?? "General",
      excerpt: data.excerpt ?? "",
      tags: data.tags ?? [],
    } as BlogPost,
    content,
  };
}
