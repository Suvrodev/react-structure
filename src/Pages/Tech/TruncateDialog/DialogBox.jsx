import React from "react";

const DialogBox = ({ text }) => {
  const handleCloseDialog = () => {
    console.log("Close Dialog");
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-[150px] p-5">
      {text}
      <form method="dialog">
        <button className="btn btn-warning" onClick={handleCloseDialog}>
          Close
        </button>
      </form>
    </div>
  );
};

export default DialogBox;
