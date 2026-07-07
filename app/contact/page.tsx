"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import ScrollReveal from "@/components/ScrollReveal";
import { about } from "@/data/about";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [status, setStatus] = useState<FormState>("idle");

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fieldClass = (hasError: boolean) =>
    `w-full bg-white/5 border ${hasError ? "border-red-500" : "border-white/10 focus:border-accent"} 
     rounded-lg px-4 py-3.5 text-white text-sm font-body placeholder-muted/40 outline-none 
     focus:ring-1 focus:ring-accent transition-all duration-200`;

  return (
    <div className="dark-strip min-h-screen pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs text-muted/50 uppercase tracking-widest font-heading mb-3">
            Get in touch
          </p>
          <h1 className="section-title-dark mb-4">
            Let&apos;s <span className="text-gradient">Talk.</span>
          </h1>
          <p className="font-body text-muted text-lg mb-16 max-w-lg">
            Have a project in mind or want to chat about an opportunity? I&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Form */}
          <ScrollReveal className="lg:col-span-3">
            <div className="glass-dark p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <CheckCircle size={40} className="text-accent mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-xl text-white mb-2">Message sent!</h3>
                  <p className="text-muted font-body text-sm">I&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Honeypot */}
                  <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className={fieldClass(!!errors.name)}
                        disabled={status === "loading"}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1 font-body">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className={fieldClass(!!errors.email)}
                        disabled={status === "loading"}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1 font-body">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={form.subject}
                      onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                      className={fieldClass(!!errors.subject)}
                      disabled={status === "loading"}
                    />
                    {errors.subject && <p className="text-red-400 text-xs mt-1 font-body">{errors.subject}</p>}
                  </div>

                  <div>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project or opportunity…"
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className={fieldClass(!!errors.message) + " resize-none"}
                      disabled={status === "loading"}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1 font-body">{errors.message}</p>}
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm font-body bg-red-500/10 px-4 py-3 rounded-lg">
                      <AlertCircle size={16} />
                      Something went wrong. Please email me directly.
                    </div>
                  )}

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-hero-bg/30 border-t-hero-bg rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Sidebar */}
          <ScrollReveal className="lg:col-span-2" delay={0.15}>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-bold text-sm text-muted/60 uppercase tracking-widest mb-4">
                  Reach out directly
                </h3>
                <div className="space-y-3">
                  <a href={`mailto:${about.email}`} className="flex items-center gap-3 text-muted hover:text-accent transition-colors">
                    <Mail size={16} className="text-accent shrink-0" />
                    <span className="font-body text-sm">{about.email}</span>
                  </a>
                  <a href={about.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted hover:text-accent transition-colors">
                    <GithubIcon size={16} className="text-accent shrink-0" />
                    <span className="font-body text-sm">GitHub</span>
                  </a>
                  <a href={about.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted hover:text-accent transition-colors">
                    <LinkedinIcon size={16} className="text-accent shrink-0" />
                    <span className="font-body text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="glass-dark p-5">
                <p className="text-muted/50 text-xs font-body uppercase tracking-widest mb-2">Location</p>
                <p className="text-white font-body text-sm">{about.location}</p>
                <p className="text-accent text-xs font-body mt-2">{about.availability}</p>
              </div>

              <p className="text-muted/40 text-xs font-body leading-relaxed">
                I typically respond within 24 hours on business days. For urgent projects, mention it in the subject line.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
