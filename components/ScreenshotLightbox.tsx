"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ScreenshotLightboxProps {
  screenshots: string[];
  projectTitle: string;
}

export default function ScreenshotLightbox({ screenshots, projectTitle }: ScreenshotLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i !== null ? (i - 1 + screenshots.length) % screenshots.length : null)),
    [screenshots.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i !== null ? (i + 1) % screenshots.length : null)),
    [screenshots.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [activeIndex, close, prev, next]);

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {screenshots.map((src, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="relative h-48 rounded-xl overflow-hidden bg-black/5 cursor-zoom-in group/thumb focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Image
              src={src}
              alt={`${projectTitle} screenshot ${i + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover/thumb:scale-105"
              unoptimized
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 bg-black/60 text-white text-xs font-heading font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                Click to expand
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onClick={close}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 text-white/60 text-sm font-heading">
              {activeIndex + 1} / {screenshots.length}
            </div>

            {/* Navigation arrows */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Full image */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-[90vw] h-[85vh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[activeIndex]}
                alt={`${projectTitle} screenshot ${activeIndex + 1}`}
                fill
                className="object-contain"
                unoptimized
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
