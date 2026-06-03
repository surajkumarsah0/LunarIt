import { useEffect, useRef, useState } from "react";
import {
  UserPlus,
  BookOpen,
  Laptop,
  Briefcase,
  Users,
  FileCheck,
  Trophy,
} from "lucide-react";

const journey = [
  { number: "01", title: "Enroll In Program", description: "Choose the training program that aligns with your career goals.", icon: UserPlus },
  { number: "02", title: "Learn Fundamentals", description: "Build strong foundations through structured learning and practical sessions.", icon: BookOpen },
  { number: "03", title: "Build Real Projects", description: "Work on industry-oriented projects to strengthen your portfolio.", icon: Laptop },
  { number: "04", title: "Internship Experience", description: "Gain hands-on experience working on real development environments.", icon: Briefcase },
  { number: "05", title: "Mentorship & Guidance", description: "Receive guidance from experienced developers and industry professionals.", icon: Users },
  { number: "06", title: "Interview Preparation", description: "Mock interviews, resume reviews and career development sessions.", icon: FileCheck },
  { number: "07", title: "Career Success", description: "Become industry-ready and confidently pursue job opportunities.", icon: Trophy },
];

export default function LearningJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[var(--accent)]">
            Learning Journey
          </span>

          <h2 className="mt-4 text-3xl md:text-6xl font-extrabold tracking-tight">
            Your Path To Success
          </h2>

          <p className="mt-6 text-base md:text-lg text-slate-600 leading-7 md:leading-8">
            A structured learning roadmap designed to take you from beginner to industry-ready professional.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CURVED LINE (LEFT MOBILE + CENTER DESKTOP) */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full">
            <svg className="h-full w-[70px] md:w-[160px]" viewBox="0 0 160 1400" preserveAspectRatio="none">
              <path
                d="
                M80 0
                C20 100,140 180,80 280
                C20 380,140 460,80 560
                C20 660,140 740,80 840
                C20 940,140 1020,80 1120
                C20 1220,140 1300,80 1400
                "
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="3"
                strokeDasharray="10 10"
              />
            </svg>
          </div>

          <div className="space-y-14 md:space-y-20">

            {journey.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              const isActive = activeIndex === index;

              return (
                <div
                  key={step.number}
                  ref={(el) => (refs.current[index] = el)}
                  data-index={index}
                  className="relative flex md:items-center justify-end"
                >

                  {/* CARD */}
                  <div
                    className={`
                      w-[80%] sm:w-[70%] md:w-[42%]
                      ml-auto md:ml-0
                      ${isLeft ? "md:mr-auto" : "md:ml-auto"}
                      transition-all duration-300
                    `}
                  >
                    <div
                      className={`
                        bg-white rounded-2xl md:rounded-3xl border p-5 md:p-8
                        hover:shadow-xl hover:-translate-y-1 transition-all

                        ${isActive
                          ? "border-[var(--primary)] shadow-lg scale-[1.02]"
                          : "border-slate-200"
                        }
                      `}
                    >

                      <div className="flex items-center gap-3 md:gap-4">
                        <div
                          className={`
                            w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition
                            ${isActive
                              ? "bg-[var(--primary)] text-white"
                              : "bg-[var(--primary)]/10 text-[var(--primary)]"
                            }
                          `}
                        >
                          <Icon size={20} className="md:size-[22px]" />
                        </div>

                        <h3 className="text-lg md:text-2xl font-bold">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-3 md:mt-4 text-sm md:text-base text-slate-600 leading-6 md:leading-8">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* NUMBER (mobile small + desktop big center) */}
                  <div
                    className={`
                      absolute left-2 md:left-1/2 md:-translate-x-1/2
                      flex items-center justify-center font-bold
                      border-2 md:border-4 border-white shadow-md transition-all

                      w-7 h-7 text-xs rounded-full
                      md:w-16 md:h-16 md:text-lg

                      ${isActive
                        ? "bg-[var(--primary)] text-white scale-110"
                        : "bg-slate-200 text-slate-700"
                      }
                    `}
                  >
                    {step.number}
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}