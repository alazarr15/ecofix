import { div } from 'framer-motion/client'
import React from 'react'

const services = () => {
  return (
  <div>
 {/* Features Section */}
 <section className="py-16 bg-[#0d4465] mb-12 max-h-[130vh]">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#23b4b9] mb-4">Our Services</h2>
          <p className="mt-2 text-white text-xl">We offer sustainable and eco-friendly solutions for a better tomorrow.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-2 mt-6">
  <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col h-full">
    <h3 className="text-2xl font-semibold text-[#23b4b9]">Maintenance</h3>
    <p className="text-gray-700 mt-2 flex-grow">
    Ensure the smooth operation of your devices with our professional maintenance services.
     We provide regular check-ups, troubleshooting, and repairs to keep your computers,
      printers, and photocopiers running efficiently.  
   </p>
  </div>
  <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col h-full">
    <h3 className="text-2xl font-semibold text-[#23b4b9]">Toner Cartridge Refilling</h3>
    <p className="text-gray-700 mt-2 flex-grow">
    Save costs and reduce waste with our high-quality toner cartridge refilling service.
     We use premium-grade toner to ensure clear, crisp prints
      while extending the life of your cartridges. 
    </p>
  </div>
  <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col h-full">
    <h3 className="text-2xl font-semibold text-[#23b4b9]">Training and Consultancy</h3>
  <p className="text-gray-700 mt-2 flex-grow">
    Enhance your technical skills and business efficiency with our expert training and consultancy services.
     We offer tailored guidance and hands-on training for individuals and organizations to stay ahead in
      the ever-evolving tech landscape.   
   </p>
  </div>
</div>



        </div>
      </section>
   
  </div>
    
  )
}

export default services