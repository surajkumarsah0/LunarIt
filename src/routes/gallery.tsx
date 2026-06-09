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
    <section className="py-24 md:py-20 bg-slate-50 text-slate-900 antialiased border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER BLOCK ================= */}
        <div className="text-center max-w-2xl mx-auto">
          {/* Accent Micro Badge */}
             <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Gallery
            </span>
          </div>

          {/* Scaled Responsive Headings + Hand-Drawn Underline Element */}
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Life at Our{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.05em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Company
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-2.5 text-[var(--accent)] opacity-85 pointer-events-none select-none z-0">
                <svg
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  className="w-full h-full fill-none stroke-current stroke-[2.5px] stroke-linecap-round stroke-linejoin-round"
                >
                  <path d="M3,7 C20,2 40,3 60,5 C75,6.5 87,8 97,4 C92,7 65,9 40,8 C20,7 6,5 4,4" />
                </svg>
              </span>
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto font-normal">
            A glimpse into our workspace, team culture, events, and how we build impactful digital solutions together.
          </p>
        </div>

        {/* ================= GALLERY GRID ================= */}
        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelected(img)}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                cursor-pointer
                bg-slate-950
                aspect-[4/3]
                border
                border-slate-200/40
                shadow-sm
              "
            >
              {/* IMAGE ELEMENT */}
              <img
                src={`${img.src}?q=80&w=800&auto=format&fit=crop`}
                alt={img.title}
                loading="lazy"
                className="
                  w-full h-full
                  object-cover
                  scale-[1.01]
                  group-hover:scale-105
                  transition-all duration-500 ease-out
                  opacity-95
                  group-hover:opacity-40
                "
              />

              {/* GRADIENT SHADING OVERLAY */}
              <div className="
                absolute inset-0
                bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300 pointer-events-none
              " />

              {/* ACTION CALLOUT INDICATOR */}
              <div className="absolute top-4 left-4 p-1.5 rounded-lg bg-white/10 text-white opacity-0 group-hover:opacity-100 backdrop-blur-md transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight size={16} />
              </div>

              {/* CHRONOLOGICAL INDEX NUMBER */}
              <div className="
                absolute top-3 right-4
                text-slate-950/10 group-hover:text-white/10
                text-3xl font-black
                transition-colors duration-300
                select-none pointer-events-none
              ">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* FLOATING CAPTION MATRIX */}
              <div className="
                absolute bottom-0 left-0 right-0 p-5
                text-white transform translate-y-2 group-hover:translate-y-0
                opacity-0 group-hover:opacity-100
                transition-all duration-300 ease-out
              ">
                <h3 className="text-sm sm:text-base font-bold tracking-tight">
                  {img.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/70 mt-1.5 leading-relaxed font-normal line-clamp-2">
                  {img.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* ================= LIGHTBOX INTERACTIVE MODAL ================= */}
        {selected && (
          <div
            className="
              fixed inset-0
              bg-slate-950/90
              backdrop-blur-sm
              flex items-center justify-center
              z-50
              p-4 sm:p-6
            "
            onClick={() => setSelected(null)}
          >
            <div
              className="relative max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* STICKY DISMISS TRACE TRIGGER */}
              <button
                onClick={() => setSelected(null)}
                className="
                  absolute -top-10 right-0 sm:right-4
                  text-white/70
                  hover:text-white
                  p-1
                  transition-colors duration-200
                "
                aria-label="Close modal dialog"
              >
                <X size={24} />
              </button>

              {/* FULL SCALE PREVIEW MEDIA */}
              <img
                src={`${selected.src}?q=90&w=1600&auto=format&fit=crop`}
                alt={selected.title}
                className="
                  w-full
                  max-h-[70vh]
                  object-contain
                  rounded-xl
                  shadow-2xl
                  bg-slate-900
                "
              />

              {/* EXPANDED DETAILS FOLLOWER BOX */}
              <div className="text-center mt-4 max-w-xl px-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {selected.title}
                </h3>
                <p className="text-xs text-white/60 mt-1 leading-relaxed font-normal">
                  {selected.desc}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}