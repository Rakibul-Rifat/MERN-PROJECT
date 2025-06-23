import React from 'react';
import Navbar from '../components/Navbar';
import SubscribeSection from '../components/SubscribeSection';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-[#fff4e6] min-h-screen text-[#002244] px-4 py-10">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl font-bold"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            One More Friend,<br />Thousands More Fun!
          </motion.h1>
          <motion.p
            className="mt-4 text-lg max-w-2xl mx-auto"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
            We have 200+ different pets that can meet your needs!
          </motion.p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <p className="mt-2 text-sm">Feel free to reach out to us using the information below or the contact form.</p>
            </div>
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-medium">📍 Address:</p>
              <p>123 Pet Street, Animal City, Country</p>
            </motion.div>
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-medium">📞 Phone:</p>
              <p>+123 456 7890</p>
            </motion.div>
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-medium">📧 Email:</p>
              <p>contact@monito-pets.com</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white p-6 rounded-xl shadow-md space-y-4"
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002244]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002244]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002244]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#002244] text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
      <SubscribeSection />
    </div>
  );
};

export default Contact;
