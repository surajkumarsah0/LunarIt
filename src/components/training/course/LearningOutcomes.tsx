const outcomes = [
  "Build Full Stack Applications",
  "REST API Development",
  "Authentication Systems",
  "Database Design",
  "React Development",
  "Deployment & DevOps Basics",
];

export default function LearningOutcomes() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-extrabold">
          What You'll Learn
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {outcomes.map((item) => (
            <div
              key={item}
              className="
              rounded-3xl
              border
              p-8
              hover:shadow-xl
              transition
              "
            >
              <h3 className="text-xl font-bold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}