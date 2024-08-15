import React from "react";
import Banner from "./Banner/Banner";
import CardImage from "./Banner/CardImages/CardImage";
import CountUp from "./CountUp/CountUp";
import titleAndGoUp from "../../JSFile/titleAndGoUp";

const BannerPage = () => {
  titleAndGoUp("Banner");
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
      </div>
    </div>
  );
};

export default BannerPage;
