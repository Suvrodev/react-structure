import React, { useState } from "react";
import "./DuelRange.css";
import ReactSlider from "react-slider";

const DuelRange = () => {
  const defaultMinPrice = 200;
  const defaultMaxPrice = 500;
  const [minPrice, setMinPrice] = useState(defaultMinPrice);
  const [maxPrice, setMaxPrice] = useState(defaultMaxPrice);

  const handleSliderChange = (value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  const handleMinInputChange = (event) => {
    const value = parseInt(event.target.value);
    setMinPrice(value);
  };

  const handleMaxInputChange = (event) => {
    const value = parseInt(event.target.value);
    setMaxPrice(value);
  };

  const handleShow = () => {};

  return (
    <div>
      <div className="   ">
        <h1 className="text-white font-bold text-xl">Price</h1>

        <div className="mt-10 w-6/12">
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[defaultMinPrice, defaultMaxPrice]}
            max={1000}
            min={0}
            value={[minPrice, maxPrice]}
            minDistance={100}
            onChange={(value, index) => handleSliderChange(value)}

            // number in Thumbnail
            // renderThumb={(props, state) => (
            //   <div {...props}>{state.valueNow}</div>
            // )}
          />
        </div>

        <div className=" border w-4/12 p-5 my-10 flex gap-4 justify-center">
          <p> Min Price: {minPrice} </p>
          <p> Max Price: {maxPrice} </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-4 w-6/12">
          <div className="flex gap-4">
            <input
              type="number"
              name=""
              id=""
              className="bg-transparent border p-2 rounded-md removeDefaultIcon"
              placeholder="Min Number"
              onChange={handleMinInputChange}
              value={minPrice}
            />
            <input
              type="number"
              name=""
              id=""
              className="bg-transparent border p-2 rounded-md removeDefaultIcon"
              placeholder="Max Number"
              onChange={handleMaxInputChange}
              value={maxPrice}
            />
          </div>
          <button className="btn" onClick={handleShow()}>
            Show
          </button>
        </div>
      </div>
    </div>
  );
};

export default DuelRange;
