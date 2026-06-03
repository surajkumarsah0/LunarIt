import {
 
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Er. Saroj Ojha",
    role: "Chief Technology Officer",
    image: "../../public/ojha sir.jpg",
    bio: "(CTO)",
  },
  {
    name: "Er. Chandra Prasad Acharya",
    role: "Managing Director",
    image: "../../public/md.jpg",
    bio: "Senior Dotnet Developer",
  },
  
];

const TeamSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--primary)]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span
              className="
              uppercase
              tracking-[0.3em]
              text-[var(--accent)]
              text-sm
              font-semibold
              "
            >
              Our Team
            </span>

            <h2
              className="
              mt-4
              text-4xl
              md:text-5xl
              font-extrabold
              tracking-tight
              "
            >
              Meet The Experts
            </h2>

            <p
              className="
              mt-5
              max-w-2xl
              text-lg
              text-slate-600
              leading-8
              "
            >
              A team of passionate engineers, designers,
              innovators and problem solvers committed to
              delivering world-class technology solutions.
            </p>
          </div>

          {/* Navigation */}

          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              className="
              w-12
              h-12
              rounded-full
              border

              flex
              items-center
              justify-center

              hover:bg-[var(--primary)]
              hover:text-white

              transition
              "
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={scrollRight}
              className="
              w-12
              h-12
              rounded-full

              bg-[var(--primary)]
              text-white

              flex
              items-center
              justify-center

              hover:bg-[var(--accent)]

              transition
              "
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Team Slider */}

        <div
          ref={scrollRef}
          className="
          mt-16
          flex
          gap-8
          overflow-x-auto
          scroll-smooth
          scrollbar-hide
          "
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="
              min-w-[350px]

              bg-white

              rounded-3xl
              overflow-hidden

              border
              border-slate-100

              shadow-lg

              hover:-translate-y-2
              hover:shadow-2xl

              transition-all
              duration-500

              group
              "
            >
              {/* Image */}

              <div className="relative h-[420px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
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
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                  "
                />

                {/* Socials */}

                <div
                  className="
                  absolute
                  bottom-6
                  left-6

                  flex
                  gap-3

                  opacity-0
                  translate-y-6

                  group-hover:opacity-100
                  group-hover:translate-y-0

                  transition-all
                  duration-500
                  "
                >
                  {[FaFacebook, FaGithub, FaLinkedin].map(
                    (Icon, i) => (
                      <button
                        key={i}
                        className="
                        w-10
                        h-10

                        rounded-full

                        bg-white/20
                        backdrop-blur-md

                        text-white

                        flex
                        items-center
                        justify-center

                        hover:bg-[var(--accent)]

                        transition
                        "
                      >
                        <Icon size={18} />
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Content */}

              <div className="p-8">
                <h3
                  className="
                  text-2xl
                  font-bold
                  "
                >
                  {member.name}
                </h3>

                <p
                  className="
                  mt-2
                  text-[var(--primary)]
                  font-semibold
                  "
                >
                  {member.role}
                </p>

                <p
                  className="
                  mt-5
                  text-slate-600
                  leading-7
                  "
                >
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;