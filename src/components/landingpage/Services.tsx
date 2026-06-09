import React from 'react'
import {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  PenTool,
  BarChart3,
} from "lucide-react";

const services = [
  {
    number:"01",
    icon: Globe,
    title: "Web Development",
    desc: "Modern, responsive and scalable websites built with React, Next.js and MERN stack.",
  },
  { 
    number:"02",
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Android & iOS applications with smooth UI and high performance.",
  },
  {
      number:"03",
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Deployment, hosting and scalable cloud infrastructure for businesses.",
  },
  {
    number:"04",
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Smart AI solutions, automation systems and data-driven applications.",
  },
  {
    number:"05",
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Modern, user-centered design for web and mobile applications.",
  },
  { 
    number:"06",
    icon: BarChart3,
    title: "Digital Marketing",
    desc: "SEO, social media marketing and growth strategies for businesses.",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white antialiased" id="services">

      {/* HERO SECTION */}
      <section className="relative pt-10 pb-12 md:pb-16 bg-[var(--primary-dark)] text-white overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          
          {/* Integrated Pulsing Indicator Tag */}
          <div className="flex items-center justify-center gap-2 mb-3.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Our Services
            </span>
          </div>

          
           <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold  tracking-tight leading-tight">
        We Build Digital Solutions That Scale{" "}
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
          

          <p className="mt-6 text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            From web development to AI solutions, we provide end-to-end technology services that help businesses grow, innovate and succeed.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative pt-10 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto animate-[fadeInUp_0.6s_ease-out_forwards]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              What We Offer
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed font-normal">
              Complete IT solutions tailored for startups, businesses and enterprises.
            </p>
          </div>

          {/* Cards Layout Grid with Integrated Background Serial Numbers */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
  {services.map((service) => {
    const Icon = service.icon;

    return (
      <div
        key={service.title}
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
          {service.number.toString().padStart(2, "0")}
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
            {service.title}
          </h3>

          <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            {service.desc}
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

      {/* CTA SECTION */}
      <section className="relative pt-10 pb-12 md:pb-16 bg-[var(--primary-dark)] text-white overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold  tracking-tight leading-tight">
            Ready to Build Your Next Project?
          </h2>
          

          <p className="mt-6 text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Let’s work together to turn your ideas into powerful digital solutions.
          </p>

          <button className="mt-10 px-10 py-4 bg-[var(--primary)] hover:bg-[var(--accent)] transition rounded-xl font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base tracking-wide">
            Get Started
          </button>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;