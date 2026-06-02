"use client";

import { useRef, useState } from "react";

interface Package {
  name:     string;
  price:    string;
  delivery: string;
  features: string[];
  popular?: boolean;
}

interface Service {
  icon:     string;
  title:    string;
  tagline:  string;
  desc:     string;
  packages: Package[];
  fiverrUrl: string;
}

const services: Service[] = [
  {
    icon:    "⚡",
    title:   "SaaS Starter Kit",
    tagline: "From idea to live SaaS in days, not months",
    desc:
      "You get a production-ready Next.js app with auth, Stripe billing, a user dashboard, and team management — all wired up and deployed to Vercel.",
    fiverrUrl: "https://www.fiverr.com/gianpi_96/saas-starter",
    packages: [
      {
        name:     "Basic",
        price:    "$150",
        delivery: "3 days",
        features: [
          "Next.js 14 + Tailwind setup",
          "NextAuth (Google + email)",
          "Stripe one-time payment",
          "1 Vercel deployment",
          "1 revision",
        ],
      },
      {
        name:     "Standard",
        price:    "$350",
        delivery: "5 days",
        popular:  true,
        features: [
          "Everything in Basic",
          "Stripe subscriptions + webhooks",
          "User dashboard + settings",
          "PostgreSQL + Prisma schema",
          "Email notifications (Resend)",
          "2 revisions",
        ],
      },
      {
        name:     "Premium",
        price:    "$650",
        delivery: "10 days",
        features: [
          "Everything in Standard",
          "Team/org multi-tenancy",
          "Admin panel",
          "Usage-based billing",
          "CI/CD pipeline setup",
          "30-min onboarding call",
          "Unlimited revisions",
        ],
      },
    ],
  },
  {
    icon:    "💳",
    title:   "Stripe Integration",
    tagline: "Payments that work first time — and every time after",
    desc:
      "You get a Stripe integration that handles the tricky parts: webhook idempotency, failed payment recovery, proration, and test coverage.",
    fiverrUrl: "https://www.fiverr.com/gianpi_96/stripe-integration",
    packages: [
      {
        name:     "Basic",
        price:    "$120",
        delivery: "2 days",
        features: [
          "Stripe Checkout session",
          "One-time or subscription",
          "Webhook handler (3 events)",
          "Sandbox + production setup",
        ],
      },
      {
        name:     "Standard",
        price:    "$280",
        delivery: "4 days",
        popular:  true,
        features: [
          "Everything in Basic",
          "All critical webhook events",
          "Customer portal",
          "Failed payment retry logic",
          "Billing dashboard page",
          "Integration tests",
        ],
      },
      {
        name:     "Premium",
        price:    "$500",
        delivery: "7 days",
        features: [
          "Everything in Standard",
          "Usage-based / metered billing",
          "Multi-currency support",
          "Revenue analytics endpoint",
          "Full test suite (Stripe CLI)",
          "30-min strategy call",
        ],
      },
    ],
  },
  {
    icon:    "🤖",
    title:   "AI Automation Agent",
    tagline: "Replace 10 hours of manual work per week",
    desc:
      "You get a custom AI agent that reads your data, makes decisions, and acts across your tools — Slack, Notion, email, or your own API.",
    fiverrUrl: "https://www.fiverr.com/gianpi_96/ai-automation",
    packages: [
      {
        name:     "Basic",
        price:    "$200",
        delivery: "4 days",
        features: [
          "Single-tool agent (e.g. email classifier)",
          "OpenAI GPT-4o integration",
          "Simple prompt chain",
          "Python script + README",
        ],
      },
      {
        name:     "Standard",
        price:    "$450",
        delivery: "7 days",
        popular:  true,
        features: [
          "Multi-tool agent (3 integrations)",
          "LangChain tool-calling",
          "Structured output + logging",
          "FastAPI endpoint to trigger agent",
          "Docker deployment config",
        ],
      },
      {
        name:     "Premium",
        price:    "$900",
        delivery: "14 days",
        features: [
          "Everything in Standard",
          "Custom tool definitions",
          "Memory / context persistence",
          "Dashboard to monitor runs",
          "Weekly runs via cron",
          "2 weeks post-delivery support",
        ],
      },
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  const [activePackage, setActivePackage] = useState(1); // default: Standard

  return (
    <div className="glass rounded-3xl overflow-hidden">
      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-white/5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{service.icon}</span>
          <div>
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
            <p className="text-sm text-brand-400">{service.tagline}</p>
          </div>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed">{service.desc}</p>
      </div>

      {/* Package tabs */}
      <div className="p-6 sm:p-8">
        <div className="flex rounded-xl bg-white/5 p-1 mb-6 gap-1">
          {service.packages.map((pkg, i) => (
            <button
              key={pkg.name}
              onClick={() => setActivePackage(i)}
              className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all relative ${
                activePackage === i
                  ? "bg-brand-500 text-white shadow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {pkg.name}
              {pkg.popular && activePackage !== i && (
                <span className="absolute -top-2 right-1 text-[9px] bg-accent-500 text-white px-1 rounded-full">
                  Popular
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active package details */}
        {(() => {
          const pkg = service.packages[activePackage];
          return (
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-extrabold text-white">{pkg.price}</span>
                <span className="text-sm text-zinc-500">/ project</span>
              </div>
              <p className="text-xs text-zinc-500 mb-5">Delivery: {pkg.delivery}</p>

              <ul className="space-y-2.5 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <svg className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={service.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-brand-500/20"
              >
                Order on Fiverr →
              </a>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

export function Services() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="py-24 sm:py-32 section-padding bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Pick what you need, skip what you don&apos;t
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Fixed-price packages with clear deliverables. No retainers, no ambiguity.
            Money-back guarantee if it doesn&apos;t work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500">
            Need something custom?{" "}
            <a href="#contact" className="text-brand-400 hover:text-brand-300 underline underline-offset-2">
              Send me a message
            </a>{" "}
            and I&apos;ll quote within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
