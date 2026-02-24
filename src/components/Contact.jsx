import { useState } from "react";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    // WhatsApp number in international format without +
    const phone = "916380216200";

    // Encode message (same logic – improved formatting only)
    const text = encodeURIComponent(
      `Hello 👋\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

      setLoading(false);
      setSuccess(true);
      e.target.reset();

      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-12 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-center"
    >
      <h2 className="text-4xl font-bold mb-4 text-white">Contact Us</h2>
      <p className="text-gray-400 mb-12">
        We'd love to hear from you. Whether you have a question or want to start a project, reach out to us.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-left">

        {/* LEFT SIDE - Contact Info */}
        <div className="space-y-8">

          {/* Email */}
          <div className="bg-zinc-800/70 backdrop-blur-lg border border-zinc-700 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <a
              href="mailto:your@email.com"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              your@email.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-zinc-800/70 backdrop-blur-lg border border-zinc-700 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <a
              href="tel:+916380216200"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              +91 63802 16200
            </a>
          </div>

          {/* Address */}
          <div className="bg-zinc-800/70 backdrop-blur-lg border border-zinc-700 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-400">
              123 Your Street, Chennai, Tamil Nadu, 600001
            </p>
          </div>



        </div>

        {/* RIGHT SIDE - Contact Form */}
        <form
          onSubmit={handleSendMessage}
          className="bg-zinc-800/70 backdrop-blur-lg border border-zinc-700 p-8 rounded-xl shadow-2xl space-y-6"
        >
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white focus:ring-2 focus:ring-blue-600 outline-none transition"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white focus:ring-2 focus:ring-blue-600 outline-none transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-3 rounded-lg bg-zinc-700 text-white focus:ring-2 focus:ring-blue-600 outline-none transition"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold transition duration-300 ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
            }`}
          >
            {loading ? "Sending..." : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </button>

          {success && (
            <div className="flex items-center gap-2 text-green-500 mt-4 animate-pulse">
              <FaCheckCircle />
              Message sent successfully!
            </div>
          )}
        </form>
      </div>
      {/* Full Width Google Map Section */}
<div className="w-full mt-20 item-center">
  <div className="w-full h-[450px] md:h-[550px]">
    <iframe
      title="Google Map Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.113772381353!2d80.1814873735901!3d13.02842621363286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d1569b78c7%3A0x545cee75ef10c83a!2sRasi%20General%20and%20Ortho%20Clinic%20%7C%20Dr%20Jawaharlal%20and%20Dr%20Kalpana%20%7C%20Trusted%20family%20physicians%20for%20generations!5e0!3m2!1sen!2sin!4v1771922797136!5m2!1sen!2sin"
      width="100%"
      height="50%"
      style={{ border: 0 }}
      loading="lazy"
    ></iframe>
  </div>
</div>
    </section>
  );
}

export default Contact;