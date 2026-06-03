const trustPoints = [
  "Industry Expertise",
  "Client-Centric Approach",
  "Transparent Communication",
  "Long-Term Partnership",
];

const WhyTrustUs = () => {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-extrabold">
            Why Businesses Trust Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {trustPoints.map((point, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl border"
            >
              <span className="text-[var(--accent)] font-bold">
                0{i + 1}
              </span>

              <h3 className="text-2xl font-bold mt-3">
                {point}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyTrustUs;