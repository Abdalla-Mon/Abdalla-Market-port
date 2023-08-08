/* eslint-disable react/prop-types */
import { handleCart } from "../store/fetchData/fetchData";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { SnackbarProvider, enqueueSnackbar, closeSnackbar } from "notistack";
import styled from "@emotion/styled";
import { MaterialDesignContent } from "notistack";

export default function AddToCartBtn({ dataId, data }) {
  const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    "&.notistack-MuiContent-success": {
      backgroundColor: "#3b3f2c",
      color: "#ffffff",
    },
  }));

  const action = (snackbarId) => (
    <Button
      onClick={() => {
        closeSnackbar(snackbarId);
      }}
      style={{ color: "#ffffff" }}
    >
      Dismiss
    </Button>
  );
  const message = "Added to cart Successfully";

  const dispatch = useDispatch();

  class Obj {
    constructor(obj, qty) {
      this.o = { ...obj, qty };
    }
    increaseQty() {
      this.o.qty += 1;
      return this.o;
    }
  }
  let cartArr = data.cartArr;

  function handleClick(e) {
    if (window.localStorage.getItem("cartArr") === null) {
      window.localStorage.removeItem("subTotal");
    }
    let arrayOfId = cartArr.map((el) => {
      return el.id;
    });

    let id = e.target.dataset.id;

    let filterEle = data.dataObj.filter((e) => e.id === +id);

    let ourObj = new Obj(filterEle[0], 1).o;

    if (arrayOfId.includes(ourObj.id)) {
      cartArr = cartArr.map((e) => {
        if (e.id === ourObj.id) {
          ourObj = new Obj(e, e.qty);
          e = ourObj.increaseQty();
        }
        return e;
      });
    } else {
      cartArr = [...cartArr, ourObj];
    }
    let countArr = cartArr.map((e) => e.qty);
    let count = countArr.reduce(function (acc, curr) {
      return acc + curr;
    });
    let subTotal =
      (+window.localStorage.getItem("subTotal") || 0) + filterEle[0].price;

    window.localStorage.setItem("subTotal", subTotal);
    window.localStorage.setItem("count", count || 1);
    window.localStorage.setItem("cartArr", JSON.stringify(cartArr));
    dispatch(handleCart(cartArr));
    enqueueSnackbar(message, {
      variant: "success",
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "left",
      },
      action,
    });
  }

  return (
    <>
      <SnackbarProvider
        Components={{
          success: StyledMaterialDesignContent,
        }}
      />
      <Button
        className="add-to-cart-btn"
        data-id={dataId}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Add To Cart
      </Button>
    </>
  );
}
