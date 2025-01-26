import React from 'react'

const SquareImages = ({
  url1,
  url2,
  url3,
  width = "w-32",
  height = "h-32",
}) => {
  return (
    <div className="flex justify-center  space-x-8 py-10 ">
      <img
        src={url1}
        alt="Crab1"
        className={`${width} ${height} object-cover`}
      />
      <img
        src={url2}
        alt="Crab 2"
        className={`${width} ${height} object-cover`}
      />
      <img
        src={url3}
        alt="Crab 3"
        className={`${width} ${height} object-cover`}
      />
    </div>
  );
};

export default SquareImages