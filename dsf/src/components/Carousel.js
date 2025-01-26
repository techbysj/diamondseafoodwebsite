import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Optional: hide arrows for a cleaner look
  };

  const slides = [
    {
      image:
        "https://www.app.com/gcdn/-mm-/9a6207c8261d65140e2fbaef8a9b33313af85763/c=0-261-4664-2892/local/-/media/NJGroup/AsburyPark/2014/07/22/1406056726002-crab0722c.jpg", // Replace with your image URL
      title: "Premium Seafood From the Indian Ocean",
      description:
        "Sourcing the finest unprocessed seafood from local artisan fishermen, Diamond Seafood Kenya Ltd. delivers fresh, high-quality fish products. From processing to freezing and packaging, we bring the pristine taste of the Indian Ocean to Europe, North America, and the Far East.",
      buttonText: "Explore Our Products",
    },
    {
      image:
        "https://www.simplyrecipes.com/thmb/7oKzlEjzo2m50vIDo0xBRoMb6wY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/King-Crab-LEAD-2-8bbc17130da44ce0bba35c2f53fb4685.jpg",
      title: "Pioneers in Deep-Sea Crab Fishing",
      description:
        "As trailblazers in deep-sea crab fishing along the East African coastline, we offer live premium-grade crabs straight from the Indian Ocean. Our live seafood holding facility ensures freshness for global markets.",
      buttonText: "Discover Deep-Sea Crab",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/91OJTxNp7BL._AC_UF894,1000_QL80_.jpg",
      title: "Global Export, Local Excellence",
      description:
        "With over a decade of expertise, we are your trusted partner for fresh and live seafood exports. Explore our wide range of products, sourced sustainably and delivered with unmatched quality to new and existing markets worldwide.",
      buttonText: "Partner with Us",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[400px] object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-8">
              <div className="text-left text-white space-y-4 max-w-lg">
                <h2 className="text-5xl font-extrabold  ">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
                <button className="px-6 py-3 bg-black text-white font-medium rounded hover:bg-slate-500">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
