import React from "react";

// Robust array map containing explicit keys for performance rendering
const operationalMetrics = [
  { id: "projects", value: "50+", label: "Projects Delivered" },
  { id: "students", value: "100+", label: "Students Trained" },
  { id: "tech", value: "15+", label: "Technologies" },
  { id: "satisfaction", value: "95%", label: "Client Satisfaction" }
];

const CompanyStats = () => {
  return (
    <section className="py-12 md:py-16 bg-[var(--primary-dark)] text-white antialiased border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CONTEXT ACCENT BADGE */}
        <div className="text-center mb-10 md:mb-12">
          <span className="uppercase tracking-[0.3em] text-[var(--accent)] text-xs font-semibold block mb-2">
            Metrics
          </span>
          <p className="text-xs sm:text-sm text-white/60 max-w-md mx-auto font-normal">
            Our operational footprints in enterprise solutions and professional training programs.
          </p>
        </div>

        {/* METRICS DISPATCH GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 items-start">
          {operationalMetrics.map((metric) => (
            <div key={metric.id} className="text-center group">
              {/* Downsized Responsive Metric Scale */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--accent)] transition-transform duration-300 group-hover:scale-105">
                {metric.value}
              </h3>

              {/* Clean Micro-Copy Label */}
              <p className="mt-2.5 text-xs sm:text-sm text-slate-300 font-medium leading-snug max-w-[160px] mx-auto">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CompanyStats;