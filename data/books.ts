import type { Book } from "@/types";

// TODO: Replace cover URLs with actual book cover images before launch
export const books: Book[] = [
  // Tech
  {
    id: "b1",
    title: "Clean Code",
    author: "Robert C. Martin",
    cover: "https://placehold.co/150x220/1a1a2e/AAFF00?text=Clean+Code",
    category: "Tech",
    takeaway:
      "Code is read far more often than it is written. The naming of a variable is not a trivial decision — it's documentation. This book permanently changed how I think about the craft of writing code.",
    rating: 5,
  },
  {
    id: "b2",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    cover: "https://placehold.co/150x220/0d1117/61DAFB?text=DDIA",
    category: "Architecture",
    takeaway:
      "The most thorough book I've read on distributed systems. Taught me why PostgreSQL replication works the way it does, and why eventually consistent systems are harder to reason about than they appear.",
    rating: 5,
  },
  {
    id: "b3",
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    cover: "https://placehold.co/150x220/2d1b69/CCFF66?text=Pragmatic",
    category: "Tech",
    takeaway:
      "Treat your career like a craft. The chapter on tracer bullets — shipping thin end-to-end slices before building out — reshaped how I approach new projects entirely.",
    rating: 5,
  },
  {
    id: "b4",
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    cover: "https://placehold.co/150x220/F7DF1E/000?text=YDKJS",
    category: "Tech",
    takeaway:
      "Everyone uses JavaScript. Very few people actually understand its prototype chain, closures, and the event loop at a deep level. This series fixed the gaps I didn't know I had.",
    rating: 4,
  },
  // Leadership
  {
    id: "b5",
    title: "The Manager's Path",
    author: "Camille Fournier",
    cover: "https://placehold.co/150x220/0A0A0A/AAFF00?text=Mgr+Path",
    category: "Leadership",
    takeaway:
      "I read this as a developer, not a manager — and it made me a better teammate. Understanding what good managers do (and what makes their job hard) fundamentally changed how I communicate upward.",
    rating: 4,
  },
  {
    id: "b6",
    title: "The Lean Startup",
    author: "Eric Ries",
    cover: "https://placehold.co/150x220/ff6b35/FFFFFF?text=Lean+Startup",
    category: "Product",
    takeaway:
      "Build-measure-learn changed how I think about side projects. Ship the ugliest viable version first, then let real users tell you what matters. Saved me from building features nobody wanted.",
    rating: 4,
  },
  // Self-Development
  {
    id: "b7",
    title: "Deep Work",
    author: "Cal Newport",
    cover: "https://placehold.co/150x220/1a1a1a/AAFF00?text=Deep+Work",
    category: "Self-Development",
    takeaway:
      "Distraction-free deep work is a competitive advantage, not a lifestyle choice. This book made me block my mornings for focused coding and turn off notifications permanently. The output difference is measurable.",
    rating: 5,
  },
  {
    id: "b8",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://placehold.co/150x220/e8f5e9/1b5e20?text=Atomic+Habits",
    category: "Self-Development",
    takeaway:
      "Systems beat goals. The 1% better every day framing is deceptively powerful. I use the habit stacking technique to make consistent code review and documentation writing automatic.",
    rating: 4,
  },
];

export const bookCategories = ["Tech", "Architecture", "Leadership", "Product", "Self-Development"] as const;
