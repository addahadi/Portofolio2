"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  // Featured projects lead the page; everything else follows.
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const ordered = [...featured, ...rest];

  return (
    <div className="bg-body-bg min-h-screen pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs text-muted/60 uppercase tracking-widest font-heading mb-3">
            What I&apos;ve built
          </p>
          <h1 className="section-title mb-4">
            Selected <span className="text-gradient">Work.</span>
          </h1>
          <p className="font-body text-muted text-lg mb-10 max-w-xl">
            Real applications, shipped and hosted. Each one below is live — click
            through to try it or read the full case study.
          </p>
        </ScrollReveal>

        <div className="section-counter absolute right-6 top-24 pointer-events-none select-none">
          03
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          {ordered.map((p) => (
            <ProjectCard key={p.slug} project={p} featured={p.featured} />
          ))}
        </motion.div>

        {ordered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-heading text-xl text-muted">Projects coming soon.</p>
            <div className="mt-2 w-12 h-0.5 bg-accent mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
}
