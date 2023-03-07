import React, { useEffect, useLayoutEffect, useState } from 'react';
import './styles.css';

var thumbsize = 14;

export const Slider = ({
  min,
  max,
  onChange,
  initMinVal,
  initMaxVal,
}: {
  min: number;
  max: number;

  initMinVal?: number;
  initMaxVal?: number;
  onChange: (min: number, max: number) => void;
}) => {
  const [avg, setAvg] = useState((min + max) / 2);
  const [minVal, setMinVal] = useState(initMinVal || avg);
  const [maxVal, setMaxVal] = useState(initMaxVal || avg);

  const width = 300;
  const minWidth = thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
  const minPercent = ((minVal - min) / (avg - min)) * 100;
  const maxPercent = ((maxVal - avg) / (max - avg)) * 100;
  const styles = {
    min: {
      width: minWidth,
      left: 0,
      '--minRangePercent': `${minPercent}%`,
    },
    max: {
      width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
      left: minWidth,
      '--maxRangePercent': `${maxPercent}%`,
    },
  };

  const handleMinChange = (val: number) => {
    const roundVal = Math.round(val);
    setMinVal(roundVal);
    onChange?.(roundVal, maxVal);
  };

  const handleMaxChange = (val: number) => {
    const roundVal = Math.round(val);
    setMaxVal(roundVal);
    onChange?.(minVal, roundVal);
  };

  useLayoutEffect(() => {
    setAvg((maxVal + minVal) / 2);
    onChange?.(minVal, maxVal);
  }, [minVal, maxVal]);

  return (
    <div
      className="min-max-slider"
      data-legendnum="2"
      data-rangemin={min}
      data-rangemax={max}
      data-thumbsize={thumbsize}
      data-rangewidth={width}
    >
      <label htmlFor="min"></label>
      <input
        id="min"
        className="min"
        style={styles.min}
        name="min"
        type="range"
        step="1"
        min={min}
        max={avg}
        value={minVal}
        onChange={({ target }) => handleMinChange(Number(target.value))}
      />
      <label htmlFor="max"></label>
      <input
        id="max"
        className="max"
        style={styles.max}
        name="max"
        type="range"
        step="1"
        min={avg}
        max={max}
        value={maxVal}
        onChange={({ target }) => handleMaxChange(Number(target.value))}
      />
    </div>
  );
};
