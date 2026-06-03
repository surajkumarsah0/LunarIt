const techs = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
];

const TechnologyStack = () => {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-extrabold">
            Technology Stack
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-16">

          {techs.map((tech) => (
            <div
              key={tech}
              className="
              px-8
              py-4
              rounded-full
              border
              border-slate-200
              bg-slate-50
              "
            >
              {tech}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TechnologyStack;