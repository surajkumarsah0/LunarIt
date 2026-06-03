import { useState } from "react";
import { Plus } from "lucide-react";

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
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">
          <span
            className="
            uppercase
            tracking-[0.3em]
            text-[var(--accent)]
            text-sm
            font-semibold
            "
          >
            Frequently Asked Questions
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
            Have Questions?
            <br />
            We Have Answers.
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-slate-600
            leading-8
            "
          >
            Find answers to the most common questions about
            our services, training programs, internships and
            software development process.
          </p>
        </div>

        {/* FAQ Grid */}

        <div className="grid lg:grid-cols-2 gap-6 mt-20">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className="
                border
                border-slate-200
                rounded-3xl
                overflow-hidden

                hover:border-[var(--primary)]
                hover:shadow-lg

                transition-all
                duration-300
                "
              >
                <button
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  className="
                  w-full

                  flex
                  items-center
                  justify-between

                  p-7

                  text-left
                  "
                >
                  <h3
                    className="
                    text-lg
                    font-bold
                    pr-5
                    "
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`
                    flex
                    items-center
                    justify-center

                    w-10
                    h-10

                    rounded-full

                    transition-all
                    duration-300

                    ${
                      isOpen
                        ? "bg-[var(--primary)] text-white rotate-45"
                        : "bg-slate-100"
                    }
                    `}
                  >
                    <Plus size={18} />
                  </div>
                </button>

                <div
                  className={`
                  transition-all
                  duration-500
                  overflow-hidden

                  ${
                    isOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                  `}
                >
                  <div className="px-7 pb-7">
                    <p
                      className="
                      text-slate-600
                      leading-8
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div
          className="
          mt-20

          rounded-3xl

          bg-[var(--primary-dark)]

          p-10

          text-center
          text-white
          "
        >
          <h3 className="text-3xl font-bold">
            Still Have Questions?
          </h3>

          <p className="mt-4 text-slate-300">
            Our team is ready to help you with your
            project, training or business requirements.
          </p>

          <button
            className="
            mt-8

            px-8
            py-4

            rounded-xl

            bg-[var(--accent)]

            font-semibold

            hover:opacity-90

            transition
            "
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;