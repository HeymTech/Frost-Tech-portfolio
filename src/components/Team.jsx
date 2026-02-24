import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { FaInfoCircle } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";

import Deva from "../assets/team/Tamil.jpeg";
import Gokul from "../assets/team/Tamil.jpeg";
import Hruthik from "../assets/team/Tamil.jpeg";
import Tamil from "../assets/team/Tamil.jpeg";
import eva from "../assets/team/Tamil.jpeg";
import frank from "../assets/team/Tamil.jpeg";

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
const teamMembers = [
  {
    id: 1,
    name: "Dev Ashish.R",
    role: "CEO, Business Analyst, Marketing",
    photo: Deva,
    details:
      "Leads the company strategy, marketing direction, and business analysis to ensure growth and scalability.",
  },
  {
    id: 2,
    name: "Hrithik.P",
    role: "Video Editor, App Developer",
    photo: Hruthik,
    details:
      "Handles video production, editing, and contributes to mobile app development projects.",
  },
  {
    id: 3,
    name: "Gokul.P",
    role: "Website Developer, AI/ML",
    photo: Gokul,
    details:
    "Builds modern websites and works on Artificial Intelligence & Machine Learning solutions.",
  },
  {
    id: 4,
    name: "Elango",
    role: "QA Engineer,Website Developer, AI/ML",
    photo: eva,
    details:
    "Ensures product quality through rigorous testing and validation processes.",
  },
  {
    id: 5,
    name: "Anbu",
    role: "E-commerce Management, Website Developer",
    photo: frank,
    details:
    "Manages online store platforms and supports website development projects.",
  },
  {
    id: 6,
    name: "Tamil Selvan.R",
    role: "App Developer, Website Developer, Database Handler",
    photo: Tamil,
    details:
      "Develops mobile apps, websites, and manages backend database operations efficiently.",
  },
];
  return (
    <section id="team" className="bg-black py-24 relative">
      <h2 className="text-4xl font-bold text-center mb-16">
        Meet Our Team
      </h2>

<Swiper
  modules={[Autoplay, EffectCoverflow]}
  effect="coverflow"
  centeredSlides={true}
  slidesPerView={2}      // 👈 exactly 3 visible
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  }}
  className="w-full max-w-5xl mx-auto"
>
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <div className="bg-zinc-900 rounded-2xl p-8 text-center shadow-2xl transition duration-500 relative">
              
              {/* INFO ICON */}
              <FaInfoCircle
                className="absolute top-4 right-4 text-blue-500 text-xl cursor-pointer hover:scale-110 transition"
                onClick={() => setSelectedMember(member)}
              />

              <img
                src={member.photo}
                alt={member.name}
                className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-blue-500 mb-6"
              />
              <h3 className="text-2xl font-semibold">
                {member.name}
              </h3>
              <p className="text-gray-400 mt-2">
                {member.role}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* MODAL */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-zinc-900 rounded-2xl p-10 max-w-md w-full text-center relative">

            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>

            <img
              src={selectedMember.photo}
              alt={selectedMember.name}
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500 mb-6"
            />
            <h3 className="text-2xl font-bold mb-2">
              {selectedMember.name}
            </h3>
            <p className="text-blue-400 mb-4">
              {selectedMember.role}
            </p>
            <p className="text-gray-300">
              {selectedMember.details}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
export default Team;