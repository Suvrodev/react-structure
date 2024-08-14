import React from "react";
import InputNumber from "./InputNumber/InputNumber";
import DuelRange from "./DuelRange/DuelRange";
import SingleRange from "./SingleRange/SingleRange";
import TruncateDialog from "./TruncateDialog/TruncateDialog";
import titleAndGoUp from "../../JSFile/titleAndGoUp";
import SideBarr from "./SideBarr/SideBarr";

const Tech = () => {
  titleAndGoUp("Tech");
  return (
    <div>
      <InputNumber />
      <div className="my-10 flex gap-10">
        <div className="w-[50%]">
          <DuelRange />
        </div>
        <div className="w-[50%]">
          <SingleRange />
          <TruncateDialog />
        </div>
      </div>

      <div>
        <SideBarr />
      </div>
    </div>
  );
};

export default Tech;
