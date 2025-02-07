import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center text-white">
      {/* Header */}
      <header className="w-full flex flex-wrap justify-around items-center px-4 py-4 bg-black gap-4 md:gap-16 font-bold">
        <div className="flex items-center space-x-2">
          <img src="/ecofix1.png" alt="EcoFix Logo" className="h-20 w-40 md:h-28 md:w-56 lg:h-32 lg:w-72" />
        </div>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-around md:justify-start space-x-4 md:space-x-8 lg:space-x-14 uppercase text-sm md:text-lg lg:text-xl">
            <li><a href="#about" className="hover:text-teal-500">About Us</a></li>
            <li><a href="#service" className="hover:text-teal-500">Service</a></li>
            <li><a href="#pricing" className="hover:text-teal-500">Pricing</a></li>
            <li><a href="#contact" className="hover:text-teal-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-start text-center mt-16 px-4 w-full md:mt-24 lg:mt-32 md:px-12 lg:pl-52">
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
