import { createFileRoute } from '@tanstack/react-router'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-slate-50 text-slate-900 antialiased">

      {/* ================= HERO SECTION ================= */}
      <section className="py-16 md:py-20 border-b border-slate-200/60 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
 <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Contact Us
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
            Let's Build Something
            <br />
            <span className="relative inline-block whitespace-nowrap px-1 mt-1">
              <span className="font-['Caveat',_cursive] text-[1.05em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Extraordinary
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
            </span>{" "}
            Together
          </h1>

          <p className="max-w-xl mx-auto mt-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Whether you need software development, AI solutions, corporate training or IT consultation, our team is ready to step in and execute.
          </p>

        </div>
      </section>

      {/* ================= CONTACT CORE AREA ================= */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6 items-start">

            {/* LEFT SIDE: DIRECT SPECIFICATIONS METRIC PANEL */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 border border-slate-800 shadow-sm">
              <h2 className="text-lg md:text-xl font-bold tracking-tight">
                Lunar IT Solution
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Empowering modern businesses through innovative software solutions, production AI technologies, and expert IT execution tracks.
              </p>

              <hr className="my-6 border-slate-800" />

              <div className="space-y-5">
                <div className="flex gap-3.5 items-start">
                  <Mail size={16} className="text-[var(--accent)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">Email Contact</h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-normal mt-0.5">lunaritsolution2016@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <Phone size={16} className="text-[var(--accent)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">Phone Gateway</h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-normal mt-0.5">+977 9842230020</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <MapPin size={16} className="text-[var(--accent)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">HQ Office</h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-normal mt-0.5">Itahari, Sunsari</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <Clock size={16} className="text-[var(--accent)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">Operations Window</h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-normal mt-0.5">Sunday – Friday</p>
                    <p className="text-xs text-slate-500 font-normal mt-0.5">10:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-800 bg-white/[0.02] -mx-6 -mb-6 p-6 rounded-b-2xl">
               
              </div>
            </div>

            {/* RIGHT SIDE:  FORM CONTAINER */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 md:p-8">
              <div className="mb-6">
                <span className="uppercase tracking-[0.2em] text-[var(--accent)] text-[10px] font-semibold block">
                  Contact Form
                </span>
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mt-1">
                  Send Us a Message
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-normal">
                  Our team evaluates submissions and responds within 24 hours.
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-slate-400 transition-colors bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-slate-400 transition-colors bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="+977 98XXXXXXXX"
                      className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-slate-400 transition-colors bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Subject Matter
                    </label>
                    <input
                      type="text"
                      placeholder="Internship,Training "
                      className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-slate-400 transition-colors bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Target Framework Track Interested In
                  </label>
                  <select className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-slate-400 transition-colors bg-slate-50/50 appearance-none cursor-pointer">
                    <option>Web Application Development</option>
                    <option>Mobile App Ecosystem Development</option>
                    <option>AI & Machine Learning Solutions</option>
                    <option>Cloud Architecture Infrastructure</option>
                    <option>Professional Training Programs</option>
                    <option>Corporate Internship Programs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide a brief summary of your tech stack requirements, user pathways, and production scope..."
                    className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-slate-400 transition-colors bg-slate-50/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="
                    w-full h-10 rounded-xl
                    bg-[var(--primary-dark)] hover:bg-slate-800
                    text-white text-xs font-semibold
                    flex items-center justify-center gap-2
                    transition-colors duration-200
                    shadow-sm mt-2
                  "
                >
                  Send
                  <Send size={12} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= GEOGRAPHIC GIS MAP EMBED ================= */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
              Visit Our Technical Hub
            </h2>
            <p className="text-xs text-slate-500 font-normal mt-0.5">
              Itahari, Sunsari, Nepal
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-100">
            <iframe
              src="https://maps.google.com/maps?q=Itahari,Sunsari&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              loading="lazy"
              title="Lunar IT Location Map"
              className="border-0 filter contrast-[0.95] grayscale-[0.1]"
            />
          </div>

        </div>
      </section>

    </div>
  )
}