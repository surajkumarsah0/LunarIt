import React from "react";
import {
  Globe,
  Smartphone,
  Brain,
  Cloud,
  PenTool,
  Briefcase,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Web Development",
    desc: "Scalable web applications built with modern frameworks, optimized performance, and enterprise-grade architecture.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Cross-platform mobile applications delivering seamless experiences across Android and iOS devices.",
  },
  {
    number: "03",
    icon: Brain,
    title: "AI Solutions",
    desc: "Machine learning, automation, and AI-powered systems designed to improve business efficiency.",
  },
  {
    number: "04",
    icon: Cloud,
    title: "Cloud Engineering",
    desc: "Secure and scalable cloud infrastructure, migration, deployment, and DevOps solutions.",
  },
  {
    number: "05",
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Human-centered design systems focused on usability, accessibility, and business impact.",
  },
  {
    number: "06",
    icon: Briefcase,
    title: "IT Consulting",
    desc: "Strategic technology consulting to help organizations innovate, scale, and transform digitally.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="pt-10 pb-16 bg-slate-50 overflow-hidden antialiased">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Scaled Compact Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="
                group
                relative
                overflow-hidden
                bg-white
                rounded-2xl
                border
                border-slate-200/80
                p-6
                hover:border-[var(--primary)]
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                flex
                flex-col
                justify-between
                "
              >
                {/* Scaled Ambient Background Number Badge */}
                <div
                  className="
                  absolute
                  top-4
                  right-4
                  text-5xl
                  font-black
                  text-slate-100/70
                  group-hover:text-[var(--primary)]/10
                  transition-colors
                  duration-300
                  select-none
                  pointer-events-none
                  "
                >
                  {service.number}
                </div>

                {/* Downscaled Core Visual Icon Container */}
                <div>
                  <div
                    className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[var(--primary)]/10
                    flex
                    items-center
                    justify-center
                    group-hover:bg-[var(--primary)]
                    transition-all
                    duration-300
                    "
                  >
                    <Icon
                      size={20}
                      className="
                      text-[var(--primary)]
                      group-hover:text-white
                      transition-colors
                      duration-300
                      "
                    />
                  </div>

                  {/* Tightened Text Content Layout Stack */}
                  <h3 className="mt-5 text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                {/* Premium Base Accent Border Lane */}
                <div
                  className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-0
                  bg-[var(--accent)]
                  group-hover:w-full
                  transition-all
                  duration-300
                  "
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}