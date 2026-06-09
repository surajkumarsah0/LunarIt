import React from 'react'
import {
  Briefcase,
  Cpu,
  Users,
  GraduationCap,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const features = [
  {
    number: "1",
    title: "Industry Experience",
    description:
      "Experienced professionals delivering reliable and scalable IT solutions.",
    icon: Briefcase,
  },
  {
    number: "2",
    title: "Modern Technologies",
    description:
      "Leveraging the latest technologies to build future-ready digital products.",
    icon: Cpu,
  },
  {
    number: "3",
    title: "Expert Team",
    description:
      "A dedicated team committed to quality, innovation, and business growth.",
    icon: Users,
  },
  {
    number: "4",
    title: "Internship Opportunities",
    description:
      "Providing students with real-world project exposure and mentorship.",
    icon: GraduationCap,
  },
  {
    number: "5",
    title: "Reliable Support",
    description:
      "Continuous support and maintenance for long-term success.",
    icon: ShieldCheck,
  },
  {
    number: "6",
    title: "Innovation First",
    description:
      "We continuously explore new possibilities to deliver exceptional value.",
    icon: Rocket,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="relative pt-2 pb-12 md:pb-16 bg-white overflow-hidden antialiased">
      {/* Your exact glowing background elements configuration */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Container with minimized top spacing */}
        <div className="text-center max-w-xl mx-auto animate-[fadeInUp_0.6s_ease-out_forwards]">
          
          {/* Integrated Pulsing Indicator with your exact tag intact */}
          <div className="flex items-center justify-center gap-2 mb-3.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase">
              Why Choose Us?
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Driving Business Growth Through{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.25em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Your Business
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
          
          <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal max-w-lg mx-auto">
            We combine technology expertise, industry knowledge, and innovative thinking to help businesses and students achieve meaningful success.
          </p>
        </div>

        {/* Cards */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
  {features.map((feature) => {
    const Icon = feature.icon;

    return (
      <div
        key={feature.title}
        className="
        group
        relative
        overflow-hidden
        bg-white/80
        backdrop-blur-xl
        border
        border-slate-200/60
        rounded-2xl
        p-6
        shadow-sm
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
        {/* Scaled Floating Number Asset Backdrop */}
        <div
          className="
          absolute
          top-4
          right-4
          text-5xl
          font-black
          text-slate-100/80
          group-hover:text-[var(--primary)]/10
          transition-colors
          duration-300
          select-none
          pointer-events-none
          "
        >
          {feature.number.toString().padStart(2, "0")}
        </div>

        <div>
          {/* Synchronized Core Icon Box */}
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

          {/* Tightened Content Stack */}
          <h3 className="mt-5 text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            {feature.title}
          </h3>

          <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            {feature.description}
          </p>
        </div>

        {/* Premium Underline Indicator Lane */}
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
  )
}

export default WhyChooseUs;