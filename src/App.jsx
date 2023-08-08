import { Routes, Route } from "react-router-dom";
import Home from "./Component/pages/home/Home";
import Navbar from "./Component/router-element/Navbar";
import ProductDesc from "./Component/pages/products/ProductDesc";
import Cart from "./Component/pages/cart/Cart";
import React from "react";
import { Page } from "./Component/pages/products/Products";
const LazyProducts = React.lazy(() =>
  import("./Component/pages/products/Products")
);
const LazyAbout = React.lazy(() => import("./Component/pages/about/About"));
const LazyContact = React.lazy(() =>
  import("./Component/pages/contact/ContactUs")
);
import Checkout from "./Component/pages/cheackout/Checkout";

import ProductsLoading from "./Component/pages/products/ProductsLoading";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "./store/fetchData/fetchData";
import Footer from "./Component/router-element/Footer";
import PageLoader from "./Component/PageLoader";

function App() {
  let theme = window.localStorage.getItem("theme");
  document.querySelector("#root").className = theme || "";
  const data = useSelector((state) => state.data);
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setLoad(false);
  }, []);

  const arr = data.sliceArr;

  return (
    <>
      {load && <PageLoader />}
      {data.loading === true && <PageLoader />}
      {data.loading === false ? (
        <>
          <Navbar />
          <Routes>
            <Route path="" element={<Home data={data} />}></Route>
            <Route
              path="Products/*"
              element={
                <React.Suspense fallback={<ProductsLoading />}>
                  <LazyProducts data={data} />
                </React.Suspense>
              }
            >
              <Route
                index
                element={<Page arr={arr.slice(0, 9)} data={data} />}
              />
              <Route path=":pageId" element={<Page arr={arr} data={data} />} />
            </Route>
            <Route path=":productTitle" element={<ProductDesc data={data} />} />
            <Route
              path="about"
              element={
                <React.Suspense fallback={<PageLoader />}>
                  <LazyAbout />
                </React.Suspense>
              }
            ></Route>
            <Route
              path="contact"
              element={
                <React.Suspense fallback={<PageLoader />}>
                  <LazyContact />
                </React.Suspense>
              }
            ></Route>
            <Route path="cart" element={<Cart data={data} />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
          <Footer />{" "}
        </>
      ) : null}
    </>
  );
}

export default App;
