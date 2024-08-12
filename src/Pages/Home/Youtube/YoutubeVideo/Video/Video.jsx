import React, { useEffect } from "react";
import "./Video.css";

import ReactPlayer from "react-player/youtube";
import AOS from "aos";
import "aos/dist/aos.css";

const Video = ({ video }) => {
  const { link, name } = video;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="border" data-aos="flip-left">
      <ReactPlayer url={link} controls={true} className="react-player" />

      <h1 className="text-xl text-white my-2 relative left-5  ">{name}</h1>
    </div>
  );
};

export default Video;

/**
 * urls: https://www.youtube.com/watch?v=7KDRqBpT8NA
 * urls: https://www.npmjs.com/package/react-player
 */
