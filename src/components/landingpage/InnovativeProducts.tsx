import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Lunar School Management Software",
    category: "Education Technology",
    image:
      "../../public/kids-going-to-school-illustration-svg-download-png-5349411.webp",
    desc:
      "Single system containing accounting, library, examination, attendance and all school information management.",
    details:
      "A complete School ERP solution designed for schools and colleges. Features include fee management, examination management, attendance tracking, library system, accounting, reporting dashboard, role-based access control, SMS integration and analytics.",
  },

  {
    title: "Lunaccount",
    category: "Cooperative Software",
    image:
      "../../public/Account_Manager_01__Converted__generated.jpg", 
    desc:
      "Enterprise-grade cooperative management system for savings, loans and accounting.",
    details:
      "Manage members, savings, loans, interest calculations, accounting, reports and compliance requirements from a single integrated platform.",
  },
];

const InnovativeProducts = () => {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--primary)]/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent)]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span
            className="
            uppercase
            tracking-[0.25em]
            text-[var(--accent)]
            font-semibold
            text-sm
            "
          >
            Our Products
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            Innovative Software Solutions
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Enterprise-grade products designed to simplify
            operations, improve efficiency and accelerate
            digital transformation.
          </p>
        </div>

        {/* Products Grid */}

        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => setSelected(product)}
              className="
              group
              cursor-pointer
              overflow-hidden
              rounded-3xl

              bg-white/80
              backdrop-blur-xl

              border
              border-white/40

              shadow-lg
              hover:shadow-2xl

              hover:-translate-y-2

              transition-all
              duration-500
              "
            >
              {/* Image */}

              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="
                  w-full
                  h-full
                  object-cover

                  group-hover:scale-110

                  transition-transform
                  duration-700
                  "
                />

                {/* Overlay */}

                <div
                  className="
                  absolute inset-0

                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                  "
                />

                {/* Badge */}

                <div
                  className="
                  absolute top-5 left-5

                  bg-white/90
                  backdrop-blur-md

                  px-4 py-2
                  rounded-full

                  text-sm
                  font-semibold

                  text-[var(--primary)]
                  "
                >
                  {product.category}
                </div>

                {/* Hover Button */}

                <div
                  className="
                  absolute bottom-6 right-6

                  opacity-0
                  translate-y-4

                  group-hover:opacity-100
                  group-hover:translate-y-0

                  transition-all
                  duration-500
                  "
                >
                  <div
                    className="
                    flex items-center gap-2

                    bg-[var(--primary)]
                    text-white

                    px-5 py-3
                    rounded-xl

                    font-semibold
                    "
                  >
                    View Details
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              {/* Content */}

              <div className="p-8">
                <h3
                  className="
                  text-2xl
                  font-extrabold
                  text-[var(--text-primary)]
                  "
                >
                  {product.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {product.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}

        {selected && (
          <div
            className="
            fixed inset-0
            bg-black/60

            backdrop-blur-sm

            flex
            items-center
            justify-center

            p-6
            z-50
            "
          >
            <div
              className="
              bg-white

              max-w-4xl
              w-full

              rounded-3xl
              overflow-hidden

              shadow-2xl

              relative
              "
            >
              {/* Close */}

              <button
                onClick={() => setSelected(null)}
                className="
                absolute
                top-5
                right-5

                bg-white

                p-2
                rounded-full

                shadow-md

                z-10
                "
              >
                <X size={20} />
              </button>

              {/* Image */}

              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-80 object-cover"
              />

              {/* Content */}

              <div className="p-10">
                <div
                  className="
                  inline-block

                  bg-[var(--primary)]/10

                  text-[var(--primary)]

                  px-4 py-2
                  rounded-full

                  text-sm
                  font-semibold
                  "
                >
                  {selected.category}
                </div>

                <h2 className="mt-5 text-4xl font-extrabold">
                  {selected.title}
                </h2>

                <p className="mt-6 text-slate-600 text-lg leading-8">
                  {selected.details}
                </p>

                <div className="mt-10 flex gap-4">
                  <button
                    className="
                    px-6 py-3

                    rounded-xl

                    bg-[var(--primary)]
                    text-white

                    font-semibold

                    hover:bg-[var(--accent)]

                    transition
                    "
                  >
                    Request Demo
                  </button>

                  <button
                    onClick={() => setSelected(null)}
                    className="
                    px-6 py-3

                    rounded-xl

                    border

                    hover:bg-slate-50

                    transition
                    "
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InnovativeProducts;