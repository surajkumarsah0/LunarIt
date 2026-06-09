import React from "react";

const WhoWeAre = () => {
  return (
    <section className="py-16 md:py-20 bg-white antialiased">
      <div className="max-w-7xl mx-auto px-6">

        {/* COMPACT LAYOUT GRID */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* IMAGE BLOCK */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1773332585687-85beb4da71ab?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Lunar IT team collaborating"
              loading="lazy"
              className="rounded-2xl shadow-md w-full object-cover max-h-[380px] select-none pointer-events-none"
            />
          </div>

          {/* CONTENT BLOCK */}
          <div>
            {/* Badge Indicator */}
                <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
       who we are
            </span>
          </div>

            {/* Typography Scale Downsizing & Premium Cursive Underline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Technology{" "}
              <span className="relative inline-block whitespace-nowrap px-1">
                <span className="font-['Caveat',_cursive] text-[1.05em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                  Partner
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
              For Modern Businesses
            </h2>

            {/* Micro-Copy Paragraph Stack */}
            <div className="mt-5 space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Lunar IT Solution is a technology company dedicated to delivering modern digital products, enterprise-grade software engines, bespoke AI solutions, and specialized technical training programs.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Our ultimate objective is to bridge the strategic gap between complex technology frameworks and business objectives by creating highly scalable architectural solutions that drive direct, measurable organizational impact.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;