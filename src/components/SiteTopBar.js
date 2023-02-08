import { useEffect, useState } from "react";
import { Toolbar, Button } from "@mui/material";
import { StyledAppBar } from "../styles/ComponentStyles";

import { useTheme, styled } from "@mui/material/styles";
// import Submenu from "../components/Submenu";
// import MenuButton from "../components/MenuButton";
// import FindInPageIcon from "@mui/icons-material/FindInPage";
//import { Link } from "react-router-dom";
import StrapiPagesTop from "./StrapiPagesTop";
import { eventEmitter } from "../events.tsx";
import SlideDrawer from "./drawer/SlideDrawer.js";

import MenuIcon from "@mui/icons-material/Menu";

import { ClickAwayListener } from "@mui/material";

// import Backdrop from "./drawer/Backdrop.js";

const SiteTopBar = () => {
  const theme = useTheme();
  const [user, setUser] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setUser(window.localStorage.getItem("strapi_user"));

    eventEmitter.subscribe(
      "TOGGLE_DRAWER",
      () => {
        setDrawerOpen(false);
      },
      []
    );
    return () => {
      eventEmitter.unsubscribe("DRAWER_STATE");
    };
  }, []);

  const StyledDiv = styled("div")(({ theme }) => ({
    //backgroundColor: theme.palette.primary.dark,
    height: 60,
  }));

  // const SearchButton = () => (
  //   <Link
  //     to="/search"
  //     style={{
  //       position: "absolute",
  //       margin: "auto",
  //       top: 5,
  //       left: 5,

  //       zIndex: theme.zIndex.modal,
  //     }}
  //   ></Link>
  // );

  // const StyledHomeButton = styled(Link)(({ theme }) => ({
  //   // width: 45,
  //   // height: 38,
  //   // position: "relative",
  //   // marginRight: 10,
  //   // padding: "0 6px 0 6px",
  //   // boxShadow: theme.shadows[8],
  //   // border: `4px solid ${theme.palette.primary.dark}`,
  //   // borderTop: `4px solid ${theme.palette.primary.light}`,
  //   // backgroundColor: theme.palette.primary.main,
  //   borderRadius: 5,
  //   [theme.breakpoints.down("lg")]: {
  //     // width: "calc(50% - 1px)",
  //     marginRight: 3,
  //   },
  //   [theme.breakpoints.down("md")]: {
  //     // width: "calc(95% - 1rem)",
  //   },
  // }));
  // const HomeButton = () => (
  //   <StyledHomeButton component="button" to="/">
  //     Home
  //   </StyledHomeButton>
  // );

  const StyledMenuButton = styled(Button)(({ theme }) => ({
    //display: theme.menuPosition === "top" ? "flex" : "none",
    margin: 0,
    padding: 0,
    paddingTop: 2,

    display: "none",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: theme.zIndex.tooltip,
    "&:hover": {
      // boxShadow: theme.shadows[4],
      // backgroundColor: theme.palette.info.dark,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display: "block",
      left: 0,
    },
    [theme.breakpoints.down("sm")]: {},
  }));

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    // backgroundColor: theme.palette.grey[50],
    // maxWidth: 800,
    backgroundColor: "green",
    maxHeight: 100,
    whiteSpace: "nowrap",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    // [theme.breakpoints.up("md")]: {
    //   display: theme.menuPosition === "side" ? "none" : "block",
    // },
  }));

  return (
    <div>
      <SlideDrawer show={drawerOpen} />

      <StyledDiv>
        <StyledAppBar>
          <StyledToolbar title="menu">
            <StyledMenuButton
              variant="contained"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <MenuIcon fontSize="medium" />
            </StyledMenuButton>

            <StrapiPagesTop />
          </StyledToolbar>
        </StyledAppBar>
      </StyledDiv>
    </div>
  );
};

export default SiteTopBar;
