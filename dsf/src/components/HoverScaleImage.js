import React from "react";

const HoverScaleImages = ({
  images,
  imageSize = { width: 300, height: 200 },
}) => {
  return (
    <div className="flex justify-center items-center gap-8 p-8 w-full">
      <div className="flex justify-center items-center gap-8">
        {images.slice(0, 2).map((image, index) => (
          <a
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="group"
          >
            <div
              className="overflow-hidden rounded-lg shadow-lg"
              style={{
                width: `${imageSize.width}px`,
                height: `${imageSize.height}px`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <p className="text-center mt-4 text-lg font-semibold">
              {image.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HoverScaleImages;
