import React, { useState } from "react";

const HoverImage = () => {
  const hoveImageLink = "https://i.ibb.co/CBfsNmd/w-1.jpg";

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
    <div>
      <style>
        {`
            #container {
                box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3);
                height: 100%;
                width: 100%;
                overflow: hidden;
            }

            .fp {
                width: 100%;
                height: 100%;
                transform: ${isZoomed ? "scale(2.5)" : "scale(1)"};
            }
            `}
      </style>

      <div
        className=""
        id="container"
        onMouseMove={onZoom}
        onMouseOver={onZoom}
        onMouseLeave={offZoom}
      >
        <img src={hoveImageLink} alt="" className="fp" />
      </div>
    </div>
  );
};

export default HoverImage;
