import React from "react";
import Banner from "./Banner/Banner";
import CardImage from "./Banner/CardImages/CardImage";
import CountUp from "./CountUp/CountUp";

const BannerPage = () => {
  return (
    <div>
      <div className="py-4">
        <Banner />
        <div className="my-10">
          <CardImage />
        </div>
        <div>
          <CountUp />
        </div>

        <div>
          <h1 className="text-xl text-white mb-4">Take any Number: </h1>
          <input
            type="number"
            name=""
            id=""
            className="bg-transparent border p-2 w-[450px] removeDefaultIcon text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
