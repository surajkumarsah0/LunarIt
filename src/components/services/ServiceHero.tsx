const ServicesHero = () => {
  return (
    <section className="pt-40 pb-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl">

          <span
            className="
            uppercase
            tracking-[0.3em]
            text-[var(--accent)]
            text-sm
            font-semibold
            "
          >
            Our Services
          </span>

          <h1
            className="
            mt-6
            text-5xl
            md:text-7xl
            font-extrabold
            tracking-tight
            "
          >
            Transforming Ideas Into
            <br />
            Powerful Digital Solutions
          </h1>

          <p
            className="
            mt-8
            text-lg
            text-slate-600
            max-w-3xl
            leading-8
            "
          >
            We help businesses, startups and
            organizations leverage technology through
            software development, AI solutions,
            training and digital transformation.
          </p>

        </div>

      </div>
    </section>
  );
};

export default ServicesHero;