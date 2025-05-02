import React from "react";
import { Send } from "lucide-react";
function PopUp({ handlePopup }) {
  return (
    <div className="bg-white text-gray-900 w-[22rem] h-[23rem] flex flex-col gap-4 p-4 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-gray-600">
      <h1 className="text-gray-950 text-center text-2xl font-semibold">
        Want to know More ?{" "}
      </h1>
      <div className="flex flex-col gap-3 ">
        <input
          type="text"
          className="px-4 py-1 rounded-xl border focus:outline-1 outline-amber-400"
          placeholder="Enter your Name"
        />
        <input
          type="text"
          className="px-4 py-1 rounded-xl border focus:outline-1 outline-amber-400"
          placeholder="Enter Email"
        />
        <input
          type="text"
          className="px-4 py-1 rounded-xl border focus:outline-1 outline-amber-400"
          placeholder="Enter Phone no."
        />
        <textarea
          type="text"
          rows={4}
          cols={50}
          className="px-4 py-1 rounded-xl border focus:outline-1 outline-amber-400"
          placeholder="Your message"
        />
        <button
          onClick={handlePopup}
          className="border py-1 flex items-center justify-center gap-2 rounded-md hover:bg-amber-700 hover:text-white ease-in duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default PopUp;
