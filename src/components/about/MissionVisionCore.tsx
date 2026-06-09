import React from "react";
import { Target, Eye, GraduationCap } from "lucide-react";
import { FaExclamation } from "react-icons/fa";

// Robust dataset featuring unique product text definitions
const coreValues = [
  {
    title: "Innovation",
    desc: "Pioneering state-of-the-art technological pathways to constantly stay ahead of digital engineering trends."
  },
  {
    title: "Excellence",
    desc: "Maintaining relentless attention to high architectural design parameters and bug-free code deployments."
  },
  {
    title: "Integrity",
    desc: "Cultivating profound corporate transparency, architectural security, and dependable customer relationships."
  },
  {
    title: "Growth",
    desc: "Empowering organizational scalability and continuous professional development across all global layers."
  }
];

const MissionVisionCore = () => {
  return (
    <section className="py-10 md:py-20 bg-[var(--primary-dark)] text-white relative overflow-hidden antialiased">

      {/* BACKGROUND GRAPHIC GLOW */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[var(--accent)] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= HEADER BLOCK ================= */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge Indicator */}
           <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
             foundation
            </span>
          </div>

          {/* Typography Scale Downsizing & Premium Underline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
            Mission • Vision •{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.05em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Values
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

          {/* Micro-Copy Subtext Frame */}
          <p className="mt-4 text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed font-normal">
            The foundational principles that explicitly define our corporate identity, purpose, and long-term tech architecture trajectory.
          </p>
        </div>

        {/* ================= TIMELINE MATRIX ================= */}
        <div className="relative mt-16 md:mt-20">

          {/* CENTER ARCHITECTURAL TIMELINE LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-12">

            {/* ================= 01: MISSION BLOCK ================= */}
            <div className="relative flex md:justify-start justify-center">
              <div className="w-full md:w-[42%] group relative bg-white/5 border border-white/5 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10">
                
                {/* BIG NUMBER BACKGROUND */}
                <div className="absolute top-4 right-6 text-5xl font-black text-white/5 group-hover:text-[var(--accent)]/10 transition-colors duration-300 select-none pointer-events-none">
                  01
                </div>

                <div className="flex items-start gap-4">
                  <Target size={28} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-[var(--accent)] transition-colors duration-300">
                      Our Mission
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                      Deliver innovative technology solutions that empower businesses and individuals to achieve sustainable growth through modern digital transformation and engineering excellence.
                    </p>
                  </div>
                </div>
              </div>

              {/* CENTER HUB NODE */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-full bg-[var(--accent)] text-black text-xs font-bold items-center justify-center border-4 border-[var(--primary-dark)] shadow-md select-none pointer-events-none">
                01
              </div>
            </div>

            {/* ================= 02: VISION BLOCK ================= */}
            <div className="relative flex md:justify-end justify-center">
              <div className="w-full md:w-[42%] group relative bg-white/5 border border-white/5 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10">
                
                {/* BIG NUMBER BACKGROUND */}
                <div className="absolute top-4 right-6 md:right-auto md:left-6 text-5xl font-black text-white/5 group-hover:text-[var(--accent)]/10 transition-colors duration-300 select-none pointer-events-none">
                  02
                </div>

                <div className="flex items-start gap-4 md:flex-row-reverse">
                  <Eye size={28} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <div className="md:text-right">
                    <h3 className="text-lg font-bold group-hover:text-[var(--accent)] transition-colors duration-300">
                      Our Vision
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                      Become a globally recognized technology company known for continuous integration, product innovation, and highly impactful software architecture deployments across enterprise markets.
                    </p>
                  </div>
                </div>
              </div>

              {/* CENTER HUB NODE */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-full bg-[var(--accent)] text-black text-xs font-bold items-center justify-center border-4 border-[var(--primary-dark)] shadow-md select-none pointer-events-none">
                02
              </div>
            </div>

            {/* ================= 03+: VALUE ARRAY ITERATIONS ================= */}
            {coreValues.map((value, index) => {
              const isLeft = index % 2 === 0;
              const displayNum = String(index + 3).padStart(2, "0");

              return (
                <div
                  key={value.title}
                  className={`relative flex ${isLeft ? "md:justify-start" : "md:justify-end"} justify-center`}
                >
                  <div className="w-full md:w-[42%] group relative bg-white/5 border border-white/5 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10">

                    {/* BIG BACKGROUND NUMBER */}
                    <div
                      className={`
                        absolute
                        top-4
                        ${isLeft ? "right-6" : "right-6 md:right-auto md:left-6"}
                        text-5xl
                        font-black
                        text-white/5
                        group-hover:text-[var(--accent)]/10
                        transition-colors
                        duration-300
                        select-none
                        pointer-events-none
                      `}
                    >
                      {displayNum}
                    </div>
                          <GraduationCap size={28} className="text-[var(--accent)] shrink-0 mt-0.5"/>
                    <div className={`flex items-start gap-4 ${!isLeft ? "md:flex-row-reverse" : ""}`}>
                      <div className={`w-full ${!isLeft ? "md:text-right" : ""}`}>
                        <h3 className="text-lg font-bold group-hover:text-[var(--accent)] transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                          {value.desc}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* CENTER HUB NODE */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-full bg-[var(--accent)] text-black text-xs font-bold items-center justify-center border-4 border-[var(--primary-dark)] shadow-md select-none pointer-events-none">
                    {displayNum}
                  </div>
                </div>
              );
            })}

          </div>
        </div>

     

      </div>
    </section>
  );
};

export default MissionVisionCore;