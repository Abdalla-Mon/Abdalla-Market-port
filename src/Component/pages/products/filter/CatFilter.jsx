/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";

export default function CatFilter({ dataObj, handleChange }) {
  let cat = dataObj.map((e) => e.cat);
  cat = [...new Set(cat)];
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={(e) => {
            handleChange(e);
          }}
          label="Category"
        >
          <MenuItem value="all">
            <em>All</em>
          </MenuItem>
          {cat.map((el, index) => {
            return (
              <MenuItem value={el} key={index}>
                {el}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}
