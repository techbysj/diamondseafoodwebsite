import React from "react";
import { ChevronDown } from "lucide-react"; // Optional icon library

const ContactWidget = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] bg-white space-y-6">
      {/* Title */}
      <p className="uppercase tracking-widest text-gray-500 text-sm">
        Buying Process
      </p>
      {/* Main Heading */}
      <h1 className="text-5xl font-semibold text-gray-900">
        Contact us below to get started
      </h1>
      {/* Button */}
      <button className="w-16 h-16 flex items-center justify-center border-2 border-red-500 rounded-full hover:bg-red-100 transition duration-300">
        <ChevronDown className="text-red-500 w-6 h-6" />
      </button>
    </div>
  );
};

export default ContactWidget;
