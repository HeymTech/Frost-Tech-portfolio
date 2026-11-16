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
              Plot-65, 2nd Main Rd, Rayala Nagar, Ramapuram,<br />
              
                 Chennai, Tamil Nadu 600089
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
            <p className="text-gray-400">+91 93455 98370</p>
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
              frosttech26@gmail.com
            </p>
          </div>
        </div>

        {/* Opening Hours
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
        </div> */}

      </div>
    </div>

    {/* RIGHT SIDE - MAP */}
    <div className="rounded-xl overflow-hidden shadow-2xl border border-zinc-700">
<iframe
  src="https://www.google.com/maps?q=Plot-65%2C%202nd%20Main%20Rd%2C%20Rayala%20Nagar%2C%20Ramapuram%2C%20Manapakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600089&output=embed"
  width="600"
  height="450"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  title="Frosttech Location"
/>
    </div>

  </div>
</section>
);
}

export default Contact;