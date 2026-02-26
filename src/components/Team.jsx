import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import Deva from "../assets/team/deva1.jpeg";
import Gokul from "../assets/team/gokul.jpeg";
import Hruthik from "../assets/team/hrithik.jpeg";
import Tamil from "../assets/team/Tamil.jpeg";
import Elango from "../assets/team/elango.jpeg";
import Anbu from "../assets/team/anbu.jpeg";

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Dev Ashish.R",
      role: "Business Analyst, Marketing",
      experience: "5+ Years Experience",
      photo: Deva,
      details:
        "Leads company strategy, drives marketing campaigns, and performs deep business analysis to scale operations efficiently.",
    },
    {
      id: 2,
      name: "Hrithik.P",
      role: "Social Media Handler,Video Editor",
      experience: "3+ Years Experience",
      photo: Hruthik,
      details:
        "Specializes in high-quality video production and contributes to mobile application development projects.",
    },
    {
      id: 3,
      name: "Gokul.P",
      role: "Website Developer, AI/ML",
      experience: "4+ Years Experience",
      photo: Gokul,
      details:
        "Builds modern responsive websites and develops AI/ML-based smart solutions.",
    },
    {
      id: 4,
      name: "Tamil Selvan.R",
      role: "App Developer, Database Handler, Website Developer",
      experience: "5+ Years Experience",
      photo: Tamil,
      details:
        "Develops scalable mobile applications & Websites and also manages backend database systems efficiently.",
    },
    {
      id: 5,
      name: "Elango",
      role: "Testing, AI/ML, Website Developer",
      experience: "3+ Years Experience",
      photo: Elango,
      details:
        "Ensures product quality through testing, automation, and validation processes.",
    },
    {
      id: 6,
      name: "Anbu",
      role: "E-commerce Manager, Website Developer",
      experience: "4+ Years Experience",
      photo: Anbu,
      details:
        "Manages e-commerce platforms and optimizes digital storefront performance.",
    },
  ];

  return (
    <section id="team" className="bg-black py-24 px-6 text-white p-2">
      
      {/* ADVANCED HEADING */}
      <div className="max-w-6xl mx-auto mb-16 text-center ">
        <h2 className="text-5xl font-bold">
          Meet Our <span className="text-blue-500">Expert Team</span>
        </h2>
        <p className="text-gray-400 mt-4 max-auto ">
          Our team combines creativity, technical expertise, and strategic thinking 
          to deliver innovative digital solutions for clients worldwide.
        </p>
      </div>

<Swiper
  modules={[Autoplay, Navigation]}
  slidesPerView={1}           // 👈 Only ONE member visible
  loop={true}
  speed={1000}                // smooth sliding speed (1 sec animation)
  autoplay={{
    delay: 2000,              // 👈 3 seconds
    disableOnInteraction: false,
    // reverseDirection: false,  // false = right → left
  }}
  navigation={true} 
  className="max-w-6xl mx-auto"
>
  {teamMembers.map((member) => (
    <SwiperSlide key={member.id}>
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={member.photo}
            alt={member.name}
            className="w-80 h-80 object-cover rounded-3xl border-4 border-blue-500 shadow-2xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="pl-3">
          <h3 className="text-4xl font-bold mb-3">
            {member.name}
          </h3>

          <p className="text-blue-500 text-xl mb-2">
            {member.role}
          </p>

          {/* <p className="text-gray-400 mb-4">
            {member.experience}
          </p> */}

          <p className="text-gray-300 leading-relaxed">
            {member.details}
          </p>

          {/* <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition">
            View Profile
          </button> */}
        </div>

      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
  );
}

export default Team;