import React, { useState } from "react";
import { Menu } from "lucide-react";

import LogoWhite from "/LogoWhite.png";
function NavBar({ isOpen, handlePopup }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="flex justify-between items-center px-8 md:pt-4 md:h-20">
      <img src={LogoWhite} alt="" className="md:w-36 w-20" />
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <Menu color="white" size={30} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-20 block md:hidden right-0 bg-white shadow-lg rounded-lg p-4 w-48 z-10">
          <button
            onClick={handlePopup}
            className="hover:bg-white md:hidden block py-1 my-2 px-8 hover:text-black rounded-md tracking-widest bg-[#382E25] text-white hover:shadow-md hover:shadow-gray-600 ease-in duration-300"
          >
            Enquiry
          </button>
          <ul className="flex flex-col items-start gap-4 text-gray-900 font-bold text-xl tracking-widest">
            <li className="hover:border-b hover:text-gray-900 ease-in-out duration-300">
              Home
            </li>
            <li className="hover:border-b hover:text-gray-900 ease-in-out duration-300">
              <a href="#about">About us</a>
            </li>
            <li className="hover:border-b hover:text-gray-900 ease-in-out duration-300">
              <a href="#contact">Contact us</a>
            </li>
            <li className="hover:border-b  hover:text-gray-900 ease-in-out duration-300">
              Gallery
            </li>
          </ul>
        </div>
      )}
      <ul className="md:flex hidden items-center gap-12 h-20  text-white font-bold text-xl tracking-widest">
        <li className="hover:border-b hover:text-gray-900 ease-in-out duration-300">
          Home
        </li>
        <li className="hover:border-b hover:text-gray-900 ease-in-out duration-300">
          <a href="#about">About us</a>
        </li>
        <li className="hover:border-b hover:text-gray-900 ease-in-out duration-300">
          <a href="#contact">Contact us</a>
        </li>
        <li className="hover:border-b  hover:text-gray-900 ease-in-out duration-300">
          <a href="#gallery">Gallery</a>
        </li>
      </ul>
      <button
        onClick={handlePopup}
        className="bg-white hidden md:block text-black py-2 px-6 rounded-md tracking-widest hover:bg-[#382E25] hover:text-white hover:shadow-md hover:shadow-gray-600 ease-in duration-300"
      >
        Enquiry
      </button>
    </header>
  );
}

export default NavBar;
