import {
  Laptop,
  Users,
  GraduationCap,
  Trophy,
} from "lucide-react";

const benefits = [
  {
    title: "Flexible Work",
    icon: Laptop,
  },
  {
    title: "Collaborative Team",
    icon: Users,
  },
  {
    title: "Continuous Learning",
    icon: GraduationCap,
  },
  {
    title: "Career Growth",
    icon: Trophy,
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-extrabold">
          Why Work With Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                p-8
                rounded-3xl
                border
                hover:shadow-xl
                transition
                "
              >
                <Icon
                  size={40}
                  className="text-[var(--primary)]"
                />

                <h3 className="mt-5 font-bold text-xl">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}