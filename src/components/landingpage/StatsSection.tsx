import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "10+", title: "Projects Delivered" },
    { number: "1000+", title: "Students Trained" },
    { number: "95%", title: "Client Satisfaction" },
    { number: "20+", title: "Industry Partners" },
  ];

  return (
    /* Changed py-12/py-16 down to pt-2 pb-12 to minimize space directly above it */
    <section className="pt-10 pb-12 md:pb-16 bg-white overflow-hidden antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Container */}
        <div className="text-center max-w-xl mx-auto animate-[fadeInUp_0.6s_ease-out_forwards]">
          
          <div className="flex items-center justify-center gap-2 mb-3.5">
            <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[var(--accent)] opacity-30 hidden xs:block" />
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
              </span>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase">
              Trusted Partners
            </span>
            </div>
            <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[var(--accent)] opacity-30 hidden xs:block" />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted By Businesses &amp;{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.25em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Students
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
            Across Nepal
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal max-w-lg mx-auto">
            Delivering innovative technology solutions, professional training programs, 
            and career opportunities that drive measurable results.
          </p>
        </div>

        {/* Staggered Animated Grid Layout */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:mt-12">
          {stats.map((item, index) => (
            <div
              key={index}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
              className="group relative bg-white border border-slate-100/90 rounded-xl p-5 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--accent)] hover:border-opacity-30 hover:shadow-xl hover:shadow-slate-100/50 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 pointer-events-none" />
              
              <p className="text-2xl sm:text-3xl font-black text-[var(--primary)] tracking-tight transition-transform duration-300 ease-out group-hover:scale-[1.03]">
                {item.number}
              </p>

              <h3 className="mt-1.5 text-xs font-semibold text-slate-500 group-hover:text-slate-800 transition-colors duration-200 tracking-wide">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;