import React from "react";

const JobHero = () => {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden antialiased">
      {/* Background Ambient Radial Glow Setup Layers */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-[120px] rounded-full pointer-events-none select-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--accent)]/5 blur-[100px] rounded-full pointer-events-none select-none z-0" />
      

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-[fadeInUp_0.6s_ease-out_forwards]">
          
          {/* Trademark Dynamic Status Badge Indicator */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Placement Hub
            </span>
          </div>

          {/* Large Scale Typography Heading Layer With Cursive Accentuation Line */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
            Connecting Talent With
            <br />
            Premium{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.15em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Ecosystem Roles
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-4 text-[var(--accent)] opacity-85 pointer-events-none select-none z-0">
                <svg
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  className="w-full h-full fill-none stroke-current stroke-[2.5px] stroke-linecap-round stroke-linejoin-round"
                >
                  <path d="M3,7 C20,2 40,3 60,5 C75,6.5 87,8 97,4 C92,7 65,9 40,8 C20,7 6,5 4,4" />
                </svg>
              </span>
            </span>
          </h1>

          {/* High Readability Supporting Paragraph */}
          <p className="mt-8 text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Accelerate your engineering transition loop. Access exclusive full-time technical vacancies, structured software internships, and localized industry placement tracks curated directly alongside regional tech leaders.
          </p>

        </div>
      </div>
    </section>
  );
};

export default JobHero;