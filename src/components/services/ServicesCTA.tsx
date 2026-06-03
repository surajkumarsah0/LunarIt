import { ArrowRight } from "lucide-react";

const ServicesCTA = () => {
  return (
    <section className="py-28 bg-[var(--primary-dark)] text-white">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-extrabold">
          Ready To Build Something Amazing?
        </h2>

        <p className="mt-6 text-slate-300 text-lg">
          Let's discuss your project and transform
          your ideas into reality.
        </p>

        <button
          className="
          mt-10
          px-10
          py-4
          rounded-xl
          bg-[var(--accent)]
          flex
          items-center
          gap-3
          mx-auto
          "
        >
          Start Your Project
          <ArrowRight size={18} />
        </button>

      </div>

    </section>
  );
};

export default ServicesCTA;