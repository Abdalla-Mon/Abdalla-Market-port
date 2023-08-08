import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
export default function AddressForm({ register, errors }) {
  return (
    <div className="address-form">
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            {...register("firstName", {
              required: {
                value: true,
                message: "Please enter your first name",
              },
            })}
          />
          <error>{errors.firstName?.message}</error>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            {...register("lastName", {
              required: {
                value: true,
                message: "Please enter your last name",
              },
            })}
          />
          <error>{errors.lastName?.message}</error>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            {...register("address1", {
              required: {
                value: true,
                message: "Please enter your address",
              },
            })}
          />
          <error>{errors.address1?.message}</error>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            {...register("city", {
              required: {
                value: true,
                message: "Please enter your city",
              },
            })}
          />
          <error>{errors.city?.message}</error>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            {...register("zip", {
              required: {
                value: true,
                message: "Please enter your Zip",
              },
            })}
          />
          <error>{errors.zip?.message}</error>
        </Grid>
        <Grid item xs={12} sm={6}>
          <select
            {...register("country", {
              required: {
                value: true,
                message: "Please enter your country",
              },
            })}
          >
            <option value="Egypt">Egypt</option>
            <option value="Syria">Syria</option>
            <option value="Palestine">Palestine</option>
          </select>

          <error>{errors.country?.message}</error>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </div>
  );
}
