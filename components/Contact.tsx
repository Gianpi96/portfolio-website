export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 section-padding">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">
          Get in touch
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Let&apos;s build something
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-10">
          Have a project in mind? Contact me directly on Fiverr — I reply within 4 hours
          and come back with a timeline and price. No commitment required.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.fiverr.com/gianpi_96"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-500/20"
          >
            Contact me on Fiverr →
          </a>
          <a
            href="mailto:ingrassiagianpaolo@gmail.com"
            className="px-8 py-4 rounded-full glass text-zinc-200 hover:text-white font-semibold text-sm transition-all hover:scale-105"
          >
            Send an email
          </a>
        </div>

        {/* Response time badge */}
        <div className="inline-flex items-center gap-2 mt-10 px-4 py-2 rounded-full glass text-sm text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Typically replies within 4 hours
        </div>
      </div>
    </section>
  );
}
