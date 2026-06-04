import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, X } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/gallery')({
  component: RouteComponent,
})






const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title: "Modern Office Workspace",
    desc: "Our collaborative workspace designed for productivity and innovation.",
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0",
    title: "Team Collaboration",
    desc: "Engineers working together on real-world client projects.",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    title: "Strategy Meeting",
    desc: "Planning product architecture and client solutions.",
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    title: "Company Event",
    desc: "Annual tech meetup and knowledge-sharing session.",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Training Workshop",
    desc: "Hands-on training session for developers and interns.",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Development Phase",
    desc: "Building scalable software solutions for global clients.",
  },
];
function RouteComponent() {

  const [selected, setSelected] = useState<null | typeof galleryImages[0]>(null);

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.35em] text-[var(--accent)] text-sm font-semibold">
            Our Culture
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-extrabold">
            Life at Our Company
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            A glimpse into our workspace, team culture, events, and how we build
            impactful digital solutions together.
          </p>
        </div>

        {/* ================= GALLERY GRID ================= */}

        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelected(img)}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                cursor-pointer
                bg-black
                aspect-[4/3]
              "
            >

              {/* IMAGE */}
              <img
                src={img.src}
                alt={img.title}
                className="
                  w-full h-full
                  object-cover
                  group-hover:scale-110
                  transition duration-700
                  opacity-90
                  group-hover:opacity-70
                "
              />

              {/* OVERLAY */}
              <div className="
                absolute inset-0
                bg-gradient-to-t from-black/80 via-black/30 to-transparent
                opacity-0 group-hover:opacity-100
                transition
              " />

              {/* TEXT */}
              <div className="
                absolute bottom-5 left-5 right-5
                text-white
                opacity-0 group-hover:opacity-100
                transition
              ">

                <h3 className="text-xl font-bold">
                  {img.title}
                </h3>

                <p className="text-sm text-white/70 mt-2">
                  {img.desc}
                </p>

              </div>

              {/* NUMBER */}
              <div className="
                absolute top-4 right-4
                text-white/30
                text-4xl font-black
              ">
                0{i + 1}
              </div>

            </div>
          ))}

        </div>

        {/* ================= MODAL ================= */}

        {selected && (
          <div
            className="
              fixed inset-0
              bg-black/90
              flex items-center justify-center
              z-50
              p-6
            "
            onClick={() => setSelected(null)}
          >

            <div
              className="
                relative
                max-w-5xl w-full
              "
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelected(null)}
                className="
                  absolute -top-12 right-0
                  text-white
                  hover:text-red-400
                  transition
                "
              >
                <X size={32} />
              </button>

              {/* IMAGE */}
              <img
                src={selected.src}
                alt={selected.title}
                className="
                  w-full
                  max-h-[80vh]
                  object-contain
                  rounded-2xl
                "
              />

              {/* DESCRIPTION */}
              <div className="text-center mt-6 text-white">
                <h3 className="text-2xl font-bold">
                  {selected.title}
                </h3>

                <p className="text-white/70 mt-2">
                  {selected.desc}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};


