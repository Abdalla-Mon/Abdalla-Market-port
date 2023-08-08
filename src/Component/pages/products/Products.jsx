/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../../../store/fetchData/fetchData";
import ProductsLoading from "./ProductsLoading";
import { Outlet } from "react-router-dom";
import MyCard from "../../Card";
import Filtering from "./filter/Filtering";
import CreatTabs from "./CreatTabs";
import SortingFilter from "./filter/Sorting";
import { Divider } from "@mui/material";
export default function Products({ data }) {
  // const data = useSelector((state) => state.data);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  return (
    <>
      {data.loading && <ProductsLoading />}
      <section className="products">
        {data.loading !== true ? (
          <div className="container mx-auto">
            <div className="sm:flex">
              <div className="filter">
                <Filtering dataObj={data.dataObj} />
              </div>
              {/* <Divider /> */}
              <Divider variant="middle" className="block sm:hidden" />

              <div className="products-area">
                <div className="sorting-area">
                  <SortingFilter dataObj={data.filterArr} />
                </div>
                <div className="tabs-container flex justify-between items-center">
                  <div className="tabs-pagination">
                    <CreatTabs />
                  </div>
                </div>
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}

// eslint-disable-next-line react/prop-types

export function Page({ arr, data }) {
  return (
    <>
      {arr[0] === "no" ? (
        <div className="no-product">No Product To Show</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-3">
          {arr.map((e, index) => {
            return <MyCard arr={e} key={e.id} data={data} />;
          })}
        </div>
      )}
    </>
  );
}
