import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#fff4e6] px-4 py-3 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-[#002244]">
          <span>Monit<span className="text-[#002244]">ö</span></span>
          <span className="text-xs font-normal">Pets for Best</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="text-[#002244] font-medium hover:text-blue-600">Home</a>
          <a href="/category" className="text-[#002244] font-medium hover:text-blue-600">Category</a>
          <a href="/about" className="text-[#002244] font-medium hover:text-blue-600">About</a>
          <a href="/contact" className="text-[#002244] font-medium hover:text-blue-600">Contact</a>
          
          {/* Search Bar */}
          <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search something here!"
              className="ml-2 outline-none bg-transparent text-sm text-gray-700"
            />
          </div>

          {/* Join Button */}
          <button className="bg-[#002244] text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-800 transition">
            Join the community
          </button>

          {/* Language Dropdown (Placeholder) */}
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="w-3 h-3 bg-red-600 rounded-full"></span>
            <span className="text-sm font-medium">VND</span>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl text-[#002244]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4 text-[#002244] animate-slide-down">
          <a href="/">Home</a>
          <a href="/category">Category</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 outline-none bg-transparent text-sm text-gray-700"
            />
          </div>
          <button className="bg-[#002244] text-white px-4 py-2 rounded-full font-semibold">
            Join the community
          </button>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="w-3 h-3 bg-red-600 rounded-full"></span>
            <span className="text-sm font-medium">VND</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
