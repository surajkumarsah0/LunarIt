const trainings = [
  "MERN Stack Development",
  "Python Programming",
  "AI & Machine Learning",
  "UI/UX Design",
  "Internship Program",
];

const TrainingPrograms = () => {
  return (
    <section className="py-28 bg-[var(--primary-dark)] text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[0.3em] text-[var(--accent)] text-sm">
            Training
          </span>

          <h2 className="text-5xl font-extrabold mt-5">
            Professional Training Programs
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">

          {trainings.map((training) => (
            <div
              key={training}
              className="
              p-6
              bg-white/5
              border
              border-white/10
              rounded-2xl
              text-center
              "
            >
              {training}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrainingPrograms;