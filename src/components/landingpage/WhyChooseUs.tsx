import {
  Briefcase,
  Cpu,
  Users,
  GraduationCap,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const features = [
  {
    number: "1",
    title: "Industry Experience",
    description:
      "Experienced professionals delivering reliable and scalable IT solutions.",
    icon: Briefcase,
  },
  {
    number: "2",
    title: "Modern Technologies",
    description:
      "Leveraging the latest technologies to build future-ready digital products.",
    icon: Cpu,
  },
  {
    number: "3",
    title: "Expert Team",
    description:
      "A dedicated team committed to quality, innovation, and business growth.",
    icon: Users,
  },
  {
    number: "4",
    title: "Internship Opportunities",
    description:
      "Providing students with real-world project exposure and mentorship.",
    icon: GraduationCap,
  },
  {
    number: "5",
    title: "Reliable Support",
    description:
      "Continuous support and maintenance for long-term success.",
    icon: ShieldCheck,
  },
  {
    number: "6",
    title: "Innovation First",
    description:
      "We continuously explore new possibilities to deliver exceptional value.",
    icon: Rocket,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[var(--accent)] font-semibold tracking-wider uppercase">
            Why Choose Us?
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            Driving Business Growth Through
            Innovative Technology
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-8">
            We combine technology expertise, industry knowledge,
            and innovative thinking to help businesses and
            students achieve meaningful success.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                group
                relative
                overflow-hidden

                bg-white/60
                backdrop-blur-xl

                border
                border-white/30

                rounded-3xl
                p-8

                shadow-lg

                hover:-translate-y-2
                hover:shadow-2xl

                transition-all
                duration-500
                "
              >
                {/* Number */}

                <span className="text-6xl font-black text-slate-200 font-serif">
                  <span className="text-7xl">0</span>{feature.number}
                </span>

                {/* Icon */}

                <div
                  className="
                  w-14 h-14
                  mt-4

                  rounded-2xl

                  bg-[var(--primary)]/10

                  flex
                  items-center
                  justify-center
                  "
                >
                  <Icon
                    size={28}
                    className="text-[var(--primary)]"
                  />
                </div>

                {/* Content */}

                <h3 className="mt-6 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {feature.description}
                </p>

                {/* Hover Gradient Line */}

                <div
                  className="
                  absolute
                  bottom-0
                  left-0

                  h-1
                  w-0

                  bg-red-500

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
};

export default WhyChooseUs;