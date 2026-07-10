"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { about } from "@/data/about";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  // { label: "Testimonials", href: "/testimonials" },
  { label: "Books", href: "/books" },
  // { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleDownloadCV = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = "/cv.docx";
    link.download = "CV_Missoum_Hadi_Adda.docx";
    link.click();
    setTimeout(() => setDownloading(false), 1500);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "navbar-glass" : "bg-transparent"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl text-white tracking-wider hover:text-accent transition-colors"
          >
            {about.name.split(" ")[0].toUpperCase()}
            <span className="text-accent">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link",
                  pathname === link.href && "active"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleDownloadCV}
              className="btn-outline flex items-center gap-2 text-xs"
            >
              <Download size={14} />
              {downloading ? "Downloading…" : "Download CV"}
            </button>
            <Link href="/contact" className="btn-primary text-xs">
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-white hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-hero-bg flex flex-col px-8 pt-24 pb-12"
          >
            <nav className="flex flex-col gap-6 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-heading text-3xl font-bold transition-colors",
                      pathname === link.href
                        ? "text-accent"
                        : "text-white hover:text-accent"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col gap-3 mt-auto">
              <button
                onClick={handleDownloadCV}
                className="btn-outline flex items-center justify-center gap-2 w-full"
              >
                <Download size={16} />
                {downloading ? "Downloading…" : "Download CV"}
              </button>
              <Link href="/contact" className="btn-primary text-center w-full">
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
