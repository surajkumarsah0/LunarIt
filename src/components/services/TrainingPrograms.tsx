import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const trainings = [
  "MERN Stack Development",
  "Python Programming",
  "AI & Machine Learning",
  "UI/UX Design",
  "Internship Program",
];

const TrainingPrograms = () => {
  return (
    <section className="py-32 bg-[var(--primary-dark)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.3em] text-[var(--accent)] text-sm font-semibold">
            Training Programs
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-extrabold tracking-tight">
            Learn. Build. Grow.
          </h2>

          <p className="mt-6 text-white/70 leading-8 text-lg">
            Industry-focused training designed to equip students
            and professionals with practical, job-ready skills.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Center Line */}

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-20">

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
                  {/* Content */}

                  <div
                    className="
                    w-full
                    md:w-[42%]
                    group
                    "
                  >
                    <div
                      className="
                      flex
                      items-center
                      gap-5
                      "
                    >
                      <span
                        className="
                        text-6xl
                        font-black
                        text-white/10
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3
                        className="
                        text-2xl
                        md:text-3xl
                        font-bold

                        group-hover:text-[var(--accent)]
                        transition
                        "
                      >
                        {training}
                      </h3>
                    </div>

                    <div
                      className="
                      mt-5
                      h-px
                      bg-white/10

                      group-hover:bg-[var(--accent)]
                      transition
                      "
                    />
                  </div>

                  {/* Circle */}

                  <div
                    className="
                    hidden
                    md:flex

                    absolute
                    left-1/2
                    -translate-x-1/2

                    w-14
                    h-14

                    rounded-full

                    bg-[var(--accent)]
                    text-black

                    font-bold

                    items-center
                    justify-center

                    border-8
                    border-[var(--primary-dark)]

                    shadow-lg
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}

        <div
          className="
          mt-28

          bg-white/5
          border
          border-white/10

          rounded-[32px]

          p-10
          md:p-14

          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-8
          "
        >
          <div>
            <span className="text-[var(--accent)] uppercase tracking-[0.3em] text-sm">
              Start Learning Today
            </span>

            <h3 className="mt-4 text-3xl md:text-4xl font-extrabold">
              Explore Our Complete Training Catalog
            </h3>

            <p className="mt-4 text-white/70 max-w-2xl leading-8">
              Browse all available courses, internship programs,
              certifications, and professional development tracks.
            </p>
          </div>

          <Link
            to="/training"
            className="
            inline-flex
            items-center
            gap-3

            px-8
            py-4

            rounded-full

            bg-[var(--accent)]
            text-black

            font-semibold

            hover:scale-105
            transition
            "
          >
            View All Programs

            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TrainingPrograms;