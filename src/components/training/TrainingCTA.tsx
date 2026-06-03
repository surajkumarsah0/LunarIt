import { ArrowRight } from "lucide-react";

export default function TrainingCTA() {
  return (
    <section className="py-28 bg-[var(--primary-dark)] text-white">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-extrabold">
          Start Your Learning Journey Today
        </h2>

        <p className="mt-6 text-slate-300">
          Join our training programs and build
          the skills needed for tomorrow.
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
          Enroll Now
          <ArrowRight className="inline ml-2" />
        </button>

      </div>
    </section>
  );
}