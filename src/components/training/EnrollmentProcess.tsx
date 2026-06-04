import {
  UserPlus,
  FileCheck,
  CreditCard,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register",
    description:
      "Create your account and submit your basic details.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Application Review",
    description:
      "Our team reviews your application and eligibility.",
    icon: FileCheck,
  },
  {
    number: "03",
    title: "Enrollment",
    description:
      "Complete enrollment and confirm your seat.",
    icon: CreditCard,
  },
  {
    number: "04",
    title: "Start Learning",
    description:
      "Begin your training journey with expert mentors.",
    icon: GraduationCap,
  },
];

export default function EnrollmentProcess() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[var(--accent)]">
            Enrollment Process
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold">
            Join In Four Simple Steps
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            A smooth and transparent enrollment process designed
            to get you learning as quickly as possible.
          </p>
        </div>

        {/* Process Flow */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative group"
              >
                {/* Connector */}
                {index !== steps.length - 1 && (
                  <div
                    className="
                    hidden xl:flex
                    absolute
                    top-20
                    left-full
                    w-8
                    items-center
                    justify-center
                    text-slate-300
                    z-10
                  "
                  >
                    <ArrowRight size={28} />
                  </div>
                )}

                <div
                  className="
                  h-full
                  bg-white
                  rounded-3xl
                  border
                  border-slate-200
                  p-8
                  text-center
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:border-[var(--primary)]/30
                "
                >
                  {/* Step Number */}
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-full
                    bg-[var(--primary)]/10
                    text-[var(--primary)]
                    font-bold
                    text-lg
                  "
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="
                    mt-6
                    w-20
                    h-20
                    mx-auto
                    rounded-2xl
                    bg-[var(--primary)]/10
                    flex
                    items-center
                    justify-center
                    group-hover:bg-[var(--primary)]
                    transition-all
                  "
                  >
                    <Icon
                      size={36}
                      className="
                      text-[var(--primary)]
                      group-hover:text-white
                      transition-all
                    "
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}