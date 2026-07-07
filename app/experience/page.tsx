import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { workExperience, education } from "@/data/experience";
import type { ExperienceEntry } from "@/types";
import { Briefcase, GraduationCap } from "lucide-react";

export const metadata: Metadata = { title: "Experience" };

function TimelineSection({
  title,
  entries,
  icon,
}: {
  title: string;
  entries: ExperienceEntry[];
  icon: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
          {icon}
        </div>
        <h2 className="font-heading font-bold text-2xl text-text-dark">{title}</h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-accent/20" />

        <div className="space-y-10">
          {entries.map((entry, i) => (
            <ScrollReveal key={entry.id} delay={i * 0.1} direction="left">
              <div className="flex gap-6 pl-8 relative">
                {/* Dot */}
                <div className="timeline-dot absolute left-0" />

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-heading font-bold text-text-dark text-lg leading-tight">
                        {entry.role}
                      </h3>
                      <p className="font-body text-accent text-sm font-medium">
                        {entry.organization}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-body text-xs text-muted/60 whitespace-nowrap">
                        {entry.startDate} – {entry.endDate}
                      </p>
                      <p className="font-body text-xs text-muted/40">{entry.location}</p>
                    </div>
                  </div>

                  <p className="font-body text-muted/80 text-sm leading-relaxed mb-3">
                    {entry.description}
                  </p>

                  {entry.highlights && (
                    <ul className="space-y-1">
                      {entry.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm font-body text-muted">
                          <span className="text-accent mt-0.5 shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="dark-strip min-h-screen pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs text-muted/50 uppercase tracking-widest font-heading mb-3">
            Background
          </p>
          <h1 className="section-title-dark mb-16">
            Experience <span className="text-gradient">&amp; Education.</span>
          </h1>
        </ScrollReveal>

        {/* Section counter */}
        <div className="section-counter absolute right-6 top-24 pointer-events-none">
          04
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          <TimelineSection
            title="Work Experience"
            entries={workExperience}
            icon={<Briefcase size={18} />}
          />
          <TimelineSection
            title="Education"
            entries={education}
            icon={<GraduationCap size={18} />}
          />
        </div>
      </div>
    </div>
  );
}
