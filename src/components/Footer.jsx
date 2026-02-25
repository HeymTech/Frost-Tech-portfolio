import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,  FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className=" bg-zinc-900 text-gray-400 pt-20 pb-10 px-6 md:px-16 border-t border-zinc-800">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <div className="mb-6">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm tracking-widest">
              HeymTech
            </span>
          </div>

<p className="leading-relaxed text-gray-400">
  A creative digital agency focused on building bold brands and scalable
  digital products. We combine innovation, technology, and strategy to
  deliver results that move businesses forward.
</p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">
            SERVICES
          </h3>

          <ul className="space-y-4">
            <li className="hover:text-blue-500 transition cursor-pointer">
              UI/UX Design
            </li>
            <li className="hover:text-blue-500 transition cursor-pointer">
              Digital Marketing
            </li>
            <li className="hover:text-blue-500 transition cursor-pointer">
              Web and App Development
            </li>
            <li className="hover:text-blue-500 transition cursor-pointer">
              Video Editing & Social Media Handling
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">
            COMPANY
          </h3>

<ul className="space-y-4">
  <li>
    <a href="#about" className="hover:text-blue-500 transition">
      About Us
    </a>
  </li>
  <li>
    <a href="#services" className="hover:text-blue-500 transition">
      Services
    </a>
  </li>
  <li>
    <a href="#projects" className="hover:text-blue-500 transition">
      Projects
    </a>
  </li>
</ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">
            CONNECT
          </h3>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <span>heymtech26@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500" />
              <span>+91 63802 16200</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>10, Krisha Street, Coimbatore 641004</span>
            </div>

          </div>

          {/* Social Icons */}
<div className="flex gap-4 mt-8">

  {/* X (Twitter) */}
  <a
    href="https://twitter.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-full hover:bg-blue-600 hover:scale-110 transition duration-300"
  >
    <FaXTwitter className="text-white text-lg" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-full hover:bg-blue-600 hover:scale-110 transition duration-300"
  >
    <FaLinkedinIn className="text-white text-lg" />
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-full hover:bg-blue-600 hover:scale-110 transition duration-300"
  >
    <FaInstagram className="text-white text-lg" />
  </a>

</div>

        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-zinc-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

        <p>© 2026 HeymTech. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-blue-500 cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-blue-500 cursor-pointer">
            Terms of Service
          </span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;