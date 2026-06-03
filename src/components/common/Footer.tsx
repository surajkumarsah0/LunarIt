
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin,} from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="bg-[var(--primary-dark)] text-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 py-20">

    {/* Top Footer */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Company */}
      <div>
        <img
          src="/images__1_-removebg-preview.png"
          alt="Lunar IT"
          className="h-16 mb-5"
        />

        <p className="text-slate-400 leading-7">
          Since 2073 B.S. (2016 A.D.), we have been working with clients to imagine and build software that people love to use. And we think we’re different. We care about who we work for and the quality of work we deliver, and the impact that makes.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-bold mb-5">
          Quick Links
        </h3>

        <ul className="space-y-3 text-slate-400">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Training */}
      <div>
        <h3 className="text-lg font-bold mb-5">
          Training
        </h3>

        <ul className="space-y-3 text-slate-400">
          <li>MERN Stack</li>
          <li>Python</li>
          <li>AI & ML</li>
          <li>UI/UX Design</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-lg font-bold mb-5">
          Contact
        </h3>

        <ul className="space-y-3 text-slate-400">
          <li>Itahari,Sunsari</li>
          <li>lunaritsolution2016@gmail.com</li>
          <li>+977 9842230020</li>
        </ul>
      </div>
    </div>
    <div className="mt-8 s">
    <h4 className="text-white font-semibold mb-4">
      Follow Us
    </h4>

    <div className="flex items-center gap-3">
      <a
        href="https://www.linkedin.com/company/lunar-it-solution/"
        className="
        p-3
        rounded-xl
        bg-white/5
        text-slate-400
        hover:bg-[var(--primary)]
        hover:text-white
        transition-all duration-300
        "
      >
        <FaLinkedin  size={18} />
      </a>

      <a
        href="https://www.facebook.com/LunarITSolution"
        className="
        p-3
        rounded-xl
        bg-white/5
        text-slate-400
        hover:bg-[var(--primary)]
        hover:text-white
        transition-all duration-300
        "
      >
        <FaFacebook size={18} />
      </a>

      <a
        href="https://www.instagram.com/lunaritsolution/"
        className="
        p-3
        rounded-xl
        bg-white/5
        text-slate-400
        hover:bg-[var(--primary)]
        hover:text-white
        transition-all duration-300
        "
      >
        <FaInstagram size={18} />
      </a>

      <a
        href="https://github.com/Lunar-IT-Solution"
        className="
        p-3
        rounded-xl
        bg-white/5
        text-slate-400
        hover:bg-[var(--primary)]
        hover:text-white
        transition-all duration-300
        "
      >
        <FaGithub size={18} />
      </a>
    </div>
  </div>

    {/* Divider */}
    <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4">
      <p className="text-sm text-slate-500">
        © 2026 Lunar IT Solution. All rights reserved.
      </p>

      <p className="text-sm text-slate-500">
        Designed & Developed by Lunar IT Solution
      </p>
    </div>
  </div>
   

  {/* Huge Brand Name */}
  <div className="relative">
    <h1
      className="
      text-center
      text-6xl
      md:text-8xl
      lg:text-[10rem]
      font-extrabold
      leading-none
      tracking-tight
      text-white/5
      select-none
      "
    >
      LUNAR IT SOLUTION
    </h1>
  </div>
</footer>
  );
};

export default Footer;