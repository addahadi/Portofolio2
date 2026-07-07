// ── Project ────────────────────────────────────────────────────────────────
export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  category: ProjectCategory;
  tags: string[];
  thumbnail: string;
  screenshots: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  year: number;

  // ── Freelance-focused fields ──────────────────────────────────────────────
  /** Whether this was paid client work, a personal build, or open source. */
  projectType: ProjectType;
  /** Your role on the project, e.g. "Solo Developer", "Lead Backend Developer". */
  role: string;
  /** Optional delivery time, great for freelance credibility, e.g. "6 weeks". */
  duration?: string;
  /** Business outcomes / results. What did this project actually achieve? */
  impact?: string[];
  /** One punchy headline stat shown on the project card. */
  featuredMetric?: {
    value: string; // "90%"
    label: string; // "faster estimates"
  };
  /** Optional id of a testimonial (from data/testimonials.ts) to show on this project. */
  testimonialId?: string;
}

export type ProjectType = "Client" | "Startup" | "Personal" | "Open Source" | "Academic";

export type ProjectCategory =
  | "All"
  | "Web App"
  | "API"
  | "Mobile"
  | "Tool"
  | "AI/ML";

// ── Skill ──────────────────────────────────────────────────────────────────
export interface Skill {
  name: string;
  icon: string; // URL or local path
  level?: "Expert" | "Advanced" | "Intermediate";
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

// ── Experience ────────────────────────────────────────────────────────────
export interface ExperienceEntry {
  id: string;
  type: "work" | "education";
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  highlights?: string[];
  logo?: string;
}

// ── Testimonial ───────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
}

// ── Book ──────────────────────────────────────────────────────────────────
export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string; // URL
  category: BookCategory;
  takeaway: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export type BookCategory =
  | "Tech"
  | "Leadership"
  | "Self-Development"
  | "Architecture"
  | "Product";

// ── Blog ──────────────────────────────────────────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  tags: string[];
}

// ── About ─────────────────────────────────────────────────────────────────
export interface About {
  name: string;
  title: string;
  bio: string;
  extendedBio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  availability: string;
}
