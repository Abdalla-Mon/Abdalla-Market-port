/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../store/fetchData/fetchData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyCard from "../../Card";
import { Divider, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import AddToCartBtn from "../../AddToCart";
function ProductDesc({ data }) {
  let { productTitle } = useParams();

  let selectedEle = data.dataObj.filter((ele) => ele.title === productTitle)[0];
  let relatedArr = data.dataObj.filter(
    (e) => e.cat === selectedEle.cat && e.title !== selectedEle.title
  );
  return (
    <>
      <section className="product-desc">
        <div className="container sprod mx-auto">
          {selectedEle === undefined ? (
            <>
              <LoadingPc />
              <LoadingMob />
            </>
          ) : null}
          {selectedEle !== undefined ? (
            <>
              <ProductPc selectedEle={selectedEle} data={data} />
              <ProductMob selectedEle={selectedEle} data={data} />
            </>
          ) : null}
        </div>
        <div className="container mx-auto rt-prod">
          <div className="related-products">
            <RelatedProduct relatedArr={relatedArr} data={data} />
          </div>
        </div>
      </section>
    </>
  );
}

function ProductPc({ selectedEle, data }) {
  return (
    <>
      <div className="product-pc hidden sm:flex gap-2">
        <div className="product-img  w-2/5">
          <img src={selectedEle.img} alt={selectedEle.title} />
        </div>
        <div className="product-text w-3/5">
          <Typography variant="h5">{selectedEle.title}</Typography>
          <Typography variant="h6" className="prod-price">
            $ {selectedEle.price}
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laboriosam, harum et. Sed ducimus veniam officia. Quidem excepturi
            animi molestias omnis sed dolores accusamus, repellat nobis magnam
            quod aperiam ratione porro?
          </Typography>
          <Typography variant="subtitle1" className="rating">
            {selectedEle.rating}
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </Typography>
          <AddToCartBtn dataId={selectedEle.id} data={data} />
          <Divider />
          <Typography variant="subtitle2" className="cat">
            Category : <span>{selectedEle.cat}</span>
          </Typography>
        </div>
      </div>
    </>
  );
}
function ProductMob({ selectedEle, data }) {
  return (
    <>
      <div className="product-mob sm:hidden ">
        <div className="product-img flex ">
          <img src={selectedEle.img} alt={selectedEle.title} />
          <div className="product-text">
            <Typography variant="h5">{selectedEle.title}</Typography>
            <Typography variant="h6" className="prod-price">
              $ {selectedEle.price}
            </Typography>
            <Typography variant="subtitle1" className="rating">
              {selectedEle.rating}
              <FontAwesomeIcon icon="fa-solid fa-star" />
            </Typography>
            <Divider />
            <AddToCartBtn dataId={selectedEle.id} data={data} />
            <Typography variant="subtitle2" className="cat">
              Category : <span>{selectedEle.cat}</span>
            </Typography>
          </div>
        </div>
        <Divider />
        <div className="product-desc-text ">
          <Typography variant="body1">
            <span> Descripton :</span> Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Laboriosam, harum et. Sed ducimus veniam officia.
            Quidem excepturi animi molestias omnis sed dolores accusamus,
            repellat nobis magnam quod aperiam ratione porro?
          </Typography>
        </div>
      </div>
    </>
  );
}
function LoadingPc() {
  return (
    <>
      <div className="product-skl-pc hidden sm:flex gap-2">
        <Stack className="w-6/12">
          <Skeleton
            variant="rectangular"
            height={300}
            className="prod-sk-img w-full"
          />
        </Stack>
        <Stack className="w-6/12">
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            className="prod-sk-txt w-full"
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            className="prod-sk-txt w-10	"
          />
          <Skeleton
            variant="text"
            height={150}
            className="prod-sk-txt w-full"
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            className="prod-sk-txt w-10	"
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            className="prod-sk-txt w-2/5"
          />
        </Stack>
      </div>
    </>
  );
}
function LoadingMob() {
  return (
    <>
      <div className="product-skl-mob block sm:hidden">
        <div className="flex gap-2 mb-1 w-full">
          <Stack className="w-6/12">
            <Skeleton
              variant="rectangular"
              height={150}
              className="prod-sk-img w-full"
            />
          </Stack>
          <Stack className="w-6/12">
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem" }}
              className="prod-sk-txt w-full"
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem" }}
              className="prod-sk-txt w-10	"
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem" }}
              className="prod-sk-txt w-10	"
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem" }}
              className="prod-sk-txt w-2/5"
            />
          </Stack>
        </div>
        <Skeleton
          variant="text"
          height={150}
          className="prod-sk-txt w-full"
        ></Skeleton>
      </div>
    </>
  );
}

function RelatedProduct({ relatedArr, data }) {
  return (
    <>
      <Typography variant="h4">Related Products</Typography>
      <div className="related-grid gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {relatedArr.map((ele) => {
          return (
            <>
              <MyCard arr={ele} key={ele.title} data={data} />
            </>
          );
        })}
      </div>
    </>
  );
}
export default ProductDesc;
