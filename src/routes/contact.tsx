import { createFileRoute } from '@tanstack/react-router'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="bg-slate-50">

      {/* ================= HERO ================= */}

      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[0.3em] text-[var(--accent)] text-sm font-semibold">
            Contact Us
          </span>

          <h1 className="mt-5 text-5xl md:text-7xl font-extrabold tracking-tight">
            Let's Build Something
            <br />
            Extraordinary Together
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-slate-600 leading-8">
            Whether you need software development,
            AI solutions, corporate training or IT
            consultation, our team is ready to help.
          </p>

        </div>
      </section>

      {/* ================= CONTACT AREA ================= */}

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* LEFT SIDE */}

            <div
              className="
              bg-[var(--primary-dark)]
              text-white
              rounded-3xl
              p-10
              "
            >
              <h2 className="text-3xl font-extrabold">
                Lunar IT Solution
              </h2>

              <p className="mt-5 text-slate-300 leading-8">
                Empowering businesses through innovative
                software solutions, AI technologies and
                professional IT services.
              </p>

              <div className="space-y-8 mt-12">

                <div className="flex gap-4">
                  <Mail className="text-[var(--accent)]" />
                  <div>
                    <h4 className="font-semibold">
                      Email
                    </h4>
                    <p className="text-slate-300">
                      info@lunarit.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-[var(--accent)]" />
                  <div>
                    <h4 className="font-semibold">
                      Phone
                    </h4>
                    <p className="text-slate-300">
                      +977 98XXXXXXXX
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-[var(--accent)]" />
                  <div>
                    <h4 className="font-semibold">
                      Office
                    </h4>
                    <p className="text-slate-300">
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-[var(--accent)]" />
                  <div>
                    <h4 className="font-semibold">
                      Working Hours
                    </h4>
                    <p className="text-slate-300">
                      Sunday - Friday
                    </p>
                    <p className="text-slate-300">
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-14 bg-white/10 rounded-2xl p-6">
                <h3 className="font-bold">
                  Free Consultation
                </h3>

                <p className="mt-3 text-slate-300">
                  Schedule a free consultation and
                  discuss your project requirements.
                </p>
              </div>
            </div>

            {/* RIGHT FORM */}

            <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-10">

              <div className="mb-10">

                <span className="uppercase tracking-[0.2em] text-[var(--accent)] text-sm font-semibold">
                  Contact Form
                </span>

                <h2 className="text-3xl font-extrabold mt-3">
                  Send Us a Message
                </h2>

                <p className="text-slate-500 mt-3">
                  We usually respond within 24 hours.
                </p>

              </div>

              <form className="space-y-6">

                <div>
                  <label className="block font-semibold mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-[var(--primary)]"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border border-slate-200 rounded-xl px-5 py-4"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="+977 98XXXXXXXX"
                    className="w-full border border-slate-200 rounded-xl px-5 py-4"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Project Consultation"
                    className="w-full border border-slate-200 rounded-xl px-5 py-4"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Service Interested In
                  </label>

                  <select className="w-full border border-slate-200 rounded-xl px-5 py-4">
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>AI & ML Solutions</option>
                    <option>Cloud Services</option>
                    <option>Training Programs</option>
                    <option>Internship Program</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full border border-slate-200 rounded-xl px-5 py-4"
                  />
                </div>

                <button
                  className="
                  w-full
                  bg-[var(--primary)]
                  hover:bg-[var(--accent)]
                  text-white
                  py-4
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  gap-3
                  font-semibold
                  transition
                  "
                >
                  Send Inquiry
                  <Send size={18} />
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-8">
            <h2 className="text-3xl font-extrabold">
              Visit Our Office
            </h2>

            <p className="text-slate-600 mt-2">
              Itahari,Sunsari
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.6223425416965!2d87.27426547550459!3d26.660571676798412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d8b1d73da1d%3A0xd4d57514869ca946!2sLunar%20IT%20Solution%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1780470037802!5m2!1sen!2sin"
              width="100%"
              height="320"
              loading="lazy"
              className="border-0"
            />
          </div>

        </div>
      </section>




      

    </div>
}
