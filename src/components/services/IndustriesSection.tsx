const industries = [
  "Education",
  "Healthcare",
  "Finance",
  "Retail",
  "Government",
  "Startups",
];

const IndustriesSection = () => {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.35em] text-sm text-[var(--accent)] font-semibold">
            Domains
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-extrabold tracking-tight">
            Industries We Serve
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            We deliver tailored digital solutions across multiple industries,
            helping organizations transform and scale with technology.
          </p>
        </div>

        {/* ================= GRID ================= */}

        <div className="grid md:grid-cols-3 gap-10 mt-24">

          {industries.map((industry, i) => (
            <div
              key={industry}
              className="
                group
                relative
                p-10
                bg-white
                rounded-[28px]
                border
                hover:border-[var(--primary)]
                hover:shadow-xl
                transition-all
                duration-500
                overflow-hidden
              "
            >

          

              {/* CONTENT */}
              <div className="relative z-10 text-center">

                <h3 className="
                  text-2xl md:text-3xl
                  font-bold
                  tracking-tight
                  group-hover:text-[var(--primary)]
                  transition
                ">
                  {industry}
                </h3>

                {/* subtle underline animation */}
                <div className="
                  mt-6
                  h-px
                  w-0
                  bg-[var(--primary)]
                  mx-auto
                  group-hover:w-16
                  transition-all
                  duration-500
                " />

                <p className="mt-6 text-slate-600 leading-7 text-sm md:text-base">
                  Specialized digital solutions designed for
                  {industry.toLowerCase()} sector transformation.
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* ================= CTA ================= */}

        <div className="
          mt-32
          text-center
          bg-[var(--primary-dark)]
          text-white
          rounded-[36px]
          p-14
        ">

          <h3 className="text-4xl md:text-5xl font-extrabold">
            Let’s Transform Your Industry
          </h3>

          <p className="mt-6 text-white/70 max-w-2xl mx-auto leading-8">
            We build scalable digital systems tailored to your industry needs,
            helping you grow faster and operate smarter.
          </p>

          <button className="
            mt-10
            px-8 py-4
            bg-[var(--accent)]
            text-black
            font-semibold
            rounded-full
            hover:scale-105
            transition
          ">
            Start a Project
          </button>

        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;