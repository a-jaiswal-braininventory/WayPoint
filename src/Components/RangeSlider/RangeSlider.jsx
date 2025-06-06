import React, { useEffect, useRef, useState } from "react";
import "./RangeSlider.css"; // move your CSS into this file

const RangeSlider = () => {
  const [sliderOneVal, setSliderOneVal] = useState(0);
  const [sliderTwoVal, setSliderTwoVal] = useState(100);
  const minGap = 0;
  const sliderMax = 100;

  const sliderTrackRef = useRef(null);

  useEffect(() => {
    fillColor();
  }, [sliderOneVal, sliderTwoVal]);

  const handleSlideOne = (e) => {
    let value = parseInt(e.target.value);
    if (sliderTwoVal - value <= minGap) {
      value = sliderTwoVal - minGap;
    }
    setSliderOneVal(value);
  };

  const convertToTime = (val) => {
    const totalMinutes = Math.floor((val / 100) * (24 * 60 - 1));
    const hours = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
    const minutes = String(totalMinutes % 60).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleSlideTwo = (e) => {
    let value = parseInt(e.target.value);
    if (value - sliderOneVal <= minGap) {
      value = sliderOneVal + minGap;
    }
    setSliderTwoVal(value);
  };

  const fillColor = () => {
    const percent1 = (sliderOneVal / sliderMax) * 100;
    const percent2 = (sliderTwoVal / sliderMax) * 100;
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, rgb(107, 113, 178) ${percent1}%, rgb(107, 113, 178) ${percent2}%, #dadae5 ${percent2}%)`;
    }
  };

  return (
    <div className="outerContainer">
      <p className="text-left font-normal text-lg w-full py-4">
        {convertToTime(sliderOneVal)} - {convertToTime(sliderTwoVal)}
      </p>

      <div className="RangeSlider-wrapper">
        <div className="RangeSlider-container">
          <div className="Range-slider-track" ref={sliderTrackRef}></div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderOneVal}
            onInput={handleSlideOne}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={sliderTwoVal}
            onInput={handleSlideTwo}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
