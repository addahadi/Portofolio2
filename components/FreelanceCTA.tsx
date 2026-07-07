import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { about } from "@/data/about";

export default function FreelanceCTA() {
  return (
    <section className="bg-body-bg py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <div className="glass-light p-10 md:p-14 text-center">
            {/* Availability status */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent font-heading font-semibold text-xs px-4 py-1.5 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              {about.availability}
            </div>

            <h2 className="section-title mb-4">
              Have a project <br className="hidden md:block" />
              <span className="text-gradient">in mind?</span>
            </h2>
            <p className="font-body text-muted text-lg max-w-xl mx-auto mb-8">
              I help businesses turn ideas into fast, reliable web applications and
              APIs — from first call to production. Tell me what you&apos;re building.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Start a project →
              </Link>
              <Link href="/projects" className="btn-outline !text-text-light !border-text-light/20 hover:!bg-text-light hover:!text-body-bg">
                See my work
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
