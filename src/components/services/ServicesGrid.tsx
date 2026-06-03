import {
  Globe,
  Smartphone,
  Brain,
  Cloud,
  PenTool,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Modern responsive web applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Android and iOS applications.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Smart AI-powered solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "User-centered design experiences.",
  },
  {
    icon: Briefcase,
    title: "IT Consulting",
    desc: "Technology strategy and consulting.",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold">
            What We Do
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                p-8
                rounded-3xl
                border
                border-slate-200
                hover:border-[var(--primary)]
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-500
                "
              >
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[var(--primary)]/10
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Icon className="text-[var(--primary)]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;