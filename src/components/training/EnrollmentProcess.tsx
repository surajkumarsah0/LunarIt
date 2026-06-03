import {
  UserPlus,
  FileCheck,
  CreditCard,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Application Review",
    icon: FileCheck,
  },
  {
    number: "03",
    title: "Enrollment",
    icon: CreditCard,
  },
  {
    number: "04",
    title: "Start Learning",
    icon: GraduationCap,
  },
];

export default function EnrollmentProcess() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[0.3em] text-[var(--accent)] text-sm">
            Enrollment Process
          </span>

          <h2 className="mt-4 text-5xl font-extrabold">
            Join In Four Simple Steps
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                text-center
                p-8
                rounded-3xl
                border
                "
              >
                <div className="text-5xl font-black text-[var(--primary)]/10">
                  {step.number}
                </div>

                <Icon
                  size={40}
                  className="
                  mx-auto
                  my-4
                  text-[var(--primary)]
                  "
                />

                <h3 className="font-bold text-xl">
                  {step.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}