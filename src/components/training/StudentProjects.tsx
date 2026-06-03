export default function StudentProjects() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-extrabold">
          Student Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {[1,2,3].map((item)=>(
            <div
              key={item}
              className="
              bg-white
              rounded-3xl
              overflow-hidden
              border
              "
            >
              <div className="h-56 bg-slate-200" />

              <div className="p-6">
                <h3 className="font-bold text-xl">
                  Project Title
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}