import type { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  // ── Work ────────────────────────────────────────────────────────────────
  {
    id: "freelance-2025",
    type: "work",
    role: "Freelance Full-Stack Developer",
    organization: "Independent",
    location: "Remote",
    startDate: "Jun 2025",
    endDate: "Present",
    description:
      "Building and hosting full-stack web applications and SaaS products for clients across different domains — from initial requirements and system design through to deployment. Comfortable owning a project end-to-end: gathering requirements directly with clients, designing the architecture and data model, building both frontend and backend, and deploying to production.",
    highlights: [
      "Delivered client projects across different domains, including a municipal property management platform (case study, UML, implementation, and testing) and an intelligent equipment refurbishment marketplace for a startup",
      "Handled requirements gathering directly with non-technical clients, translating real-world processes into system design",
      "Deployed and hosted full-stack apps in production, not just delivered code",
    ],
  },
  {
    id: "clubs-2024",
    type: "work",
    role: "Community Member & Workshop Organizer",
    organization: "GDG Algiers · CyberNexus · CSE · Innov Bio",
    location: "Tiaret & Algiers, Algeria",
    startDate: "2024",
    endDate: "Present",
    description:
      "Active across several university and community clubs — GDG Algiers, CyberNexus (Developer, 2025/2026), CSE, and the InnovBio scientific/biology innovation club (2024/2025). Delivered hands-on workshops and organized club events and podcasts.",
    highlights: [
      "Delivered workshops with CSE and CyberNexus on web development bootcamps, Git, UML, and operating systems",
      "Instructed the Frontend Development workshop for CyberNexus",
      "Organized club events and podcasts alongside regular workshop delivery",
      "Won Best Idea in a GDG Algiers competition, building GDG Impact Hub with a small team",
    ],
  },
  // ── Education ────────────────────────────────────────────────────────────
  {
    id: "master-ai-2026",
    type: "education",
    role: "Master's in Artificial Intelligence",
    organization: "Ibn Khaldoun University",
    location: "Tiaret, Algeria",
    startDate: "Sep 2026",
    endDate: "Present",
    description:
      "Continuing on to a Master's degree specializing in Artificial Intelligence, following a Licence in Computer Science.",
    highlights: [],
  },
  {
    id: "licence-cs-2023",
    type: "education",
    role: "Licence in Computer Science — Graduated Top of Class",
    organization: "Ibn Khaldoun University",
    location: "Tiaret, Algeria",
    startDate: "Sep 2023",
    endDate: "Jun 2026",
    description:
      "Licence (LMD system) in Computer Science — Mathématiques et Informatique — with a third-year specialization in Information Systems (Systèmes d'Information). Graduated 1st in the cohort.",
    highlights: [
      "Graduated as major of promotion (1st in class)",
      "Specialized in Information Systems (Systèmes d'Information) in the final year",
      "Applied coursework directly to real projects — requirements engineering, UML design, and system architecture across client and team work",
    ],
  },
];

export const workExperience = experience.filter((e) => e.type === "work");
export const education = experience.filter((e) => e.type === "education");