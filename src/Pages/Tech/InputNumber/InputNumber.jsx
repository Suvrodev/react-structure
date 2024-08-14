import React, { useRef, useState } from "react";
import "./InputNumber.css";

const InputNumber = () => {
  const inputRef = useRef(null);
  const [number, setNumber] = useState(null);

  const handleShow = () => {
    const enteredNumber = inputRef.current.value;
    setNumber(enteredNumber);
  };

  return (
    <div>
      <div>
        <h1 className="text-xl text-white mb-4">Take any Number: </h1>
        <div className="flex gap-10 justify-center items-center">
          <div className="flex gap-4 items-center">
            <input
              type="number"
              name=""
              id=""
              ref={inputRef}
              className="bg-transparent border p-2 w-[450px] removeDefaultIcon text-white"
            />
            <button className="btn btn-success text-white" onClick={handleShow}>
              {" "}
              Show
            </button>
          </div>
          {number && (
            <div className="w-[450px] border p-2  bg-green-600 text-white font-bold text-center relative">
              {" "}
              {number}{" "}
              <div
                className="absolute w-[35px] h-[35px] bg-red-600 flex items-center justify-center rounded-full -top-4 -right-5"
                onClick={() => setNumber(null)}
              >
                X
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
