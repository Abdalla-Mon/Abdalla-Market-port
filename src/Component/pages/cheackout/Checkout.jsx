import * as React from "react";

import {
  Typography,
  Link,
  Button,
  StepLabel,
  Step,
  Stepper,
  Paper,
  Container,
  Box,
  CssBaseline,
} from "@mui/material";

import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useForm } from "react-hook-form";

function Copyright() {
  return (
    <Typography
      variant="subtitle1"
      color="text.secondary"
      align="center"
      className="text-center"
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Abdalla Market
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step, register, errors) {
  switch (step) {
    case 0:
      return <AddressForm register={register} errors={errors} />;
    case 1:
      return <PaymentForm register={register} errors={errors} />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const [activeStep, setActiveStep] = React.useState(0);

  function onSubmit(data) {
    window.localStorage.setItem("form-address", JSON.stringify(data));

    setActiveStep(activeStep + 1);
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <section className="checkout">
      <React.Fragment>
        <CssBaseline />
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <form
            className="base-form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography component="h1" variant="h4" align="center">
                Checkout
              </Typography>
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep, register, errors)}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      sx={{ mt: 3, ml: 1 }}
                      type="submit"
                      value={
                        activeStep === steps.length - 1 ? "Place order" : "Next"
                      }
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Paper>
          </form>
          <Copyright />
        </Container>
      </React.Fragment>
    </section>
  );
}
