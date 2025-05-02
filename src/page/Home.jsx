import React, { useState } from "react";
import NavBar from "./home/NavBar";
import PincodeDes from "./home/PincodeDes";
import PopUp from "../components/PopUp";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handlePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="bg-[url(/Pincode_Banner_1.jpg)] bg-cover bg-top-right bg-no-repeat py-8 md:py-0  md:h-full">
        <NavBar handlePopup={handlePopup} isOpen={isOpen} />
        <PincodeDes />
        {isOpen && <PopUp handlePopup={handlePopup} />}
      </div>
      <About />
      <Gallery />
      <Contact />
    </>
  );
}

export default Home;
