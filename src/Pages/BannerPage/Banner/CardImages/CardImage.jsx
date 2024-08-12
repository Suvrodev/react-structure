import React, { useEffect, useState } from "react";
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

const hoveImageLink = "https://i.ibb.co/CBfsNmd/w-1.jpg";

const CardImage = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("/wmimg.json").then((res) => setImages(res.data));
  }, []);

  console.log(images);
  return (
    <div>
      <div className="flex">
        <div className="w-[40%] flex items-center justify-center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper cardSize"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img?.image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </SwiperSlide>
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
