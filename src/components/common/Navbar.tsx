import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [careerOpen, setCareerOpen] = useState(false);
  const [careerTimeout, setCareerTimeout] = useState<NodeJS.Timeout | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/service" },
    { label: "Training", href: "/training" },
    { label: "Career", href: "/career" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 lg:px-6">
      <nav
        className={`
          max-w-7xl mx-auto
          px-6
          py-2
          rounded-full
          border border-white/10
          transform-gpu
          will-change-transform
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            scrolled
              ? `
                mt-4
                bg-white/75
                backdrop-blur-2xl
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                translate-y-0
              `
              : `
                mt-0
                bg-transparent
                shadow-none
                translate-y-0
              `
          }
        `}
      >
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="../../../public/lunarlogo.png"
              alt="Lunar IT Solution"
              className={`
                w-auto
                transition-all
                duration-500
                ease-out
                ${scrolled ? "h-8" : "h-8 lg:h-10"}
              `}
            />
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => {
              if (item.label === "Career") {
                return (
                  <div
                    key="career"
                    className="relative"
                    onMouseEnter={() => {
                      if (careerTimeout) clearTimeout(careerTimeout);
                      setCareerOpen(true);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setCareerOpen(false);
                      }, 300);
                      setCareerTimeout(timeout);
                    }}
                  >
                    <button
                      className="
                        flex items-center gap-1
                        font-medium
                        text-gray-700
                        hover:text-orange-500
                        transition-colors
                        group
                      "
                    >
                      Career

                      <ChevronDown
                        size={16}
                        className={`
                          transition-transform duration-300
                          ${careerOpen ? "rotate-180" : "rotate-0"}
                        `}
                      />

                      <span className="
                        absolute
                        left-0
                        -bottom-1
                        h-[2px]
                        w-0
                        bg-orange-500
                        transition-all
                        duration-300
                        group-hover:w-full
                      " />
                    </button>

                    {/* DROPDOWN */}
                    {careerOpen && (
                      <div
                        className="
                          absolute
                          top-10
                          left-0
                          bg-white
                          shadow-lg
                          rounded-xl
                          overflow-hidden
                          min-w-[180px]
                          border
                          border-gray-100
                        "
                      >
                        <button
                          onClick={() => navigate({ to: "/job" })}
                          className="
                            block w-full text-left
                            px-5 py-3
                            hover:bg-orange-50
                            text-gray-700
                          "
                        >
                          Jobs
                        </button>

                        <button
                          onClick={() => navigate({ to: "/internship" })}
                          className="
                            block w-full text-left
                            px-5 py-3
                            hover:bg-orange-50
                            text-gray-700
                          "
                        >
                          Internship
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    relative
                    font-medium
                    text-gray-700
                    hover:text-orange-500
                    transition-colors
                    duration-300
                    group
                  "
                >
                  {item.label}

                  <span className="
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    w-0
                    bg-orange-500
                    transition-all
                    duration-300
                    group-hover:w-full
                  " />
                </a>
              );
            })}

          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => navigate({ to: "/contact" })}
              className="
                px-6
                py-3
                rounded-full
                bg-orange-500
                text-white
                font-medium
                transition-all
                duration-300
                hover:bg-orange-600
                hover:scale-105
                active:scale-95
              "
            >
              Get Started
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isOpen ? "max-h-[600px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        <div className="
          mx-2
          rounded-3xl
          bg-white/90
          backdrop-blur-xl
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          p-6
        ">

          <div className="flex flex-col gap-5">

            {navLinks.map((item) => {
              if (item.label === "Career") {
                return (
                  <div key="career-mobile" className="flex flex-col gap-2">
                    <span className="font-medium text-gray-700">
                      Career
                    </span>

                    <button
                      onClick={() => {
                        setIsOpen(false);
                        navigate({ to: "/career/jobs" });
                      }}
                      className="text-left text-gray-600 hover:text-orange-500"
                    >
                      Jobs
                    </button>

                    <button
                      onClick={() => {
                        setIsOpen(false);
                        navigate({ to: "/career/internship" });
                      }}
                      className="text-left text-gray-600 hover:text-orange-500"
                    >
                      Internship
                    </button>
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 font-medium hover:text-orange-500 transition"
                >
                  {item.label}
                </a>
              );
            })}

            <button
              onClick={() => {
                setIsOpen(false);
                navigate({ to: "/contact" });
              }}
              className="
                bg-orange-500
                text-white
                py-3
                rounded-full
                font-medium
                hover:bg-orange-600
              "
            >
              Get Started
            </button>

          </div>
        </div>
      </div>

    </header>
  );
};

export default Navbar;