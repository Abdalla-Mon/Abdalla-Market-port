import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import { useScroll, useMotionValueEvent } from "framer-motion";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
const drawerWidth = 240;
const navItems = ["Home", "Products", "About", "Contact"];

function onClick() {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.remove("show-nav");
  }, 100);
}

function DrawerAppBar(props) {
  const { w } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const value = window.localStorage.getItem("count");
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      className="drawer"
    >
      <Typography variant="h5" sx={{ my: 2 }} className="logo-mob">
        Abdalla Market
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <NavLink
            onClick={onClick}
            className={
              item === "Products" ? "products-link navlink-mob" : "navlink-mob"
            }
            to={item === "Home" ? "" : item}
            sx={{ textAlign: "center" }}
            key={index}
          >
            {item}
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const container = w !== undefined ? () => w().document.body : undefined;
  const { scrollY } = useScroll();
  // (document.body.scrollHeight - 200) / 3
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 2000) {
      document.body.classList.remove("hide-nav");
      document.body.classList.add("show-nav");
    } else if (latest > 200) {
      document.body.classList.remove("show-nav");

      document.body.classList.add("hide-nav");
    } else {
      document.body.classList.remove("show-nav");
    }
  });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="navbar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="sm:hidden menu-icon"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            <Link to={""} className="logo" onClick={onClick}>
              {" "}
              Abdalla Market
            </Link>{" "}
          </Typography>
          <Box className="sm:m-auto hidden sm:block">
            {navItems.map((item) => (
              <>
                <NavLink
                  onClick={onClick}
                  key={item}
                  sx={{}}
                  to={item === "Home" ? "" : item}
                  className={
                    item === "Products"
                      ? "p-2 navlink products-link"
                      : "p-2 navlink"
                  }
                >
                  {item}
                </NavLink>
              </>
            ))}
          </Box>
          <Box
            sx={{ display: { xs: "block", sm: "block" } }}
            className="ml-auto sm:ml-0 flex cart-setting "
          >
            <NavLink to={"cart"} onClick={onClick}>
              <div className="cart">
                <span className="cart-count">{value || 0}</span>
                <ShoppingCartIcon />
              </div>
            </NavLink>
            <span className="setting ms-2">
              {" "}
              <Setting />
            </span>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          className="block sm:hidden"
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  w: PropTypes.func,
};

function Navbar() {
  const s = window.localStorage.getItem("count");

  return <DrawerAppBar s={s}></DrawerAppBar>;
}

function Setting() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  let arrOfColor = [
    {
      color: ["fefae0", "e9edc9", "ccd5ae", "755433", "3b3f2c"],
      theme: "default",
      property: [
        "--teritary-color",
        "--primary-color",
        "--primary2-color",
        "--button-color",
        "--heading-color",
        "--btn-hover-color",
        "--hover-color",
      ],
      colors: [
        "fefae0",
        "e9edc9",
        "ccd5ae",
        "755433",
        "3b3f2c",
        "#aa8560",
        "#623f1c",
      ],
    },
    {
      color: ["d8e2dc", "ffe5d9", "f6d3d9", "f4acb7", "796369"],
      theme: "theme-1",
      colors: [
        "d8e2dc",
        "ffe5d9",
        "f6d3d9",
        "f4acb7",
        "796369",
        "f4acb7",
        "9d8189",
      ],
    },
    {
      color: ["f3ffe8", "b8bdf2", "8395f9", "def2cd", "1f1b36"],
      theme: "theme-2",
      colors: [
        "f3ffe8",
        "b8bdf2",
        "8395f9",
        "def2cd",
        "1f1b36",
        "abc496",
        "1f1b3659",
      ],
    },
    {
      color: ["1a1625", "46424f", "2f2b3a", "a688fa", "a688fa"],
      theme: "dark",
      colors: [
        "1a1625",
        "46424f",
        "2f2b3a",
        "a688fa",
        "a688fa",
        "f1faee",
        "e63946",
      ],
    },
  ];

  function settinColor(theme, property, colors) {
    window.localStorage.setItem("theme", theme);
    let ele = document.querySelectorAll(
      ".trending .css-1ri6ub7-MuiPaper-root-MuiCard-root"
    );
    let fet = document.querySelectorAll(".offers .offer-back .offer-back-lay");
    colors.forEach((e, index) => {
      document.documentElement.style.setProperty(property[index], `#${e}`);
    });

    document.querySelector("#root").className = "";
    document.querySelector("#root").classList.add(theme);
    if (document.querySelector(".about-click") !== null) {
      let d = document.querySelector(".about-click");
      d.click();
    }
    if (theme === "theme-2") {
      if (ele !== null) {
        ele.forEach((e) => {
          e.style.backgroundColor = "#8492a6";
        });

        fet.forEach((e) => {
          e.style.opacity = "0.6";
        });
        document.documentElement.style.setProperty("--black-color", `#000000`);

        document.documentElement.style.setProperty("--white-color", `#1f1b36`);
      }
    } else if (theme === "dark") {
      ele.forEach((e) => {
        e.style.backgroundColor = "#ffffff";
      });
      fet.forEach((e) => {
        e.style.opacity = "1";
      });
      document.documentElement.style.setProperty("--black-color", `#ffffff`);
    } else {
      ele.forEach((e) => {
        e.style.backgroundColor = "#ffffff";
      });
      fet.forEach((e) => {
        e.style.opacity = "0.6";
      });
      document.documentElement.style.setProperty("--white-color", `#ffffff`);
      document.documentElement.style.setProperty("--black-color", `#000000`);
    }
  }
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography variant="h6" className="text-center">
        Color Palette
      </Typography>
      <List>
        {arrOfColor.map((ele, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ bgcolor: "#ffffff", marginBottom: "5px" }}
            onClick={() => {
              settinColor(ele.theme, arrOfColor[0].property, ele.colors);
            }}
          >
            <ListItemButton
              sx={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Spans spanArr={ele.color} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer("right", true)}>
          {" "}
          <SettingsIcon />
        </Button>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

function Spans({ spanArr }) {
  return (
    <Stack direction="row" spacing={1}>
      {spanArr.map((ele) => {
        return (
          <Avatar
            sx={{
              bgcolor: `#${ele}`,
              color: `#${ele}`,
              width: 24,
              height: 24,
              border: "1px solid #000000",
            }}
          ></Avatar>
        );
      })}
    </Stack>
  );
}
export default Navbar;
