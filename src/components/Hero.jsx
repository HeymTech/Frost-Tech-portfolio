import { useState, useEffect } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

function Hero() {
const slides = [
  {
    image: hero1,
    title: "Professional Web Development",
    highlight: "Modern Websites",
    description:
      "We design and develop enterprise-grade, responsive, and SEO-optimized websites using modern technologies...",
    button: "View Projects",
    link: "#projects",
  },
  {
    image: hero2,
    title: "Mobile & AI Solutions",
    highlight: "Apps + Machine Learning",
    description:
      "Our team builds powerful cross-platform mobile applications and intelligent ML-driven systems...",
    button: "Explore Solutions",
    link: "#about",
  },
  {
    image: hero3,
    title: "Complete IT Infrastructure",
    highlight: "Full Stack & Networking",
    description:
      "From frontend development and backend architecture to networking and quality testing...",
    button: "Hire Our Team",
    link: "#team",
  },
  {
    image: hero4,
    title: "Creative Media Production",
    highlight: "Professional Video Editing",
    description:
      "Our creative team delivers high-quality video editing services including promotional videos...",
    button: "View Media Work",
    link: "#media",
  },
];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 transition-all duration-500">
          {slides[current].title}{" "}
          <span className="text-blue-500">
            {slides[current].highlight}
          </span>
        </h2>

        <p className="text-gray-300 mb-8 transition-all duration-500">
          {slides[current].description}
        </p>

<a
  href={slides[current].link}
  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition duration-300"
>
  {slides[current].button}
</a>
      </div>
    </section>
  );
}

export default Hero;