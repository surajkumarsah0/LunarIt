import React from "react";

// Structuring individual image properties with responsive masonry constraints for reliable rendering
const cultureGallery = [
  { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", spans: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", spans: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1556761175-4b46a572b786", spans: "col-span-2 row-span-1" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978", spans: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c", spans: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984", spans: "col-span-2 row-span-1" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0", spans: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", spans: "col-span-1 row-span-1" }
];

const WorkCulture = () => {
  return (
    <section className="py-10 md:py-20 bg-slate-50 text-slate-900 antialiased border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER BLOCK ================= */}
        <div className="text-center max-w-2xl mx-auto">
          {/* Accent Badge Indicator */}
      <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Life at lunar
            </span>
          </div>

          {/* Typography Scale Downsizing & Signature Cursive Underline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Our{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.05em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Culture
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
          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto font-normal">
            Innovation, continuous engineering, and fluid collaboration parameters define exactly how our teams execute workflows daily.
          </p>
        </div>

        {/* ================= MASONRY MATRIX GRID ================= */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[140px] sm:auto-rows-[160px]">
          {cultureGallery.map((img, i) => (
            <div
              key={i}
              className={`
                overflow-hidden 
                rounded-2xl 
                group 
                relative 
                bg-slate-200
                shadow-sm
                border 
                border-slate-200/40
                ${img.spans}
              `}
            >
              <img
                src={`${img.src}?q=80&w=1000&auto=format&fit=crop`}
                alt={`Lunar team culture environment footprint ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transform scale-[1.01] group-hover:scale-105 transition-transform duration-500 ease-out select-none pointer-events-none"
              />

              {/* Minimal Dark Context Shading Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkCulture;