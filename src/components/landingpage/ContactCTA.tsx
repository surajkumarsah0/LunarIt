import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const ContactCTA = () => {
  return (
    <section className="relative pt-10 mt-10 pb-16 bg-[var(--primary-dark)] text-white overflow-hidden antialiased">
      {/* Background Decorative Glow Configurations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary)]/15 blur-3xl rounded-full pointer-events-none select-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent)]/10 blur-3xl rounded-full pointer-events-none select-none" />

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        
        {/* Integrated Pulsing Indicator Tag */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
          </span>
          <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
            Get In Touch
          </span>
        </div>

        {/* Typography Optimized Heading with Hand-Drawn Cursive Highlight */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight text-white">
          Let’s Build Something Great{" "}
          <span className="relative inline-block whitespace-nowrap px-1">
            <span className="font-['Caveat',_cursive] text-[1.25em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
              Together
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

        <p className="mt-4 text-slate-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-normal">
          Have a project idea? Let’s discuss your objectives and bring them to life with enterprise technology.
        </p>

        {/* Polished Call To Action Link Button */}
        <Link
          to="/contact"
          className="
          group
          inline-flex
          items-center
          gap-2.5
          mt-8
          px-8 py-3.5
          rounded-xl
          bg-[var(--primary)]
          hover:bg-[var(--accent)]
          text-white
          font-semibold
          text-sm sm:text-base
          shadow-md
          transition-all
          duration-300
          hover:shadow-lg
          "
        >
          Contact Us
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>

      </div>
    </section>
  );
};

export default ContactCTA;