import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="py-28 bg-[var(--primary-dark)] text-white">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-extrabold">
          Ready To Work With Us?
        </h2>

        <p className="mt-6 text-slate-300 text-lg">
          Let's build innovative solutions together.
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
          Contact Us
          <ArrowRight className="inline ml-2" />
        </button>

      </div>

    </section>
  );
};

export default AboutCTA;