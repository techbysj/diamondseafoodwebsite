import React from "react";

const SeafoodProcessing = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 md:p-12 min-h-screen">
      {/* Left Section - Image */}
      <div className="md:w-1/2">
        <img
          src="https://supremecrab.com/wp-content/uploads/2023/08/Frozen-Deepsea-on-plate-with-frozen-bag-behind.jpg" // Replace with the actual image URL
          alt="Seafood"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section - Content */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
        <h2 className="text-gray-500 text-4xl font-thin uppercase">
          Why Choose Diamond Seafood Kenya Limited
        </h2>
        <h1 className="text-6xl font-bold mt-2">
          EU Approved Seafood Processing Facility
        </h1>
        <div className="mt-6 space-y-6">
          {/* Feature 1 */}
          <div className="flex items-center">
            <div className="bg-red-500 text-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75h7.5m-7.5 0c-.69 0-1.25-.56-1.25-1.25V6.5A2.25 2.25 0 0 1 9.25 4.25h5.5A2.25 2.25 0 0 1 17 6.5v11c0 .69-.56 1.25-1.25 1.25m-7.5 0a3.75 3.75 0 0 0 7.5 0m-7.5 0h7.5"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold">Fresh Products</h3>
              <p className="text-gray-500 text-xl">
                Our quality is well preserved in terms of the freshness.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center">
            <div className="bg-red-500 text-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 9.75l-.75-6a2.25 2.25 0 0 0-2.25-2H7.5a2.25 2.25 0 0 0-2.25 2l-.75 6m15 0a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 9.75m15 0V9a3.375 3.375 0 0 0-3.375-3.375h-9.75A3.375 3.375 0 0 0 3 9v.75m15 0h-15"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold">
                Advanced Preservation Methods
              </h3>
              <p className="text-gray-500 text-xl">
                We use advanced preservation methods to maintain the highest
                quality.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center">
            <div className="bg-red-500 text-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.25a7.75 7.75 0 1 1 0 15.5A7.75 7.75 0 0 1 12 4.25zM15 10.75l-6 6m0-6l6 6"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold">Customized Packaging</h3>
              <p className="text-gray-500 text-xl">
                Our packaging is customized as per customer requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeafoodProcessing;
