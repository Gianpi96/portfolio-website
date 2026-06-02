"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const stats = [
  { value: "3",    label: "Open-source projects" },
  { value: "48h",  label: "Typical first delivery"  },
  { value: "100%", label: "Satisfaction guarantee"  },
];

const techBadges = ["Next.js 14", "TypeScript", "Stripe", "Prisma", "OpenAI", "Vercel", "Tailwind"];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width)  * 100;
      const y = ((e.clientY - rect.top)  / rect.height) * 100;
      el.style.setProperty("--mouse-x", `${x}%`);
      el.style.setProperty("--mouse-y", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at var(--mouse-x, 60%) var(--mouse-y, 30%), rgba(14,165,233,0.08) 0%, transparent 60%), #09090b",
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-32">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-zinc-300 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new projects · Starting from $150
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.08] tracking-tight text-balance mb-6 animate-fade-up">
          Your startup needs code.{" "}
          <span className="gradient-text">I ship it.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Full-stack developer who turns your idea into a production SaaS in days — with payments,
          auth, and AI built in from day one. No hand-holding required.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <a
            href="https://www.fiverr.com/gianpi_96"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-500/20"
          >
            View Fiverr Gigs →
          </a>
          <Link
            href="#projects"
            className="px-8 py-3.5 rounded-full glass text-zinc-200 hover:text-white font-semibold text-sm transition-all hover:scale-105"
          >
            See My Work
          </Link>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 justify-center mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {techBadges.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-xs font-medium glass text-zinc-400">
              {t}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-4">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-zinc-500 mt-1 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-zinc-600">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
}
