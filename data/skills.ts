import type { SkillCategory } from "@/types";

// TODO: Replace icon URLs with real technology logos (e.g. from devicons.dev)
export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      {
        name: "Framer Motion",
        icon: "https://cdn.simpleicons.org/framer/0055FF",
      },
      { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock/88CE02" },
      { name: "Astro", icon: "https://cdn.simpleicons.org/astro/BC52EE" },
      {
        name: "React Query",
        icon: "https://cdn.simpleicons.org/reactquery/FF4154",
      },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql/4169E1",
      },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
      { name: "Zod", icon: "https://cdn.simpleicons.org/zod/3E67B1" },
      { name: "Axios", icon: "https://cdn.simpleicons.org/axios/5A29E4" },
      { name: "REST API", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "JWT Auth", icon: "https://cdn.simpleicons.org/jsonwebtokens/000000" },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
      {
        name: "Supabase",
        icon: "https://cdn.simpleicons.org/supabase/3ECF8E",
      },
      {
        name: "Postman",
        icon: "https://cdn.simpleicons.org/postman/FF6C37",
      },
    ],
  },
  {
    name: "Languages",
    skills: [
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
      },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "C", icon: "https://cdn.simpleicons.org/c/A8B9CC" },
      { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/FFFFFF" },
      { name: "Prolog", icon: "https://placehold.co/32x32/888/FFF?text=P" },
      { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    ],
  },
];

// Flat list for the marquee
export const allSkillsMarquee = skillCategories.flatMap((c) => c.skills);
