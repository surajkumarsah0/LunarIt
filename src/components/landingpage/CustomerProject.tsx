import React from 'react'
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const CustomerProject = () => {
  return (
    <section className="relative pt-10 pb-12 md:pb-16 bg-white overflow-hidden antialiased">

      {/* Alternate Section Glowing Background Configuration */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Centered Topic Header Area Area */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-[fadeInUp_0.6s_ease-out_forwards]">
          
          {/* Integrated Pulsing Indicator Tag */}
          <div className="flex items-center justify-center gap-2 mb-3.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Customer Success
            </span>
          </div>

         
           <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Real Systems Built For{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.25em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Real Impact
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
            We build enterprise-ready production setups and modern software platforms for fast-growing businesses.
          </p>
        </div>

        {/* Project Card Display Container */}
        <div className="mt-12 md:mt-16 flex justify-center">

          <Link
            to="https://www.safariyatri.com.np/"
            className="
            group
            w-full max-w-2xl
            bg-white
            border
            border-slate-100
            rounded-3xl
            overflow-hidden
            shadow-xl
            hover:-translate-y-2
            transition-all
            duration-500
            "
          >
            {/* Image Box */}
            <div className="overflow-hidden relative h-[260px] sm:h-[420px]">
              <img
                src="../../public/ca4cfd6e-d5c1-4260-8aee-4966bda9c0e8.png"
                alt="Safari Yatri Platform Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Typography Optimized Card Content */}
            <div className="p-6 sm:p-8">

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Safari Yatri
              </h3>

              <p className="mt-3 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                Digital E-Rickshaw Services in Nepal Your Ride Partner. Experience easy and safe e-rickshaw booking. Book quickly and enjoy a comfortable, quiet ride.
              </p>

              <div className="mt-6 flex items-center gap-2 text-[var(--primary)] group-hover:text-[var(--accent)] font-semibold text-sm sm:text-base tracking-wide transition-colors duration-300">
                View Project Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>

            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CustomerProject;