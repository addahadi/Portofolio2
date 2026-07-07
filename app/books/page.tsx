import type { Metadata } from "next";
import BooksShelf from "@/components/BooksShelf";
export const metadata: Metadata = { title: "Books" };
export default function BooksPage() { return <BooksShelf />; }
