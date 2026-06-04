const stats = [
  ["50+", "Projects Delivered"],
  ["100+", "Students Trained"],
  ["15+", "Technologies"],
  ["95%", "Client Satisfaction"],
];

const CompanyStats = () => {
  return (
    <section className="py-28 bg-[var(--primary-dark)] text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {stats.map(([number, label]) => (
            <div key={label} className="text-center">
              <h3 className="text-6xl font-black text-[var(--outline)]">
                {number}
              </h3>

              <p className="mt-4 text-slate-300">
                {label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CompanyStats;