import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsStrip() {
  const featured = testimonials.slice(0, 2);
  if (featured.length === 0) return null;

  return (
    <section className="dark-strip py-24">
      <div className="max-w-[1280px] mx-auto px-6 relative">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs text-accent/60 uppercase tracking-widest font-heading mb-3">
                What clients say
              </p>
              <h2 className="section-title-dark">
                Trusted to <span className="text-gradient">deliver.</span>
              </h2>
            </div>
            <Link
              href="/testimonials"
              className="text-sm font-heading font-semibold text-accent hover:underline shrink-0"
            >
              All testimonials →
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.1}>
              <div className="glass-dark p-7 h-full flex flex-col">
                <div className="font-display text-6xl text-accent leading-none mb-3 -mt-2">
                  &ldquo;
                </div>
                <blockquote className="font-body text-text-dark text-base leading-relaxed flex-1 mb-6">
                  {t.quote}
                </blockquote>
                <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                  {t.avatar ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" unoptimized />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-heading font-bold text-sm shrink-0">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                  <div>
                    <p className="font-heading font-bold text-text-dark text-sm">{t.name}</p>
                    <p className="font-body text-muted text-xs">
                      {t.title} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
