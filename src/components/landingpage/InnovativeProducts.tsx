import React, { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Lunar School Management Software",
    category: "Education Technology",
    image: "../../public/kids-going-to-school-illustration-svg-download-png-5349411.webp",
    desc: "Single system containing accounting, library, examination, attendance and all school information management.",
    details: "A complete School ERP solution designed for schools and colleges. Features include fee management, examination management, attendance tracking, library system, accounting, reporting dashboard, role-based access control, SMS integration and analytics.",
  },
  {
    title: "Lunaccount",
    category: "Cooperative Software",
    image: "../../public/Account_Manager_01__Converted__generated.jpg", 
    desc: "Enterprise-grade cooperative management system for savings, loans and accounting.",
    details: "Manage members, savings, loans, interest calculations, accounting, reports and compliance requirements from a single integrated platform.",
  },
];

const InnovativeProducts = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative pt-10 pb-12 md:pb-16 bg-slate-50 overflow-hidden antialiased">
      {/* Background Glow Configuration */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--primary)]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent)]/10 blur-3xl rounded-full" />

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
              Our Products
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight text-slate-900">
            Innovative Software Ecosystems &{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.25em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Solutions
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
            Enterprise-grade products designed to simplify operations, improve efficiency and accelerate digital transformation.
          </p>
        </div>

        {/* Products Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-10 mt-12 md:mt-16">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => setSelected(product)}
              className="
              group
              cursor-pointer
              overflow-hidden
              rounded-3xl
              bg-white/80
              backdrop-blur-xl
              border
              border-white/40
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-500
              "
            >
              {/* Image Block */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Category Badge Layout */}
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[var(--primary)] shadow-sm">
                  {product.category}
                </div>

                {/* Interactive Dynamic Action Reveal Trigger Button */}
                <div className="absolute bottom-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--accent)] text-white px-5 py-3 rounded-xl font-semibold shadow-md text-sm transition-colors duration-300">
                    View Details
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Typography Optimized Text Content Area */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {product.title}
                </h3>
                <p className="mt-3 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                  {product.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Interactive View Modal Element Box */}
        {selected && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 z-50 animate-[fadeIn_0.3s_ease-out_forwards]">
            <div className="bg-white max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto">
              
              {/* Dismiss Trigger Control Asset */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 bg-white text-slate-800 p-2 rounded-full shadow-md hover:bg-slate-50 transition-colors z-10"
              >
                <X size={18} />
              </button>

              {/* Preview Hero Element Banner */}
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-64 sm:h-80 object-cover"
              />

              {/* Typography Optimized Modal Panel Inside Shell Area */}
              <div className="p-6 sm:p-10">
                <div className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                  {selected.category}
                </div>

                <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {selected.title}
                </h2>

                <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                  {selected.details}
                </p>

                <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
                  <button className="px-6 py-3 rounded-xl bg-[var(--primary)] hover:bg-[var(--accent)] text-white font-semibold text-sm sm:text-base shadow-md transition-colors duration-300">
                    Request Demo
                  </button>
                  <button
                    onClick={() => setSelected(null)}
                    className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-sm sm:text-base transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InnovativeProducts;