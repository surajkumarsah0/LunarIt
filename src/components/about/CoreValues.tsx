const values = [
  "Innovation",
  "Excellence",
  "Integrity",
  "Growth",
];

const CoreValues = () => {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-extrabold">
            Our Core Values
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {values.map((value, i) => (
            <div
              key={i}
              className="
              p-8
              rounded-3xl
              border
              text-center
              hover:-translate-y-2
              hover:shadow-xl
              transition
              "
            >
              <div className="text-5xl font-black text-[var(--primary)]/10">
                0{i + 1}
              </div>

              <h3 className="text-2xl font-bold mt-4">
                {value}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CoreValues;