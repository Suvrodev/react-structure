import axios from "axios";
import "./ImageCard.css";
import deer1 from "../../../assets/Deer/Deer.jpg";
import deer2 from "../../../assets/Deer/Deer2.png";

import React, { useEffect, useState } from "react";
import titleAndGoUp from "../../../JSFile/titleAndGoUp";
import ImagesCard from "../ImagesCard/ImagesCard";
import BatBowl from "../BatBowl/BatBowl";
import MoonNight from "../MoonNight/MoonNight";

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

        {/* <div className="my-20">
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div> */}

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

      <section>
        <div className="my-20">
          <div className="flex flex-col gap-6">
            {babyImages.map((baby, idx) => (
              <div
                id={`sticky-card-${idx + 1}`}
                key={idx}
                className="sticky-card w-full mx-auto max-w-2xl sticky"
              >
                <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                  <ImagesCard baby={baby} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="my-20">
          <MoonNight />
        </div>
      </section>

      <section>
        <div>
          <BatBowl />
        </div>
      </section>
    </div>
  );
};

export default ImageCard;
