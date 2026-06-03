import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "Service",
    "Training",
    "Career",
    "About",
    "Gallery",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-5 lg:px-6">
      <nav
        className={`max-w-7xl mx-auto transition-all duration-500  ${
          scrolled
            ? "mt-4 bg-white/80 backdrop-blur-xl shadow-xl rounded-full px-6 py-2 border border-white/40"
            : "bg-transparent py-2"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="/images__1_-removebg-preview.png"
              alt="Lunar IT Solution"
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-14" : "h-20"
              }`}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`${item.toLowerCase()}`}
                className="relative font-medium text-gray-700 hover:text-orange-500 transition group"
              >
                {item}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button onClick={() => navigate({ to: "/contact" })}
              className={`transition-all duration-300 bg-orange-500 text-white hover:bg-orange-600 ${
                scrolled ? "px-6 py-3 rounded-full" : "px-7 py-3 rounded-xl"
              }`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-6 mx-2">
          <div className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`${item.toLowerCase()}`}
                className="text-gray-700 font-medium hover:text-orange-500"
              >
                {item}
              </a>
            ))}

            <button className="bg-orange-500 text-white py-3 rounded-full" onClick={() => navigate("/contact")}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
