"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { about } from "@/data/about";

// Staggered word reveal
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const wordVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0px", "-20px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const nameParts = about.name.toUpperCase().split(" ");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-hero-bg flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
        {/* Lime radial glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/[0.02] blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(170,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,0,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Section counter */}
      <div className="absolute bottom-8 left-8 font-display text-[100px] md:text-[140px] text-white/[0.03] leading-none select-none pointer-events-none">
        01
      </div>

      {/* Main content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-[1280px] w-full mx-auto px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text side */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-body tracking-wide">{about.availability}</span>
            </motion.div>

            {/* Name — staggered word reveal */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display leading-none mb-4 overflow-hidden"
            >
              {nameParts.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="block text-[clamp(64px,10vw,120px)] text-white tracking-tight"
                  style={{ lineHeight: 0.95 }}
                >
                  {word}
                  {i === nameParts.length - 1 && (
                    <span className="text-accent">.</span>
                  )}
                </motion.span>
              ))}
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="font-heading text-xl md:text-2xl text-accent mb-4 tracking-wide"
            >
              {about.title}
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-body text-muted text-base md:text-lg leading-relaxed max-w-lg mb-10"
            >
              {about.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/projects">
                <motion.span
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary inline-flex items-center gap-2 cursor-pointer"
                >
                  View My Work
                </motion.span>
              </Link>
              <a href="/cv.pdf" download>
                <motion.span
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline inline-flex items-center gap-2 cursor-pointer"
                >
                  <Download size={16} />
                  Download CV
                </motion.span>
              </a>
            </motion.div>
          </div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ y: photoY }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Lime glow ring */}
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-2xl scale-110" />
              <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full border-2 border-accent/30 overflow-hidden bg-white/5">
                {/* Placeholder photo */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/10 to-transparent">
                  <span className="font-display text-7xl text-accent/40">
                    {about.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              </div>
              {/* Floating tech tags */}
              {[
                { label: "Node.js", pos: "-left-8 top-12" },
                { label: "React", pos: "-right-8 top-24" },
                { label: "TypeScript", pos: "-left-10 bottom-16" },
              ].map((tag) => (
                <motion.div
                  key={tag.label}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3 + Math.random() * 1.5, ease: "easeInOut" }}
                  className={`absolute ${tag.pos} glass-dark px-3 py-1.5 text-xs font-body text-accent whitespace-nowrap`}
                >
                  {tag.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 pb-8"
        >
          <span className="text-muted/40 text-xs font-body tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={16} className="text-accent/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
