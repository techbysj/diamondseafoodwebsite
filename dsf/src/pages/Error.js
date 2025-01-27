import React from "react";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-red-500 text-white py-4 px-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-2">Error</h1>
        <p className="text-lg">Something went wrong. Please try again later or Contact Us for assistance.</p>
        <a href="/" className="">
          <button className="mt-4  bg-white text-red-500 px-4 py-2 rounded-lg">
            Go back
          </button>
        </a>
        <a href="/contact" className="">
          <button className="mt-4 ml-3  bg-white text-red-500 px-4 py-2 rounded-lg">
            Contact
          </button>
        </a>
      </div>
    </div>
  );
};

export default Error;
