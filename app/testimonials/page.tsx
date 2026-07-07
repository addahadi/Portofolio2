import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <div className="bg-body-bg min-h-screen pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs text-muted/60 uppercase tracking-widest font-heading mb-3">
            What they say
          </p>
          <h1 className="section-title mb-4">
            Kind <span className="text-gradient">Words.</span>
          </h1>
          <p className="font-body text-muted text-lg mb-16 max-w-xl">
            From clients and colleagues who&apos;ve seen the work up close.
          </p>
        </ScrollReveal>

        {/* Section counter */}
        <div className="section-counter absolute right-6 top-24 pointer-events-none select-none">
          05
        </div>

        {testimonials.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-heading text-xl text-muted">Testimonials coming soon.</p>
            <div className="mt-2 w-12 h-0.5 bg-accent mx-auto" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.1}>
                <div className="glass-light p-7 h-full flex flex-col">
                  {/* Opening quote */}
                  <div className="font-display text-6xl text-accent leading-none mb-3 -mt-2">
                    &ldquo;
                  </div>

                  <blockquote className="font-body text-text-light text-base leading-relaxed flex-1 mb-6">
                    {t.quote}
                  </blockquote>

                  {/* Attribution */}
                  <div className="flex items-center gap-3 border-t border-black/5 pt-5">
                    {t.avatar ? (
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-heading font-bold text-sm shrink-0">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                    )}
                    <div>
                      <p className="font-heading font-bold text-text-light text-sm">{t.name}</p>
                      <p className="font-body text-muted text-xs">
                        {t.title} · {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
