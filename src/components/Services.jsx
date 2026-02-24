import webImg from "../assets/service2.jpg";
import flutterImg from "../assets/serivce.jpg";
import uiuxImg from "../assets/service3.jpg";

function Services() {
  return (
    <section id="services" className="py-24 px-8 bg-zinc-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-16">
        Our <span className="text-blue-500">Services</span>
      </h2>

      <div className="space-y-12 max-w-6xl mx-auto">

        {/* Web Development */}
        <div className="grid md:grid-cols-2 bg-black rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300">

          <div>
            <img
              src={webImg}
              alt="Web Development"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              Web Development
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We build responsive, SEO-optimized, and scalable websites
              using modern frameworks like React and advanced backend
              technologies to ensure performance and security.
            </p>
          </div>

        </div>

        {/* Flutter Apps */}
        <div className="grid md:grid-cols-2 bg-black rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300">

          <div className="order-2 md:order-1 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              Flutter App Development
            </h3>
            <p className="text-gray-400 leading-relaxed">
              High-performance cross-platform mobile apps built with Flutter,
              delivering smooth UI, fast performance, and secure backend integration
              for Android and iOS platforms.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={flutterImg}
              alt="Flutter Development"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* UI/UX Design */}
        <div className="grid md:grid-cols-2 bg-black rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300">

          <div>
            <img
              src={uiuxImg}
              alt="UI UX Design"
              className="w-full h-full object-cover"
            />
          </div>

<div className="p-8 flex flex-col justify-center">
  <h3 className="text-2xl font-semibold mb-4 text-blue-500">
    UI/UX Design & Video Editing
  </h3>

  <p className="text-gray-400 leading-relaxed mb-4">
    We create modern, user-centered interfaces with clean design,
    smooth interaction, and optimized user journeys for web
    and mobile applications.
  </p>

  <p className="text-gray-400 leading-relaxed">
    Our video editing services deliver engaging and professional
    content with seamless transitions, color grading, motion graphics,
    sound design, and high-quality post-production to enhance your
    brand storytelling and digital presence.
  </p>
</div>

        </div>

      </div>
    </section>
  );
}

export default Services;