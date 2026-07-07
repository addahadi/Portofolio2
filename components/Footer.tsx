"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { about } from "@/data/about";

const navLinks = [
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="bg-hero-bg border-t border-white/5 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-3xl text-white tracking-wider hover:text-accent transition-colors"
            >
              {about.name.split(" ")[0].toUpperCase()}
              <span className="text-accent">.</span>
            </Link>
            <p className="text-muted text-sm mt-3 font-body leading-relaxed max-w-xs">
              {about.bio}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs text-muted/60 uppercase tracking-widest mb-4 font-heading">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted hover:text-white text-sm transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs text-muted/60 uppercase tracking-widest mb-4 font-heading">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href={about.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={about.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${about.email}`}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
            <p className="text-muted/60 text-xs mt-4 font-body">
              {about.location} · {about.availability}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted/50 text-xs font-body">
            © {year} {about.name}. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-hero-bg transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
