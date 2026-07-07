"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { books, bookCategories } from "@/data/books";
import { cn } from "@/lib/utils";
import type { BookCategory, Book } from "@/types";

function BookCard({ book }: { book: Book }) {
  const [showTakeaway, setShowTakeaway] = useState(false);
  return (
    <div className="relative cursor-pointer" onMouseEnter={() => setShowTakeaway(true)} onMouseLeave={() => setShowTakeaway(false)} onClick={() => setShowTakeaway(v => !v)}>
      <div className="relative w-32 h-48 md:w-36 md:h-56 rounded-lg overflow-hidden shadow-md border border-black/10">
        <Image src={book.cover} alt={book.title} fill className="object-cover" unoptimized />
        <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
      <AnimatePresence>
        {showTakeaway && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
            className="absolute bottom-full left-0 mb-2 w-56 glass-light p-4 z-20 pointer-events-none">
            <p className="font-heading font-bold text-text-light text-sm mb-1">{book.title}</p>
            <p className="font-body text-muted text-xs mb-2">{book.author}</p>
            <div className="flex mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < book.rating ? "text-accent" : "text-black/20"}>★</span>
              ))}
            </div>
            <p className="font-body text-text-light/80 text-xs leading-relaxed line-clamp-4">{book.takeaway}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-2 max-w-[128px] md:max-w-[144px]">
        <p className="font-body text-text-light text-xs font-medium leading-tight line-clamp-2">{book.title}</p>
        <p className="font-body text-muted text-xs mt-0.5 line-clamp-1">{book.author}</p>
      </div>
    </div>
  );
}

export default function BooksShelf() {
  const [activeCategory, setActiveCategory] = useState<BookCategory | "All">("All");
  const grouped = bookCategories.map(cat => ({ category: cat, books: books.filter(b => b.category === cat) }));
  return (
    <div className="bg-body-bg min-h-screen pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs text-muted/60 uppercase tracking-widest font-heading mb-3">What I read</p>
          <h1 className="section-title mb-4">Books I&apos;ve <span className="text-gradient">Read.</span></h1>
          <p className="font-body text-muted text-lg mb-10 max-w-xl">Hover a cover to see my personal takeaway.</p>
        </ScrollReveal>
        <div className="flex flex-wrap gap-2 mb-12">
          {(["All", ...bookCategories] as const).map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={cn("px-4 py-2 rounded-full text-sm font-heading font-semibold border transition-all duration-200",
                activeCategory === cat ? "bg-accent text-hero-bg border-accent" : "border-black/15 text-muted hover:border-accent hover:text-accent")}>
              {cat}
            </button>
          ))}
        </div>
        <div className="space-y-12">
          {grouped.filter(g => activeCategory === "All" || g.category === activeCategory).map((group, gi) => (
            <ScrollReveal key={group.category} delay={gi * 0.1}>
              <h2 className="font-heading font-bold text-lg text-text-light mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />{group.category}
              </h2>
              <div className="flex gap-6 flex-wrap pb-4">
                {group.books.map(book => <BookCard key={book.id} book={book} />)}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
