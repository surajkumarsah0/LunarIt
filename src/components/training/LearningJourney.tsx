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
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number((entry.target as HTMLDivElement).dataset.index));
          }
        });
      },
      { threshold: 0.6 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden text-slate-900 antialiased border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER BLOCK ================= */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
             <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              learning Journey
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Your Path To{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.05em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Success
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

          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto font-normal">
            A structured learning roadmap designed to take you from beginner to industry-ready professional.
          </p>
        </div>

        {/* ================= TIMELINE TRACKS ================= */}
        <div className="relative">

          {/* CURVED TIMELINE VECTOR LINE PATH */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full pointer-events-none">
            <svg className="h-full w-[40px] md:w-[120px]" viewBox="0 0 160 1400" preserveAspectRatio="none">
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
                stroke="#f1f5f9"
                strokeWidth="4"
                strokeLinecap="round"
              />
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
                stroke="#cbd5e1"
                strokeWidth="2.5"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="space-y-10 md:space-y-16">
            {journey.map((step, index) => {
              const IconComponent = step.icon;
              const isLeft = index % 2 === 0;
              const isActive = activeIndex === index;

              return (
                <div
                  key={step.number}
                  ref={(el) => { refs.current[index] = el; }}
                  data-index={index}
                  className="relative flex md:items-center justify-end"
                >
                  {/* DETAIL BOX MODULE */}
                  <div
                    className={`
                      w-[85%] sm:w-[75%] md:w-[44%]
                      ml-auto md:ml-0
                      ${isLeft ? "md:mr-auto" : "md:ml-auto"}
                      transition-all duration-500 ease-out
                    `}
                  >
                    <div
                      className={`
                        bg-white rounded-2xl border p-5 md:p-6
                        transition-all duration-300
                        ${isActive
                          ? "border-[var(--accent)] shadow-md shadow-slate-100/80 scale-[1.01]"
                          : "border-slate-200/60 shadow-sm"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`
                            w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300
                            ${isActive
                              ? "bg-[var(--accent)] text-black"
                              : "bg-slate-100 text-slate-700"
                            }
                          `}
                        >
                          <IconComponent size={16} />
                        </div>

                        <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* ACTIVE INDICATOR CHRONO INDEX PILL */}
                  <div
                    className={`
                      absolute left-1.5 md:left-1/2 md:-translate-x-1/2
                      flex items-center justify-center font-bold
                      border-4 border-white shadow-sm transition-all duration-300 select-none pointer-events-none

                      w-7 h-7 text-[10px] rounded-full
                      md:w-11 md:h-11 md:text-xs

                      ${isActive
                        ? "bg-[var(--accent)] text-black scale-105"
                        : "bg-slate-100 text-slate-500"
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