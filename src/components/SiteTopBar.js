import { useEffect, useState } from "react";
import { Toolbar, Button, ClickAwayListener } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import StrapiPagesTop from "./StrapiPagesTop";
import { eventEmitter } from "../events.tsx";
import SlideDrawer from "./drawer/SlideDrawer.js";
import MenuIcon from "@mui/icons-material/Menu";

import HideOnScroll from "./HideOnScroll";

import { getThumb } from "../apps/functions";
import { Link } from "react-router-dom";

import { StyledSiteNameNew } from "../styles/PageStyles";

const SiteTopBar = ({ force }) => {
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
      eventEmitter.unsubscribe("TOGGLE_DRAWER");
    };
  }, []);

  const StyledMenuButton = styled(Button)(({ theme }) => ({
    //display: theme.menuPosition === "top" ? "flex" : "none",
    margin: 0,
    padding: 0,
    // paddingTop: 2,
    display: "none",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: theme.zIndex.tooltip + 100,
    "&:hover": {
      // backgroundColor: theme.palette.info.dark,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display: "block",
      // right:0,
    },
    [theme.breakpoints.down("sm")]: {
      // bottom: 30,
      // top: 0,
      // bottom: "unset",
      // border: "1px solid green",
    },
  }));

  const StyledAppBar = styled("div")(({ theme }) => ({
    height: 180,

    marginBottom: 20,
    marginTop: 0,
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: theme.zIndex.tooltip,

    opacity: 1,
    [theme.breakpoints.down("sm")]: {
      height: 60,
      //backgroundColor: "yellow",
    },
  }));

  const bgTop = require("../assets/bgimages/oldbg.webp");

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    height: 280,
    backgroundImage: `url(${bgTop})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    margin: "auto",

    // justifyContent: "bottom",
    // alignItems: "baseline",
    //marginTop: 10,
    [theme.breakpoints.down("md")]: {
      backgroundSize: "100% 60px",
      height: 10,
    },
    [theme.breakpoints.down("sm")]: {
      //   display: theme.menuPosition === "side" ? "none" : "block",
      // backgroundSize: "100% 60px",
      height: 60,
    },
  }));

  const StyledLogo = styled("img")(({ theme }) => ({
    //marginTop: 10,
    backgroundColor: theme.palette.primary.light,
    borderRadius: 500,
    width: "8vw",
    height: "auto",
    position: "absolute",
    top: 20,
    left: 20,

    [theme.breakpoints.down("xl")]: {
      //   display: theme.menuPosition === "side" ? "none" : "block",
      // width: theme.menuPosition === "side" ? "12vw" : "14vw",
      // width: "9vw",
      width: "9vw",
      // top: 20,
      // left: 20,
    },
    [theme.breakpoints.down("lg")]: {
      //   display: theme.menuPosition === "side" ? "none" : "block",
      // width: theme.menuPosition === "side" ? "12vw" : "14vw",
      // width: "9vw",
      width: "12vw",
      top: 25,
      left: 15,
    },
    [theme.breakpoints.down("md")]: {
      //   display: theme.menuPosition === "side" ? "none" : "block",
      // width: theme.menuPosition === "side" ? "8%" : "calc(15%)",
      // width: "15%",
      // width: "19vw",
      width: 60,
      top: 0,
      left: 0,
    },
    [theme.breakpoints.down("sm")]: {
      //   display: theme.menuPosition === "side" ? "none" : "block",
      // width: theme.menuPosition === "side" ? "8%" : "calc(15%)",
      // width: 60,
      // top: 0,
      // left: 0,
      // width: "20vw",
    },
  }));

  const CornerBurger = () => {
    return (
      <StyledMenuButton
        variant="contained"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <MenuIcon fontSize="medium" />
      </StyledMenuButton>
    );
  };
  const thumb = getThumb(theme?.global?.navbar?.logo?.data?.attributes);
  // theme.global.navbar.logo.data.attributes
  // console.log(theme?.global?.navbar?.logo?.data);
  return (
    <div>
      <SlideDrawer setDrawerOpen={setDrawerOpen} show={drawerOpen} />
      <HideOnScroll>
        <StyledAppBar>
          <CornerBurger />
          <StyledToolbar onClick={() => setDrawerOpen(false)}>
            <div style={{ paddingLeft: "10vw" }}>
              <Link to="/" style={{ zIndex: 3000 }}>
                <StyledLogo src={process.env.REACT_APP_STRAPI + thumb.url} />
              </Link>
              <StrapiPagesTop position="top" />
            </div>

            <StyledSiteNameNew>
              Chattanooga Traditional Dance Society
            </StyledSiteNameNew>
          </StyledToolbar>
        </StyledAppBar>
      </HideOnScroll>
    </div>
  );
};

export default SiteTopBar;
