import React from "react";
import "./Banner.css";

import bannerImage from "../../../assets/Banner/Banner.png";
import parrot from "../../../assets/Lottie/Parrot.json";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className={`w-full h-[450px] banner rounded-lg `}>
      <div className="flex h-full ">
        <div className=" flex  justify-center items-center w-6/12 h-full z-10 text-white">
          <span className="font-bold text-orange-500 relative top-16 left-24">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Imagination is more important than knowledge",
                "উঠ, জাগো, এবং লক্ষ্য অর্জন না হওয়া পর্যন্ত থেমো না।",
                "You must be the change you wish to see in the world",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        <div className="flex justify-center items-center w-6/12 h-full">
          <div className="w-[350px]">
            <Lottie animationData={parrot} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

/**
 * urls: https://www.npmjs.com/package/react-simple-typewriter
 * urls: https://www.npmjs.com/package/lottie-react
 */
