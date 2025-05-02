import React from "react";
import ABT_1 from "/ABT_1.jpg";
import abt_2 from "/abt_2.jpg";
import Modern_amenities from "/Modern_amenities.jpg";
import Modern_Design from "/Modern_Design.jpg";
function Gallery() {
  return (
    <div id="gallery">
      <div className="w-full bg-gray-800 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-gray-100 drop-shadow-md">
            Gallery
          </h1>
          <h2 className="text-xl sm:text-2xl mb-4 md:text-4xl tracking-wide font-semibold text-gray-200 leading-snug">
            Building Legacies Through Vision and Innovation
          </h2>
        </div>
        <div className="flex w-full flex-col space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-4">
            <img
              src={ABT_1}
              alt=""
              className="w-full md:w-1/2 h-48 object-cover"
            />
            <div className="flex w-full md:w-1/2 flex-col items-start gap-4 pl-0 md:pl-4 justify-start">
              <h1 className="text-2xl sm:text-3xl md:text-3xl text-gray-100 font-semibold">
                Direct Airport Access
              </h1>
              <p className="text-sm sm:text-base text-gray-300">
                Located minutes from Maharishi Valmiki International Airport,
                our project offers unmatched connectivity for tourism,
                hospitality, and second-home investment in one of India’s most
                sacred cities.
              </p>
              <button className="bg-[#301A1A] text-white py-2 px-6 rounded-md hover:bg-white hover:text-gray-600 ease-in duration-300 text-sm sm:text-base">
                Know More
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-4">
            <div className="md:flex hidden  w-full md:w-1/2 flex-col items-start gap-4 pl-0 md:pl-4 justify-start">
              <h1 className="text-2xl sm:text-3xl md:text-3xl text-gray-100 font-semibold">
                Direct Airport Access
              </h1>
              <p className="text-sm sm:text-base text-gray-300">
                Located minutes from Maharishi Valmiki International Airport,
                our project offers unmatched connectivity for tourism,
                hospitality, and second-home investment in one of India’s most
                sacred cities.
              </p>
              <button className="bg-[#301A1A] text-white py-2 px-6 rounded-md hover:bg-white hover:text-gray-600 ease-in duration-300 text-sm sm:text-base">
                Know More
              </button>
            </div>
            <img
              src={abt_2}
              alt=""
              className="w-full md:w-1/2 h-48 object-cover"
            />
            <div className="flex md:hidden  w-full md:w-1/2 flex-col items-start gap-4 pl-0 md:pl-4 justify-start">
              <h1 className="text-2xl sm:text-3xl md:text-3xl text-gray-100 font-semibold">
                Direct Airport Access
              </h1>
              <p className="text-sm sm:text-base text-gray-300">
                Located minutes from Maharishi Valmiki International Airport,
                our project offers unmatched connectivity for tourism,
                hospitality, and second-home investment in one of India’s most
                sacred cities.
              </p>
              <button className="bg-[#301A1A] text-white py-2 px-6 rounded-md hover:bg-white hover:text-gray-600 ease-in duration-300 text-sm sm:text-base">
                Know More
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-4">
            <img
              src={ABT_1}
              alt=""
              className="w-full md:w-1/2 h-48 object-cover"
            />
            <div className="flex w-full md:w-1/2 flex-col items-start gap-4 pl-0 md:pl-4 justify-start">
              <h1 className="text-2xl sm:text-3xl md:text-3xl text-gray-100 font-semibold">
                Direct Airport Access
              </h1>
              <p className="text-sm sm:text-base text-gray-300">
                Located minutes from Maharishi Valmiki International Airport,
                our project offers unmatched connectivity for tourism,
                hospitality, and second-home investment in one of India’s most
                sacred cities.
              </p>
              <button className="bg-[#301A1A] text-white py-2 px-6 rounded-md hover:bg-white hover:text-gray-600 ease-in duration-300 text-sm sm:text-base">
                Know More
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-4">
            <div className="md:flex hidden w-full md:w-1/2 flex-col items-start gap-4 pl-0 md:pl-4 justify-start">
              <h1 className="text-2xl sm:text-3xl md:text-3xl text-gray-100 font-semibold">
                Direct Airport Access
              </h1>
              <p className="text-sm sm:text-base text-gray-300">
                Located minutes from Maharishi Valmiki International Airport,
                our project offers unmatched connectivity for tourism,
                hospitality, and second-home investment in one of India’s most
                sacred cities.
              </p>
              <button className="bg-[#301A1A] text-white py-2 px-6 rounded-md hover:bg-white hover:text-gray-600 ease-in duration-300 text-sm sm:text-base">
                Know More
              </button>
            </div>
            <img
              src={abt_2}
              alt=""
              className="w-full md:w-1/2 h-48 object-cover"
            />
            <div className="flex md:hidden w-full md:w-1/2 flex-col items-start gap-4 pl-0 md:pl-4 justify-start">
              <h1 className="text-2xl sm:text-3xl md:text-3xl text-gray-100 font-semibold">
                Direct Airport Access
              </h1>
              <p className="text-sm sm:text-base text-gray-300">
                Located minutes from Maharishi Valmiki International Airport,
                our project offers unmatched connectivity for tourism,
                hospitality, and second-home investment in one of India’s most
                sacred cities.
              </p>
              <button className="bg-[#301A1A] text-white py-2 px-6 rounded-md hover:bg-white hover:text-gray-600 ease-in duration-300 text-sm sm:text-base">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
