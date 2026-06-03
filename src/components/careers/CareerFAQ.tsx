import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you offer internship opportunities?",
    answer:
      "Yes. We regularly offer internship opportunities for students and fresh graduates.",
  },
  {
    question: "Can I apply for multiple positions?",
    answer:
      "Yes. You can apply for multiple relevant positions that match your skills.",
  },
  {
    question: "Is remote work available?",
    answer:
      "Depending on the role and project requirements, remote or hybrid options may be available.",
  },
  {
    question: "What is the hiring process?",
    answer:
      "Application → Resume Review → Interview → Technical Assessment → Final Selection.",
  },
  {
    question: "Do you provide training for employees?",
    answer:
      "Yes. We encourage continuous learning through mentorship and professional development programs.",
  },
];

export default function CareerFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[var(--accent)]">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              overflow-hidden
              "
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="
                w-full
                flex
                items-center
                justify-between
                p-6
                text-left
                "
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                {open === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}