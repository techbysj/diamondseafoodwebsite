import React from "react";

const CrabRecipes = () => {
  const videos = [
    {
      title: "Singaporean Chilli Crab | Sanjeev Kapoor Khazana",
      url: "https://www.youtube.com/embed/IZXOicN8vZM",
    },
    {
      title: "Easy Durban Crab Curry",
      url: "https://www.youtube.com/embed/Gs1UsDxD6Co",
    },
    {
      title: "Crab Curry Recipe | How to Make Crab Curry",
      url: "https://www.youtube.com/embed/bT1yezZ3xAk",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <h1 className="text-6xl font-black text-center mb-12">
        Explore Crab Recipes
      </h1>
      <div className="max-w-7xl mx-auto space-y-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:items-start md:space-x-6 bg-white shadow-lg p-6 rounded-lg"
          >
            <div className="w-full">
              <iframe
                width="100%"
                height="500"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrabRecipes;
