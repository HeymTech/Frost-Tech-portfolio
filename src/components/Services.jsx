import webImg from "../assets/service2.jpg";
import flutterImg from "../assets/serivce.jpg";
import uiuxImg from "../assets/service6.jpg";
import videoImg from "../assets/service4.jpg"; // Add this image
import marketingImg from "../assets/service5.jpg"; // Add this image

function Services() {
  return (
    <section id="services" className="py-24 px-8 bg-zinc-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-16">
        Our <span className="text-blue-500">Services</span>
      </h2>

      <div className="space-y-12 max-w-6xl mx-auto">

        {/* 1. UI/UX Design */}
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
              UI/UX Design
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We create modern, user-centered interfaces with clean design,
              smooth interactions, wireframing, prototyping, and optimized
              user journeys for web and mobile applications.
            </p>
          </div>
        </div>

        {/* 2. Web Development */}
        <div className="grid md:grid-cols-2 bg-black rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300">
          <div className="order-2 md:order-1 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              Web Development
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We build responsive, SEO-optimized, and scalable websites
              using modern frameworks like React and advanced backend
              technologies to ensure performance and security.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={webImg}
              alt="Web Development"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3. App Development */}
        <div className="grid md:grid-cols-2 bg-black rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300">
          <div>
            <img
              src={flutterImg}
              alt="App Development"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              App Development
            </h3>
            <p className="text-gray-400 leading-relaxed">
              High-performance cross-platform mobile apps built with Flutter,
              delivering smooth UI, fast performance, and secure backend integration
              for Android and iOS platforms.
            </p>
          </div>
        </div>

        {/* 4. Video Editing */}
        <div className="grid md:grid-cols-2 bg-black rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300">
          <div className="order-2 md:order-1 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              Video Editing
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Professional video editing with seamless transitions,
              color grading, motion graphics, sound design, and high-quality
              post-production to enhance your brand storytelling.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={videoImg}
              alt="Video Editing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 5. Digital Marketing */}
        <div className="grid md:grid-cols-2 bg-black rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300">
          <div>
            <img
              src={marketingImg}
              alt="Digital Marketing"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              Digital Marketing
            </h3>
            <p className="text-gray-400 leading-relaxed">
      We help businesses grow online using advanced <strong>Meta AI</strong> solutions
      and <strong>SEO</strong> strategies. Our approach includes social media marketing,
      paid advertising campaigns, branding strategies, and performance analytics
      to maximize ROI and reach.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;