import {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  PenTool,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Modern, responsive and scalable websites built with React, Next.js and MERN stack.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Android & iOS applications with smooth UI and high performance.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Deployment, hosting and scalable cloud infrastructure for businesses.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Smart AI solutions, automation systems and data-driven applications.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Modern, user-centered design for web and mobile applications.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    desc: "SEO, social media marketing and growth strategies for businesses.",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white" id="services">

      {/* HERO SECTION */}
      <section className="relative py-28 bg-[var(--primary-dark)] text-white overflow-hidden">

        {/* background glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="text-[var(--accent)] font-semibold uppercase tracking-wider">
            Our Services
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            We Build Digital Solutions
            That Scale Your Business
          </h1>

          <p className="mt-6 text-slate-300 text-lg max-w-3xl mx-auto leading-8">
            From web development to AI solutions, we provide
            end-to-end technology services that help businesses
            grow, innovate and succeed.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold tracking-tight">
              What We Offer
            </h2>
            <p className="mt-6 text-slate-600 text-lg">
              Complete IT solutions tailored for startups,
              businesses and enterprises.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="
                  group
                  relative
                  p-8
                  rounded-3xl
                  bg-white/60
                  backdrop-blur-xl
                  border border-slate-100
                  shadow-lg
                  hover:-translate-y-2
                  transition-all
                  duration-500
                  "
                >

                  {/* icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[var(--primary)]/10">
                    <Icon className="text-[var(--primary)]" />
                  </div>

                  {/* title */}
                  <h3 className="mt-6 text-2xl font-bold">
                    {service.title}
                  </h3>

                  {/* description */}
                  <p className="mt-4 text-slate-600 leading-7">
                    {service.desc}
                  </p>

                  {/* hover line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-500 group-hover:w-full transition-all duration-500"></div>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-28 bg-[var(--primary-dark)] text-white">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Ready to Build Your Next Project?
          </h2>

          <p className="mt-6 text-slate-300 text-lg">
            Let’s work together to turn your ideas into powerful digital solutions.
          </p>

          <button className="mt-10 px-10 py-4 bg-[var(--primary)] hover:bg-[var(--accent)] transition rounded-xl font-semibold">
            Get Started
          </button>

        </div>
      </section>

    </div>
  );
};

export default ServicesPage;