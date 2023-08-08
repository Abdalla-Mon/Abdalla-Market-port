import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import data from "../../product.json";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  dataObj: [],
  filterArr: [],
  sliceArr: [],
  cartArr: [],
};

export const fetchData = createAsyncThunk("data/fetchData", () => {
  return axios.get("./db/product.json").then((res) => res.data);
});
const userSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    filterByCat: (state, action) => {
      if (action.payload === "all") {
        state.filterArr = state.dataObj;
      } else if (action.payload.search === true) {
        if (action.payload.arr.length === 0) {
          state.filterArr = ["no"];
        } else state.filterArr = action.payload.arr;
      } else {
        state.filterArr = state.dataObj.filter((e) => e.cat === action.payload);
      }
    },
    sliceData: (state, action) => {
      state.sliceArr = state.filterArr.slice(
        action.payload,
        action.payload + 9
      );
    },
    filterByPrice: (state, action) => {
      const filter = state.filterArr.filter((e) => {
        return e.price <= action.payload.val2 && e.price >= action.payload.val1;
      });
      if (filter.length === 0) {
        state.filterArr = ["no"];
      } else state.filterArr = filter;
    },
    sort: (state, action) => {
      state.filterArr = action.payload;
    },
    handleCart: (state, action) => {
      state.cartArr = JSON.parse(window.localStorage.getItem("cartArr")) || [
        ...action.payload,
      ];
      console.log(state.cartArr);
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.dataObj = action.payload;
      state.filterArr = action.payload;
      state.sliceArr = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.dataObj = "";
      state.error = action.error.message;
    });
  },
});
export default userSlice.reducer;
export const { filterByCat, sliceData, filterByPrice, sort, handleCart } =
  userSlice.actions;
