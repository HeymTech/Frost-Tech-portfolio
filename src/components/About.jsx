import AboutImage from "../assets/about.jpg";

function About() {
  return (
    <section id="about" className="py-24 px-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src={AboutImage}
            alt="FrostTech Company"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-blue-500">FrostTech</span>
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed">
            FrostTech is a forward-thinking technology company focused on delivering
            innovative digital solutions for businesses in India and worldwide. 
            We specialize in creating technology that drives efficiency, growth, 
            and meaningful digital transformation.
          </p>

          <p className="text-gray-400 max-w-4xl mx-auto mb-6 leading-relaxed">
            Our services span web and mobile app development, AI and machine learning
            applications, backend and cloud architecture, networking solutions, 
            UI/UX design, and professional digital content creation. 
            We combine cutting-edge technology with creative problem-solving 
            to deliver reliable, scalable, and high-performance solutions.
          </p>

          {/* Mission */}
          <p className="text-gray-400 max-w-4xl mx-auto mb-4 leading-relaxed font-semibold">
            <span className="text-blue-500">Mission:</span> To empower businesses of all sizes 
            with future-ready technology, enhancing productivity, customer experience, 
            and long-term success.
          </p>

          {/* Vision */}
          <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed font-semibold">
            <span className="text-blue-500">Vision:</span> To be a global leader in digital 
            innovation, providing transformative solutions that drive progress, efficiency, 
            and sustainable growth for every client.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;