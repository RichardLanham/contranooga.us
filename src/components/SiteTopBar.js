import { useEffect, useState } from "react";
import { Toolbar, Button } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import StrapiPagesTop from "./StrapiPagesTop";
import { eventEmitter } from "../events.tsx";
import SlideDrawer from "./drawer/SlideDrawer.js";
import MenuIcon from "@mui/icons-material/Menu";

import HideOnScroll from "./HideOnScroll";

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

  const StyledMenuButton = styled(Button)(({ theme }) => ({
    //display: theme.menuPosition === "top" ? "flex" : "none",
    margin: 0,
    padding: 0,
    paddingTop: 2,
    display: "none",
    position: "absolute",
    right: 0,
    top: 0,
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
    [theme.breakpoints.down("sm")]: {},
  }));

  const StyledAppBar = styled("div")(({ theme }) => ({
    height: 60,

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

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    maxHeight: 100,

    // whiteSpace: "nowrap",
    flexWrap: "wrap",
    width: "100%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 10,
    [theme.breakpoints.up("md")]: {
      //   display: theme.menuPosition === "side" ? "none" : "block",
    },
  }));

  const StyledHeading = styled("div")(({ theme }) => ({
    ...theme.typography.h2,
    // display: "none",
    // fontSize: 42,
    // margin: "auto",
    position: "absolute",
    top: 50,
    // width: "calc(90% -1px)",
    // paddingLeft: 10,
    // paddingRight: 10,
    // marginTop: 40,
    // borderRadius: 5,
    // border: "2px solid",
    // borderColor: theme.palette.primary.main,
    // boxShadow: theme.shadows[10],
    // // whiteSpace: "wrap",
    // // justifyContent: "center",
    // backgroundColor: theme.palette.background.paper,
    // color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("lg")]: {
      ...theme.typography.h3,
      // top: 0,
      // marginTop: 60,
      // fontSize: 30,
      // left: 50,
    },
    [theme.breakpoints.down("md")]: {
      ...theme.typography.h4,
      // width: 300,
      // marginTop: 40,
      // fontSize: 20,
      // left: 8,
    },
    [theme.breakpoints.down("sm")]: {
      ...theme.typography.h5,
      // width: 300,
      // marginTop: 40,
      // fontSize: 20,
      // left: 8,
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

  return (
    <div>
      <SlideDrawer show={drawerOpen} />
      <HideOnScroll>
        <StyledAppBar>
          <CornerBurger />
          <StyledToolbar>
            <StyledHeading>
              {theme.global.metadata.metaDescription}
            </StyledHeading>
            <StrapiPagesTop position="top" />
          </StyledToolbar>
        </StyledAppBar>
      </HideOnScroll>
    </div>
  );
};

export default SiteTopBar;
