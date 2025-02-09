import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-start px-8 py-16 overflow-hidden">
      <h2 className="text-4xl sm:text-6xl font-bold text-teal-500 mb-6 text-center w-full">
        ABOUT ECOFIX
      </h2>

      {/* About Section */}
      <main className="max-w-2xl ml-0 sm:ml-20 mt-16 font-bold overflow-hidden">
        <h2 className="text-3xl sm:text-5xl text-black mb-10">
          "ECO-FIX dolor sit amet,"
        </h2>
        <p className="mt-4 text-black text-lg sm:text-2xl font-semibold">
          "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt."
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
        </p>
      </main>
      <img src="/ecopattern2.png" alt="eco-pattern"  className="w-[400px] h-[280px] ml-[-180px] mt-16"/>

    </div>
  );
};

export default About;
