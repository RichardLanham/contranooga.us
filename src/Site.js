import { useEffect, useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SiteTopBar from "./components/SiteTopBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { eventEmitter } from "./events";
import { IconButton } from "@mui/material";
import StrapiPages from "./components/StrapiPages";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledSideBar } from "./styles/ComponentStyles";
import Banners from "./components/Banners";
import Login from "./components/Login";

import Footer from "./components/Footer";

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}

const Site = (props) => {
  const theme = useTheme();
  const title = props.title;
  const description = props.description;
  const refresh = useForceUpdate();
  const [user, setuser] = useState(false);

  const [upvisible, setUpvisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setUpvisible(true);
    } else if (scrolled <= 300) {
      setUpvisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setuser(window.localStorage.getItem("strapi_user"));
    eventEmitter.subscribe("REFRESH", () => {
      console.log("REFRESH at Site");
      refresh();
    });
    return () => {
      eventEmitter.unsubscribe("REFRESH");
    };
  }, []);

  function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
      keys.reduce((output, key) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = useMediaQuery(theme.breakpoints.up(key));
        return !output && matches ? key : output;
      }, null) || "xs"
    );
  }

  const width = useWidth();

  if (!theme.global) return null;

  const StyledSiteDiv = styled("div")(({ theme }) => ({}));

  const bgImage = require("./assets/bgimages/collage_float_left1.png");
  const StyledFloatImg = styled("div")(({ theme }) => ({
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    zIndex: 0,
    position: "fixed",
    top: 0,
    left: 0,
    width: "14vw",
    borderRadius: 15,
    height: 1000,

    [theme.breakpoints.down("lg")]: {
      width: "5vw",
      opacity: ".35",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  }));

  return (
    <HelmetProvider title={title}>
      <CssBaseline />
      <Helmet prioritizeSeoTags>
        <meta charSet="utf-8" />
        {<title>{theme.global.metadata.metaDescription}</title>}
        <meta
          name="description"
          content={theme.global.metadata.metaDescription}
        />
        {<meta name="theme-color" content={theme.palette.primary.main} />}
        <link rel="canonical" href="https://contranooga.us/" />
      </Helmet>
      {/* <StyledSiteName>{theme.global.metadata.metaDescription}</StyledSiteName> */}

      <StyledSiteDiv>
        {user && (
          <div
            style={{
              backgroundColor: theme.palette.background.default,
              color: "#000",
              position: "fixed",
              bottom: 42,
              right: 10,
              padding: 5,
              zIndex: theme.zIndex.modal,
            }}
          >
            {width}
          </div>
        )}

        <SiteTopBar key="cdtstopbar" />
        <StyledSideBar>
          <StrapiPages position="side" />
        </StyledSideBar>
        <div style={{ position: "relative" }}>
          <Login />

          <Banners />

          {props.children}
        </div>
        <Footer />
      </StyledSiteDiv>
    </HelmetProvider>
  );
};

export default Site;
