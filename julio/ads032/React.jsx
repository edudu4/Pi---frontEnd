import React, { useState } from 'react';

function Slider() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min="1"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider"
      />
      <span className="slider-value">{sliderValue}</span>
    </div>
  );
}

export default Slider;
