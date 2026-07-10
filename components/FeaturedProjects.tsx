import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <section className="bg-body-bg py-24 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="section-counter absolute right-6 top-16 pointer-events-none select-none">
          02
        </div>

        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs text-muted/60 uppercase tracking-widest font-heading mb-3">
                Selected work
              </p>
              <h2 className="section-title">
                Projects that <span className="text-gradient">shipped.</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm font-heading font-semibold text-accent hover:underline shrink-0"
            >
              View all projects →
            </Link>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
