import React from 'react';
import { motion } from 'framer-motion';

const SubscribeSection = () => {
  return (
    <footer className="bg-[#fef1dc] px-6 py-10 ">
      {/* Subscribe Box */}
      <div className="bg-[#002a52] lg:mx-20 p-6 sm:p-10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Animated Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white text-xl sm:text-2xl font-semibold text-center sm:text-left"
        >
          Register Now So You Don't Miss Our Programs
        </motion.h2>

        {/* Email Input and Button */}
       <form className="flex flex-col sm:flex-row items-stretch w-full gap-2 sm:gap-0 sm:items-center">
  <input
    type="email"
    placeholder="Enter your Email"
    className="px-4 py-2 border border-gray-300 w-full sm:w-64 rounded-full sm:rounded-l-full sm:rounded-r-none focus:outline-none"
  />
  <button
    type="submit"
    className="bg-white text-[#002a52] font-medium px-5 py-2 rounded-full sm:rounded-r-full sm:rounded-l-none hover:bg-gray-100"
  >
    Subscribe Now!!!!
  </button>
</form>

      </div>

      {/* Nav & Socials */}
      <div className="mt-10 text-center">
        <nav className="flex justify-center gap-6 text-gray-700 text-sm mb-6">
          <a href="#">Home</a>
          <a href="#">Category</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-xl text-gray-700 mb-6">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-youtube" /></a>
        </div>

        {/* Footer Bottom */}
        <div className="text-xs text-gray-500">
          <p>© 2022 Monitó. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SubscribeSection;
