/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import CatFilter from "./CatFilter";
import RangeFilter from "./RangeFilter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByCat,
  filterByPrice,
} from "../../../../store/fetchData/fetchData";
import SearchFilter from "./SearchFilter";

export default function Filtering({ dataObj }) {
  const [value, setValue] = useState("all");
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(filterByCat(value));
    dispatch(
      filterByPrice({
        val1: +document.querySelectorAll(".range-price span")[0].innerHTML,
        val2: +document.querySelectorAll(".range-price span")[1].innerHTML,
      })
    );
    document.querySelector(".click-me").click();
    // document.querySelector(".sorting-btn").click();
    window.setTimeout(() => {
      document.querySelector(".sorting-btn").click();
    }, 5);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <SearchFilter />
      <RangeFilter dataObj={dataObj} />
      <CatFilter dataObj={dataObj} handleChange={handleChange} />
      <Button className="filter-btn" variant="contained" onClick={handleClick}>
        Filter
      </Button>
    </>
  );
}
