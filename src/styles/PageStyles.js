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

const PageStyles = () => {
  const secondaryRgb = hexToRgb(theme.palette.secondary.main);
  useEffect(() => {
    console.log(secondaryRgb);
  }, []);

  const theme = useTheme();
  return <div></div>;
};

export const StyledSiteName = styled("div")(({ theme }) => ({
  ...theme.typography.h3,
  opacity: ".8",
  marginTop: 60,
  borderRadius: 5,
  padding: 3,
  // boxShadow: theme.shadows[2],
  [theme.breakpoints.down("lg")]: {
    // left: 50,
  },
  [theme.breakpoints.down("md")]: {
    ...theme.typography.h5,
  },
  [theme.breakpoints.down("sm")]: {
    left: 20,
  },
}));

export const StyledReactPlayerDiv = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.background.default,
  // border: `2px solid ${theme.palette.primary.main}`,
  width: 640,
  margin: "auto",
  marginBottom: 20,
  marginTop: 20,
  borderRadius: 5,
  backgroundColor: theme.palette.info.light,
  padding: 2,
  [theme.breakpoints.down("md")]: {
    width: 320,
  },
}));

export const StyledAppBar = styled(AppBar)(
  ({
    theme,
    secondaryRgb = hexToRgb(theme.palette.secondary.light).replace(
      ")",
      ",0.2)"
    ), // 0.0 not showing.
    primaryRgb = hexToRgb(theme.palette.primary.light).replace(")", ",0.4)"),
  }) => ({
    height: 60,
    marginBottom: 40,
    width: "100%",
    position: "fixed",
    top: 0,

    opacity: 1,
    // backgroundImage: `linear-gradient(${primaryRgb}, ${secondaryRgb}),url("/appbar2.png")`,
    [theme.breakpoints.down("md")]: {
      //backgroundColor: "yellow",
    },
  })
);

// background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
//                   url("../../media/examples/lizard.png");

// background-image: url("../../media/examples/lizard.png"),
//                   url("../../media/examples/star.png");

export const StyledPage = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.background.default,
  // backgroundColor: "yellow",
  position: "relative",
  width: "calc(70% - 1px)",
  margin: "auto",
  // marginTop: 45,
  borderRadius: 10,
  // paddingTop: 1,
  zIndex: 0,
  //border: `1px solid ${theme.palette.primary.main}`,
  minHeight: 1200, //"calc(100% - 1px)",
  [theme.breakpoints.down("xl")]: {
    width: "calc(65% - 1px)",
    // marginLeft: 20,
    // marginRight: 20,
  },
  [theme.breakpoints.down("lg")]: {
    width: "calc(85% - 1px)",
    // marginTop: 20,
    // marginLeft: 20,
    // marginRight: 20,
  },
  [theme.breakpoints.down("md")]: {
    width: "calc(95% - 1rem)",
    // marginTop: 85,
  },
}));

export const StyledPageSection = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.primary.light,
  width: "calc(95% - 1px)",
  marginRight: "auto",
  // marginTop: 20,
  // marginBottom: 20,
  // paddingTop: 10,
  borderRadius: 10,
  padding: 0,
  // border: `1px solid ${theme.palette.primary.main}`,
  // minHeight: 200,
  [theme.breakpoints.down("xl")]: {
    //width: "calc(80% - 1px)",
  },
  [theme.breakpoints.down("lg")]: {
    // width: "calc(80% - 1px)",
    width: "100%",
    // background: "green",
  },
  [theme.breakpoints.down("md")]: {
    // width: "calc(95% - 1rem)",
    marginRight: 0,
  },
}));

