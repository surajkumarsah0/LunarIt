const trustPoints = [
  "Industry Expertise",
  "Client-Centric Approach",
  "Transparent Communication",
  "Long-Term Partnership",
];

const WhyTrustUs = () => {
  return (
    <section className="py-32 bg-[--primary] text-[--accent] relative overflow-hidden">

      {/* background glow (company system style) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--accent)] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= HEADER ================= */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.35em] text-[var(--accent)] text-xs font-semibold">
            Trust & Reliability
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight">
            Why Businesses Trust Us
          </h2>

          <p className="mt-6 text-white/60 text-lg leading-8">
            We build long-term partnerships by delivering consistent quality,
            transparent communication, and real business value.
          </p>
        </div>

        {/* ================= GRID ================= */}

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {trustPoints.map((point, i) => (
            <div
              key={point}
              className="
                group
                relative
                p-10
                rounded-[32px]
                bg-[--primary]/5
                border
                border-[--primary]/10
                backdrop-blur-xl
                hover:border-[var(--accent)]
                transition-all
                duration-500
              "
            >

            

              {/* NUMBER + TITLE */}
              <div className="flex items-start gap-5">

                <span className="text-5xl font-black text-[--accent]/10">
                  0{i + 1}
                </span>

                <div>
                  <h3 className="
                    text-2xl md:text-3xl
                    font-bold
                    tracking-tight
                    group-hover:text-[var(--accent)]
                    transition
                  ">
                    {point}
                  </h3>

                  {/* description (adds premium depth) */}
                  <p className="mt-4 text-[--accent]/60 leading-7">
                    We consistently deliver high-quality solutions
                    through proven processes and strong technical expertise.
                  </p>
                </div>

              </div>

              {/* underline animation */}
              <div className="
                mt-6
                h-px
                w-0
                bg-[var(--accent)]
                group-hover:w-full
                transition-all
                duration-500
              " />

            </div>
          ))}

        </div>

        {/* ================= CTA ================= */}

       

      </div>
    </section>
  );
};

export default WhyTrustUs;