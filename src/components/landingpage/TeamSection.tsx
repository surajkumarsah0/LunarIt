import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Er. Saroj Ojha",
    role: "Chief Technology Officer",
    image: "../../public/ojha sir.jpg",
    bio: "(CTO)",
  },
  {
    name: "Er. Chandra Prasad Acharya",
    role: "Managing Director",
    image: "../../public/md.jpg",
    bio: "Senior Dotnet Developer",
  },
];

const TeamSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative pt-10 pb-16 bg-white overflow-hidden antialiased">
      {/* Background Glow Configuration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--primary)]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered Topic Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-[fadeInUp_0.6s_ease-out_forwards]">
          
          {/* Integrated Pulsing Indicator Tag */}
          <div className="flex items-center justify-center gap-2 mb-3.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Our Team
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight text-slate-900">
            Meet The{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.25em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Experts
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

          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            A team of passionate engineers, designers, innovators and problem solvers committed to delivering world-class technology solutions.
          </p>

          {/* Navigation Controls Center Alignment */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              onClick={scrollRight}
              className="w-11 h-11 rounded-full bg-[var(--primary)] text-white flex items-center justify-center hover:bg-[var(--accent)] shadow-sm transition-all duration-300"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

  
       {/* Team Slider Container */}
        <div
          ref={scrollRef}
          className="mt-12 md:mt-16 flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="
              min-w-[320px]
              sm:min-w-[350px]
              bg-white
              rounded-3xl
              overflow-hidden
              border
              border-slate-100
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-500
              group
              "
            >
              {/* Image Block Wrapper */}
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Structural Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover Reveal Social Links Container */}
                <div
                  className="
                  absolute
                  bottom-6
                  left-6
                  flex
                  gap-3
                  opacity-0
                  translate-y-6
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-500
                  "
                >
                  {/* You can swap out these dummy anchors with real URLs or link wrappers later */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[var(--accent)] transition-colors duration-300 shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[var(--accent)] transition-colors duration-300 shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[var(--accent)] transition-colors duration-300 shadow-sm"
                  >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
</svg>
                  </a>
                </div>
              </div>

              {/* Typography Optimized Text Content Area */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {member.name}
                </h3>
                
                <p className="mt-1 text-[var(--primary)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  {member.role}
                </p>
                
                <p className="mt-4 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;