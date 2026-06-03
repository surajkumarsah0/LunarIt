import { useEffect, useRef, useState } from "react";
import {
  ClipboardCheck,
  Lightbulb,
  PenTool,
  Code2,
  Bug,
  Rocket,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "Understanding business objectives, project scope, target audience and technical requirements.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Planning & Strategy",
    description:
      "Creating project roadmap, architecture, milestones and implementation strategy.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Designing intuitive user experiences and visually engaging interfaces.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Development",
    description:
      "Building secure, scalable and high-performance software solutions.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Testing & QA",
    description:
      "Performing quality assurance, performance testing and security validation.",
    icon: Bug,
  },
  {
    number: "06",
    title: "Deployment & Support",
    description:
      "Launching the solution, monitoring performance and providing continuous support.",
    icon: Rocket,
  },
];

export default function DevelopmentProcess() {
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
    <section className="py-20 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[var(--accent)]">
            Our Process
          </span>

          <h2 className="mt-4 text-3xl md:text-6xl font-extrabold">
            From Idea To Deployment
          </h2>

          <p className="mt-6 text-base md:text-lg text-slate-600 leading-7 md:leading-8">
            A structured process that transforms ideas into scalable digital products.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CURVED LINE (LEFT MOBILE + CENTER DESKTOP) */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full">
            <svg
              className="h-full w-[70px] md:w-[120px]"
              viewBox="0 0 120 1000"
              preserveAspectRatio="none"
            >
              <path
                d="
                  M60 0
                  C20 120,100 180,60 300
                  C20 420,100 480,60 600
                  C20 720,100 780,60 900
                "
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="3"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          <div className="space-y-12 md:space-y-20">

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
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
                      ${isEven ? "md:mr-auto" : "md:ml-auto"}
                    `}
                  >
                    <div
                      className={`
                        bg-white rounded-3xl border p-5 md:p-8
                        transition-all duration-300
                        hover:shadow-xl
                        ${isActive ? "border-[var(--primary)] shadow-lg scale-[1.02]" : "border-slate-200"}
                      `}
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <div
                          className={`
                            w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition
                            ${isActive
                              ? "bg-[var(--primary)] text-white"
                              : "bg-[var(--primary)]/10 text-[var(--primary)]"
                            }
                          `}
                        >
                          <Icon size={20} className="md:size-[24px]" />
                        </div>

                        <h3 className="text-lg md:text-2xl font-bold">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-3 md:mt-5 text-sm md:text-base text-slate-600 leading-6 md:leading-8">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* NUMBER (NOW MOBILE + DESKTOP) */}
                  <div
                    className={`
                      absolute left-2 md:left-1/2 md:-translate-x-1/2
                      flex items-center justify-center
                      font-bold shadow-md border-2 border-white transition-all

                      w-7 h-7 text-xs rounded-full
                      md:w-20 md:h-20 md:text-xl md:border-8

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