export const StyledHeader = styled("div")(({ theme }) => ({
  position: "fixed",
  zIndex: theme.zIndex.modal,
  textAlign: "center",
  height: 35,
  whiteSpace: "nowrap",
  width: "calc(70% - 1px)",
  // width: "100%",
  marginBottom: 0,
  // marginLeft: "calc(20% - 1px)",
  [theme.breakpoints.down("xl")]: {
    width: "calc(65% - 1px)",
    // marginLeft: 20,
    // marginRight: 20,
  },
  [theme.breakpoints.down("lg")]: {
    width: "calc(55% - 1px)",
    // marginLeft: 20,
    // marginRight: 20,
  },
  [theme.breakpoints.down("md")]: {
    width: "calc(95% - 1rem)",
  },
}));
export const StyledHeading = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  marginBottom: 5,
  margin: "auto",
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastLight,
  // opacity: 0.65,
  borderRadius: 5,
  boxShadow: theme.shadows[4],
  [theme.breakpoints.down("lg")]: {
    // width: "calc(85% - 1px)",
  },
}));
export const StyledSubHead = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: theme.palette.primary.contrastText,
  // backgroundColor: theme.palette.primary.main,
  //width: "calc(60% - 20px)",
  margin: "auto",
  marginBottom: 5,
  // backgroundColor: theme.palette.info.light,
  // color: theme.palette.info.contrastLight,
  boxShadow: theme.shadows[4],
  opacity: 1,
  borderRadius: 5,
  [theme.breakpoints.down("lg")]: {
    // width: "calc(85% - 10px)",
    // backgroundColor: "green",
  },
  [theme.breakpoints.down("sm")]: {
    // width: "calc(80% - 10px)",
  },
}));

export const StyledColorSections = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.grey[400],
  // width: "calc(40% - 10px)",
  width: 380,
  margin: "auto",
  marginBottom: 20,
  display: "flex",
  flexDirection: "row",
  border: "2px solid black",
  borderColor: theme.palette.primary.dark,
  borderRadius: 5,
  boxShadow: theme.shadows[10],
  [theme.breakpoints.down("md")]: {
    // width: "80%",
    // backgroundColor: "green",
  },
  [theme.breakpoints.down("sm")]: {
    //width: "95%",
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
//     width: "calc(95% - 1rem)",
//   },
// }));

export const StyledBody1 = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  width: "calc(95% - 1px)",
  textAlign: "left",
  padding: "5px 20px 10px 20px",
  margin: "auto",
  marginBottom: 10,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  borderRadius: 5,
  boxShadow: theme.shadows[4],
  [theme.breakpoints.down("lg")]: {
    width: "calc(95% - 2em)",
  },
}));

export const StyledBody2 = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "left",
  padding: "5px 20px 10px 20px",
  width: "90%",
  margin: "auto",
  marginBottom: 10,
  // backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  borderRadius: 5,
  boxShadow: theme.shadows[4],
}));

export const StyledColumns = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  display: "flex",
  flexDirection: "row",
  gap: 10,
  padding: 3,
  width: "100%",
  margin: "auto",
  marginBottom: 10,
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  borderRadius: 5,
  boxShadow: theme.shadows[4],
}));

export const StyledColumn = styled("div")(({ theme }) => ({
  display: "block",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

export const StyledFormContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  zIndex: theme.zIndex.modal,
  width: "100%",
  backgroundColor: theme.palette.grey[100],
}));

export const StyledImgGroup = styled("div")(({ theme }) => ({
  width: "calc(95% - 1px)",
  padding: "5px 20px 10px 20px",
  display: "flex",
  flexDirection: "column",
  gap: 2,
  textAlign: "center",
  borderRadius: 5,
  paddingBottom: 5,
  // width: "calc(80% - 10px)",
  //width: 320,
  margin: "auto",
  boxShadow: theme.shadows[4],
  backgroundColor: theme.palette.background.default,
  borderRadius: 5,
  [theme.breakpoints.down("lg")]: {
    //display: "block",
    width: "calc(95% - 2em)",
  },
}));

export const StyledImg = styled("img")(({ theme }) => ({
  maxWidth: 800,
  margin: "auto",
  [theme.breakpoints.down("lg")]: {
    maxWidth: 400,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: 300,
  },
}));

export const StyledImgCaption = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  width: "80%",
  backgroundColor: theme.palette.info.dark,
  color: theme.palette.info.contrastDark,
  boxShadow: theme.shadows[24],
  background: `linear-gradient(45deg, ${theme.palette.grey[100]}, ${theme.palette.grey[200]}, ${theme.palette.info.light})`,
  color: "#009",
  borderRadius: 5,
  margin: "auto",
  [theme.breakpoints.down("lg")]: {
    width: "16em",
  },
  [theme.breakpoints.down("md")]: {
    // maxWidth: 300,
  },
  //  float: "left",
  // marginRight: 6,
  //  width: 360,
}));
