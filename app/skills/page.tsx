import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { skillCategories, allSkillsMarquee } from "@/data/skills";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <div className="bg-body-bg min-h-screen pt-24">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-6 pb-12">
        <ScrollReveal>
          <p className="text-xs text-muted/60 uppercase tracking-widest font-heading mb-3">
            What I work with
          </p>
          <h1 className="section-title">
            Tech <span className="text-gradient">Stack.</span>
          </h1>
        </ScrollReveal>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-black/5 py-5 mb-20 bg-text-light/[0.02]">
        <div className="flex w-max animate-marquee gap-12 items-center">
          {[...allSkillsMarquee, ...allSkillsMarquee].map((skill, i) => (
            <div key={i} className="flex items-center gap-3 min-w-max">
              <div className="w-7 h-7 relative flex items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={28}
                  height={28}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="font-body text-sm text-muted/70 font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section counter + grid */}
      <div className="max-w-[1280px] mx-auto px-6 pb-24 relative">
        <div className="section-counter absolute -top-8 right-6 pointer-events-none select-none">
          02
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <ScrollReveal key={cat.name} delay={ci * 0.1}>
              <div className="glass-light p-6 h-full">
                <h2 className="font-heading font-bold text-lg text-text-light mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {cat.name}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 bg-black/5 rounded-lg px-3 py-2 hover:bg-accent/10 transition-colors"
                    >
                      <div className="w-5 h-5 relative">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={20}
                          height={20}
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <span className="text-sm font-body text-text-light font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
