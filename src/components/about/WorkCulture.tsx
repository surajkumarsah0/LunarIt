const images = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  "https://images.unsplash.com/photo-1552664730-d307ca884978",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
];

const WorkCulture = () => {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Our Culture
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Innovation, collaboration, and continuous learning shape how we work every day.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[180px]">

          {images.map((src, i) => {
            // pseudo-random layout feel (no visual chaos, still controlled)
            const spanClasses = [
              "row-span-1",
              "row-span-2",
              "row-span-1",
              "row-span-2",
            ];

            const colSpanClasses = [
              "col-span-1",
              "col-span-1",
              "col-span-2",
              "col-span-1",
            ];

            return (
              <div
                key={i}
                className={`
                  overflow-hidden rounded-3xl group relative
                  ${spanClasses[i % spanClasses.length]}
                  ${colSpanClasses[i % colSpanClasses.length]}
                `}
              >
                <img
                  src={`${src}?q=80&w=1200&auto=format&fit=crop`}
                  alt={`culture-${i}`}
                  className="h-full w-full object-cover transform group-hover:scale-105 transition duration-500"
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkCulture;