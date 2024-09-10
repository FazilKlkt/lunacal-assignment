import React, { useState } from "react";
import SidePanel from "./SidePanel";
import CardContent from "./CardContent";
import Left from "../assets/left.svg";
import Right from "../assets/right.svg";
import Image1 from "../assets/img1.jpg";
import Image2 from "../assets/img2.jpg";
import Image3 from "../assets/img3.jpg";
import Image4 from "../assets/img4.png";

import DefaultImage from "../assets/img1.jpg";

import Image from "./Image";

const initialImages = [Image1, Image2, Image3, Image4];

const LowerCard = () => {
  const [Images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);

      setImages((prevImages) => {
        const newImages = [...prevImages];
        const firstDefaultIndex = newImages.findIndex(
          (img) => img === DefaultImage
        );

        if (firstDefaultIndex !== -1) {
          newImages[firstDefaultIndex] = fileURL;
        } else {
          newImages.push(fileURL);
        }
        return newImages;
      });
    }
  };

  // Handle next image click
  const handleNext = () => {
    if (currentIndex < Images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle previous image click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full max-w-[720px] h-[330px] bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_#00000066]">
      <div className="w-full flex justify-center items-center gap-3">
        <SidePanel />
        <CardContent>
          <div className="w-full flex justify-between items-center">
            {/* gallery */}
            <div className="w-[149px] h-[62px] bg-[#171717] rounded-[20px] shadow-[inset_0px_4px_10px_2px_rgba(0,0,0,0.25)] text-white font-['Poppins'] font-medium leading-[30px] text-[20px] flex items-center justify-center">
              Gallery
            </div>

            {/* add image and arrow btn */}
            <div className="flex gap-x-10 items-center">
              <label
                className="relative w-[131.32px] h-[46px] mx-auto bg-[#FFFFFF08] rounded-[104px] font-['Plus Jakarta Sans'] text-[12px] leading-[6.29px] text-white text-center font-extrabold 
                shadow-[inset_0px_3.26px_3.26px_#FFFFFF26,inset_0px_0px_48.91px_#FFFFFF0D,9px_10px_7.1px_#00000066,-0.5px_-0.5px_6.9px_#FFFFFF40]
                flex justify-center items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                + ADD IMAGE
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </label>

              <div className="flex gap-x-2">
                <div
                  onClick={handlePrev}
                  className={`w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#303439] to-[#161718] shadow-[1px_1px_40px_1px_#9daabb,-5px_-3px_30px_-10px_#96BEE7] flex items-center justify-center cursor-pointer ${
                    currentIndex === 0 ? "opacity-50" : ""
                  }`}
                >
                  <img src={Left} alt="left Icon" width="14" height="14" />
                </div>
                <div
                  onClick={handleNext}
                  className={`w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#303439] to-[#161718] shadow-[1px_1px_40px_1px_#9daabb,-5px_-3px_30px_-10px_#96BEE7] flex items-center justify-center cursor-pointer ${
                    currentIndex >= Images.length - 3 ? "opacity-50" : ""
                  }`}
                >
                  <img src={Right} alt="right Icon" width="14" height="14" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-5 mt-4">
            {Images.slice(currentIndex, currentIndex + 3).map(
              (image, index) => (
                <Image key={index} imageURL={image} />
              )
            )}
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default LowerCard;
