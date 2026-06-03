// random images from unsplash
const images = [
  "https://images.unsplash.com/photo-1773332585687-85beb4da71ab?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1773332585687-85beb4da71ab?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1773332585687-85beb4da71ab?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1773332585754-f1436987743b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function WorkCulture() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[var(--accent)]">
            Our Culture
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold">
            Life At Lunar IT
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            We foster innovation, collaboration, continuous
            learning and ownership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {images.map((img, index) => (
            <div
              key={index}
              className="
              overflow-hidden
              rounded-3xl
              group
              "
            >
              <img
                src={img}
                alt=""
                className="
                w-full
                h-[350px]
                object-cover
                transition
                duration-700
                group-hover:scale-110
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}