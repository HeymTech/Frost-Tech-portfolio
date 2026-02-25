import { useState } from "react";
// import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

function Contact() {


return (
<section
  id="contact"
  className="bg-black py-24 relative p-8"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <div>

      <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
        Visit Us
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Our Location
      </h2>

      <p className="text-gray-400 mb-10 leading-relaxed">
        Conveniently located in the heart of the city, we provide a professional
        and welcoming environment for all your business and service needs.
      </p>

      <div className="space-y-8">

        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-blue-500 text-xl">
            📍
          </div>
          <div>
            <h4 className="font-semibold text-lg">Address</h4>
            <p className="text-gray-400">
              10, Krisha Street,<br />
              Coimbatore 641004
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-blue-500 text-xl">
            📞
          </div>
          <div>
            <h4 className="font-semibold text-lg">Phone</h4>
            <p className="text-gray-400">+91 63802 16200</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-blue-500 text-xl">
            ✉️
          </div>
          <div>
            <h4 className="font-semibold text-lg">Email</h4>
            <p className="text-gray-400">
              heymtech26@gmail.com
            </p>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-blue-500 text-xl">
            ⏰
          </div>
          <div>
            <h4 className="font-semibold text-lg">Opening Hours</h4>
            <p className="text-gray-400">
              Mon - Sun: 10:00 AM – 06:00 PM
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* RIGHT SIDE - MAP */}
    <div className="rounded-xl overflow-hidden shadow-2xl border border-zinc-700">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.113772381353!2d80.1814873735901!3d13.02842621363286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d1569b78c7%3A0x545cee75ef10c83a!2sRasi%20General%20and%20Ortho%20Clinic!5e0!3m2!1sen!2sin!4v1771922797136!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>

  </div>
</section>
);
}

export default Contact;