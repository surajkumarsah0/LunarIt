import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const CustomerProject = () => {
  return (
    <section className="py-28 bg-white relative overflow-hidden">

      {/* glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--primary)]/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[var(--accent)] font-semibold uppercase tracking-wider">
            Customer Success
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Real Projects Delivered
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            We build production-ready systems for real businesses and clients.
          </p>
        </div>

        {/* Project Card */}
        <div className="mt-20 flex justify-center">

          <Link
            to="/projects/1"
            className="
            group
            w-full md:w-150

            bg-white
            border
            border-slate-100
            rounded-3xl
            overflow-hidden
            shadow-xl

            hover:-translate-y-2
            transition
            "
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src="../../public/ca4cfd6e-d5c1-4260-8aee-4966bda9c0e8.png"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition"
              />
            </div>

            {/* Content */}
            <div className="p-8">

              <h3 className="text-2xl font-bold">
                Safari Yatri
              </h3>

              <p className="text-slate-600 mt-3">
                Digital E-Rickshaw Services in Nepal Your Ride Partner. Experience easy and safe e-rickshaw booking. Book quickly and enjoy a comfortable, quiet ride.
              </p>

              <div className="mt-6 flex items-center gap-2 text-[var(--primary)] font-semibold">
                View Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>

            </div>

          </Link>

        </div>

      </div>
    </section>
  );
};

export default CustomerProject;