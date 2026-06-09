import { useEffect, useRef, useState } from 'react'
import {
  FileText,
  SearchCheck,
  Users,
  Code2,
  BadgeCheck,
  PartyPopper,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Application Submission',
    description:
      'Submit your application along with your resume and portfolio.',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Resume Screening',
    description:
      'Our hiring team evaluates your qualifications and experience.',
    icon: SearchCheck,
  },
  {
    number: '03',
    title: 'HR Interview',
    description:
      'A discussion to understand your goals, communication and culture fit.',
    icon: Users,
  },
  {
    number: '04',
    title: 'Technical Assessment',
    description:
      'Showcase your technical skills through practical tasks and challenges.',
    icon: Code2,
  },
  {
    number: '05',
    title: 'Final Selection',
    description:
      'Selected candidates receive an offer and onboarding information.',
    icon: BadgeCheck,
  },
  {
    number: '06',
    title: 'Welcome To Lunar IT',
    description:
      'Join our team and start building innovative digital solutions.',
    icon: PartyPopper,
  },
]

export default function HiringProcess() {
  const [activeIndex, setActiveIndex] = useState(0)
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index))
          }
        })
      },
      { threshold: 0.6 },
    )

    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[var(--accent)]">
            Hiring Process
          </span>

          <h2 className="mt-4 text-3xl md:text-6xl font-extrabold">
            Your Journey To Join Lunar IT
          </h2>

          <p className="mt-4 md:mt-6 text-slate-600 max-w-2xl mx-auto">
            A transparent hiring process focused on talent and growth.
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">
          {/* CURVED LINE (LEFT ON BOTH, JUST SMALLER ON MOBILE) */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full">
            <svg
              className="h-full w-[60px] md:w-[150px]"
              viewBox="0 0 150 1200"
              preserveAspectRatio="none"
            >
              <path
                d="
                M75 0
                C15 100,135 180,75 280
                C15 380,135 460,75 560
                C15 660,135 740,75 840
                C15 940,135 1020,75 1120
                "
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="3"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = activeIndex === index

              return (
                <div
                  key={step.number}
                  ref={(el) => (refs.current[index] = el)}
                  data-index={index}
                  className="relative flex justify-end md:flex-row"
                >
                  {/* CONTENT BOX */}
                  <div
                    className={`
                      w-[80%] sm:w-[70%] md:w-[42%]
                      ml-auto md:ml-0
                      ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}
                    `}
                  >
                    <div
                      className={`
                        p-4 md:p-6 rounded-xl border transition-all duration-300
                        ${
                          isActive
                            ? 'border-[var(--primary)] shadow-lg scale-[1.02]'
                            : 'border-transparent'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <div
                          className={`
                            w-9 h-9 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition
                            ${
                              isActive
                                ? 'bg-[var(--primary)] text-white'
                                : 'bg-[var(--primary)]/10 text-[var(--primary)]'
                            }
                          `}
                        >
                          <Icon size={18} className="md:size-[22px]" />
                        </div>

                        <h3 className="text-lg md:text-2xl font-bold">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-2 md:mt-4 text-sm md:text-base text-slate-600 leading-6 md:leading-8">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* STEP NUMBER (CENTER DESKTOP ONLY) */}
                  {/* STEP NUMBER */}
                  <div
                    className={`
    absolute left-2 md:left-1/2 md:-translate-x-1/2
    flex items-center justify-center
    font-bold shadow-md border-2 border-white transition-all

    w-7 h-7 text-xs rounded-full
    md:w-14 md:h-14 md:text-base md:border-4

    ${
      isActive
        ? 'bg-[var(--primary)] text-white scale-110'
        : 'bg-slate-200 text-slate-700'
    }
  `}
                  >
                    {step.number}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
