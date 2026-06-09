import React from "react";

const AboutHero = () => {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-b from-white to-slate-50 antialiased">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center">

          {/* Context Tag Line */}
            <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              about lunar it
            </span>
          </div>

          {/* Typography Optimization & Hand-Drawn Underlining */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Building Digital{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.02em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Excellence
              </span>
              <span className="absolute -bottom-1.5 left-0 w-full h-3 text-[var(--accent)] opacity-85 pointer-events-none select-none z-0">
                <svg
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  className="w-full h-full fill-none stroke-current stroke-[2.5px] stroke-linecap-round stroke-linejoin-round"
                >
                  <path d="M3,7 C20,2 40,3 60,5 C75,6.5 87,8 97,4 C92,7 65,9 40,8 C20,7 6,5 4,4" />
                </svg>
              </span>
            </span>{" "}
            Through Innovation &amp; Technology
          </h1>

          {/* Micro-Copy Paragraph Frame */}
          <p className="mt-5 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            We help businesses, startups, and institutions embrace digital transformation through bespoke software development, custom AI engine integrations, structured training programs, and technology consulting frameworks.
          </p>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;