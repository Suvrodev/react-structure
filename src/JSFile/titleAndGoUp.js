import React, { useEffect } from "react";

const titleAndGoUp = (title) => {
  useEffect(() => {
    document.title = ` ${title} || Structure`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [title]);
};

export default titleAndGoUp;
