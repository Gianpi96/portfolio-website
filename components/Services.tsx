"use client";

interface Service {
  icon:     string;
  title:    string;
  tagline:  string;
  desc:     string;
  fiverrUrl: string;
}

const services: Service[] = [
  {
    icon:     "⚡",
    title:    "SaaS Starter Kit",
    tagline:  "From idea to live SaaS in days, not months",
    desc:     "I build production-ready SaaS applications with authentication, user dashboard, and database — deployed to Vercel and ready for your first users from day one.",
    fiverrUrl: "https://www.fiverr.com/gianpi_96",
  },
  {
    icon:     "💳",
    title:    "Payment Integration",
    tagline:  "Payments that work first time — and every time after",
    desc:     "I integrate payment systems into your web app — Stripe, PayPal, Google Pay, or Apple Pay. Subscriptions, one-time payments, webhooks, and customer portal all handled correctly.",
    fiverrUrl: "https://www.fiverr.com/gianpi_96",
  },
  {
    icon:     "🤖",
    title:    "AI Automation Agent",
    tagline:  "Replace 10 hours of manual work per week",
    desc:     "I build custom AI agents that automate your repetitive workflows — reading emails, updating databases, sending notifications, searching the web — using your existing tools.",
    fiverrUrl: "https://www.fiverr.com/gianpi_96",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 section-padding bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            What I can build for you
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Fixed-scope projects with clear deliverables. Tell me what you need
            and I&apos;ll come back with a timeline and price within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass rounded-3xl p-8 flex flex-col gap-4 hover:border-brand-400/30 transition-all duration-300">
              <span className="text-4xl">{s.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{s.title}</h3>
                <p className="text-sm text-brand-400 font-medium mb-3">{s.tagline}</p>
                <p className="text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
              <a
                href={s.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block w-full text-center py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-brand-500/20"
              >
                Contact on Fiverr →
              </a>
            </div>
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
