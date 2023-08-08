import * as React from "react";

import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
export default function PaymentForm({ register, errors }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            {...register("card", {
              required: {
                value: true,
                message: "Please enter your name on card",
              },
            })}
          />
          <error>{errors.card?.message}</error>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            type="number"
            {...register("cardNumber", {
              required: {
                value: true,
                message: "Please enter your card number",
              },
              pattern: {
                value:
                  /[0-9]{16}/ ||
                  /^(?:4[0-9]{12}(?:[0-9]{3})?)$/ ||
                  /^(?:3[47][0-9]{13})$/,
                message: "Wrong card number",
              },
            })}
          />
          <error>{errors.cardNumber?.message}</error>{" "}
        </Grid>
        <Grid item xs={12} md={6} className="date-cont">
          <Typography variant="subtitle2">Expiry Date</Typography>
          <input
            className="date-input"
            onClick={console.log(new Date().getMonth())}
            type="date"
            min={new Date().toISOString().split("T")[0]}
            {...register("expDate", {
              required: {
                value: true,
                message: "Please enter expiry date",
              },
            })}
          ></input>
          <error>{errors.expDate?.message}</error>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="CVV"
            helperText="Last three or four digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            type="number"
            {...register("cvv", {
              required: {
                value: true,
                message: "Please enter cvv",
              },
              pattern: {
                value: /^[0-9]{3,4}$/,
                message: "Please enter a valid cvv",
              },
            })}
          />
          <error>{errors.cvv?.message}</error>{" "}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
