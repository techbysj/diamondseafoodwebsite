import React from "react";
import ContactForm from "../components/ContactForm";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";
import ProdWidget from "../components/ProdWidget";
import ProductDetails from "../components/MainExp";
import SeafoodProcessing from "../components/EuApproved";
import CrabRecipes from "../components/CrabRecipe";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center p-0">
      <div className="w-full max-w-10xl rounded-lg p-2 mx-3 -mb-6">
        <Carousel />
        <AboutUs />
      </div>
      <div className="w-full bg-gray-100 flex justify-center items-center mt-2 mb-2 p-5">
        <h2 className="text-6xl font-thin">Our Main Products</h2>
      </div>
      <div className="w-full bg-gray-100 flex justify-center items-center mb-6">
        <div className="flex space-x-6">
          <ProdWidget
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO35Om_rfcMny6wVNYMtlI0aHjJjMOVzitfaQXO46hYDkJ6C4ZxCxCSqU4N7ELqQmAO2E&usqp=CAU"
            text="Live Sea Crab"
            buttonText="More Details"
          />
          <ProdWidget
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcjcxcWKS5vsUqSSJ3AacGI26yjKDg4gAyXKI4DHbvCL4lGeUAI9C_yeY7DSQdwdyuYo&usqp=CAU"
            text="Frozen Sea Crab"
            buttonText="More Details"
          />
        </div>
      </div>
      <div className="w-full max-w-10xl rounded-lg p-2 mx-3">
        <ProductDetails />
      </div>
      <div className="w-full max-w-10xl rounded-lg p-2 mx-3">
        <SeafoodProcessing />
      </div>
      <div className="w-full max-w-10xl rounded-lg p-2 mx-3">
        <CrabRecipes />
      </div>

      <div className="w-full max-w-10xl rounded-lg p-2 mx-3">
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
