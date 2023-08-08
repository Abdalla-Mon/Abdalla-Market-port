import * as React from "react";

import { Typography, List, ListItem, ListItemText, Grid } from "@mui/material";

export default function Review() {
  let products = JSON.parse(window.localStorage.getItem("cartArr"));
  let data = JSON.parse(window.localStorage.getItem("form-address"));

  //     desc: 'A nice thing',
  //     price: '$9.99',
  //   },
  //   {
  //     name: 'Product 2',
  //     desc: 'Another thing',
  //     price: '$3.45',
  //   },
  //   {
  //     name: 'Product 3',
  //     desc: 'Something else',
  //     price: '$6.51',
  //   },
  //   {
  //     name: 'Product 4',
  //     desc: 'Best thing of all',
  //     price: '$14.11',
  //   },
  //   { name: 'Shipping', desc: '', price: 'Free' },
  // ];
  let subTotal = window.localStorage.getItem("subTotal");

  let cardSlice = data.cardNumber.slice(data.cardNumber.length - 4);
  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: data.card },
    { name: "Card number", detail: "xxxx-xxxx-xxxx-" + cardSlice },
    { name: "Expiry date", detail: data.expDate },
  ];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.title}
              secondary={"a nice product"}
            />
            <Typography variant="body2">$ {product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {subTotal}{" "}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {data.firstName + " " + data.lastName}
          </Typography>
          <Typography gutterBottom>{data.address1}</Typography>
          <Typography gutterBottom>{data.city + "," + data.country}</Typography>
          <Typography gutterBottom>{data.zip}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
