import { IconButton, Divider, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import fetchData, { filterByCat } from "../../../../store/fetchData/fetchData";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

export default function SearchFilter() {
  const data = useSelector((state) => state.data);
  const inputRef = useRef();
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData);
  }, []);
  const titles = [...new Set(data.dataObj.map((e) => e.title))];
  function handleInput(e) {
    setValue(e.target.value);
  }
  function handleClick() {
    let filter = titles.filter((e) =>
      e.toLowerCase().includes(value.toLowerCase())
    );

    let filterArr = data.dataObj.filter((el) => {
      return filter.join("").includes(el.title);
    });

    dispatch(filterByCat({ search: true, arr: filterArr || [] }));
    document.querySelector(".click-me").click();
    document.querySelector(".remove-val input").value = "";
  }
  return (
    <>
      <Paper
        className="mb-5 search-form"
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <InputBase
          className="remove-val"
          ref={inputRef}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for a product"
          inputProps={{ "aria-label": "search for a product" }}
          onInput={(e) => handleInput(e)}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleClick}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}
