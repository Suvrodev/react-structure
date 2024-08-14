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
        <div>
          <div className="flex gap-4">
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
            <p className="w-[450px] border p-2 mt-4 bg-green-600 text-white font-bold text-center">
              {" "}
              {number}{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
