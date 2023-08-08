import { Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  function onClick() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }
  return (
    <>
      <footer className="footer">
        <div className="container mx-auto">
          <Typography
            className="footer-logo text-center sm:text-left"
            variant="h4"
          >
            Abdalla Market
          </Typography>
          <div className="flex justify-between flex-col sm:flex-row links sm:items-center">
            <div className="flex justify-evenly sm:justify-between  flex-row">
              <ul className="links-1 flex flex-col">
                <Link to="" onClick={onClick}>
                  {" "}
                  Home
                </Link>
                <Link to="about" onClick={onClick}>
                  About
                </Link>
                <Link to="cart" onClick={onClick}>
                  Cart
                </Link>
                <Link to="products" onClick={onClick}>
                  Products
                </Link>
              </ul>
              <ul className="links-2 flex flex-col">
                <span>link</span>
                <span>link</span>
                <span>link</span>
                <span>link</span>
              </ul>
              <ul className="links-2 flex flex-col">
                <span>link</span>
                <span>link</span>
                <span>link</span>
                <span>link</span>
              </ul>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex justify-center flex-col items-center"
            >
              <div className="input">
                <TextField
                  id="standard-basic"
                  label="Subscribe"
                  variant="standard"
                  className="footer-input"
                />
                <Button className="footer-btn" variant="contained">
                  Subscribe
                </Button>
              </div>
              <div className="footer-icons flex justify-center sm:justify-start">
                <a href="https://www.facebook.com/abdalla.abdalsabor.3/">
                  <FontAwesomeIcon icon="fa-brands fa-facebook" />
                  {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
                </a>
                <a href="https://wa.me/+01127342564">
                  <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                </a>
                <a href="mailto:abdotlos60@gmail.com">
                  <FontAwesomeIcon icon="fa-regular fa-envelope" />
                </a>
                <a href="https://github.com/Abdalla-Mon">
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="made-by text-center">
          Made with love by{" "}
          <a href="https://abdalla-mon.github.io/Portfolio/">AbdallaMon</a>
        </div>
      </footer>
    </>
  );
}
