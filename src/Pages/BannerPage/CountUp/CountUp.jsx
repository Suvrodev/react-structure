import React from "react";
import CountBox from "./CountBox/CountBox";

const CountUp = () => {
  // const numberA=100
  // const numberB=500
  // const numberC=1500

  const numbers = [100, 500, 1500];
  return (
    <div className="overflow-hidden text-white">
      <div className="my-10">
        <h1 className="text-2xl font-bold">Count up</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {numbers.map((number, idx) => (
            <CountBox key={idx} number={number} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountUp;
