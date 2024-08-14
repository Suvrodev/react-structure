import React, { useState } from "react";

const SingleRange = () => {
  const [rangeValue, setRangeValue] = useState(20);
  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };
  // console.log("Range Value: ", rangeValue);
  return (
    <div className=" w-full  ">
      <div className="mt-12">
        <input
          type="range"
          name=""
          id=""
          className="w-full h-10 accent-green-500 "
          value={rangeValue}
          onChange={handleRangeChange}
        />
        <div className="text-2xl text-white font-bold">
          {rangeValue && <p>{rangeValue}</p>}
        </div>
      </div>
    </div>
  );
};

export default SingleRange;
