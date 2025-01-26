import React from "react";
import FullWidthBanner from "../components/Banner";
import AboutParagraph from "../components/AboutParagraph";
import SquareImages from "../components/SquareImages";
import ContactForm from "../components/ContactForm";
import LocationWidget from "../components/Location";
import HoverScaleImages from "../components/HoverScaleImage";
import ContactWidget from "../components/ContactWidget";

const About = () => {

      const images = [
        {
          src: "https://coasttocoastseafood.ca/cdn/shop/products/kingcrab.jpg?v=1667099198",
          alt: "Image 1",
          description: "Frozen Deep-Sea Crab",
          link: "/frozen-crab",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO35Om_rfcMny6wVNYMtlI0aHjJjMOVzitfaQXO46hYDkJ6C4ZxCxCSqU4N7ELqQmAO2E&usqp=CAU",
          alt: "Image 2",
          description: "Live Deep-Sea Crab",
          link: "/live-crab",
        },
      ];


  return (
    <div className="">
      <FullWidthBanner
        imageUrl="https://coasttocoastseafood.ca/cdn/shop/products/kingcrab.jpg?v=1667099198"
        title="About Us"
        description="Where quality meets the ocean—bringing the finest seafood to your table."
        buttonText="Partner With Us"
        buttonUrl={"/contact"}
        className="p-7"
      />
      <AboutParagraph />
      <SquareImages
        url1="https://i.ytimg.com/vi/TY_xvzYGAWM/maxresdefault.jpg"
        url2="https://i.ytimg.com/vi/X7-oSBghcZY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0QyGsa7padjX-VQNswbfLaw-xdA"
        url3="https://i.cbc.ca/1.6836272.1683571335!/fileImage/httpImage/image.jpg_gen/derivatives/original_1180/crab-plant.jpg?im="
        width="w-80"
        height="h-84"
        className="scale-110 "
      />
      <div className="flex p-5 text-7xl font-thin justify-center align-middle">
        Our Products
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <HoverScaleImages
          images={images}
          imageSize={{ width: 600, height: 500 }}
        />
      </div>
      <LocationWidget />
      <ContactWidget />
      <ContactForm />
    </div>
  );
};

export default About;
