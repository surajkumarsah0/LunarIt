import React from "react";

const techs = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
];

const TechnologyStack = () => {
  return (
    <section className="py-16 bg-white antialiased">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER AREA */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* Trademark Dynamic Status Badge Indicator */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs">
              Our Stack
            </span>
          </div>

        <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
         Technology{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.05em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
               Stack
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

          <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            We build scalable solutions using modern, production-ready frameworks and cloud architectures.
          </p>
        </div>

        {/* COMPACT CARD GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="
                group
                flex flex-col items-center justify-center
                p-4 rounded-xl
                border border-slate-200/80
                bg-white
                shadow-sm
                hover:border-[var(--primary)]
                hover:shadow-lg
                hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              {/* Downscaled Brand Image Asset Container */}
              <img
                src={tech.logo}
                alt={tech.name}
                loading="lazy"
                className="h-9 w-9 object-contain group-hover:scale-105 transition-transform duration-300 select-none pointer-events-none"
              />

              {/* Tightened Label Stack */}
              <p className="mt-2.5 text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">
                {tech.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnologyStack;