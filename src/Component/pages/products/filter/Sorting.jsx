/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { sort } from "../../../../store/fetchData/fetchData";
import { useState } from "react";
export default function SortingFilter({ dataObj }) {
  const [value, setValue] = useState("default");
  let sortingArr = ["a-z", "z-a", "low to high price", "high to low price"];
  const dispatch = useDispatch();
  function handleClick() {
    let arr;

    switch (value) {
      case "default":
        {
          arr = [...dataObj].sort((a, b) => a.id - b.id);
        }
        break;
      case "a-z":
        {
          arr = [...dataObj].sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase())
          );
        }
        break;
      case "z-a":
        {
          arr = [...dataObj].sort((a, b) =>
            b.title.toLowerCase().localeCompare(a.title.toLowerCase())
          );
        }
        break;
      case "low to high price":
        {
          arr = [...dataObj].sort((a, b) => a.price - b.price);
        }
        break;
      case "high to low price":
        {
          arr = [...dataObj].sort((a, b) => b.price - a.price);
        }
        break;
      default:
        {
          arr = [...dataObj].sort((a, b) => a.id - b.id);
        }
        break;
    }

    dispatch(sort(arr));
    document.querySelector(".click-me").click();
  }
  return (
    <>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120 }}
        className="sorting"
      >
        <InputLabel id="demo-simple-select-standard-label">Sorting</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Sorting"
          onChange={(e) => {
            setValue(e.target.value);
            window.setTimeout(() => {
              document.querySelector(".sorting-btn").click();
            }, 5);
          }}
        >
          <MenuItem value="default">
            <em>Default</em>
          </MenuItem>
          {sortingArr.map((el, index) => {
            return (
              <MenuItem value={el} key={index}>
                {el}
              </MenuItem>
            );
          })}
        </Select>
        <Button
          className="sorting-btn"
          variant="contained"
          onClick={handleClick}
        >
          Sort
        </Button>
      </FormControl>
    </>
  );
}
