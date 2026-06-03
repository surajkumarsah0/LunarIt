export default function LifeAtLunar() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1773332585687-85beb4da71ab?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>

            <span className="uppercase tracking-[0.3em] text-[var(--accent)] text-sm">
              Life At Lunar
            </span>

            <h2 className="mt-4 text-5xl font-extrabold">
              A Culture Built On
              Innovation & Growth
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              We encourage creativity, ownership,
              collaboration and continuous learning.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}