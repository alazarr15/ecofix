import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Services = () => {
  const services = [
    { title: "SERVICE_1", description: "Description for Service 1." },
    { title: "SERVICE_2", description: "Description for Service 2." },
    { title: "SERVICE_3", description: "Description for Service 3." },
    { title: "SERVICE_4", description: "Description for Service 4." },
    { title: "SERVICE_5", description: "Description for Service 5." }
  ];

  return (
    <div className="w-full bg-black py-10 relative flex flex-col items-center">
      <h2 className="text-teal-400 text-4xl font-bold text-center mb-6">SERVICES</h2>
      <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20} // Adjust spacing for better alignment
          slidesPerView={1} // Default: 1 slide per view
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 }, // Mobile: 1 slide
            768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet: 2 slides
            1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktop: 3 slides
            1280: { slidesPerView: 3, spaceBetween: 20 }, // Large screens: 4 slides
          }}
          className="w-full"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white h-[400px] w-full text-teal-500 text-center p-6 rounded-lg shadow-lg flex flex-col justify-center">
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Arrows */}
      <button className="swiper-button-prev absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10">
        <FaArrowLeft className="text-black" />
      </button>
      <button className="swiper-button-next absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10">
        <FaArrowRight className="text-black" />
      </button>
    </div>
  );
};

export default Services;
