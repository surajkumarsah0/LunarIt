import React from "react";
import { ArrowRight } from "lucide-react";

const ServicesCTA = () => {
  return (
    <section className="py-16 mt-4 md:py-20 bg-[var(--primary-dark)] text-white antialiased">
      <div className="max-w-4xl mx-auto text-center px-6">

        {/* Dynamic Context Tag Line */}
        <span className="uppercase tracking-[0.3em] text-[var(--accent)] text-xs font-semibold block mb-3">
          Get In Touch
        </span>

        {/* Downscaled Typography Scale */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Ready To Build Something Amazing?
        </h2>

        {/* Micro-Copy Paragraph Frame */}
        <p className="mt-3 text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed font-normal">
          Let's discuss your project parameters and transform your concepts into functional digital reality.
        </p>

        {/* Refined Interface Action Button */}
        <button
          className="
            mt-6
            px-6
            py-3
            rounded-full
            bg-[var(--accent)]
            text-black
            text-xs sm:text-sm
            font-semibold
            flex
            items-center
            gap-2
            mx-auto
            hover:scale-105
            transition-transform
            duration-300
          "
        >
          Start Your Project
          <ArrowRight size={16} />
        </button>

      </div>
    </section>
  );
};

export default ServicesCTA;