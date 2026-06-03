import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-10 rounded-3xl border">
            <Target
              size={42}
              className="text-[var(--primary)]"
            />

            <h3 className="mt-6 text-3xl font-bold">
              Our Mission
            </h3>

            <p className="mt-5 text-slate-600 leading-8">
              Deliver innovative technology solutions
              that empower businesses and individuals
              to achieve sustainable growth.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl border">
            <Eye
              size={42}
              className="text-[var(--primary)]"
            />

            <h3 className="mt-6 text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-5 text-slate-600 leading-8">
              Become a leading technology company
              recognized for innovation, excellence
              and digital transformation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;