export default function CourseOverview() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20">

          <div>
            <span className="uppercase tracking-[0.3em] text-[var(--accent)] text-sm">
              Course Overview
            </span>

            <h2 className="mt-5 text-5xl font-extrabold">
              Learn Industry Relevant Skills
            </h2>
          </div>

          <div>
            <p className="text-lg text-slate-600 leading-8">
              This course is designed to transform beginners
              into professional developers through hands-on
              projects, mentorship and real-world applications.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}