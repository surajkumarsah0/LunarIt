import {
  Globe,
  Smartphone,
  Brain,
  Cloud,
  PenTool,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Web Development",
    desc: "Scalable web applications built with modern frameworks, optimized performance, and enterprise-grade architecture.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Cross-platform mobile applications delivering seamless experiences across Android and iOS devices.",
  },
  {
    number: "03",
    icon: Brain,
    title: "AI Solutions",
    desc: "Machine learning, automation, and AI-powered systems designed to improve business efficiency.",
  },
  {
    number: "04",
    icon: Cloud,
    title: "Cloud Engineering",
    desc: "Secure and scalable cloud infrastructure, migration, deployment, and DevOps solutions.",
  },
  {
    number: "05",
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Human-centered design systems focused on usability, accessibility, and business impact.",
  },
  {
    number: "06",
    icon: Briefcase,
    title: "IT Consulting",
    desc: "Strategic technology consulting to help organizations innovate, scale, and transform digitally.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

      

        {/* Grid */}

        <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="
                group
                relative
                overflow-hidden

                bg-white

                rounded-[32px]

                border
                border-slate-200

                p-8

                hover:border-[var(--primary)]
                hover:shadow-2xl
                hover:-translate-y-2

                transition-all
                duration-500
                "
              >

                {/* Number */}

                <div
                  className="
                  absolute
                  top-6
                  right-6

                  text-7xl
                  font-black

                  text-slate-100

                  group-hover:text-[var(--primary)]/10

                  transition
                  "
                >
                  {service.number}
                </div>

                {/* Icon */}

                <div
                  className="
                  w-16
                  h-16

                  rounded-2xl

                  bg-[var(--primary)]/10

                  flex
                  items-center
                  justify-center

                  group-hover:bg-[var(--primary)]

                  transition
                  "
                >
                  <Icon
                    size={28}
                    className="
                    text-[var(--primary)]
                    group-hover:text-white
                    transition
                    "
                  />
                </div>

                {/* Content */}

                <h3 className="mt-8 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-5 text-slate-600 leading-8">
                  {service.desc}
                </p>

                {/* Link */}

                <div
                  className="
                  mt-8

                  flex
                  items-center
                  gap-2

                  text-[var(--primary)]
                  font-semibold
                  "
                >
                  Learn More

                  <ArrowUpRight
                    size={18}
                    className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition
                    "
                  />
                </div>

                {/* Bottom Accent */}

                <div
                  className="
                  absolute
                  bottom-0
                  left-0

                  h-1
                  w-0

                  bg-[var(--accent)]

                  group-hover:w-full

                  transition-all
                  duration-500
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}