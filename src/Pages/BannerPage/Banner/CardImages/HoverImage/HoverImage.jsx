import React, { useState } from "react";

const HoverImage = ({ hoveImageLink }) => {
  // console.log("New Hover Image: ", hoveImageLink);
  // const hoveImageLink = "https://i.ibb.co/CBfsNmd/w-1.jpg";

  const [isZoomed, setIsZoomed] = useState(false);

  const onZoom = (e) => {
    setIsZoomed(true);
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    e.currentTarget.querySelector("img").style.transformOrigin = `${x}% ${y}%`;
  };

  const offZoom = (e) => {
    setIsZoomed(false);
    e.currentTarget.querySelector(
      "img"
    ).style.transformOrigin = `center center`;
  };

  return (
    <div className="h-full w-full">
      <div
        className="h-full w-full overflow-hidden shadow-lg"
        // id="container"
        onMouseMove={onZoom}
        onMouseOver={onZoom}
        onMouseLeave={offZoom}
      >
        <img
          src={hoveImageLink}
          alt=""
          className={` w-full h-full object-contain ${
            isZoomed ? "scale-[2.5]" : "scale-100"
          }`}
        />
      </div>
    </div>
  );
};

export default HoverImage;
