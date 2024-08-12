import React from "react";

const SliderBox = ({ testimonial }) => {
  const { image } = testimonial;
  //   console.log(image);
  return (
    <div>
      <img src={image} alt="" className="w-full" />
    </div>
  );
};

export default SliderBox;
