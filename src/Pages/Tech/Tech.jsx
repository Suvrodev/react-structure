import React from "react";
import InputNumber from "./InputNumber/InputNumber";
import DuelRange from "./DuelRange/DuelRange";

const Tech = () => {
  return (
    <div>
      <InputNumber />
      <div className="my-10">
        <DuelRange />
      </div>
    </div>
  );
};

export default Tech;
