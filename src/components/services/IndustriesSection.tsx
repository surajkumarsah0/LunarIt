import React from "react";
import ServicesCTA from "./ServicesCTA";

const industries = [
  "Education",
  "Healthcare",
  "Finance",
  "Retail",
  "Government",
  "Startups",
];

const IndustriesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50 antialiased">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
         <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              domains
            </span>
          </div>

          {/* Typography Optimization & Hand-Drawn Cursive Underlining */}
          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Industries We{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.05em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Serve
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-2.5 text-[var(--accent)] opacity-85 pointer-events-none select-none z-0">
                <svg
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  className="w-full h-full fill-none stroke-current stroke-[2.5px] stroke-linecap-round stroke-linejoin-round"
                >
                  <path d="M3,7 C20,2 40,3 60,5 C75,6.5 87,8 97,4 C92,7 65,9 40,8 C20,7 6,5 4,4" />
                </svg>
              </span>
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            We deliver tailored digital solutions across multiple industries, helping organizations transform and scale with technology.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry}
              className="
                group
                relative
                p-6
                md:p-8
                bg-white
                rounded-2xl
                border
                border-slate-200/80
                hover:border-[var(--primary)]
                hover:shadow-lg
                transition-all
                duration-300
                overflow-hidden
              "
            >
              {/* CONTENT */}
              <div className="relative z-10 text-center">
                <h3 className="
                  text-lg
                  md:text-xl
                  font-bold
                  tracking-tight
                  text-slate-900
                  group-hover:text-[var(--primary)]
                  transition-colors
                  duration-300
                ">
                  {industry}
                </h3>

                {/* Subtle horizontal animated line */}
                <div className="
                  mt-4
                  h-px
                  w-0
                  bg-[var(--primary)]
                  mx-auto
                  group-hover:w-12
                  transition-all
                  duration-300
                " />

                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Specialized digital solutions designed for {industry.toLowerCase()} sector transformation.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= COMPACT CTA ================= */}
      <ServicesCTA/>

      </div>
    </section>
  );
};

export default IndustriesSection;