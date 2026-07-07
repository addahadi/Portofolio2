import ScrollReveal from "@/components/ScrollReveal";
import { about } from "@/data/about";
import { MapPin, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const stats = [
  { value: "30+", label: "Developers Led (APEX)" },
  { value: "2", label: "Live Products Shipped" },
  { value: "3", label: "Tech Communities" },
  { value: "MSc", label: "AI · In Progress" },
];

export default function About() {
  return (
    <section className="bg-body-bg py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <ScrollReveal>
              <p className="text-xs text-muted/60 uppercase tracking-widest font-heading mb-3">
                About me
              </p>
              <h2 className="section-title mb-6">
                I build things <br />
                <span className="text-gradient">that matter.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-body text-muted text-base md:text-lg leading-relaxed mb-6">
                {about.extendedBio}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-2 text-sm font-body text-muted">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-accent" />
                  {about.location}
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-accent" />
                  {about.email}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="flex gap-4 mt-6">
                <a
                  href={about.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors font-body"
                >
                  <GithubIcon size={16} /> GitHub
                </a>
                <a
                  href={about.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors font-body"
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats grid */}
          <ScrollReveal delay={0.15} direction="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="glass-light p-6">
                  <p className="font-display text-5xl text-text-light mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted text-sm font-body">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
