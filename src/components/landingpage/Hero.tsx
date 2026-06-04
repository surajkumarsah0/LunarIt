import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Play,
  Code2,
  Brain,
  Cloud,
  GraduationCap,
  Briefcase,
  Database,
} from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'

const words = ['Build Faster', 'Learn Smarter']

const techStack = [
  {
    name: 'React',
    icon: Code2,
    position: 'top-[10%] left-[5%]',
  },
  {
    name: 'AI',
    icon: Brain,
    position: 'top-[15%] right-[10%]',
  },
  {
    name: 'Cloud',
    icon: Cloud,
    position: 'bottom-[25%] left-[0%]',
  },
  {
    name: 'Training',
    icon: GraduationCap,
    position: 'bottom-[10%] right-[5%]',
  },
  {
    name: 'Internship',
    icon: Briefcase,
    position: 'top-[50%] right-[0%]',
  },
  {
    name: 'Database',
    icon: Database,
    position: 'top-[65%] left-[2%]',
  },
]

const Hero = () => {
  const navigate = useNavigate()

  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white pt-32">
      {/* ===================================== */}
      {/* BACKGROUND */}
      {/* ===================================== */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),
            linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        {/* Glow 1 */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
            absolute
            top-20
            left-10
            w-[500px]
            h-[500px]
            rounded-full
            bg-[var(--accent)]/15
            blur-[140px]
          "
        />

        {/* Glow 2 */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-10
            right-10
            w-[550px]
            h-[550px]
            rounded-full
            bg-[var(--primary)]/15
            blur-[140px]
          "
        />
      </div>

      {/* ===================================== */}
      {/* CONTENT */}
      {/* ===================================== */}

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
          {/* ===================================== */}
          {/* LEFT SIDE */}
          {/* ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white
                border
                border-slate-200
                shadow-sm
              "
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

              <span className="text-sm font-semibold">
                Trusted IT Solutions & Training Provider
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-8
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-extrabold
                leading-tight
                tracking-tight
              "
            >
              Empowering Businesses
              <br />
              To
              <motion.span
                key={currentWord}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                className="
                  block
                  mt-2
                  text-[var(--primary)]
                "
              >
                {words[currentWord]}
              </motion.span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-8
                text-lg
                leading-8
                text-slate-600
                max-w-2xl
              "
            >
              We help businesses, startups and organizations accelerate digital
              transformation through software development, AI-powered solutions,
              professional training programs and internship opportunities.
            </p>

            {/* CTA */}

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={() => {
                  const element = document.getElementById('services')

                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }
                }}
                className="
                  inline-flex
                  items-center
                  gap-3

                  px-8
                  py-4

                  rounded-2xl

                  bg-[var(--primary)]
                  text-white

                  font-semibold

                  hover:scale-105
                  transition
                "
              >
                Explore Services
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() =>
                  navigate({
                    to: '/training',
                  })
                }
                className="
                  inline-flex
                  items-center
                  gap-3

                  px-8
                  py-4

                  rounded-2xl

                  border
                  border-slate-300

                  bg-white

                  font-semibold

                  hover:border-[var(--primary)]
                  transition
                "
              >
                <Play size={18} />
                Join Training
              </button>
            </div>

            {/* Stats */}
          </motion.div>

          {/* ===================================== */}
          {/* RIGHT SIDE */}
          {/* ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Floating Pills */}

            {techStack.map((tech, index) => {
              const Icon = tech.icon

              return (
                <motion.div
                  key={tech.name}
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                  }}
                  className={`
                    absolute
                    ${tech.position}

                    flex
                    items-center
                    gap-2

                    px-4
                    py-2

                    rounded-full

                    bg-white/80
                    backdrop-blur-xl

                    border
                    border-white

                    shadow-lg
                  `}
                >
                  <Icon size={16} />

                  <span className="font-medium text-sm">{tech.name}</span>
                </motion.div>
              )
            })}

            {/* Main Card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                relative

                w-full
                max-w-xl

                rounded-[36px]

                border
                border-white/30

                bg-white/70
                backdrop-blur-2xl

                shadow-[0_20px_80px_rgba(0,0,0,0.12)]

                overflow-hidden
              "
            >
              {/* Top Bar */}

              <div
                className="
                  flex
                  items-center
                  gap-2

                  border-b
                  border-slate-200

                  px-6
                  py-4
                "
              >
                <div className="w-3 h-3 rounded-full bg-red-500" />

                <div className="w-3 h-3 rounded-full bg-yellow-500" />

                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Code Window */}

              <div className="p-8">
                <pre className="text-sm leading-8 overflow-auto font-mono">
                  <span className="text-[#ce1313]">const</span>{' '}
                  <span className="text-[#4FC1FF]">lunarIT</span>{' '}
                  <span className="text-white">=</span>{' '}
                  <span className="text-white">{'{'}</span>
                  {'\n  '}
                  <span className="text-[#ea431d]">development</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-[#02070a]">true</span>
                  <span className="text-white">,</span>
                  {'\n  '}
                  <span className="text-[#db7415]">training</span>
                  <span className="text-blue">:</span>{' '}
                  <span className="text-[#02070a]">true</span>
                  <span className="text-white">,</span>
                  {'\n  '}
                  <span className="text-[#2a14d7]">internship</span>
                  <span className="text-blue">:</span>{' '}
                  <span className="text-[#02070a]">true</span>
                  <span className="text-white">,</span>
                  {'\n  '}
                  <span className="text-[#2a14d7]">innovation</span>
                  <span className="text-blue">:</span>{' '}
                  <span className="text-[#02070a]">true</span>
                  <span className="text-white">,</span>
                  {'\n  '}
                  <span className="text-[#2a14d7]">growth</span>
                  <span className="text-blue">:</span>{' '}
                  <span className="text-[#02070a]">true</span>
                  {'\n'}
                  <span className="text-white">{'}'}</span>
                  <span className="text-white">;</span>
                  {'\n\n'}
                  <span className="text-[#C586C0]">export default</span>{' '}
                  <span className="text-[#4FC1FF]">FutureReady</span>
                  <span className="text-white">;</span>
                </pre>
              </div>

              {/* Bottom Status */}

              <div
                className="
                  px-8
                  pb-8

                  flex
                  justify-between
                  items-center
                "
              >
                <div>
                  <p className="text-sm text-slate-500">System Status</p>

                  <p className="font-bold text-green-600">
                    All Services Online
                  </p>
                </div>

                <div
                  className="
                    px-4
                    py-2

                    rounded-full

                    bg-[var(--primary)]/10

                    text-[var(--primary)]
                    font-semibold
                    text-sm
                  "
                >
                  Lunar IT
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
