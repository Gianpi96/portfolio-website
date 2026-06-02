"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#projects",  label: "Projects"  },
  { href: "#services",  label: "Services"  },
  { href: "#contact",   label: "Contact"   },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight text-white hover:text-brand-400 transition-colors">
          GI<span className="text-brand-400">.</span>dev
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://www.fiverr.com/gianpi_96"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white transition-colors"
            >
              Hire me on Fiverr
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${open ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-white/5 px-4 pb-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-zinc-300 hover:text-white border-b border-white/5 text-sm"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.fiverr.com/gianpi_96"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center text-sm font-medium px-4 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white transition-colors"
          >
            Hire me on Fiverr
          </a>
        </div>
      )}
    </header>
  );
}
