import React, { Component } from "react";
import Navbar from "./Navbar";
import { FaPlay } from "react-icons/fa";
import PetGallery from "./PetGallery";
import ImageSlider from "./ImageSlider";
import PetShowcase from "./PetShowcase";
import ImageSliderTwo from "./ImageSliderTwo";
import { motion } from "framer-motion";
import PetKnowledge from "./PetKnowledge.jsx"
import SubscribeSection from "./SubscribeSection.jsx";

export class Monito extends Component {
  render() {
    return (
      <div>
        <section className="bg-[#fff4e6] w-full py-6">
          <Navbar />
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
            {/* Left Content with animation */}
            <motion.div
              className="md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#002244] leading-tight">
                <span className="text-[#fbbf24]">O</span>ne More Friend <br />
                <span className="text-[#002244]">Thousands More Fun!</span>
              </h1>
              <p className="mt-4 text-gray-700 text-base md:text-lg">
                Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
               <a
  href="https://youtu.be/BjDozn9EQ8k?si=HptLasWFO91yHtSr" // replace with your video link
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="flex items-center gap-2 px-6 py-2 border-2 border-[#002244] rounded-full text-[#002244] font-medium hover:bg-[#002244] hover:text-white transition">
    <FaPlay className="text-sm" />
    View Intro
  </button>
</a>

                <button className="bg-[#002244] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition">
                  Explore Now
                </button>
              </div>
            </motion.div>

            {/* Right Image with animation */}
            <motion.div
              className="md:w-1/2 mt-10 md:mt-0 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-48 h-48 bg-[#ffe8c9] rounded-full -z-10"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#002244] rounded-tl-[120px] rounded-bl-[40px] -z-10"></div>
              <img
                src="https://d3544la1u8djza.cloudfront.net/APHI/homepage/02-23/girl-with-dog-860w.png"
                alt="Happy person with dog"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </section>

        <PetGallery />
        <ImageSlider />
        <PetShowcase />

        {/* Logo Slider Section with motion */}
        <>
          <style>
            {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .scrolling-logos {
              animation: scroll 30s linear infinite;
            }
          `}
          </style>

          <div className="overflow-hidden py-8 bg-white lg:mx-20">
            <div className="flex justify-between items-center px-6 mb-6">
              <p className="text-gray-700 font-medium">
                Proud to be part of{" "}
                <span className="text-blue-900 font-bold">Pet Sellers ttt</span>
              </p>
              <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-full hover:bg-blue-100 transition">
                View all our sellers →
              </button>
            </div>

            <motion.div
              className="relative w-full overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex w-max whitespace-nowrap space-x-8 scrolling-logos">
                {[
                  "https://graphicsfamily.com/wp-content/uploads/edd/2021/12/Pet-Care-Logo-Template-Png.png",
                  "https://images-platform.99static.com/dolygj0wRFxs-xALRFyWb4t7870=/676x676:1353x1353/500x500/top/smart/99designs-contests-attachments/92/92011/attachment_92011397",
                  "https://dcassetcdn.com/design_img/1109746/503880/503880_5927586_1109746_image.png",
                  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/180474266/original/542969d1db73e72b38cf8cd1452d9aff055bb547/design-a-high-quality-pet-care-logo-with-new-concept.png",
                  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/180474266/original/b6e1bec39106c893aae8142c6681636a9c8879cf/design-a-high-quality-pet-care-logo-with-new-concept.png",
                  "https://dcassetcdn.com/design_img/3628772/746647/746647_20049918_3628772_ff93f610_image.png",
                  "https://dcassetcdn.com/design_img/3628772/198792/198792_20064502_3628772_a79681ce_image.png",
                ]
                  .flatMap((url) => [url, url])
                  .map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt="brand"
                      className="h-32 w-auto object-contain"
                    />
                  ))}
              </div>
            </motion.div>
          </div>
        </>

        <ImageSliderTwo />
        <PetKnowledge />
        <SubscribeSection />
      </div>
    );
  }
}

export default Monito;
