import { useEffect, useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SiteTopBar from "./components/SiteTopBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { eventEmitter } from "./events";
import { Button, IconButton } from "@mui/material";
import StrapiPages from "./components/StrapiPages";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { StyledSideBar } from "./styles/ComponentStyles";
// import { StyledTopBar } from "./styles/ComponentStyles";
import Banners from "./components/Banners";
import Login from "./components/Login";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const Site = (props) => {
  // console.log("SITE");
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
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
      // clearInterval(bgInterval);
    };
  }, []);

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
    // design time usage only
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

  const StyledSiteDiv = styled("div")(({ theme }) => ({
    // backgroundColor: theme.palette.grey[200],
    // [theme.breakpoints.down("xl")]: {},
    // [theme.breakpoints.down("lg")]: {},
    // [theme.breakpoints.down("md")]: {},
    // [theme.breakpoints.down("sm")]: {},
  }));

  const StyledHeading = styled("div")(({ theme }) => ({
    fontSize: 42,
    margin: "auto",
    position: "absolute",
    top: 0,
    width: "calc(90% -1px)",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 40,
    borderRadius: 5,
    border: "2px solid",
    borderColor: theme.palette.primary.main,
    boxShadow: theme.shadows[10],
    // whiteSpace: "wrap",
    // justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    // color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("lg")]: {
      // top: 0,
      fontSize: 30,
      left: 50,
    },
    [theme.breakpoints.down("md")]: {
      // width: 300,

      left: 8,
    },
  }));

  return (
    <HelmetProvider title={title}>
      <Helmet prioritizeSeoTags>
        <meta charSet="utf-8" />
        {<title>{theme.global.metadata.metaDescription}</title>}
        <meta
          name="description"
          content={theme.global.metadata.metaDescription}
        />
        {<meta name="theme-color" content={theme.palette.primary.main} />}
        <link rel="canonical" href="http://contranooga.us/" />
      </Helmet>
      <StyledSiteDiv>
        {user && (
          <div
            style={{
              backgroundColor: theme.palette.background.default,
              color: "#000",
              position: "fixed",
              bottom: 2,
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

          <IconButton
            onClick={scrollToTop}
            style={{
              backgroundColor: theme.palette.background.default,
              borderRadius: 5,
              // width: "1.7em",
              // height: "1.7em",
              position: "fixed",
              bottom: 5,
              left: 5,
              zIndex: theme.zIndex.modal,
              display: upvisible ? "inline" : "none",
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
          <Banners />

          {props.children}
        </div>
      </StyledSiteDiv>
    </HelmetProvider>
  );
};

export default Site;
