import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const ContactCTA = () => {
  return (
    <section className="py-28 bg-[var(--primary-dark)] text-white">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl md:text-5xl font-extrabold">
          Let’s Build Something Great Together
        </h2>

        <p className="mt-6 text-slate-300 text-lg">
          Have a project idea? Let’s discuss and bring it to life.
        </p>

        <Link
          to="/contact"
          className="
          inline-flex
          items-center
          gap-3
          mt-10
          px-10 py-4
          rounded-xl
          bg-[var(--primary)]
          hover:bg-[var(--accent)]
          transition
          font-semibold
          "
        >
          Contact Us
          <ArrowRight size={18} />
        </Link>

      </div>

    </section>
  );
};

export default ContactCTA;