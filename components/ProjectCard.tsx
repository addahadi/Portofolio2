"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/types";
import { cn, isRealUrl } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const hasLive = isRealUrl(project.liveUrl);
  const hasRepo = isRealUrl(project.repoUrl);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className={cn("glass-light overflow-hidden group h-full flex flex-col", featured && "md:col-span-2")}
    >
      {/* Thumbnail */}
      <Link href={`/projects/${project.slug}`} className="block overflow-hidden relative">
        <div className={cn("relative w-full overflow-hidden bg-black/5", featured ? "h-64" : "h-48")}>
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />

          {/* Top-left: project type badge (freelance credibility) */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span
              className={cn(
                "text-xs font-heading font-bold px-2.5 py-1 rounded-full",
                project.projectType === "Client"
                  ? "bg-accent text-hero-bg"
                  : "bg-hero-bg/80 text-accent border border-accent/40"
              )}
            >
              {project.projectType === "Client" ? "Client Work" : project.projectType}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1 bg-hero-bg/80 text-accent text-xs font-heading font-bold px-2.5 py-1 rounded-full border border-accent/40">
                <Star size={10} fill="currentColor" />
                Featured
              </span>
            )}
          </div>

          {/* Bottom-left: headline metric */}
          {project.featuredMetric && (
            <div className="absolute bottom-3 left-3 bg-hero-bg/85 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              <span className="font-heading font-bold text-accent text-sm">
                {project.featuredMetric.value}
              </span>{" "}
              <span className="font-body text-text-dark/70 text-xs">
                {project.featuredMetric.label}
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="font-heading font-bold text-text-light text-lg hover:text-accent transition-colors leading-tight">
              {project.title}
            </h3>
          </Link>
          <span className="text-xs text-muted font-body shrink-0">{project.year}</span>
        </div>

        <p className="text-muted text-sm font-body leading-relaxed mb-4 flex-1 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs font-body bg-accent/10 text-accent px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs font-body text-muted">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Actions — Live Demo is the primary CTA for freelance */}
        <div className="flex items-center gap-2 pt-3 border-t border-black/5">
          {hasLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-accent text-hero-bg text-xs font-heading font-bold px-3 py-1.5 rounded-full hover:bg-accent-glow transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          {hasRepo && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors font-body"
            >
              <GithubIcon size={13} />
              Source
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="ml-auto text-xs font-heading font-semibold text-accent hover:underline"
          >
            Case study →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
