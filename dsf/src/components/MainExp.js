import React from "react";

const ProductDetails = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start p-4 scale-105">
      {/* Main Heading */}
      <h1 className="text-gray-400 text-4xl font-thin mb-2">OUR MAIN EXPORT</h1>
      <h2 className="text-black text-4xl font-black mb-6">LIVE DEEP-SEA CRAB</h2>

      {/* Product Details Card */}
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-6 space-y-4">
        {/* Product Name */}
        <div className="border-b pb-4">
          <p className="font-bold">Product name:</p>
          <p>Live Deep-sea Crab</p>
        </div>
        {/* Scientific Name */}
        <div className="border-b pb-4">
          <p className="font-bold">Scientific name:</p>
          <p>Chaceon fenneri</p>
        </div>
        {/* Product Characteristics */}
        <div className="border-b pb-4">
          <p className="font-bold">Product characteristics:</p>
          <p>Live, strong, 8 legs, 2 claws, with no physical damage</p>
        </div>
        {/* Product Holding Conditions */}
        <div className="border-b pb-4">
          <p className="font-bold">Product holding conditions:</p>
          <p>Clear filtered marine water chilled at 6°C</p>
        </div>
        {/* Packaging */}
        <div>
          <p className="font-bold">Packaging:</p>
          <p>
            Banded claws, ice packs for cooling, Primary packaging – Styrofoam
            box, Secondary packaging – corrugated carton
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="mt-6 bg-gray-400 text-white py-3 px-6 rounded-lg text-lg hover:bg-black transition duration-300">
        View More
      </button>
    </div>
  );
};

export default ProductDetails;
