import React, { useState } from "react";
import { Contact, Plus } from "lucide-react";
import ContactCTA from "./ContactCTA";

const faqs = [
  {
    question: "What services does Lunar IT Solution provide?",
    answer:
      "We provide software development, web and mobile application development, AI & Machine Learning solutions, cloud services, IT consulting, training programs and internship opportunities.",
  },
  {
    question: "Do you develop custom software for businesses?",
    answer:
      "Yes. We design and develop custom software solutions tailored to your business requirements, workflows and long-term goals.",
  },
  {
    question: "Do you provide internship opportunities?",
    answer:
      "Yes. We regularly offer internships in web development, UI/UX design, AI/ML and software engineering for students and fresh graduates.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Our team works with React, Next.js, Node.js, TypeScript, Python, Django, Flutter, AI/ML frameworks, cloud technologies and enterprise databases.",
  },
  {
    question: "Can I request a project consultation?",
    answer:
      "Absolutely. Our experts can discuss your project requirements, provide recommendations and help you choose the right technology stack.",
  },
  {
    question: "Do you provide training programs?",
    answer:
      "Yes. We provide industry-focused training in MERN Stack, Python, AI & Machine Learning, UI/UX Design and other modern technologies.",
  },
];

const FAQSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative pt-10 pb-16 bg-white overflow-hidden antialiased">
      {/* Structural Accent Top Lighting Layer */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--primary)]/5 blur-3xl rounded-full pointer-events-none" />

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
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight text-slate-900">
            Have Questions? We Have{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.25em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Answers.
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
            Find answers to the most common questions about our services, training programs, internships and software development process.
          </p>
        </div>

        {/* FAQ Dynamic Panels Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mt-12 md:mt-16 items-start">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className={`
                border rounded-3xl overflow-hidden bg-white transition-all duration-300 group
                ${
                  isOpen
                    ? "border-[var(--primary)] shadow-xl shadow-slate-100/80 ring-1 ring-[var(--primary)]/10"
                    : "border-slate-200/80 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-50"
                }
                `}
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left gap-4"
                >
                  <h3 className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${isOpen ? "text-[var(--primary)]" : "text-slate-800"}`}>
                    {faq.question}
                  </h3>

                  <div
                    className={`
                    flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full shrink-0 transition-all duration-300
                    ${
                      isOpen
                        ? "bg-[var(--primary)] text-white rotate-45"
                        : "bg-slate-50 text-slate-500 group-hover:bg-slate-100 group-hover:text-slate-800"
                    }
                    `}
                  >
                    <Plus size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                </button>

                <div
                  className={`
                  transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden
                  ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Immersive High-Impact CTA Block */}
      <ContactCTA />

      </div>
    </section>
  );
};

export default FAQSection;