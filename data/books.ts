import type { Book } from "@/types";

export const books: Book[] = [
  // Computer Science
  {
    id: "b1",
    title: "Object-Oriented Analysis and Design with Applications",
    author: "Grady Booch",
    cover: "https://placehold.co/150x220/1a1a2e/AAFF00?text=OOA%26D",
    category: "Computer Science",
    takeaway:
      "The foundational text that shaped how I think about decomposing complex systems into objects. Booch's emphasis on notation and process gave me a disciplined approach to modeling before writing a single line of code.",
    rating: 5,
  },
  {
    id: "b2",
    title: "Domain-Driven Design",
    author: "Eric Evans",
    cover: "https://placehold.co/150x220/0d1117/61DAFB?text=DDD",
    category: "Computer Science",
    takeaway:
      "Ubiquitous language, bounded contexts, and aggregates — DDD gave me the vocabulary to bridge the gap between domain experts and code. The strategic patterns are as important as the tactical ones.",
    rating: 5,
  },
  {
    id: "b3",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    cover: "https://placehold.co/150x220/2d1b69/CCFF66?text=DDIA",
    category: "Computer Science",
    takeaway:
      "The most thorough book I've read on distributed systems. Taught me why replication works the way it does, and why eventually consistent systems are harder to reason about than they appear.",
    rating: 5,
  },
  {
    id: "b4",
    title: "Software Requirements",
    author: "Karl Wiegers & Joy Beatty",
    cover: "https://placehold.co/150x220/F7DF1E/000?text=Software+Req",
    category: "Computer Science",
    takeaway:
      "Requirements are the foundation everything else is built on. This book taught me to treat requirements engineering as a first-class discipline — elicitation, analysis, specification, and validation each deserve serious attention.",
    rating: 5,
  },
  {
    id: "b5",
    title: "Software Architecture: The Hard Parts",
    author: "Neal Ford, Mark Richards, Pramod Sadalage & Zhamak Dehghani",
    cover: "https://placehold.co/150x220/0A0A0A/AAFF00?text=Arch+Hard+Parts",
    category: "Computer Science",
    takeaway:
      "Architecture is about trade-offs, not best practices. This book gave me frameworks for making and documenting difficult decomposition decisions — when to split, when to stay monolithic, and how to evaluate the cost of coupling.",
    rating: 5,
  },
  // Philosophy
  {
    id: "b6",
    title: "The Gay Science",
    author: "Friedrich Nietzsche",
    cover: "https://placehold.co/150x220/4a0e0e/e8c547?text=Gay+Science",
    category: "Philosophy",
    takeaway:
      "Where Nietzsche first proclaims the death of God and introduces the eternal recurrence. The joyful wisdom — the idea that knowledge and laughter are not opposites — profoundly shaped how I approach intellectual work.",
    rating: 5,
  },
  {
    id: "b7",
    title: "Human, All Too Human",
    author: "Friedrich Nietzsche",
    cover: "https://placehold.co/150x220/1a1a1a/c0c0c0?text=Human+All+Too",
    category: "Philosophy",
    takeaway:
      "Nietzsche's break from metaphysics and romanticism. The aphoristic style forces you to think independently about every single passage. A masterclass in questioning assumptions you didn't know you held.",
    rating: 5,
  },
  {
    id: "b8",
    title: "Thus Spoke Zarathustra",
    author: "Friedrich Nietzsche",
    cover: "https://placehold.co/150x220/1c2541/ffd700?text=Zarathustra",
    category: "Philosophy",
    takeaway:
      "The Übermensch, the eternal recurrence, the will to power — all woven into a poetic narrative. Nietzsche's most ambitious work challenged me to create my own values rather than inherit them.",
    rating: 5,
  },
  {
    id: "b9",
    title: "Beyond Good and Evil",
    author: "Friedrich Nietzsche",
    cover: "https://placehold.co/150x220/2c003e/ff6b6b?text=Beyond+G%26E",
    category: "Philosophy",
    takeaway:
      "A devastating critique of dogmatic philosophy and conventional morality. Nietzsche's demand that we question every 'truth' — especially the comfortable ones — is a habit I carry into engineering and life alike.",
    rating: 5,
  },
];

export const bookCategories = ["Computer Science", "Philosophy"] as const;
