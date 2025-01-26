import React from "react";

const ProdWidget = ({ image, text, buttonText }) => {
  return (
    <div className="p-4 relative w-96 h-86 md:w-86 h-66 overflow-hidden rounded-lg shadow-lg">
      {/* Enlarged image with hover zoom effect */}
      <img
        src={image}
        alt={text}
        className="w-full h-full object-cover scale-110 transition-transform duration-300 hover:scale-125"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
        {/* Text */}
        <h2 className="text-white text-4xl font-semibold mb-4 text-center">
          {text}
        </h2>
        {/* Button */}
        <button className="border border-white text-white py-2 px-6 rounded-lg bg-transparent hover:bg-black hover:text-white transition duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProdWidget;
