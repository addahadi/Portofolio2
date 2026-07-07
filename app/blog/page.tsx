import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllPosts } from "@/lib/posts";
import { Calendar, Clock, Tag } from "lucide-react";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="bg-body-bg min-h-screen pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs text-muted/60 uppercase tracking-widest font-heading mb-3">
            Thoughts & writing
          </p>
          <h1 className="section-title mb-4">
            The <span className="text-gradient">Blog.</span>
          </h1>
          <p className="font-body text-muted text-lg mb-16 max-w-xl">
            I write about software engineering, architecture, and lessons learned building in public.
          </p>
        </ScrollReveal>

        {posts.length === 0 ? (
          <div className="text-center py-24">
            <div className="font-display text-6xl text-accent/20 mb-4">{"// "}</div>
            <p className="font-heading text-xl text-muted mb-2">Articles coming soon.</p>
            <div className="w-12 h-0.5 bg-accent mx-auto" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <div className="glass-light p-6 h-full flex flex-col hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(170,255,0,0.1)]">
                    <div className="flex items-center gap-3 mb-3 text-xs font-body text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs bg-accent/10 text-accent font-heading font-semibold px-2.5 py-0.5 rounded-full mb-3 w-fit">
                      <Tag size={10} />
                      {post.category}
                    </span>

                    <h2 className="font-heading font-bold text-text-light text-lg mb-2 group-hover:text-accent transition-colors leading-tight flex-1">
                      {post.title}
                    </h2>

                    <p className="font-body text-muted text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-muted/60 font-body bg-black/5 px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
