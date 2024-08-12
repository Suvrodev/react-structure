import React, { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountBox = ({ number }) => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="border rounded-md flex items-center justify-center h-[150px]">
      <span className="font-bold text-2xl">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          {counterOn && <CountUp start={0} end={number} duration={4} />}
        </ScrollTrigger>
      </span>
    </div>
  );
};

export default CountBox;

/**
 * urls: https://www.npmjs.com/package/react-countup
 * urls: https://www.npmjs.com/package/react-scroll-trigger
 */
