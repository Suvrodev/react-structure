import React, { useContext, useRef, useState } from "react";
import "./ModalMainContent.css";
import ModalPage from "../ModalPage/ModalPage";
import { AuthContext } from "../../Provider/AuthProvider";
import { Button } from "react-scroll";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// New sWIPPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";

const buttons = [
  1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const ModalMainContent = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse down event handler
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  // Mouse move event handler
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scrolling speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Mouse up event handler
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  /***
   * Setting
   */
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <div>
      <ModalPage />

      <h1>For Mobile</h1>
      <div className="flex  overflow-x-auto scrollbar-hide  bg-green-500 p-2 w-[350px] ">
        <div className="flex gap-4 ">
          {buttons.map((button, idx) => (
            <button
              key={idx}
              className="btn btn-primary h-[35px] md:h-[55px] w-[50px] md:w-[75px] flex justify-center items-center  gap-2 border rounded-[8px] md:rounded-[5px] bg-white text-[12px] md:text-[16px] text-[#2E2D36]"
            >
              {button}
            </button>
          ))}
        </div>
      </div>

      <h1 className="mt-10">For Desktop</h1>
      <div
        className="flex overflow-x-auto scrollbar-hide bg-green-500 p-2 w-[750px] my-2"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Stop dragging when the mouse leaves the container
      >
        <div className="flex gap-4 w-[750px]">
          {buttons.map((button, idx) => (
            <button
              key={idx}
              className="btn btn-primary h-[35px] md:h-[55px] w-[50px] md:w-[75px] flex justify-center items-center gap-2 border rounded-[8px] md:rounded-[5px] bg-white text-[12px] md:text-[16px] text-[#2E2D36]"
            >
              {button}
            </button>
          ))}
        </div>
      </div>

      <h1 className="my-4 p-5 text-center w-full md:w-1/2 bg-orange-500 text-white text-2xl font-bold mx-auto">
        Slider-1
      </h1>

      {/* Computer SLider start*/}
      <div className="slider-container my-4 bg-[#51B8E5] rounded-md mx-10 md:mx-0  md:block">
        <Slider {...settings}>
          {buttons.map((btn, idx) => (
            <div
              className=" rounded-md w-[450px] p-2 md:p-5 text-white"
              key={idx}
            >
              <button className="btn btn-primary">{btn}</button>
            </div>
          ))}
        </Slider>
      </div>
      {/* Computer SLider end*/}

      <h1 className="my-4 p-5 text-center w-full md:w-1/2 bg-orange-500 text-white text-2xl font-bold mx-auto">
        Slider-2
      </h1>

      <div className="bg-green-600">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {buttons.map((btn, idx) => (
            <button className="btn" key={idx}>
              {" "}
              {btn}{" "}
            </button>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ModalMainContent;

/***
 *
 * urls: https://react-slick.neostack.com/docs/example/responsive
 */
