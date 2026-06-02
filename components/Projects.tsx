"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

interface Project {
  slug:        string;
  title:       string;
  description: string;
  longDesc:    string;
  tech:        string[];
  repoUrl:     string;
  demoUrl?:    string;
  color:       string;
  icon:        string;
}

const GITHUB_USER = "Gianpi96";

const projects: Project[] = [
  {
    slug:        "saas-starter",
    title:       "SaaS Starter",
    description: "Production-ready SaaS boilerplate",
    longDesc:
      "Complete foundation for a SaaS product: auth (NextAuth), billing (Stripe subscriptions), team management, and dashboard — deploy in under 10 minutes.",
    tech:    ["Next.js 14", "TypeScript", "Prisma", "Stripe", "NextAuth", "Tailwind", "PostgreSQL"],
    repoUrl: `https://github.com/${GITHUB_USER}/saas-starter`,
    color:   "from-brand-500/20 to-accent-500/20",
    icon:    "⚡",
  },
  {
    slug:        "stripe-saas",
    title:       "Stripe SaaS",
    description: "Billing-first SaaS with advanced Stripe flows",
    longDesc:
      "Handles subscriptions, usage-based billing, proration, and webhook idempotency. Built after studying what breaks in production — so it won't break in yours.",
    tech:    ["Next.js", "Stripe Webhooks", "TypeScript", "Prisma", "PostgreSQL", "Resend"],
    repoUrl: `https://github.com/${GITHUB_USER}/stripe-saas`,
    color:   "from-violet-500/20 to-brand-500/20",
    icon:    "💳",
  },
  {
    slug:        "ai-automation-agent",
    title:       "AI Automation Agent",
    description: "LLM-powered workflow automation",
    longDesc:
      "Agent that reads, decides, and acts across tools — scraping, email, Notion, Slack. Structured with LangChain tool-calling so it's auditable and extensible.",
    tech:    ["Python", "LangChain", "OpenAI", "FastAPI", "Redis", "Docker"],
    repoUrl: `https://github.com/${GITHUB_USER}/ai-automation-agent`,
    color:   "from-emerald-500/20 to-teal-500/20",
    icon:    "🤖",
  },
];

function useIntersection(ref: React.RefObject<Element>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref  = useRef<HTMLDivElement>(null);
  const show = useIntersection(ref as React.RefObject<Element>);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-2xl glass overflow-hidden transition-all duration-500 cursor-default group
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-50"}`} />

      <div className="relative p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-4xl">{project.icon}</span>
          <div className="flex gap-2 relative z-10">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 text-zinc-200 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo ↗
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 text-zinc-200 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Title & description */}
        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-sm text-brand-400 font-medium mb-3">{project.description}</p>
        <p className="text-sm text-zinc-400 leading-relaxed mb-6">{project.longDesc}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hover border accent */}
      <div className={`absolute inset-0 rounded-2xl ring-1 ring-inset transition-all duration-300 ${hovered ? "ring-brand-400/30" : "ring-transparent"}`} />
    </div>
  );
}

export function Projects() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleVisible = useIntersection(titleRef as React.RefObject<Element>, 0.3);

  return (
    <section id="projects" className="py-24 sm:py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-500 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">
            Open Source Work
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Built in public, used in production
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Every repo ships with real architecture decisions — the kind you only learn after
            something breaks in prod at 2am.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        {/* GitHub link */}
        <div className="text-center mt-12">
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            All repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
