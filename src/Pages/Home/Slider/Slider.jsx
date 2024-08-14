import axios from "axios";
import "./Slider.css";
import React, { useEffect, useRef, useState } from "react";

// const testImage = "https://i.ibb.co/fCmfDPM/tailwind.jpg";
const testImage = "https://i.ibb.co/R6JJ1pQ/daisyui.png";
const Slider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(null);

  useEffect(() => {
    axios
      .get("/sliderimages.json")
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  const handleStart = (e) => {
    startX.current = e.clientX || e.touches[0].clientX;
  };

  const handleMove = (e) => {
    if (startX.current === null) return;

    const x = e.clientX || e.touches[0].clientX;
    const deltaX = x - startX.current;

    if (deltaX > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      startX.current = null;
    } else if (deltaX < -50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      startX.current = null;
    }
  };

  const handleEnd = () => {
    startX.current = null;
  };

  return (
    <div className="relative w-full h-[220px] md:h-[500px] overflow-hidden bg-purple-500">
      <div
        className="flex transition-transform duration-500 bg-blue-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 bg-yellow-400">
            <img
              src={image.image}
              alt={`Slide ${index}`}
              className="w-[17%] h-[220px] md:h-[500px]  "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

/**
 * urls: https://axios-http.com/docs/intro
 */
