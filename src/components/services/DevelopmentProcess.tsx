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
    <section className="pb-4 md:py-10 bg-slate-50 overflow-hidden antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER AREA */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          
           <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Our Process
            </span>
          </div>

          <h2 className="mt-3 text-xl md:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
            From Idea To{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.1em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Deployment
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
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            A structured process that transforms ideas into scalable digital products.
          </p>
        </div>

        {/* TIMELINE TRACK */}
        <div className="relative">

          {/* CURVED TIMELINE LINE (PERFECTLY PRESERVED) */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full pointer-events-none select-none z-0">
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

          {/* TIMELINE STEPS */}
          <div className="space-y-10 md:space-y-14 relative z-10">
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

                  {/* DOWNSIZED COMPACT CARD CONTAINER */}
                  <div
                    className={`
                      w-[80%] sm:w-[70%] md:w-[42%]
                      ml-auto md:ml-0
                      ${isEven ? "md:mr-auto" : "md:ml-auto"}
                    `}
                  >
                    <div
                      className={`
                        bg-white rounded-2xl border p-5
                        transition-all duration-300
                        hover:shadow-lg
                        ${isActive ? "border-[var(--primary)] shadow-md scale-[1.01]" : "border-slate-200/80"}
                      `}
                    >
                      {/* Compact Inner Content Elements */}
                      <div className="flex items-center gap-3">
                        <div
                          className={`
                            w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0
                            ${isActive
                              ? "bg-[var(--primary)] text-white"
                              : "bg-[var(--primary)]/10 text-[var(--primary)]"
                            }
                          `}
                        >
                          <Icon size={18} className="md:size-[20px]" />
                        </div>

                        {/* Downscaled Core Typography Headers */}
                        <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
                          {step.title}
                        </h3>
                      </div>

                      {/* Compact Supporting Body Copy */}
                      <p className="mt-2.5 text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* ROUND NUMBER TIMELINE NODE (PERFECTLY PRESERVED DESIGN) */}
                  <div
                    className={`
                      absolute left-2 md:left-1/2 md:-translate-x-1/2
                      flex items-center justify-center
                      font-bold shadow-md border-2 border-white transition-all duration-300 rounded-full select-none

                      w-7 h-7 text-xs
                      md:w-14 md:h-14 md:text-base md:border-[5px]

                      ${isActive
                        ? "bg-[var(--primary)] text-white scale-110 shadow-md"
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