import { Target, Eye } from "lucide-react";

const values = [
  "Innovation",
  "Excellence",
  "Integrity",
  "Growth",
];

const MissionVisionCore = () => {
  return (
    <section className="py-32 bg-[var(--primary-dark)] text-white relative overflow-hidden">

      {/* background glow (same as training section style) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--accent)] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= HEADER ================= */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.35em] text-[var(--accent)] text-xs font-semibold">
            Foundation
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight">
            Mission • Vision • Values
          </h2>

          <p className="mt-6 text-white/60 text-lg leading-8">
            The principles that define our identity, purpose, and long-term direction.
          </p>
        </div>

        {/* ================= TIMELINE ================= */}

        <div className="relative mt-28">

          {/* CENTER LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-24">

            {/* ================= MISSION ================= */}

            <div className="relative flex md:justify-start justify-center">

              <div className="w-full md:w-[40%] group relative">

                {/* BIG NUMBER BACKGROUND */}
                <div className="absolute -top-14 -left-8 text-8xl font-black text-white/5 group-hover:text-[var(--accent)]/10 transition">
                  01
                </div>

                <div className="flex items-start gap-5">

                  <Target size={40} className="text-[var(--accent)] mt-1" />

                  <div>
                    <h3 className="text-3xl font-bold group-hover:text-[var(--accent)] transition">
                      Our Mission
                    </h3>

                    <p className="mt-5 text-white/60 leading-8">
                      Deliver innovative technology solutions that empower businesses
                      and individuals to achieve sustainable growth through modern
                      digital transformation and engineering excellence.
                    </p>
                  </div>

                </div>

                {/* underline */}
                <div className="mt-6 h-px w-0 bg-[var(--accent)] group-hover:w-full transition-all duration-500" />

              </div>

              {/* CENTER NODE */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[var(--accent)] text-black font-bold items-center justify-center border-8 border-[var(--primary-dark)] shadow-lg">
                01
              </div>

            </div>

            {/* ================= VISION ================= */}

            <div className="relative flex md:justify-end justify-center">

              <div className="w-full md:w-[40%] group relative">

                {/* BIG NUMBER BACKGROUND */}
                <div className="absolute -top-14 -right-8 text-8xl font-black text-white/5 group-hover:text-[var(--accent)]/10 transition">
                  02
                </div>

                <div className="flex items-start gap-5 md:flex-row-reverse">

                  <Eye size={40} className="text-[var(--accent)] mt-1" />

                  <div className="md:text-right">
                    <h3 className="text-3xl font-bold group-hover:text-[var(--accent)] transition">
                      Our Vision
                    </h3>

                    <p className="mt-5 text-white/60 leading-8">
                      Become a globally recognized technology company known for innovation,
                      excellence, and impactful digital transformation across industries.
                    </p>
                  </div>

                </div>

                {/* underline */}
                <div className="mt-6 h-px w-0 bg-[var(--accent)] group-hover:w-full transition-all duration-500 md:ml-auto" />

              </div>

              {/* CENTER NODE */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[var(--accent)] text-black font-bold items-center justify-center border-8 border-[var(--primary-dark)] shadow-lg">
                02
              </div>

            </div>

            {/* ================= VALUES ================= */}

            {values.map((value, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={value}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  } justify-center`}
                >

                  <div className="w-full md:w-[40%] group relative">

                    {/* BIG BACKGROUND NUMBER */}
                    <div
                      className={`
                        absolute
                        -top-14
                        ${isLeft ? "-left-8" : "-right-8"}
                        text-8xl
                        font-black
                        text-white/5
                        group-hover:text-[var(--accent)]/10
                        transition
                      `}
                    >
                      0{index + 3}
                    </div>

                    <h3 className="text-3xl font-bold group-hover:text-[var(--accent)] transition">
                      {value}
                    </h3>

                    <p className="mt-5 text-white/60 leading-8">
                      A core principle that shapes our culture, decisions,
                      and long-term vision as a technology company.
                    </p>

                    {/* underline */}
                    <div className="mt-6 h-px w-0 bg-[var(--accent)] group-hover:w-full transition-all duration-500" />

                  </div>

                  {/* CENTER NODE */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[var(--accent)] text-black font-bold items-center justify-center border-8 border-[var(--primary-dark)] shadow-lg">
                    {String(index + 3).padStart(2, "0")}
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* ================= CTA ================= */}

        <div className="
          mt-32
          bg-white/5
          border border-white/10
          backdrop-blur-xl
          rounded-[36px]
          p-12 md:p-16
          text-center
        ">

          <h3 className="text-4xl md:text-5xl font-extrabold">
            Let’s Build Something Great Together
          </h3>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto leading-8">
            Join us in building innovative digital solutions that create real-world impact
            through engineering excellence and modern technology.
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
            Get Started
          </button>

        </div>

      </div>
    </section>
  );
};

export default MissionVisionCore;