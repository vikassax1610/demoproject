import React from "react";
import ABT_1 from "/ABT_1.jpg";
import abt_2 from "/abt_2.jpg";
import Modern_amenities from "/Modern_amenities.jpg";
import Modern_Design from "/Modern_Design.jpg";

function About() {
  return (
    <div
      className="w-full bg-gradient-to-br from-white to-gray-100 py-12 px-6 md:px-16 mt-4"
      id="about"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-gray-900 drop-shadow-md">
            About us
          </h1>
          <h2 className="text-2xl md:text-4xl tracking-wide font-semibold text-gray-700 leading-snug">
            Building Legacies Through Vision and Innovation
          </h2>
          <p className="text-lg md:text-xl text-gray-600 tracking-wide leading-relaxed">
            PINCODE’s journey is defined by a rich history of visionary pioneers
            who transformed challenges into opportunities. Our team’s
            deep-rooted expertise, relentless passion, and innovative spirit
            have consistently redefined industry standards. With decades of
            collective experience, we have built iconic landmarks that inspire
            trust and fuel progress. Our legacy is marked by a commitment to
            quality, ethical practices, and sustainable growth. Every project
            reflects our dedication to crafting intelligent spaces that elevate
            communities and empower businesses.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 grid md:grid-cols-2 gap-6">
          <img
            src={ABT_1}
            alt="About Image 1"
            className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 object-cover w-full h-64"
          />
          <img
            src={Modern_amenities}
            alt="Modern Amenities"
            className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 object-cover w-full h-52"
          />
          <img
            src={abt_2}
            alt="About Image 2"
            className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 object-cover w-full h-52"
          />
          <img
            src={Modern_Design}
            alt="Modern Design"
            className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 object-cover w-full h-64"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
