const programs = [
  "MERN Stack Development",
  "Python Programming",
  "AI & Machine Learning",
  "UI/UX Design",
  "Data Science",
  "Digital Marketing",
];

export default function TrainingPrograms() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-extrabold">
            Training Programs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {programs.map((program) => (
            <div
              key={program}
              className="
              bg-white
              p-8
              rounded-3xl
              border
              hover:-translate-y-2
              hover:shadow-xl
              transition
              "
            >
              <h3 className="text-2xl font-bold">
                {program}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}