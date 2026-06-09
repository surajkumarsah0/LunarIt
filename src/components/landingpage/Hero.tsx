import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'

const words = [
  'Build Faster &', 
  'Learn Smarter',
]

const Hero = () => {
  const navigate = useNavigate()
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    if (words.length <= 1) return
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white pt-24 antialiased">
      
      {/* ===================================== */}
      {/* RESTORED NORMAL GLOWING BACKGROUND */}
      {/* ===================================== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Glow 1 */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full bg-[var(--accent)]/15 blur-[140px]"
        />

        {/* Glow 2 */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-10 w-[550px] h-[550px] rounded-full bg-[var(--primary)]/15 blur-[140px]"
        />
      </div>

      {/* ===================================== */}
      {/* MAIN LAYOUT CONTAINER (Optimized Padding) */}
      {/* ===================================== */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Changed pb-24 to pb-4 to fix the bottom gap */}
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[70vh] pb-4">
          
          {/* LEFT SIDE: Heading Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900 font-sora">
              Empowering Businesses To
              <br />
              <div className="h-[1.25em] overflow-hidden relative mt-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute left-0 block w-full text-[var(--accent)]"
                  >
                    <span className="relative inline-block whitespace-nowrap px-1">
                      <span className="font-['Caveat',_cursive] text-[1.05em] font-medium italic relative z-10 tracking-normal">
                        {words[currentWord]}
                      </span>
                      {/* Kept Hand-Drawn Underline Vector */}
                      <span className="absolute -bottom-2 left-0 w-full h-3 text-[var(--accent)] opacity-85 pointer-events-none select-none z-0">
                        <svg
                          viewBox="0 0 100 10"
                          preserveAspectRatio="none"
                          className="w-full h-full fill-none stroke-current stroke-[2.5px] stroke-linecap-round stroke-linejoin-round"
                        >
                          <path d="M3,7 C20,2 40,3 60,5 C75,6.5 87,8 97,4 C92,7 65,9 40,8 C20,7 6,5 4,4" />
                        </svg>
                      </span>
                    </span>
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl">
              We help businesses, startups, and organizations accelerate digital
              transformation through software development, AI-powered solutions,
              professional training programs, and internship opportunities.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[var(--primary)] text-white font-semibold hover:scale-105 transition shadow-md shadow-[var(--primary)]/10"
              >
                Explore Services
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate({ to: '/training' })}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-slate-300 bg-white text-slate-800 font-semibold hover:border-[var(--primary)] transition"
              >
                <Play size={18} fill="currentColor" />
                Join Training
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Preserved Original VS Code Content Layout Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-xl rounded-[36px] border border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              <div className="flex items-center gap-2 border-b border-slate-200 px-6 py-4 bg-slate-50/50">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              <div className="p-8 font-mono text-sm leading-8">
                <pre className="overflow-auto text-slate-800">
                  <span className="text-[#ce1313]">const</span>{' '}
                  <span className="text-[#4FC1FF]">lunarIT</span>{' '}
                  <span className="text-green-800">=</span>{' '}
                  <span className="text-red-900">{'{'}</span>
                  {'\n  '}
                  <span className="text-[#ea431d]">development</span>
                  <span className="text-red-900">:</span>{' '}
                  <span className="text-[#02070a]">true</span>
                  <span className="text-red-900">,</span>
                  {'\n  '}
                  <span className="text-[#db7415]">training</span>
                  <span className="text-blue-600">:</span>{' '}
                  <span className="text-[#02070a]">true</span>
                  <span className="text-red-900">,</span>
                  {'\n  '}
                  <span className="text-[#d7a914]">internship</span>
                  <span className="text-blue-600">:</span>{' '}
                  <span className="text-[#02070a]">true</span>
                  <span className="text-red-900">,</span>
                  {'\n  '}
                  <span className="text-[#14d724]">innovation</span>
                  <span className="text-blue-900">:</span>{' '}
                  <span className="text-[#02070a]">true</span>
                  <span className="text-red-900">,</span>
                  {'\n  '}
                  <span className="text-[#2a14d7]">growth</span>
                  <span className="text-blue-900">:</span>{' '}
                  <span className="text-[#02070a]">true</span>
                  {'\n'}
                  <span className="text-red-900">{'}'}</span>
                  <span className="text-red-900">;</span>
                  {'\n\n'}
                  <span className="text-[#C586C0]">export default</span>{' '}
                  <span className="text-[#4FC1FF]">FutureReady</span>
                  <span className="text-red-900">;</span>
                </pre>
              </div>

              <div className="px-8 pb-8 flex justify-between items-center border-t border-slate-100/80 pt-4 bg-slate-50/30">
                <div>
                  <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">System Status</p>
                  <p className="font-bold text-sm text-green-600">All Services Online</p>
                </div>
                <span className="text-sm text-slate-400 font-medium">Lunar IT Solution</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero