import React from "react";

const Image = ({ imageURL }) => {
  return (
    <div className="w-full max-w-[180px] h-full max-h-[180px] rounded-[24px] bg-[#363C43]  flex justify-center items-center overflow-hidden grayscale hover:grayscale-0 transform transition-transform duration-300 hover:scale-110 hover:-rotate-2 hover:shadow-lg hover:shadow-black">
      <img
        src={imageURL}
        alt="gallery-images"
        className="rounded-[24px] object-fill w-full h-full
        "
      />
    </div>
  );
};

export default Image;
