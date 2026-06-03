import { ArrowRight } from "lucide-react";

export default function CareerCTA() {
  return (
    <section className="py-28 bg-[var(--primary-dark)] text-white">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-extrabold">
          Ready To Join Our Team?
        </h2>

        <p className="mt-6 text-slate-300">
          Explore opportunities and grow your career
          with Lunar IT Solution.
        </p>

        <button
          className="
          mt-10
          px-10
          py-4
          rounded-xl
          bg-[var(--accent)]
          "
        >
          View Open Positions
          <ArrowRight className="inline ml-2" />
        </button>

      </div>

    </section>
  );
}