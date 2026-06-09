import React from 'react'

const AboutUs = () => {
  return (
    <section id="about-us" className="relative pt-10 pb-12 md:pb-16 bg-white overflow-hidden antialiased">
      
      {/* Background glow configuration */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered About Topic Header Area Area */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-[fadeInUp_0.6s_ease-out_forwards]">
          
          {/* Integrated Pulsing Indicator Tag */}
          <div className="flex items-center justify-center gap-2 mb-3.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
            </span>
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-xs sm:text-sm">
              About Us
            </span>
          </div>

         
           <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            We Build Digital Solutions That Drive Growth For{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="font-['Caveat',_cursive] text-[1.25em] font-semibold text-[var(--accent)] italic relative z-10 tracking-normal">
                Your Business
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
        </div>

        {/* Split Content Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              Lunar IT Solution is a modern technology company focused on
              delivering high-quality software development, IT training,
              internship programs, and digital transformation services.
            </p>

            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              Our mission is to empower students and businesses with
              practical skills, real-world experience, and scalable
              technology solutions that create real impact.
            </p>

            {/* Stats Array */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center border-r border-slate-100 last:border-none">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--primary)] tracking-tight">
                  10+
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                  Projects
                </p>
              </div>

              <div className="text-center border-r border-slate-100 last:border-none">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--primary)] tracking-tight">
                  100+
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                  Students
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--primary)] tracking-tight">
                  5+
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                  Services
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative mt-10 lg:mt-0">
            {/* Main Image Box */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team Working"
                className="w-full h-[300px] sm:h-[450px] object-cover"
              />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl p-4 sm:p-6 w-36 sm:w-48 border border-slate-50/50 backdrop-blur-md">
              <h4 className="font-extrabold text-[var(--primary)] text-xl sm:text-2xl tracking-tight">
                95%
              </h4>
              <p className="text-xxs sm:text-sm text-slate-500 mt-0.5 font-medium leading-tight">
                Client Satisfaction
              </p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -top-6 -right-6 bg-white shadow-xl rounded-2xl p-4 sm:p-6 w-36 sm:w-48 border border-slate-50/50 backdrop-blur-md">
              <h4 className="font-extrabold text-[var(--primary)] text-xl sm:text-2xl tracking-tight">
                24/7
              </h4>
              <p className="text-xxs sm:text-sm text-slate-500 mt-0.5 font-medium leading-tight">
                Support
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUs