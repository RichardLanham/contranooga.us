import React, { useEffect } from "react";
import { AppBar, Box, MenuItem, Button, Typography, Card } from "@mui/material";

import { styled } from "@mui/material/styles";

import { useTheme } from "@mui/material/styles";

import {
  // getLuminance,
  rgbToHex,
  hexToRgb,
  darken,
  lighten,
  TextField,
} from "@mui/material";

import ReactPlayer from "react-player";
import { GET_THEME_BY_NAME } from "../gql/theme";

const ComponentStyles = () => {
  const secondaryRgb = hexToRgb(theme.palette.secondary.main);
  useEffect(() => {
    console.log(secondaryRgb);
  }, []);

  const theme = useTheme();
  return <div></div>;
};
const sidebar_bg = require("../assets/sidebar_bg2.jpg");

export const StyledSideBar = styled("div")(({ theme }) => ({
  zIndex: theme.zIndex.modal,
  display: theme.menuPosition === "side" ? "block" : "none",
  //display: "none",
  position: "fixed",
  width: "calc(15% - 2em)",
  minHeight: "calc(65% - 1em)",
  marginTop: 60,
  marginLeft: 20,
  // border: `3px solid ${theme.palette.primary.dark}`,
  boxShadow: theme.shadows[8],
  borderRadius: 15,
  // backgroundImage: `url(${sidebar_bg})`,
  // backgroundSize: "cover",
  // backgroudPosition: "center",
  //borderColor: "green",
  [theme.breakpoints.down("xl")]: {
    // borderColor: "yellow",
    width: "calc(18% - 2em)",
    marginLeft: "1em",
  },
  [theme.breakpoints.down("lg")]: {
    // width: "calc(50% - 1em)",
    // width: 190,
    // marginLeft: "2em",
    // width: "calc(21% - 1em)",
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    // display: "none",
  },
  [theme.breakpoints.down("sm")]: {},
}));

export const StyledTopBar = styled("div")(({ theme }) => ({
  display: theme.menuPosition === "side" ? "none" : "block",
  position: "fixed",
  width: "calc(15% - 2em)",
  minHeight: "calc(65% - 1em)",
  zIndex: theme.zIndex.tooltip,
  marginTop: 40,
  marginLeft: 20,
  // border: `3px solid ${theme.palette.primary.dark}`,
  boxShadow: theme.shadows[8],
  borderRadius: 15,
  backgroundSize: "cover",
  backgroudPosition: "center",

  //borderColor: "green",
  [theme.breakpoints.down("xl")]: {
    // borderColor: "yellow",
    // width: "calc(18% - 2em)",
    // marginLeft: "1em",
  },
  [theme.breakpoints.down("lg")]: {
    // width: "calc(50% - 1em)",
    // width: 190,
    // marginLeft: "2em",
    // width: "calc(21% - 1em)",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
  [theme.breakpoints.down("sm")]: {},
}));

export const StyledReactPlayerDiv = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.background.default,
  // border: `2px solid ${theme.palette.primary.main}`,
  width: "calc(45% - 1px)",
  margin: "auto",
  marginBottom: 20,
  marginTop: 20,
  backgroundColor: theme.palette.info.light,
  padding: 2,
  [theme.breakpoints.down("lg")]: {
    width: "calc(95% - 1px)",
  },
}));

// background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
//                   url("../../media/examples/lizard.png");

// background-image: url("../../media/examples/lizard.png"),
//                   url("../../media/examples/star.png");

export const StyledPage = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.background.default,
  opacity: 1,
  width: "calc(50% - 1rem)",
  margin: "auto",
  borderRadius: 10,
  //border: `1px solid ${theme.palette.primary.main}`,
  // minHeight: 200,
  [theme.breakpoints.down("lg")]: {
    width: "calc(60% - 1rem)",
  },
  [theme.breakpoints.down("md")]: {
    width: "calc(95% - 1rem)",
  },
}));
export const StyledHeading = styled("div")(({ theme }) => ({
  ...theme.typography.h4,
  //width: "calc(20% - 10px)",
  margin: "auto",
  textAlign: "center",
  // marginBottom: 10,
  // marginTop: 30,
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  opacity: 0.9,
  borderRadius: 5,
  boxShadow: theme.shadows[4],
  [theme.breakpoints.down("md")]: {
    width: "calc(80%)",
  },
}));
export const StyledPageContent = styled("div")(({ theme }) => ({
  ...theme.typography.h5,
  // color: theme.palette.primary.contrastText,
  //backgroundColor: theme.palette.primary.main,
  //backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  width: "80%",
  margin: "auto",
  // backgroundColor: theme.palette.info.light,
  // color: theme.palette.info.contrastLight,
  opacity: 1,
  borderRadius: 5,
  [theme.breakpoints.down("md")]: {
    width: "calc(85% - 1rem",
    // backgroundColor: "green",
  },
  [theme.breakpoints.down("md")]: {
    width: "95%",
  },
}));

export const StyledColorSections = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.grey[400],
  // width: "calc(40% - 10px)",
  width: 580,
  margin: "auto",
  marginBottom: 20,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  border: "2px solid black",
  borderColor: theme.palette.primary.dark,
  borderRadius: 5,
  boxShadow: theme.shadows[10],
  [theme.breakpoints.down("md")]: {
    // width: "80%",
    // backgroundColor: "green",
  },
  [theme.breakpoints.down("sm")]: {
    width: 380,
    // backgroundColor: "yellow",
  },
}));
/////// scraps
export const StyledRoot = styled("div")(({ theme }) => ({
  maxWidth: 1200,
  margin: "auto",
}));
// export const StyledCard = styled(Card)(({ theme }) => ({
//   position: "relative",
//   background: `linear-gradient(45deg, ${theme.palette.secondary.light} 30%, ${theme.palette.primary.light} 90%)`,
//   color: theme.palette.primary.contrastDark,
//   border: 0,
//   borderRadius: 3,
//   boxShadow: theme.shadows[4],
//   color: "white",
//   //height: 300,
//   width: "80%",
//   padding: 5,
//   margin: 8,
//   [theme.breakpoints.down("md")]: {
//     width: "90%",
//   },
// }));

export const StyledBody = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  padding: 3,
  width: "90%",
  margin: "auto",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  borderRadius: 5,
  boxShadow: theme.shadows[4],
}));

export const StyledFormContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  zIndex: theme.zIndex.modal,
  width: "100%",
  backgroundColor: theme.palette.grey[100],
}));

export const StyledImg = styled("img")(({ theme }) => ({
  boxShadow: theme.shadows[4],
  borderRadius: 5,
  margin: "auto",
  width: "100%",
  //  float: "left",
  // marginRight: 6,
  //  width: 360,
}));

export const StyledImgCaption = styled("img")(({ theme }) => ({
  boxShadow: theme.shadows[4],
  borderRadius: 5,
  margin: "auto",
  width: "100%",
  //  float: "left",
  // marginRight: 6,
  //  width: 360,
}));
