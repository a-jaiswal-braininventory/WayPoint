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
      sliderTrackRef.current.style.background = `rgb(107, 113, 178)`;
    }
  };

  return (
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
  );
};

export default RangeSlider;
