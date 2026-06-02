"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name:    string;
  email:   string;
  budget:  string;
  message: string;
}

const budgetOptions = [
  "< $150",
  "$150 – $500",
  "$500 – $1,000",
  "> $1,000",
  "Not sure yet",
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 section-padding">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Let&apos;s build something
          </h2>
          <p className="text-zinc-400">
            Describe your project and I&apos;ll come back with a timeline and price within 24 hours.
            No commitment required.
          </p>
        </div>

        {/* Success state */}
        {status === "ok" ? (
          <div className="glass rounded-3xl p-10 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
            <p className="text-zinc-400">I&apos;ll reply within 24 hours. Check your inbox.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-brand-400 hover:text-brand-300 underline underline-offset-2"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-3xl p-6 sm:p-10 space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Your name
              </label>
              <input
                {...register("name", { required: "Name is required", minLength: { value: 2, message: "At least 2 characters" } })}
                placeholder="Jane Smith"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-400/50 transition-colors text-sm"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Email address
              </label>
              <input
                {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" } })}
                type="email"
                placeholder="jane@startup.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-400/50 transition-colors text-sm"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Budget range
              </label>
              <select
                {...register("budget")}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 focus:outline-none focus:border-brand-400/50 transition-colors text-sm"
              >
                <option value="">Select a range…</option>
                {budgetOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Tell me about your project
              </label>
              <textarea
                {...register("message", { required: "Message is required", minLength: { value: 20, message: "Please add a bit more detail (20+ chars)" } })}
                rows={5}
                placeholder="I'm building a SaaS that does X. I need help with Y. The biggest challenge is Z…"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-400/50 transition-colors text-sm resize-none"
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
            </div>

            {/* Error banner */}
            {status === "error" && (
              <p className="text-sm text-red-400 text-center">
                Something went wrong. Try emailing me directly at{" "}
                <a href="mailto:ingrassiagianpaolo@gmail.com" className="underline">ingrassiagianpaolo@gmail.com</a>.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-brand-500/20"
            >
              {status === "loading" ? "Sending…" : "Send message →"}
            </button>

            <p className="text-xs text-zinc-600 text-center">
              Or find me directly on{" "}
              <a href="https://www.fiverr.com/gianpi_96" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 underline underline-offset-2">
                Fiverr
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
