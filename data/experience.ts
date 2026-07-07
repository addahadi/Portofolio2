import type { ExperienceEntry } from "@/types";

// TODO: Replace mock experience with your real work history and education before launch
export const experience: ExperienceEntry[] = [
  // ── Work ────────────────────────────────────────────────────────────────
  {
    id: "freelance-2025",
    type: "work",
    role: "Freelance Full-Stack Developer",
    organization: "Independent (Upwork & Direct Clients)",
    location: "Remote",
    startDate: "Jun 2025",
    endDate: "Present",
    description:
      "Building full-stack web applications and REST APIs for clients in construction, healthcare, and e-commerce. Delivering end-to-end products from requirements to production deployment on Vercel.",
    highlights: [
      "Shipped DiagInfect-AI — a multi-tenant medical diagnostic SaaS platform",
      "Shipped QuantiConstruct — a construction estimation platform with recursive formula engine",
      "Maintained 5-star ratings and 100% job success on Upwork",
    ],
  },
  {
    id: "intern-2024",
    type: "work",
    role: "Full-Stack Developer Intern",
    organization: "TechStart Algeria",
    location: "Algiers, Algeria",
    startDate: "Jul 2024",
    endDate: "Sep 2024",
    description:
      "Contributed to the backend of a B2B subscription platform. Implemented JWT-based authentication with refresh token rotation, plan switching workflows, and feature-gated access control.",
    highlights: [
      "Designed and implemented the plan upgrade/downgrade flow with email confirmation",
      "Built subscription-based feature limiting middleware for three plan tiers",
      "Reduced API response times by 35% through query optimization",
    ],
  },
  {
    id: "ta-2024",
    type: "work",
    role: "Teaching Assistant — Web Development",
    organization: "Freelance (Online Courses)",
    location: "Remote",
    startDate: "Jan 2024",
    endDate: "Jun 2024",
    description:
      "Created and delivered web development course content covering HTML, CSS, JavaScript, and browser fundamentals. Built course materials, exercises, and PPTX presentation decks.",
    highlights: [
      "Produced 40+ hours of structured course content",
      "Built interactive coding exercises for 3 course modules",
    ],
  },
  // ── Education ────────────────────────────────────────────────────────────
  {
    id: "degree-2025",
    type: "education",
    role: "Licence in Software Engineering",
    organization: "University of Science and Technology — Houari Boumediene (USTHB)",
    location: "Algiers, Algeria",
    startDate: "Sep 2022",
    endDate: "Jun 2025",
    description:
      "Specialized in Software Engineering with a focus on distributed systems, algorithms, formal methods, and agile software development. Final Year Project: DiagInfect-AI medical diagnostic platform.",
    highlights: [
      "PFE: Designed and developed DiagInfect-AI from requirements to deployment",
      "Studied formal methods, Prolog, cryptography, and software process models",
      "Top 10% of cohort in Software Architecture coursework",
    ],
  },
  {
    id: "bac-2022",
    type: "education",
    role: "Baccalauréat — Sciences (Mathematics Stream)",
    organization: "Lycée Frères Mentouri",
    location: "Algiers, Algeria",
    startDate: "Sep 2019",
    endDate: "Jun 2022",
    description:
      "Graduated with distinction in the Mathematics stream. Foundation in pure mathematics, physics, and computer science fundamentals.",
    highlights: ["Graduated with Mention Très Bien (High Honours)"],
  },
];

export const workExperience = experience.filter((e) => e.type === "work");
export const education = experience.filter((e) => e.type === "education");
