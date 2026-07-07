// ── Project ─────────────────────────────────────────────────────────────────

export type ProjectCategory = "All" | "Web App" | "API" | "AI/ML" | "Tool" | "Mobile";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  category: string;
  tags: string[];
  thumbnail: string;
  screenshots: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  year: number;
  projectType: "Client" | "Personal" | "Startup";
  role: string;
  duration?: string;
  impact?: string[];
  featuredMetric?: {
    value: string;
    label: string;
  };
  testimonialId?: string;
}

// ── About ───────────────────────────────────────────────────────────────────

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

// ── Testimonial ─────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
}

// ── Skills ──────────────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

// ── Experience ──────────────────────────────────────────────────────────────

export interface ExperienceEntry {
  id: string;
  type: "work" | "education";
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
}

// ── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  tags: string[];
}

// ── Books ───────────────────────────────────────────────────────────────────

export type BookCategory = "Tech" | "Architecture" | "Leadership" | "Product" | "Self-Development";

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  category: BookCategory;
  takeaway: string;
  rating: number;
}
