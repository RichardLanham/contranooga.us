import { useEffect, useState } from "react";
import { Toolbar, Button } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import StrapiPagesTop from "./StrapiPagesTop";
import { eventEmitter } from "../events.tsx";
import SlideDrawer from "./drawer/SlideDrawer.js";
import MenuIcon from "@mui/icons-material/Menu";

import HideOnScroll from "./HideOnScroll";

import { getThumb } from "../apps/functions";
import { Link } from "react-router-dom";

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
    bottom: 0,
    zIndex: theme.zIndex.tooltip,
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
      bottom: 30,
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
    [theme.breakpoints.down("md")]: {
      //backgroundColor: "yellow",
    },
  }));

  const bgTop = require("../assets/bgimages/oldbg.png");

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    height: 180,
    backgroundImage: `url(${bgTop})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // whiteSpace: "nowrap",
    flexWrap: "wrap",
    width: "100%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 10,
    [theme.breakpoints.down("md")]: {
      backgroundSize: "100% 18vh",
      height: 120,
    },
    [theme.breakpoints.down("sm")]: {
      //   display: theme.menuPosition === "side" ? "none" : "block",
      backgroundSize: "100% 8vh",
      // height: 120,
    },
  }));

  const StyledLogo = styled("img")(({ theme }) => ({
    //marginTop: 10,
    backgroundColor: theme.palette.primary.light,
    borderRadius: 500,
    width: "18vw",
    position: "absolute",
    bottom: 0,
    left: 0,

    [theme.breakpoints.up("lg")]: {
      //   display: theme.menuPosition === "side" ? "none" : "block",
      // width: theme.menuPosition === "side" ? "12vw" : "14vw",
      width: "12vw",
    },
    [theme.breakpoints.down("lg")]: {
      //   display: theme.menuPosition === "side" ? "none" : "block",
      // width: theme.menuPosition === "side" ? "8%" : "calc(15%)",
      // width: "12%",
    },
    [theme.breakpoints.down("md")]: {
      //   display: theme.menuPosition === "side" ? "none" : "block",
      // width: theme.menuPosition === "side" ? "8%" : "calc(15%)",
      // width: "15%",
    },
    [theme.breakpoints.down("sm")]: {
      //   display: theme.menuPosition === "side" ? "none" : "block",
      // width: theme.menuPosition === "side" ? "8%" : "calc(15%)",
      bottom: 20,
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
  // console.log(thumb);
  return (
    <div>
      <SlideDrawer show={drawerOpen} />
      <HideOnScroll>
        <StyledAppBar>
          <StyledToolbar>
            <CornerBurger />
            <Link to="/" style={{ zIndex: 3000 }}>
              <StyledLogo src={process.env.REACT_APP_STRAPI + thumb.url} />
            </Link>
            <StrapiPagesTop position="top" />
          </StyledToolbar>
        </StyledAppBar>
      </HideOnScroll>
    </div>
  );
};

export default SiteTopBar;
