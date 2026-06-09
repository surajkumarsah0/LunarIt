import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[var(--primary-dark)] text-white overflow-hidden antialiased">
      {/* Subtle Background Glow Accent Layer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-[120px] rounded-full pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        {/* Top Grid Area Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Profile Info */}
          <div className="flex flex-col gap-5">
            <img
              src="/public/lunarlogo.png"
              alt="Lunar IT"
              className="h-14 w-auto object-contain self-start"
            />
            <p className="text-slate-400 text-sm leading-relaxed font-normal">
              Since 2073 B.S. (2016 A.D.), we have been working with clients to imagine and build software that people love to use. We care about who we work for, the quality of work we deliver, and the impact that makes.
            </p>
            
            {/* Integrated Social Channels Sub-Group Block */}
            <div className="mt-2">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
                Follow Our Journey
              </h4>
              <div className="flex items-center gap-2.5">
                {[
                  { icon: FaLinkedin, url: "https://www.linkedin.com/company/lunar-it-solution/" },
                  { icon: FaFacebook, url: "https://www.facebook.com/LunarITSolution" },
                  { icon: FaInstagram, url: "https://www.instagram.com/lunaritsolution/" },
                  { icon: FaGithub, url: "https://github.com/Lunar-IT-Solution" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:bg-[var(--primary)] hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Structural Navigation Links */}
          <div>
            <h3 className="text-white font-bold text-base tracking-tight mb-5 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-6 after:h-[2px] after:bg-[var(--accent)]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm font-normal">
              {["Home", "About Us", "Our Services", "Contact"].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-[var(--accent)] transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Training Cohorts Ecosystem */}
          <div>
            <h3 className="text-white font-bold text-base tracking-tight mb-5 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-6 after:h-[2px] after:bg-[var(--accent)]">
              Training Programs
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm font-normal">
              {["MERN Full Stack", "Python Ecosystem", "AI & Machine Learning", "UI/UX Architecture"].map((course, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-[var(--accent)] transition-colors duration-200">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Main HQ Location Contact Meta Details */}
          <div>
            <h3 className="text-white font-bold text-base tracking-tight mb-5 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-6 after:h-[2px] after:bg-[var(--accent)]">
              Contact Details
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm font-normal">
              <li className="flex flex-col">
                <span className="text-white/40 text-xs uppercase tracking-wider font-semibold mb-0.5">Location</span>
                <span>Itahari, Sunsari, Nepal</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white/40 text-xs uppercase tracking-wider font-semibold mb-0.5">Email Inquiry</span>
                <a href="mailto:lunaritsolution2016@gmail.com" className="hover:text-[var(--accent)] transition-colors duration-200 break-all">
                  lunaritsolution2016@gmail.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-white/40 text-xs uppercase tracking-wider font-semibold mb-0.5">Phone Line</span>
                <a href="tel:+9779842230020" className="hover:text-[var(--accent)] transition-colors duration-200">
                  +977 9842230020
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Utility Branding Metadata Lane */}
        <div className="pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            &copy; {new Date().getFullYear()} Lunar IT Solution. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Designed & Developed by{" "}
            <span className="text-slate-400 font-medium hover:text-[var(--accent)] transition-colors cursor-pointer">
              Lunar IT Solution
            </span>
          </p>
        </div>

      {/* Huge Ambient Baseline Typography Text Backdrop */}
        <div className="mt-6 select-none pointer-events-none overflow-hidden block w-full text-center">
          <h1 className="w-full text-center text-[8vw] font-black tracking-tighter leading-none text-white/[0.03] uppercase whitespace-nowrap">
            Lunar IT Solution
          </h1>
        </div>

      </div>
    </footer>
  );
};

export default Footer;