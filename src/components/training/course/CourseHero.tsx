export default function CourseHero() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="max-w-7xl mx-auto px-6">

        <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[var(--accent)]">
          Professional Training Program
        </span>

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-8">

          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              Become A Professional MERN Stack Developer
            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-8">
              Learn modern full-stack development through
              practical projects, mentorship, internship
              opportunities and industry-focused training.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="px-8 py-4 rounded-full bg-[var(--primary)] text-white font-semibold">
                Enroll Now
              </button>

              <button className="px-8 py-4 rounded-full border font-semibold">
                Download Syllabus
              </button>
            </div>
          </div>

          <div>
            <div className="rounded-[32px] border bg-slate-50 p-8">
              {/* Dashboard Mockup */}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}