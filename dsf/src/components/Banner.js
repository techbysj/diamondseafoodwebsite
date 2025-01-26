import React from "react";

const FullWidthBanner = ({ imageUrl, title, description, buttonText, buttonUrl }) => {
  return (
    <div className="relative w-full h-[400px] z-0">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover z-0"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-8 z-0">
        <div className="text-left text-white space-y-4 max-w-3xl">
          <h2 className="text-6xl font-extrabold">{title}</h2>
          <p className="text-5xl">{description}</p>
                    <a href={buttonUrl} className="inline-block">
          <button className="px-6 py-3 bg-black space-x-2 text-white font-medium rounded hover:bg-slate-500 ">
            {buttonText}
          </button>
        </a>
        </div>
      </div>
    </div>
  );
};

export default FullWidthBanner;
