import React, { useEffect } from "react";
import "./Banner.css";

import bannerImage from "../../../assets/Banner/Banner.png";
import parrot from "../../../assets/Lottie/Parrot.json";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import titleAndGoUp from "../../../JSFile/titleAndGoUp";

const Banner = () => {
  useEffect(() => {
    // Set the document title
    document.title = "Banner Title-1"; // Set the title for the page

    // Set Open Graph meta tags
    const metaTitle = document.querySelector('meta[property="og:title"]');
    const metaDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    const metaImage = document.querySelector('meta[property="og:image"]');
    const metaUrl = document.querySelector('meta[property="og:url"]');

    // Create meta tags if they don't exist
    if (!metaTitle) {
      const newMetaTitle = document.createElement("meta");
      newMetaTitle.setAttribute("property", "og:title");
      newMetaTitle.content = "Banner Title-2"; // Updated title
      document.head.appendChild(newMetaTitle);
    }

    if (!metaDescription) {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.setAttribute("property", "og:description");
      newMetaDescription.content = "Banner Description"; // Updated description
      document.head.appendChild(newMetaDescription);
    }

    if (!metaImage) {
      const newMetaImage = document.createElement("meta");
      newMetaImage.setAttribute("property", "og:image");
      newMetaImage.content = "https://i.ibb.co.com/7XzmCg4/s2.jpg"; // Updated image
      document.head.appendChild(newMetaImage);
    }

    if (!metaUrl) {
      const newMetaUrl = document.createElement("meta");
      newMetaUrl.setAttribute("property", "og:url");
      newMetaUrl.content = "https://heroic-crepe-2ae4c9.netlify.app/banner"; // Page URL
      document.head.appendChild(newMetaUrl);
    }
  }, []);

  return (
    <div className={`w-full h-[200px] md:h-[500px] banner rounded-lg `}>
      <div className="flex h-full ">
        {/* For Desktop Device       */}
        <div className=" hidden md:flex  justify-center items-center w-full md:w-6/12 h-full  ">
          <span className="font-bold text-purple-500 relative top-12 md:top-16 left-24">
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
        {/* For Mobile Device       */}
        <div className=" md:hidden  justify-center items-center w-[100%] md:w-6/12 h-full  ">
          <p className="font-bold text-purple-500 relative top-12 left-10">
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
          </p>
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
