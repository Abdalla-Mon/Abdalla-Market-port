import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
export default function ShopNow() {
  return (
    <Button variant="contained" className="shop-now" size="large">
      <NavLink
        to={"Products"}
        onClick={() => {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 100);
        }}
      >
        Shop Now
        <ShoppingCartCheckoutIcon className="shopping-icon" />
      </NavLink>
    </Button>
  );
}
