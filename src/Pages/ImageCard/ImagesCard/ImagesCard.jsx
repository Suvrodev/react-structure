import React from "react";

const ImagesCard = ({ baby }) => {
  const { id, image } = baby;
  return (
    <div className="border p-4 rounded-lg w-[750px] h-[450px] flex flex-col gap-4 items-center justify-center">
      <img src={image} alt="" className="w-full h-[90%]" />
      <div className="flex justify-center">
        <h1 className="text-white">{id}</h1>
      </div>
    </div>
  );
};

export default ImagesCard;
