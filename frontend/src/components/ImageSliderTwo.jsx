// src/components/ImageSliderTwo.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/053/647/096/small/a-compassionate-veterinarian-in-uniform-comforting-an-adorable-animal-patient-ideal-for-illustrating-animal-care-and-veterinary-services-png.png",
    title: "More Than a Pet",
    subtitle: "More Than a Friend!",
    desc: "Bringing home a pet brings endless happiness. A loyal companion who fills your life with laughter and love. Explore our 200+ amazing pets ready to join your family.",
  },
  {
    img: "https://file.aiquickdraw.com/imgcompressed/img/compressed_415391a68a7fdd20248b1944d18d7efc.webp",
    title: "Adopt. Love. Smile.",
    subtitle: "Brighten Every Day!",
    desc: "Bring joy to your life by finding the perfect furry friend. They’re waiting to share unconditional love and joyful moments with you!",
  },
];

const ImageSliderTwo = () => {
  return (
    <div className="w-full lg:px-20 mx-auto py-10 px-4 ">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row-reverse items-center bg-[#FFEED9] rounded-2xl overflow-hidden transition-all duration-700 ease-in-out">
              {/* Right: Image */}
              <div className="md:w-1/2 flex justify-center items-center p-4">
                <img
                  src={slide.img}
                  alt="pet"
                  className="h-64 md:h-80 object-contain"
                />
              </div>
              {/* Left: Text */}
              <div className="md:w-1/2 p-6 text-center md:text-left lg:pl-20">
                <h2 className="text-3xl font-bold text-blue-900">
                  {slide.title}
                </h2>
                <h3 className="text-xl font-bold text-blue-800 mt-1">
                  {slide.subtitle}
                </h3>
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

export default ImageSliderTwo;
