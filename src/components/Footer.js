import React from "react";
import { Button, Toolbar } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

// import HideOnScroll from "./HideOnScroll";

import { getThumb } from "../apps/functions";
// import { Link } from "react-router-dom";
import {
  StyledPageSection,
  StyledPage,
  StyledHeading,
} from "../styles/PageStyles";
const Footer = () => {
  const theme = useTheme();

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

  const StyledFooter = styled("div")(({ theme }) => ({
    // width: "100%",
    // margin: "auto",
    // marginBottom: 150,
    // height: 180,
    // backgroundColor: "green",
    // overFlow: "hidden",
    // // width: "100%",
    // [theme.breakpoints.down("md")]: {
    //   //backgroundColor: "yellow",
    // },
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

  const StyledLogo = styled("div")(({ theme }) => ({
    maxWidth: "10vw",
    border: "1px none red",

    //marginTop: 10,
    // backgroundColor: theme.palette.primary.light,
    // borderRadius: 500,
    // width: "15%",
    // height: "auto",
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    [theme.breakpoints.down("xl")]: {
      //   display: theme.menuPosition === "side" ? "none" : "block",
      // width: theme.menuPosition === "side" ? "12vw" : "14vw",
      // width: "9vw",
      //   width: "14vw",
    },
    [theme.breakpoints.down("lg")]: {
      //   display: theme.menuPosition === "side" ? "none" : "block",
      // width: theme.menuPosition === "side" ? "12vw" : "14vw",
      // width: "9vw",
      //   width: "17vw",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "20vw",
      //   display: theme.menuPosition === "side" ? "none" : "block",
      // width: theme.menuPosition === "side" ? "8%" : "calc(15%)",
      // width: "15%",
      // width: "19vw",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40vw",
      //   display: theme.menuPosition === "side" ? "none" : "block",
      // width: theme.menuPosition === "side" ? "8%" : "calc(15%)",
      //   width: "20vw",
      //   bottom: 20,
      // width: "20vw",
    },
  }));

  const thumb = getThumb(theme?.global?.navbar?.logo?.data?.attributes);
  // {theme?.global?.footer.smallText}
  const columns = theme?.global?.footer?.columns || [];
  const logo = theme?.global?.footer?.logo?.data?.attributes;
  const logoThumb = getThumb(logo);
  //   console.log(logoThumb);
  return (
    <div
      name="Footer"
      style={{
        borderTop: "2px solid",
        borderColor: theme.palette.primary.dark,
        marginTop: 30,
        marginBottom: 50,
        display: "flex",
        gap: 8,
      }}
    >
      <StyledLogo>
        <img
          style={{ width: "100%", height: "auto", borderRadius: 500 }}
          src={process.env.REACT_APP_STRAPI + logoThumb.url}
        />
      </StyledLogo>

      <div>
        <div>
          <span
            name="FooterText"
            style={{ ...theme.typography.button, fontSize: "larger" }}
          >
            {theme?.global?.footer?.smallText}
          </span>
          {columns.map((column, key) => {
            return (
              <div
                key={key}
                name="FooterColumns"
                style={{ display: "flex", flexWrap: "wrap", gap: 20 }}
              >
                <div>{column.title}</div>
                {column.links.map((link, key) => {
                  const linkThumb = getThumb(link?.image?.data?.attributes);
                  return (
                    <div key={key}>
                      <div
                        style={{ maxWidth: 280, boxShadow: theme.shadows[1] }}
                      >
                        {link.text}
                      </div>
                      {link.type === "link" && (
                        <a
                          href={link.url}
                          target="_new"
                          name="FooterButton"
                          style={{
                            ...theme.typography.h5,
                            textDecoration: "none",
                            backgroundColor: theme.palette.background.default,
                            padding: 3,
                            borderRadius: 15,
                            borderBottom: 20,
                            //   border: "1px solid blue",
                          }}
                        >
                          {link.button_label}
                        </a>
                      )}
                      {link.type === "button" && (
                        <div>
                          {link.image.data ? (
                            <Button
                              startIcon={
                                <img
                                  title={link.button_label}
                                  style={{
                                    float: "left",
                                    width: linkThumb.width,
                                    height: "auto",
                                    maxWidth: 50,
                                    maxHeight: 100,
                                  }}
                                  src={
                                    process.env.REACT_APP_STRAPI + linkThumb.url
                                  }
                                />
                              }
                              href={link.url}
                              target="_new"
                              variant="contained"
                            >
                              {link.image ? "" : link.button_label}
                            </Button>
                          ) : (
                            <Button
                              href={link.url}
                              target="_new"
                              variant="contained"
                            >
                              {link.button_label}
                            </Button>
                          )}
                        </div>
                      )}
                      {link.type === "image" && (
                        <a target="_new" href={link.url}>
                          <img
                            title={link.button_label}
                            style={{
                              float: "left",
                              width: linkThumb.width,
                              height: "auto",
                              maxWidth: 100,
                              maxHeight: 100,
                            }}
                            src={process.env.REACT_APP_STRAPI + linkThumb.url}
                          />
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
