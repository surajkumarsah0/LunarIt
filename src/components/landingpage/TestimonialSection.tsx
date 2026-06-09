import React, { useRef } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Mousam Tamang",
    role: "CEO, Safari Yatri Private Limited",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    review:
      "Safari Yatri Private Limited is highly satisfied with the application and IT services provided by Lunar I.T. Solution Pvt. Ltd. Their team delivered a reliable, user-friendly ride-sharing platform tailored to our needs, with excellent support and professionalism. We confidently recommend them as a trusted IT partner.",
  },
];

const TestimonialSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -480,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 480,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative pt-10 pb-16 bg-slate-50 overflow-hidden antialiased">
      {/* Background Glow Configuration */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--primary)]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent)]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered Topic Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-[fadeInUp_0.6s_ease-out_forwards]">
          
          {/* Integrated Pulsing Indicator Tag */}
          <div className="flex items-center justify-center gap-2 mb-3.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight text-slate-900">
            What Our Partners{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.25em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Say About Us
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

          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Trusted by businesses, institutions and organizations for delivering reliable, scalable and innovative technology solutions.
          </p>

          {/* Navigation Controls Center Alignment */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              onClick={scrollRight}
              className="w-11 h-11 rounded-full bg-[var(--primary)] text-white flex items-center justify-center hover:bg-[var(--accent)] shadow-sm transition-all duration-300"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Testimonials Slider Horizontal Lane */}
        <div
          ref={scrollRef}
          className="mt-12 md:mt-16 flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4 snap-x snap-mandatory"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="
              min-w-[290px]
              sm:min-w-[480px]
              max-w-[480px]
              snap-center
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              p-6
              sm:p-10
              border
              border-slate-100
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-1.5
              transition-all
              duration-500
              flex
              flex-col
              justify-between
              "
            >
              <div>
                {/* Visual Accent Quote Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center mb-6 sm:mb-8">
                  <Quote size={24} className="text-[var(--primary)] fill-current opacity-80" />
                </div>

                {/* Typography Optimized Main Review Quote Body */}
                <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal italic">
                  "{review.review}"
                </p>
              </div>

              <div>
                {/* Five-Star Rating Scale Row */}
                <div className="flex gap-1.5 mt-6 sm:mt-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={18}
                      fill="#FBBF24"
                      className="text-yellow-400"
                    />
                  ))}
                </div>

                {/* Client Reviewer Meta Credentials Identification Area */}
                <div className="flex items-center gap-4 mt-6 sm:mt-8 border-t border-slate-50 pt-5">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-4 ring-slate-100"
                  />

                  <div className="min-w-0">
                    <h4 className="font-bold text-base sm:text-lga text-slate-900 tracking-tight truncate">
                      {review.name}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm font-medium truncate mt-0.5">
                      {review.role}
                    </p>
                  </div>
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