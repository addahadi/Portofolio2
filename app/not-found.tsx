import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "404 — Page Not Found" };

export default function NotFound() {
  return (
    <div className="dark-strip min-h-screen flex items-center justify-center px-6 text-center">
      <div className="max-w-md">
        {/* Giant 404 */}
        <div
          className="font-display leading-none text-[clamp(100px,25vw,200px)] text-white/[0.04] select-none mb-4"
          aria-hidden
        >
          404
        </div>

        <div className="-mt-16 relative z-10">
          <span className="font-display text-8xl text-accent lime-glow block mb-6">404</span>
          <h1 className="font-heading font-bold text-2xl text-white mb-3">
            Page not found
          </h1>
          <p className="font-body text-muted text-base mb-8 leading-relaxed">
            This page seems to have vanished into the void. Let&apos;s get you back
            somewhere useful.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">
              ← Back to Home
            </Link>
            <Link href="/projects" className="btn-outline">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
