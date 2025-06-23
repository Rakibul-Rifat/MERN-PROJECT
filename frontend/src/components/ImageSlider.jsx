// src/components/ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Import Autoplay
import "swiper/css";

const slides = [
  {
    img: "https://png.pngtree.com/png-vector/20250512/ourlarge/pngtree-girl-hugging-dog-png-clipart-vintage-animal-png-image_16160564.png",
    title: "One More Friend",
    subtitle: "Thousands More Fun!",
    desc: "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!",
  },
  {
    img: "https://i3.wp.com/pebblemarylandvet.com/wp-content/uploads/2018/01/girl-dog-pebble.png",
    title: "Adopt A Buddy",
    subtitle: "Make Life Happier!",
    desc: "Find the perfect companion to light up your days. Our pets are waiting for loving homes!",
  },
];

const ImageSlider = () => {
  return (
    <div className="w-full lg:px-20 mx-auto py-10 px-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} // ✅ Register Autoplay module
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center bg-[#FFEED9] rounded-2xl overflow-hidden transition-all duration-700 ease-in-out">
              {/* Left: Image */}
              <div className="md:w-1/2 flex justify-center items-center p-4">
                <img src={slide.img} alt="pet" className="h-64 md:h-80 object-contain" />
              </div>
              {/* Right: Text */}
              <div className="md:w-1/2 p-6 text-center md:text-left">
                <h2 className="text-3xl font-bold text-blue-900">{slide.title}</h2>
                <h3 className="text-xl font-bold text-blue-800 mt-1">{slide.subtitle}</h3>
                <p className="text-gray-700 mt-3">{slide.desc}</p>
                <div className="mt-6 flex justify-center md:justify-start gap-4">
                  <button className="border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-full">
                    View Intro
                  </button>
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-full">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
