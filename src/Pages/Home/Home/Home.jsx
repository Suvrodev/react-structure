import React from "react";
import Slider from "../Slider/Slider";
import YoutubeVideo from "../Youtube/YoutubeVideo/YoutubeVideo";
import titleAndGoUp from "../../../assets/JSFile/titleAndGoUp";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  titleAndGoUp("Home");
  return (
    <div>
      <Slider />
      <YoutubeVideo />
      <div>
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
