import { useNavigate } from "@tanstack/react-router";
import heroImage from "../../../public/1.png";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Shapes */}

      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-blue-900/10"></div>

      <div className="absolute bottom-0 right-20 w-[400px] h-[400px] rounded-full bg-red-600/10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}

          <div>
            <h1
              className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              leading-tight
              tracking-tight
              "
            >
              Empowering Businesses Through
              <span className="text-[var(--primary)]">
                {" "}
                Innovative IT Solutions
              </span>
            </h1>

            <p
              className="
              mt-8
              text-lg
              leading-8
              text-slate-600
              max-w-xl
              "
            >
              We provide software development,
              IT training, internship opportunities,
              and digital solutions that help
              businesses and students grow.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                className="
                px-8 py-4
                rounded-xl
                bg-[var(--primary)]
                text-white
                font-semibold
                "
                id="explore-services"
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore Services
              </button>

              <button
                className="
                px-8 py-4
                rounded-xl
                border
                border-[var(--primary)]
                text-[var(--primary)]
                font-semibold
                "
                onClick={() => {
                  navigate({ to: "/training" });
                }}
              >
                Join Training
              </button>
            </div>
          </div>

          {/* Right */}

          <div>
            <img
              src={heroImage}
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;