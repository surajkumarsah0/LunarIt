const AboutUs = () => {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--primary)]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent)]/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-[var(--accent)] font-semibold uppercase tracking-wider">
            About Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            We Build Digital Solutions
            That Drive Growth
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-8">
            Lunar IT Solution is a modern technology company focused on
            delivering high-quality software development, IT training,
            internship programs, and digital transformation services.
          </p>

          <p className="mt-4 text-slate-600 text-lg leading-8">
            Our mission is to empower students and businesses with
            practical skills, real-world experience, and scalable
            technology solutions that create real impact.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10">

            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-[var(--primary)]">
              10+
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Projects
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-[var(--primary)]">
                100+
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Students
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-[var(--primary)]">
                5+
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Services
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">

          {/* Main Image Box */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team Working"
              className="w-full h-[450px] object-cover"
            />
          </div>

          {/* Floating Card 1 */}
          <div className="absolute -bottom-10 -left-10 bg-white shadow-xl rounded-2xl p-6 w-48">
            <h4 className="font-bold text-[var(--primary)] text-2xl">
              95%
            </h4>
            <p className="text-sm text-slate-500 mt-1">
              Client Satisfaction
            </p>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute -top-10 -right-10 bg-white shadow-xl rounded-2xl p-6 w-48">
            <h4 className="font-bold text-[var(--primary)] text-2xl">
              24/7
            </h4>
            <p className="text-sm text-slate-500 mt-1">
              Support
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;