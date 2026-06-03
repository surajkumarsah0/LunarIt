import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";

const reviews = [
  {
    name: "Mousam Tamang",
    role: "CEO, Safari Yatri Private Limited",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    review:
      "Safari Yatri Private Limited is highly satisfied with the application and IT services provided by Lunar I.T. Solution Pvt. Ltd. Their team delivered a reliable, user-friendly ride-sharing platform tailored to our needs, with excellent support and professionalism. We confidently recommend them as a trusted IT partner.",
  },
  
];

const TestimonialSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="flex justify-between items-end flex-wrap gap-6">
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
              Client Testimonials
            </span>

            <h2
              className="
              mt-4
              text-4xl
              md:text-5xl
              font-extrabold
              "
            >
              What Our Clients Say
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
              Trusted by businesses, institutions and
              organizations for delivering reliable,
              scalable and innovative technology solutions.
            </p>
          </div>

          {/* Navigation */}

          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              className="
              w-12 h-12
              rounded-full
              border
              flex items-center justify-center
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
              w-12 h-12
              rounded-full
              bg-[var(--primary)]
              text-white
              flex items-center justify-center
              hover:bg-[var(--accent)]
              transition
              "
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}

        <div
          ref={scrollRef}
          className="
          flex
          gap-8
          overflow-x-auto
          scroll-smooth
          mt-16
          custom-scroll
          pb-4
          "
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="
              min-w-[500px]
              max-w-[500px]

              bg-white

              rounded-3xl
              p-10

              border
              border-slate-200

              shadow-md
              hover:shadow-xl

              transition-all
              duration-500
              "
            >
              {/* Quote */}

              <div
                className="
                w-16 h-16

                rounded-2xl

                bg-[var(--primary)]/10

                flex
                items-center
                justify-center

                mb-8
                "
              >
                <Quote
                  size={30}
                  className="text-[var(--primary)]"
                />
              </div>

              {/* Review */}

              <p
                className="
                text-slate-700
                leading-8
                text-lg
                "
              >
                "{review.review}"
              </p>

              {/* Stars */}

              <div className="flex gap-2 mt-8">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={22}
                    fill="#FBBF24"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              {/* User */}

              <div className="flex items-center gap-4 mt-10">
                <img
                  src={review.image}
                  alt={review.name}
                  className="
                  w-16
                  h-16
                  rounded-full
                  object-cover
                  "
                />

                <div>
                  <h4 className="font-bold text-lg">
                    {review.name}
                  </h4>

                  <p className="text-slate-500">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;