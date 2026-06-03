import {
  Clock3,
  BookOpen,
  Award,
  Laptop,
  Users,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "Flexible Working Hours",
    desc: "Maintain a healthy work-life balance.",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    desc: "Continuous skill development programs.",
  },
  {
    icon: Award,
    title: "Performance Rewards",
    desc: "Recognition for outstanding contributions.",
  },
  {
    icon: Laptop,
    title: "Modern Work Environment",
    desc: "Latest tools and technologies.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Work with talented professionals.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Clear pathways for advancement.",
  },
];

export default function EmployeeBenefits() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-sm text-[var(--accent)] font-semibold">
            Employee Benefits
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold">
            Perks & Benefits
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                bg-white
                p-8
                rounded-3xl
                border
                border-slate-200
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center">
                  <Icon
                    size={26}
                    className="text-[var(--primary)]"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}