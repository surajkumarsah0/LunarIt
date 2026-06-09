import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const trainings = [
  "Website Development",
  "Front-End Development",
  "Back-End Development",
  "AI & Machine Learning",
  "UI/UX Design",
  "Internship Program",
  "Mobile App Development",
];

const TrainingPrograms = () => {
  return (
    <section className="py-20 bg-[var(--primary-dark)] text-white overflow-hidden antialiased">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
         <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              training Program
            </span>
          </div>

          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
            Learn.
                    <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.1em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
               Build.
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
             Grow.
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed text-xs sm:text-sm md:text-base max-w-xl mx-auto">
            Industry-focused training designed to equip students and professionals with practical, job-ready skills.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-16 md:mt-20">

          {/* Center Line (Preserved structural placement) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {trainings.map((training, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={training}
                  className={`
                    relative
                    flex
                    items-center
                    ${isEven ? "md:justify-start" : "md:justify-end"}
                  `}
                >
                  {/* Content Block */}
                  <div className="w-full md:w-[42%] group">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl md:text-5xl font-black text-white/10 tracking-tight select-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-base sm:text-lg md:text-xl font-bold group-hover:text-[var(--accent)] transition-colors duration-300">
                        {training}
                      </h3>
                    </div>

                    <div className="mt-3 h-px bg-white/10 group-hover:bg-[var(--accent)] transition-colors duration-300" />
                  </div>

                  {/* Circular Node Asset (Preserved circle layout) */}
                  <div
                    className="
                    hidden
                    md:flex
                    absolute
                    left-1/2
                    -translate-x-1/2
                    w-11
                    h-11
                    rounded-full
                    bg-[var(--accent)]
                    text-black
                    text-xs
                    font-bold
                    items-center
                    justify-center
                    border-[6px]
                    border-[var(--primary-dark)]
                    shadow-md
                    select-none
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* COMPACT CTA BANNER */}
        <div
          className="
          mt-20
          bg-white/5
          border
          border-white/10
          rounded-2xl
          p-6
          md:p-10
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-6
          "
        >
          <div className="text-center lg:text-left">
            <span className="text-[var(--accent)] uppercase tracking-[0.3em] text-xs font-semibold">
              Start Learning Today
            </span>

            <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
              Explore Our Complete Training Catalog
            </h3>

            <p className="mt-2 text-white/70 max-w-xl text-xs sm:text-sm leading-relaxed font-normal">
              Browse all available courses, internship programs, certifications, and professional development tracks.
            </p>
          </div>

          <Link
            to="/training"
            className="
            inline-flex
            items-center
            gap-2.5
            px-6
            py-3
            rounded-full
            bg-[var(--accent)]
            text-black
            text-xs sm:text-sm
            font-semibold
            hover:scale-105
            transition-transform
            duration-300
            shrink-0
            "
          >
            View All Programs
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TrainingPrograms;