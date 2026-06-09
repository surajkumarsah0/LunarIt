import React from "react";

const TrainingHero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-white to-slate-50 text-slate-900 antialiased">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* ================= ACCENT BADGE INDICATOR ================= */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
            training
            </span>
          </div>

        {/* ================= FLUID DISPLAY TYPOGRAPHY ================= */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
          Learn. Build.{" "}
          <span className="relative inline-block whitespace-nowrap px-1">
            <span className="font-['Caveat',_cursive] text-[1.05em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
              Grow.
            </span>
            <span className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[var(--accent)] opacity-85 pointer-events-none select-none z-0">
              <svg
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                className="w-full h-full fill-none stroke-current stroke-[2.5px] stroke-linecap-round stroke-linejoin-round"
              >
                <path d="M3,7 C20,2 40,3 60,5 C75,6.5 87,8 97,4 C92,7 65,9 40,8 C20,7 6,5 4,4" />
              </svg>
            </span>
          </span>
          <br className="hidden sm:inline" />
          <span className="sm:mt-2 block">Launch Your Career.</span>
        </h1>

        {/* ================= MICRO-COPY FRAMEWORK ================= */}
        <p className="mt-5 max-w-xl mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          Industry-focused training programs, strategic internships, real production-level codebases, and direct engineering mentorship parameters engineered specifically to make students job-ready.
        </p>

      </div>
    </section>
  );
};

export default TrainingHero;