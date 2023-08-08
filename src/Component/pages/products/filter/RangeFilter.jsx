/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Slider } from "@mui/material";
import { useSelector } from "react-redux";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeFilter({ dataObj }) {
  // eslint-disable-next-line no-unused-vars
  const data = useSelector((state) => state.data);

  const minDistance = 5;

  let price = dataObj.map((e) => e.price);
  let minPrice = Math.min(...price);
  let maxPrice = Math.max(...price);

  const [value, setValue] = useState([minPrice, maxPrice]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <>
      <Box className="range-filter">
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value}
          min={minPrice}
          max={maxPrice}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        />
      </Box>
      <Box className="range-price">
        <Box>
          $<span>{value[0]}</span>
        </Box>
        <Box>
          $<span>{value[1]}</span>
        </Box>
      </Box>
    </>
  );
}
