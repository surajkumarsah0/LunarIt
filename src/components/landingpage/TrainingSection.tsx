import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "@tanstack/react-router";

const TrainingSection = () => {
  return (
    <section className="py-10 bg-white relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[var(--primary)]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[var(--accent)]/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-3xl border border-slate-100 bg-white/60 backdrop-blur-xl shadow-xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            <div className="flex items-center gap-3 text-[var(--primary)]">
              <GraduationCap className="w-5 h-5" />
              <span className="font-semibold uppercase tracking-wider text-sm">
                Professional Training Programs
              </span>
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
              Learn Industry-Ready Skills
              With Real Project Experience
            </h2>

            <p className="mt-5 text-slate-600 text-lg leading-8">
              We provide structured training in Web Development, AI/ML,
              UI/UX Design, and Full Stack Engineering with hands-on
              projects, mentorship, and internship opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">

              <span className="px-4 py-2 bg-slate-50 rounded-full border">
                Real Projects
              </span>

              <span className="px-4 py-2 bg-slate-50 rounded-full border">
                Industry Mentors
              </span>

              <span className="px-4 py-2 bg-slate-50 rounded-full border">
                Internship Opportunity
              </span>

              <span className="px-4 py-2 bg-slate-50 rounded-full border">
                Certificate
              </span>

            </div>
          </div>

          {/* RIGHT CTA */}
          <div className="flex flex-col items-center lg:items-end gap-4">

            <Link
              to="/training"
              className="
              group
              flex items-center gap-3
              px-8 py-4
              rounded-xl
              bg-[var(--primary)]
              text-white
              font-semibold
              shadow-lg
              hover:bg-[var(--accent)]
              transition
              "
            >
              Explore Training
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>

            <p className="text-sm text-slate-500">
              Start your tech career in Nepal
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TrainingSection;