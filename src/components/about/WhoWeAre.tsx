const WhoWeAre = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1773332585687-85beb4da71ab?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>

            <span className="uppercase tracking-[0.3em] text-[var(--accent)] text-sm font-semibold">
              Who We Are
            </span>

            <h2 className="mt-5 text-5xl font-extrabold">
              Technology Partner For
              Modern Businesses
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              Lunar IT Solution is a technology company
              delivering innovative digital products,
              enterprise software, AI solutions and
              professional training programs.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              Our goal is to bridge the gap between
              technology and business by building
              scalable solutions that create measurable impact.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;