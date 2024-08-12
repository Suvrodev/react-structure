import axios from "axios";
import "./ImageCard.css";
import deer1 from "../../../assets/Deer/Deer.jpg";
import deer2 from "../../../assets/Deer/Deer2.png";

import React, { useEffect, useState } from "react";

const ImageCard = () => {
  const [babyImages, setBabyImages] = useState([]);
  useEffect(() => {
    axios.get("/baby.json").then((res) => setBabyImages(res.data));
  }, []);
  console.log(babyImages);
  return (
    <div className="text-white">
      <section class="mt">
        <h1 className="text-2xl font-bold my-10">Hover Image</h1>

        <div class="babyContainer">
          {babyImages.map((baby, idx) => (
            <div key={idx}>
              <img src={baby?.image} alt="" className=" babyImage " />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h1 className="text-2xl font-bold my-10 text-white">Shadow Image</h1>
        <div class="deerImages">
          <img src={deer1} alt="" class="deerImage shadow" />
          <img src={deer2} alt="" class="deerImage filterShadow" />
        </div>
      </section>
    </div>
  );
};

export default ImageCard;
