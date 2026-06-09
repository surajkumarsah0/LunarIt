import React from "react";
import { ShieldCheck, Users, MessageSquare, Handshake } from "lucide-react";

// Robust array dataset featuring unique, production-ready definitions and distinct lucide icons
const trustPillars = [
  {
    id: "expertise",
    title: "Industry Expertise",
    desc: "Leveraging years of specialized engineering experience to design scalable, secure, and future-proof digital architectures.",
    icon: ShieldCheck
  },
  {
    id: "centric",
    title: "Client-Centric Approach",
    desc: "Aligning closely with your specific operational ecosystem to engineer solutions tailored strictly to your business objectives.",
    icon: Users
  },
  {
    id: "communication",
    title: "Transparent Communication",
    desc: "Maintaining clear project updates, precise engineering documentation, and honest roadmap statuses at every sprint milestone.",
    icon: MessageSquare
  },
  {
    id: "partnership",
    title: "Long-Term Partnership",
    desc: "Committing to proactive system lifecycle maintenance, scaling optimizations, and iterative support long past your initial launch.",
    icon: Handshake
  }
];

const WhyTrustUs = () => {
  return (
    <section className="py-10 md:py-20 bg-white text-slate-900 relative overflow-hidden antialiased border-t border-slate-100">
      
      {/* SUBTLE LIGHT BACKGROUND GLOW SYSTEM */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-[var(--accent)] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= HEADER BLOCK ================= */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Accent Micro Badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
             trust and reliability
            </span>
          </div>

          {/* Scaled Responsive Headings + Hand-Drawn Underline Element */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Why Businesses{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.05em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Trust
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
            </span>{" "}
            Our Team
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
            We build collaborative partnerships anchored by structural software quality, comprehensive roadmap visibility, and authentic business performance metrics.
          </p>
        </div>

        {/* ================= GRID DISPLAY MATRICES ================= */}
        <div className="grid sm:grid-cols-2 gap-6 mt-12 md:mt-16">
          {trustPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const displayNum = String(index + 1).padStart(2, "0");

            return (
              <div
                key={pillar.id}
                className="
                  group
                  relative
                  p-6 md:p-8
                  rounded-2xl
                  bg-slate-50/60
                  border
                  border-slate-200/60
                  hover:bg-white
                  hover:border-[var(--accent)]
                  hover:shadow-md
                  transition-all
                  duration-300
                "
              >
                {/* LARGE ACCENTUATED BACKDROP RUNTIME NUMBER */}
                <div className="absolute top-4 right-6 text-4xl font-black text-slate-200/50 group-hover:text-[var(--accent)]/10 transition-colors duration-300 select-none pointer-events-none">
                  {displayNum}
                </div>

                <div className="flex items-start gap-4">
                  {/* Icon Block component */}
                  <div className="p-2 rounded-lg bg-slate-200/60 text-slate-700 group-hover:bg-[var(--accent)] group-hover:text-black transition-all duration-300 shrink-0">
                    <IconComponent size={20} />
                  </div>

                  <div>
                    {/* Normalized Font Weights */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[var(--accent)] transition-colors duration-300">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                {/* Micro-Interaction Horizontal Accentuator Line */}
                <div className="
                  mt-5
                  h-px
                  w-0
                  bg-[var(--accent)]
                  group-hover:w-full
                  transition-all
                  duration-500
                  ease-out
                " />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyTrustUs;