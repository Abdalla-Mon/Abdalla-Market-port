/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { handleCart } from "../../../store/fetchData/fetchData";
import { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

export default function Cart({ data }) {
  const dispatch = useDispatch();
  let cartArr =
    JSON.parse(window.localStorage.getItem("cartArr")) || data.cartArr;

  function createData(img, name, quantity, price, subtotal) {
    return { img, name, quantity, price, subtotal };
  }

  function ourImg(e) {
    return <img src={e.img} alt={e.title} />;
  }
  function IncreaseBtn({ e }) {
    function handleClick(eT) {
      cartArr = cartArr.map((el, index) => {
        let parent = document.querySelector(`.row-el${index}`);

        if (el.id === e.id) {
          el.qty = e.qty + 1;

          window.localStorage.setItem(
            "count",
            +window.localStorage.getItem("count") + 1
          );
          let subTotal2 = +window.localStorage.getItem("subTotal") + el.price;
          window.localStorage.setItem("subTotal", subTotal2);

          document.querySelector(".total-count").innerHTML = `$ ${subTotal2}`;

          document.querySelector(".cart-count").innerHTML =
            window.localStorage.getItem("count");

          let subTotal = parent.querySelector(".sub-total");
          let span = parent.querySelector(".update-qty");

          span.innerHTML = el.qty;
          subTotal.innerHTML = `$ ${el.qty * el.price}`;
        }
        return el;
      });
      window.localStorage.setItem("cartArr", JSON.stringify(cartArr));
    }
    return (
      <button onClick={(eT) => handleClick(eT)}>
        <AddIcon />
      </button>
    );
  }
  function DecreaseBtn({ e }) {
    function handleClick(eT) {
      cartArr = cartArr.map((el, index) => {
        let parent = document.querySelector(`.row-el${index}`);
        if (el.id === e.id) {
          el.qty = e.qty - 1;

          window.localStorage.setItem(
            "count",
            +window.localStorage.getItem("count") - 1
          );

          let subTotal2 = +window.localStorage.getItem("subTotal") - el.price;
          window.localStorage.setItem("subTotal", subTotal2);
          document.querySelector(".total-count").innerHTML = `$ ${subTotal2}`;

          document.querySelector(".cart-count").innerHTML =
            window.localStorage.getItem("count");

          let subTotal = parent.querySelector(".sub-total");
          let span = parent.querySelector(".update-qty");
          span.innerHTML = el.qty;
          subTotal.innerHTML = `$ ${el.qty * el.price}`;
          if (el.qty === 0) {
            return "";
          }
        }

        return el;
      });
      cartArr = cartArr.filter((e) => e !== "");
      window.localStorage.setItem("cartArr", JSON.stringify(cartArr));
      dispatch(handleCart(cartArr));
    }
    return (
      <button onClick={(eT) => handleClick(eT)}>
        <RemoveIcon />
      </button>
    );
  }
  function Qty({ e }) {
    return (
      <>
        <div className="qty">
          {<DecreaseBtn e={e} />}
          <span className="update-qty">{e.qty}</span>
          {<IncreaseBtn e={e} />}
        </div>
      </>
    );
  }
  function price(e) {
    return <>$ {e.price}</>;
  }
  function subTotal(e) {
    return (
      <>
        <div className="sub-total">$ {e.price * e.qty}</div>
      </>
    );
  }

  let mapArr = cartArr.map((e) => {
    return createData(ourImg(e), e.title, <Qty e={e} />, price(e), subTotal(e));
  });

  const rows = mapArr;

  return (
    <>
      {data.loading === true ? (
        <div className="cart-loader">
          <span>Loading...</span>
        </div>
      ) : null}
      {data.loading === false ? (
        <section className="cart-area">
          <div className="cart-heading">
            <Typography variant="h3">Your Cart Items</Typography>
          </div>
          <div className="container mx-auto">
            <div className="cart-table">
              <StickyHeadTable rows={rows} />
            </div>
            <div className="total">
              <SubTotal />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

function SubTotal() {
  let total = window.localStorage.getItem("subTotal");

  return (
    <>
      <Typography variant="h5">Cart Total</Typography>
      <div className="total-body ">
        <div className="total-area flex justify-between">
          <Typography>Total:</Typography>
          <Typography className="total-count">$ {total}</Typography>
        </div>
        <div className="total-btn">
          <Button variant="contained" size="large" className="check-btn">
            <Link to="/checkout">Checkout</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
const columns = [
  { id: "img", label: "Image", minWidth: 100, align: "center" },
  { id: "name", label: "Name", minWidth: 100, align: "center" },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 120,
    align: "center",
  },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    align: "center",
  },
  {
    id: "subtotal",
    label: "Subtotal",
    minWidth: 100,
    align: "center",
  },
];

function StickyHeadTable({ rows }) {
  return (
    <>
      {rows.length === 0 ? (
        <Typography className="text-center" variant="h4">
          Empty Cart
        </Typography>
      ) : null}
      {rows.length > 0 ? (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <>
                  {rows.map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                        className={"row-el" + index}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : null}
    </>
  );
}
