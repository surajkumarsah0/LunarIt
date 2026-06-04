const stats = [
  ["Duration", "6 Months"],
  ["Projects", "15+"],
  ["Internship", "Available"],
  ["Certificate", "Included"],
  ["Mentorship", "1:1"],
];

export default function CourseStats() {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-5 gap-6">

          {stats.map(([title, value]) => (
            <div
              key={title}
              className="
              rounded-3xl
              border
              p-8
              text-center
              "
            >
              <p className="text-slate-500">
                {title}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {value}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}