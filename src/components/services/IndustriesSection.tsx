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
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-extrabold">
            Industries We Serve
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {industries.map((industry) => (
            <div
              key={industry}
              className="
              p-10
              bg-white
              rounded-3xl
              border
              text-center
              font-semibold
              text-lg
              "
            >
              {industry}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;