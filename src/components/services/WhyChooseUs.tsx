const reasons = [
  "Experienced Team",
  "Transparent Process",
  "Modern Technologies",
  "Long-Term Support",
];

const WhyChooseUs = () => {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-extrabold">
            Why Choose Lunar IT
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {reasons.map((reason, i) => (
            <div
              key={i}
              className="
              p-8
              rounded-3xl
              border
              border-slate-200
              "
            >
              <div
                className="
                text-5xl
                font-black
                text-[var(--primary)]/10
                "
              >
                0{i + 1}
              </div>

              <h3 className="font-bold text-xl mt-4">
                {reason}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;