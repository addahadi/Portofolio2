import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, ChevronLeft } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import ScreenshotLightbox from "@/components/ScreenshotLightbox";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { isRealUrl } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Not Found" };
  return {
    title: project.title,
    description: project.shortDescription,
    // Social-share preview (LinkedIn, WhatsApp, X) — uses the project image.
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [{ url: project.thumbnail }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: [project.thumbnail],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const hasLive = isRealUrl(project.liveUrl);
  const hasRepo = isRealUrl(project.repoUrl);
  const hasImpact = project.impact && project.impact.length > 0;
  const testimonial = project.testimonialId
    ? testimonials.find((t) => t.id === project.testimonialId)
    : undefined;

  return (
    <div className="bg-body-bg min-h-screen pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted font-body mb-8">
          <Link href="/projects" className="hover:text-accent transition-colors flex items-center gap-1">
            <ChevronLeft size={14} />
            Projects
          </Link>
          <span>/</span>
          <span className="text-text-light">{project.title}</span>
        </div>

        {/* Hero image */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 bg-black/5">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Context: type, role, category */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs bg-accent text-hero-bg font-heading font-bold px-3 py-1 rounded-full">
                  {project.projectType === "Client" ? "Client Work" : project.projectType}
                </span>
                <span className="text-xs bg-accent/15 text-accent font-heading font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-text-light mb-4">
                {project.title}
              </h1>
              <p className="font-body text-muted text-lg leading-relaxed mb-4">
                {project.fullDescription}
              </p>
              {/* Quick facts */}
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-body">
                <span className="text-muted">
                  Role: <span className="text-text-light font-semibold">{project.role}</span>
                </span>
                {project.duration && (
                  <span className="text-muted">
                    Timeline:{" "}
                    <span className="text-text-light font-semibold">{project.duration}</span>
                  </span>
                )}
                <span className="text-muted">
                  Year: <span className="text-text-light font-semibold">{project.year}</span>
                </span>
              </div>
            </div>

            {/* Problem / Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-light p-6">
                <h3 className="font-heading font-bold text-base text-text-light mb-3 flex items-center gap-2">
                  <span className="text-red-400">⚠</span> The Problem
                </h3>
                <p className="text-muted text-sm font-body leading-relaxed">{project.problem}</p>
              </div>
              <div className="glass-light p-6">
                <h3 className="font-heading font-bold text-base text-text-light mb-3 flex items-center gap-2">
                  <span className="text-accent">✓</span> What I Built
                </h3>
                <p className="text-muted text-sm font-body leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Impact / Results — the freelance money section */}
            {hasImpact && (
              <div>
                <h3 className="font-heading font-bold text-lg text-text-light mb-4 flex items-center gap-2">
                  <span className="text-accent">📈</span> The Result
                </h3>
                <div className="glass-light p-6">
                  <ul className="space-y-3">
                    {project.impact!.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent font-heading font-bold mt-0.5">→</span>
                        <span className="text-text-light text-sm font-body leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Screenshots */}
            {project.screenshots.length > 0 && (
              <div>
                <h3 className="font-heading font-bold text-lg text-text-light mb-4">Screenshots</h3>
                <ScreenshotLightbox screenshots={project.screenshots} projectTitle={project.title} />
              </div>
            )}

            {/* Client testimonial — social proof right where it counts */}
            {testimonial && (
              <div className="glass-light p-7">
                <div className="font-display text-6xl text-accent leading-none mb-3 -mt-2">
                  &ldquo;
                </div>
                <blockquote className="font-body text-text-light text-base leading-relaxed mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-3 border-t border-black/5 pt-5">
                  {testimonial.avatar ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-heading font-bold text-sm shrink-0">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                  <div>
                    <p className="font-heading font-bold text-text-light text-sm">
                      {testimonial.name}
                    </p>
                    <p className="font-body text-muted text-xs">
                      {testimonial.title} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Primary actions */}
            <div className="glass-light p-6 space-y-3">
              <h3 className="font-heading font-bold text-sm text-muted/60 uppercase tracking-widest mb-4">
                See it in action
              </h3>
              {hasLive ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 btn-primary text-sm w-full justify-center"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              ) : (
                <p className="text-xs text-muted font-body text-center">
                  Live demo link coming soon.
                </p>
              )}
              {hasRepo && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 btn-outline text-sm w-full justify-center"
                >
                  <GithubIcon size={14} />
                  Source Code
                </a>
              )}
            </div>

            {/* Tech stack */}
            <div className="glass-light p-6">
              <h3 className="font-heading font-bold text-sm text-muted/60 uppercase tracking-widest mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-accent/10 text-accent font-body px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA — freelance conversion */}
        <div className="mt-20 pt-12 border-t border-black/5 text-center">
          <p className="font-heading font-bold text-2xl md:text-3xl text-text-light mb-2">
            Want results like this for your project?
          </p>
          <p className="text-muted font-body mb-6">
            I take on a limited number of freelance projects. Let&apos;s talk about yours.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a project →
          </Link>
        </div>
      </div>
    </div>
  );
}
