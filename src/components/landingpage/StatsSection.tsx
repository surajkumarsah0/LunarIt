const StatsSection = () => {
  const stats = [
    {
      number: "10+",
      title: "Projects Delivered",
    },
    {
      number: "1000+",
      title: "Students Trained",
    },
    {
      number: "95%",
      title: "Client Satisfaction",
    },
    {
      number: "20+",
      title: "Industry Partners",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[var(--accent)] font-semibold">
            TRUSTED PARTNER
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            Trusted By Businesses &
            Students Across Nepal
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-8">
            Delivering innovative technology solutions,
            professional training programs, and career
            opportunities that drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((item) => (
            <div
              key={item.title}
              className="
              bg-white
              border
              border-slate-100
              rounded-3xl
              p-8
              text-center
              shadow-sm
              hover:shadow-xl
              transition
              "
            >
              <h3 className="text-5xl font-extrabold text-[var(--primary)]">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-600 font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;