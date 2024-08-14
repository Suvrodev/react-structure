import axios from "axios";
import "./ImageCard.css";
import deer1 from "../../../assets/Deer/Deer.jpg";
import deer2 from "../../../assets/Deer/Deer2.png";

import React, { useEffect, useState } from "react";
import titleAndGoUp from "../../../assets/JSFile/titleAndGoUp";

const ImageCard = () => {
  titleAndGoUp("Image");
  const [babyImages, setBabyImages] = useState([]);
  useEffect(() => {
    axios.get("/baby.json").then((res) => setBabyImages(res.data));
  }, []);
  // console.log(babyImages);
  return (
    <div className="text-white">
      <section className="mt">
        <h1 className="text-2xl font-bold my-10">Hover Image</h1>

        <div className="babyContainer">
          {babyImages.map((baby, idx) => (
            <div key={idx}>
              <img src={baby?.image} alt="" className=" babyImage " />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h1 className="text-2xl font-bold my-10 text-white">Shadow Image</h1>
        <div className="deerImages flex justify-between">
          <img src={deer1} alt="" className="deerImage shadow" />
          <img src={deer2} alt="" className="deerImage filterShadow" />
        </div>
      </section>
    </div>
  );
};

export default ImageCard;
