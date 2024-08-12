import React from "react";
import Banner from "./Banner/Banner";
import CardImage from "./Banner/CardImages/CardImage";

const BannerPage = () => {
  return (
    <div>
      <div className="py-4">
        <Banner />
        <div className="my-10">
          <CardImage />
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
