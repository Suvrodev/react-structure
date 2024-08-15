import React, { useEffect, useRef, useState } from "react";
import "./CardImage.css";
import HoverImage from "./HoverImage/HoverImage";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const CardImage = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("/wmimg.json").then((res) => setImages(res.data));
  }, []);

  const [imageNumber, setImageNumber] = useState(0);
  const handleClickImage = (idx) => {
    // if (imageRef.current) {
    //   console.log(imageRef.current);
    // }
    console.log("Idx:", idx);
    setImageNumber(idx);
  };

  console.log("Image Number: ", imageNumber);
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 p-5 md:p-0 ">
        <div className="w-full md:w-[40%]  flex items-center justify-center ">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper cardSize "
          >
            {images.map((img, idx) => (
              <div key={img?.id} className="relative">
                <SwiperSlide key={idx}>
                  <img
                    src={img?.image}
                    alt=""
                    className="h-full w-full object-cover md:object-contain"
                    onClick={() => handleClickImage(idx)}
                  />
                  <div className="cardImageNumber ">
                    <p className="text-white z-10 text-2xl">{idx + 1}</p>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>

        <div className="w-full md:w-[60%] bg-green-500 ">
          <div className="h-[567px]">
            <HoverImage hoveImageLink={images[imageNumber]?.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImage;

/**
 * urls: https://swiperjs.com/react
 */
