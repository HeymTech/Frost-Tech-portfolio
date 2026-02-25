import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useRef } from "react";

function MediaSlider() {
  const videoRefs = useRef([]);

  const videos = [
    {
      src: "/videos/reel8.mp4",
      title: "Instagram Reel Editing",
      desc: "Smooth transitions and engaging captions for social media growth."
    },
    {
      src: "/videos/reel2.mp4",
      title: "Brand Promotional Video",
      desc: "High-quality brand storytelling with cinematic visuals."
    },
    {
      src: "/videos/reel7.mp4",
      title: "Cinematic Motion Graphics",
      desc: "Advanced editing using Premiere Pro & After Effects."
    },
    {
      src: "/videos/reel5.mp4",
      title: "Business Advertisement",
      desc: "Professional ad content for startups and enterprises."
    },
    {
  src: "/videos/reel3.mp4",
  title: "Social Media Campaign Video",
  desc: "Creative promotional content designed to boost engagement and brand visibility."
}
  ];

const handleFullScreen = (videoElement) => {
  if (!videoElement) return;

  videoElement.muted = true; // 🔥 enable sound
  videoElement.play();        // 🔥 force play

  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen();
  } else if (videoElement.webkitRequestFullscreen) {
    videoElement.webkitRequestFullscreen();
  } else if (videoElement.msRequestFullscreen) {
    videoElement.msRequestFullscreen();
  }
};

  return (
    <section
      id="media"
      className="py-24 px-8 bg-zinc-900 text-white"
    >
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        navigation={true} // ✅ Left & Right arrows
        pagination={{
          type: "fraction", // ✅ Shows 1 / 4
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={false} // ❌ No auto loop
        className="h-50%"
      >
        {videos.map((video, index) => (
<SwiperSlide key={index}>
  <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-black px-10 gap-10">
    
    {/* LEFT SIDE - VIDEO */}
    <div className="relative w-[300px] h-[550px] md:w-[360px] md:h-[640px] overflow-hidden rounded-2xl shadow-2xl">
      <video
        ref={(el) => (videoRefs.current[index] = el)}
        src={video.src}
        autoPlay
        muted
        playsInline
        loop
        className="w-full h-full object-cover"
      />
    </div>

    {/* RIGHT SIDE - TEXT */}
    <div className="max-w-xl text-center md:text-left">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        {video.title}
      </h2>

      <p className="text-gray-300 mb-8 text-lg">
        {video.desc}
      </p>

      {/* <button
        onClick={() => handleFullScreen(videoRefs.current[index])}
        className="bg-blue-500 px-8 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Watch Full Video
      </button> */}
    </div>

  </div>
</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default MediaSlider;