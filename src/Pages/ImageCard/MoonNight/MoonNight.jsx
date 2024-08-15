import React, { useEffect, useRef } from "react";
import "./MoonNight.css";

import prince from "../../../assets/moonNight/Prince_.png";
import fairy from "../../../assets/moonNight/Fairy_.png";

import myAudioFile from "../../../assets/MyAudio/YehRaaten.mp3";
import { useInView } from "react-intersection-observer";

const MoonNight = () => {
  const audioRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  console.log("In view: ", inView);
  useEffect(() => {
    if (audioRef.current) {
      if (inView) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [myAudioFile, inView]);

  // const playAudio = () => {};
  return (
    <div>
      <div className="sky" ref={ref}>
        <img className="fairy" src={fairy} alt="" />
        <img className="prince" src={prince} alt="" />
      </div>
      <div className="flex">
        {/* <button onClick={playAudio} className="btn btn-primary">
          Play Audio
        </button> */}
        <audio ref={audioRef} src={myAudioFile} className="bg-yellow-400" />
      </div>
    </div>
  );
};

export default MoonNight;
