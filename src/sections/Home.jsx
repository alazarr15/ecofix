import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu function
  function toggleMenu (){
    setIsOpen(!isOpen);
  };
  console.log(isOpen)

  // Close menu when clicking outside
  const handleClickOutside = (event) => {
    if (!event.target.closest("#nav-menu") && !event.target.closest("#menu-button")) {
      setIsOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center text-white w-[100%]" onClick={handleClickOutside}>
      {/* Header */}
      <header className="w-full flex justify-between items-center px-4 py-4 bg-black md:px-8 lg:px-16 font-bold">
        <div>
          <img src="/ecofix1.png" alt="EcoFix Logo" className="h-20 w-40 md:h-28 md:w-56 lg:h-32 lg:w-72" />
        </div>

        {/* Hamburger Menu Button */}
        <button
  id="menu-button"
  className="text-white text-3xl md:hidden z-50 relative"
  onClick={(e) => {
    e.stopPropagation();
    toggleMenu();
  }}
>
  {isOpen ? <IoClose className="text-black text-4xl" /> : <FiMenu />}
</button>




        {/* Navigation Menu */}
        <nav
          id="nav-menu"
          className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg 
            transform transition-transform duration-300 ease-in-out 
            ${isOpen ? "translate-x-0" : "translate-x-full text-white"}
            md:translate-x-0 md:static md:w-auto md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 lg:space-x-14 uppercase text-lg md:text-xl p-6 md:p-0 ">
            <li><a href="#about" className="hover:text-teal-500 block py-3" onClick={() => setIsOpen(false)}>About Us</a></li>
            <li><a href="#service" className="hover:text-teal-500 block py-3" onClick={() => setIsOpen(false)}>Service</a></li>
            <li><a href="#pricing" className="hover:text-teal-500 block py-3" onClick={() => setIsOpen(false)}>Pricing</a></li>
            <li><a href="#contact" className="hover:text-teal-500 block py-3" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col md:items-start items-center text-center mt-16 px-4 w-full md:mt-24 lg:mt-32 md:px-12 lg:pl-52">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-10 lg:mb-12">YOUR ENVIRONMENTAL</h2>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-teal-500">FIX!</h2>
        <button className="mt-12 md:mt-16 lg:mt-24 bg-white border border-teal-400 text-teal-400 px-4 py-2 md:px-6 md:py-3 text-lg md:text-2xl lg:text-4xl font-bold">
          Read More!
        </button>
      </main>
    </div>
  );
};

export default Home;
