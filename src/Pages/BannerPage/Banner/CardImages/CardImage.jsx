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
  const imageRef = useRef("");

  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("/wmimg.json").then((res) => setImages(res.data));
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="w-[40%] flex items-center justify-center ">
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
                    ref={imageRef}
                    src={img?.image}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                  <div className="cardImageNumber ">
                    <p className="text-white z-10 text-2xl">{idx + 1}</p>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>

        <div className="w-[60%]">
          <HoverImage />
        </div>
      </div>
    </div>
  );
};

export default CardImage;

/**
 * urls: https://swiperjs.com/react
 */
