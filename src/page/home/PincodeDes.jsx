import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function PincodeDes() {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col items-center justify-center gap-6 md:mb-4 ml-4 md:mt-4 "
      >
        <h1 className="md:text-[8rem] text-[2.5rem] text-white font-extrabold text-center mt-40 tracking-widest">
          <Typewriter
            options={{
              strings: [`Pincode Infra `],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </h1>

        <button className="bg-white text-black py-2 px-6 rounded-md tracking-widest hover:bg-[#382E25] hover:text-white hover:shadow-md hover:shadow-gray-600 ease-in duration-300">
          Explore Now
        </button>
      </motion.div>
    </div>
  );
}

export default PincodeDes;
