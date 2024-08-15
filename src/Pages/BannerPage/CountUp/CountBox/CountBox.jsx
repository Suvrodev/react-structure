import React, { useState } from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import ScrollTrigger from "react-scroll-trigger";

const CountBox = ({ number }) => {
  const [counterOn, setCounterOn] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  // console.log("In View: ", inView);
  return (
    <div
      className="border rounded-md flex items-center justify-center h-[150px]"
      ref={ref}
    >
      <div className="font-bold text-2xl">
        {/* <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        > */}
        {inView && <CountUp start={0} end={number} duration={4} />}
        {/* </ScrollTrigger> */}
      </div>
    </div>
  );
};

export default CountBox;

/**
 * urls: https://www.npmjs.com/package/react-countup
 * urls: https://www.npmjs.com/package/react-scroll-trigger
 */
