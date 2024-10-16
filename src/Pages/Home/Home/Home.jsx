import React from "react";
import Slider from "../Slider/Slider";
import YoutubeVideo from "../Youtube/YoutubeVideo/YoutubeVideo";
import Testimonial from "../Testimonial/Testimonial";
import titleAndGoUp from "../../../JSFile/titleAndGoUp";

const Home = () => {
  titleAndGoUp("Home");
  return (
    <div>
      <Slider />
      <h1>Check Link Preview</h1>
      <YoutubeVideo />
      <div>
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
