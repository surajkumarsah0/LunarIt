import {
  Users,
  Briefcase,
  Laptop,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Industry Mentors",
  },
  {
    icon: Laptop,
    title: "Real Projects",
  },
  {
    icon: Briefcase,
    title: "Internship Opportunities",
  },
  {
    icon: Award,
    title: "Certification",
  },
];

export default function WhyLearnWithUs() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-extrabold">
            Why Learn With Lunar IT
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                p-8
                rounded-3xl
                border
                hover:shadow-xl
                transition
                "
              >
                <Icon
                  className="text-[var(--primary)]"
                  size={40}
                />

                <h3 className="mt-5 text-xl font-bold">
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