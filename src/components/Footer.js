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

  const StyledFooterBox = styled("div")(({ theme }) => ({
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  }));

  // const bgTop = require("../assets/bgimages/oldbg.png");

  const StyledLogo = styled("div")(({ theme }) => ({
    maxWidth: "10vw",
    border: "1px none red",
    marginTop: 10,
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
      // maxWidth: "40vw",
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
        // width: "100%",
        ...theme.flexRows,
        borderTop: "8px solid",
        borderColor: theme.palette.grey[400],
        padding: 10,
        marginTop: 0,
        marginBottom: 0,
        gap: 8,
      }}
    >
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
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 40,
                  border: "1px none",
                  borderColor: theme.palette.secondary.dark,
                  width: "90vw",
                }}
              >
                {column.links.map((link, key) => {
                  const linkThumb = getThumb(link?.image?.data?.attributes);
                  return (
                    <StyledFooterBox key={key}>
                      <div style={{ boxShadow: theme.shadows[1] }}>
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
                                    //float: "left",
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
                              //float: "left",
                              width: linkThumb.width,
                              height: "auto",
                              maxWidth: 100,
                              maxHeight: 100,
                            }}
                            src={process.env.REACT_APP_STRAPI + linkThumb.url}
                          />
                        </a>
                      )}
                    </StyledFooterBox>
                  );
                })}
              </div>
            );
          })}
          <StyledLogo>
            <img
              style={{ width: "100%", height: "auto", borderRadius: 500 }}
              src={process.env.REACT_APP_STRAPI + logoThumb.url}
            />
          </StyledLogo>
        </div>
      </div>
    </div>
  );
};

export default Footer;
