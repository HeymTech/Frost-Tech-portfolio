import React, { useState } from "react";

function AboutStats() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
const [showModal, setShowModal] = useState(false);
  const handleSendMessage = (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const service = e.target.service.value;
    const date = e.target.date.value;
    const time = e.target.time.value;

    const phone = "916380216200";

    const text = encodeURIComponent(
      `📅 New Appointment Request\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Service: ${service}\n` +
      `Date: ${date}\n` +
      `Time: ${time}`
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
    <section className="py-24 px-8 bg-zinc-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        
        <p className="text-sm uppercase text-blue-200 mb-4">Who We Are</p>

        <h2 className="text-4xl font-bold mb-6">
          More than design. It's a <span className="text-blue-500">brand experience</span>.
        </h2>
        <p className="text-gray-400 mb-16">
          We are a full-service creative agency blending modern design, market insights,
          and performance strategies to help businesses grow and achieve measurable results.
        </p>

{/* Stats */}
<div className="mb-20">

  {/* Mobile View */}
  <div className="flex md:hidden justify-between items-center bg-black rounded-xl py-6 px-4 text-center">

    <div className="flex-1">
      <p className="text-xs uppercase text-gray-400">
        Years Industry Experience
      </p>
      <p className="text-lg font-bold">1.5+</p>
    </div>

    <div className="w-px h-10 bg-zinc-700"></div>

    <div className="flex-1">
      <p className="text-xs uppercase text-gray-400">
        Positive Campaign Results
      </p>
      <p className="text-lg font-bold">92%</p>
    </div>

    <div className="w-px h-10 bg-zinc-700"></div>

    <div className="flex-1">
      <p className="text-xs uppercase text-gray-400">
        Projects Completed
      </p>
      <p className="text-lg font-bold">10+</p>
    </div>

  </div>

  {/* Desktop View */}
  <div className="hidden md:grid md:grid-cols-3 gap-8 mt-8">
    <div className="bg-black rounded-xl p-8 shadow-lg">
      <p className="text-sm uppercase text-gray-400 mb-2">
        Years Industry Experience
      </p>
      <p className="text-3xl font-bold">1.5+</p>
    </div>

    <div className="bg-black rounded-xl p-8 shadow-lg">
      <p className="text-sm uppercase text-gray-400 mb-2">
        Positive Campaign Results
      </p>
      <p className="text-3xl font-bold">92%</p>
    </div>

    <div className="bg-black rounded-xl p-8 shadow-lg">
      <p className="text-sm uppercase text-gray-400 mb-2">
        Projects Completed
      </p>
      <p className="text-3xl font-bold">10+</p>
    </div>
  </div>

</div>

        {/* Appointment Form */}
<div className="mt-16 text-center">
  <button
    onClick={() => setShowModal(true)}
    className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition"
  >
    Book an Appointment
  </button>
</div>
{showModal && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

    <div className="bg-zinc-900 p-10 rounded-2xl w-full max-w-2xl relative shadow-2xl animate-fadeIn">

      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-5 text-gray-400 hover:text-white text-xl"
      >
        ✕
      </button>

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">Schedule a Consultation</h2>
        <p className="text-gray-400 text-sm mt-2">
          Choose your service and preferred time.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);

          const name = e.target.name.value.trim();
          const email = e.target.email.value.trim();
          const phoneInput = e.target.phone.value.trim();
          const service = e.target.service.value;
          const date = e.target.date.value;
          const time = e.target.time.value;
        //   const notes = e.target.notes.value.trim();

          const phone = "916380216200";

          const text = encodeURIComponent(
            `📅 New Appointment Request\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phoneInput}\n` +
            `Service: ${service}\n` +
            `Date: ${date}\n` +
            `Time: ${time}\n` 
            // `Notes: ${notes}`
          );

          setTimeout(() => {
            window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
            setLoading(false);
            setShowModal(false);
            e.target.reset();
          }, 800);
        }}
        className="space-y-6"
      >

        {/* Name + Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-xl bg-zinc-800 focus:ring-2 focus:ring-blue-600 outline-none"
        />

        {/* Service */}
        <select
          name="service"
          required
          className="w-full px-4 py-3 rounded-xl bg-zinc-800 focus:ring-2 focus:ring-blue-600 outline-none"
        >
          <option value="">Select Service</option>
          <option>Website Development</option>
          <option>App Development</option>
          <option>UI/UX Design</option>
          <option>Digital Marketing</option>
          <option>Media Production</option>
        </select>

        {/* Date + Time */}
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="date"
            name="date"
            required
            className="px-4 py-3 rounded-xl bg-zinc-800 focus:ring-2 focus:ring-blue-600 outline-none"
          />
          <input
            type="time"
            name="time"
            required
            className="px-4 py-3 rounded-xl bg-zinc-800 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        {/* Notes
        <textarea
          name="notes"
          rows="3"
          placeholder="Project details (optional)"
          className="w-full px-4 py-3 rounded-xl bg-zinc-800 focus:ring-2 focus:ring-blue-600 outline-none"
        ></textarea> */}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-full font-semibold text-lg transition ${
            loading
              ? "bg-gray-600"
              : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
          }`}
        >
          {loading ? "Processing..." : "Confirm Booking"}
        </button>

      </form>
    </div>
  </div>
)}

      </div>
    </section>
  );
}

export default AboutStats;