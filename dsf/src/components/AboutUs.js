import React from 'react'

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 ">
      <div className="border border-gray-300 p-2 mb-2">
        <h2 className="text-sm font-bold text-center">Our Story</h2>
      </div>
      <h1 className="text-5xl font-thin text-center mb-4 p-3">
        FROM THE SEA AND BEYOND
      </h1>
      <h1 className="text-6xl  text-center font-medium mb-4 p-3">
        DIAMOND SEAFOOD KENYA
      </h1>
      <p className="text-center text-2xl text-gray-700 mb-6 max-w-5xl">
        Our primary focus revolves around catching Live Deep-sea Crabs. It has
        been a fascinating journey exploring the intricacies of these
        crustaceans to improve their quality. These Crabs are harvested from
        depths ranging between 400 and 800 meters, where they thrive in an
        unspoiled environment characterized by temperatures below 6°C. After
        capture, the Crabs are carefully handled with meticulous attention until
        they reach their export destination, ensuring they remain alive and
        strong throughout the entire process.
      </p>
      <button className="bg-black text-white py-2 px-4 p-4 rounded hover:bg-slate-500">
        Explore More
      </button>
    </div>
  );
}

export default AboutUs