import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

export default function EcoFix() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-green-50 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-10 top-0 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center text-black text-3xl font-bold pl-12">
            <img src="/ecofix.png" alt="logo1" className="w-14 h-14" />EcoFix
          </div>
          <ul className="hidden md:flex gap-6 text-gray-700 pr-12">
            <li className="hover:text-[#23b4b9] cursor-pointer text-lg">Home</li>
            <li className="hover:text-[#23b4b9] cursor-pointer text-lg">About</li>
            <li className="hover:text-[#23b4b9] cursor-pointer text-lg">Services</li>
            <li className="hover:text-[#23b4b9] cursor-pointer text-lg">Contact</li>
          </ul>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 absolute top-16 left-0 w-full">
          <ul className="flex flex-col gap-4 text-gray-700">
            <li className="hover:text-[#23b4b9] cursor-pointer">Home</li>
            <li className="hover:text-[#23b4b9] cursor-pointer">About</li>
            <li className="hover:text-[#23b4b9] cursor-pointer">Services</li>
            <li className="hover:text-[#23b4b9] cursor-pointer">Contact</li>
          </ul>
        </div>
      )}

      {/* Hero Section //bg-[#23b4b9] */}
      <header className="h-screen flex items-center justify-center bg-[#0d4465] gap-32">
        <motion.div
          className="text-center p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="sm:text-7xl text-4xl font-bold text-white">Your Environmental Fix!</h1>
          <p className="mt-8 sm:text-2xl text-xl text-white font-bold">
            Join us in making the world a cleaner place with our eco-friendly services.
          </p>
          <button className="mt-8 px-12 py-4 bg-[#23b4b9] text-white font-bold rounded-full shadow-md hover:bg-green-700 transition">
            Get Started
          </button>
        </motion.div>
      </header>
    </div>
  );
}
