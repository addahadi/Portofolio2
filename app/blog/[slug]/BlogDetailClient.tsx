"use client";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, Clock, ChevronLeft, Tag } from "lucide-react";
import type { BlogPost } from "@/types";

interface BlogDetailClientProps {
  meta: BlogPost;
  contentHtml: string;
}

export default function BlogDetailClient({ meta, contentHtml }: BlogDetailClientProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      {/* Reading progress bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />

      <div className="bg-body-bg min-h-screen pt-24 pb-24">
        <div className="max-w-[800px] mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted font-body mb-8">
            <Link href="/blog" className="hover:text-accent transition-colors flex items-center gap-1">
              <ChevronLeft size={14} />
              Blog
            </Link>
            <span>/</span>
            <span className="text-text-light truncate max-w-[200px]">{meta.title}</span>
          </div>

          {/* Category + meta */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs bg-accent/10 text-accent font-heading font-semibold px-3 py-1.5 rounded-full mb-4">
              <Tag size={10} />
              {meta.category}
            </span>
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-text-light leading-tight mb-4">
              {meta.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-muted font-body">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                {new Date(meta.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {meta.readTime}
              </span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="font-body text-lg text-muted leading-relaxed mb-10 pb-10 border-b border-black/10">
            {meta.excerpt}
          </p>

          {/* MDX content */}
          <article
            className="prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-text-light
              prose-p:font-body prose-p:text-muted prose-p:leading-relaxed
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-code:text-accent prose-code:bg-hero-bg prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-hero-bg prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
              prose-blockquote:border-accent prose-blockquote:text-muted prose-blockquote:font-body
              prose-strong:text-text-light prose-strong:font-semibold
              prose-li:text-muted prose-li:font-body"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Tags */}
          {meta.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-black/10">
              <p className="text-xs text-muted/60 uppercase tracking-widest font-heading mb-3">Tags</p>
              <div className="flex flex-wrap gap-2">
                {meta.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-black/5 text-muted px-3 py-1 rounded-full font-body">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* End CTA */}
          <div className="mt-16 p-8 glass-light text-center">
            <p className="font-heading font-bold text-xl text-text-light mb-2">
              Want to work together?
            </p>
            <p className="font-body text-muted text-sm mb-5">
              I&apos;m available for freelance projects and full-time opportunities.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
