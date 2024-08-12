import axios from "axios";
import "./Slider.css";
import React, { useEffect, useRef, useState } from "react";

const Slider = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("/images.json").then((res) => setImages(res.data));
  }, []);

  console.log(images);

  return (
    <div>
      <h1>Carousel</h1>
    </div>
  );
};

export default Slider;

/**
 * urls: https://axios-http.com/docs/intro
 */
