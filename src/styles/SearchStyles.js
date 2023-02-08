import React from "react";
import { Box, MenuItem, Button, Typography, Card } from "@mui/material";

import { Calendar } from "react-big-calendar";

import { styled } from "@mui/material/styles";

import { useTheme } from "@mui/material/styles";

const SearchStyles = () => {
  const theme = useTheme();
  return <span></span>;
};

//export // xs: 0
// sm: 600
// md: 960
// lg: 1280
// xl: 1920
// Root
//    Calendar
//    EventList
//         Card, Card...

export const StyledRoot = styled("div")(({ theme }) => ({
  // display: "table",
  //width: 1400,
  width: "calc(60% - 1rem)",
  margin: "auto",
  marginTop: 30,
  backgroundColor: theme.palette.background.default,
  opacity: 0.9,
  // border: "1px solid red",
  //flexWrap: "wrap",
  // marginLeft: 30,
  // border: "1px solid black",
  //minidth: 1400,
  //width: 2400,
  [theme.breakpoints.down("xl")]: {
    //width: 1200,
  },
  [theme.breakpoints.down("lg")]: {
    // width: 700,
    width: "calc(50% - 1px)",
  },
  [theme.breakpoints.down("md")]: {
    // marginLeft: 10,
    width: "100%",
    margin: 0,
  },
  [theme.breakpoints.down("sm")]: {
    //width: "100%",
  },
}));

export const StyledSearchResult = styled("div")(({ theme }) => ({
  ...theme.typography.h5,
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.contrastText,
  border: 0,
  backgroundColor: theme.palette.primary.contrastText,
  margin: 10,
  display: "flex",
  gap: 10,
  width: "100%",
  //color: "green",
  // alignItems: "flex-start",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const StyledEventList = styled(Box)(({ theme }) => ({
  //display: "table-cell",
  width: "100%",

  //margin: "auto",
  //   [theme.breakpoints.down("xl")]: {},
  //   [theme.breakpoints.down("lg")]: {
  //  width:1200,
  //   },
  //   [theme.breakpoints.down("md")]: {
  //     width: 800
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     width:360,
  //   },
}));
export const StyledCalendar = styled(Calendar)(({ theme }) => ({
  //display: "table-cell",
  width: "100%",
  marginBottom: 25,

  // display: "block",
  // height: 500,
  // marginBottom: 40,

  // [theme.breakpoints.down("xl")]: {
  //   height: 500,
  // },
  // [theme.breakpoints.down("lg")]: {
  //   height: 450,
  //   width: "40%",
  //   //minWidth: 400,
  //   //width: "40%",
  // },
  // [theme.breakpoints.down("md")]: {
  //   width: "95%",
  //   //minWidth: 300,
  // },
  // [theme.breakpoints.down("sm")]: {},
  // [theme.breakpoints.up("xs")]: {},
}));

// [theme.breakpoints.down("xl")]: {
//   height: 500,
// },
// [theme.breakpoints.down("lg")]: {
//   height: 350,
// },
// [theme.breakpoints.down("md")]: {
//   //display: "none",
// },
// [theme.breakpoints.down("sm")]: {},
export const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  position: "relative",
  // background: `linear-gradient(45deg, ${theme.palette.secondary.light} 30%, ${theme.palette.primary.light} 70%)`,
  // color: theme.palette.primary.contrastLight,
  // opacity: 0.8,
  // border: 0,
  // borderRadius: 5,
  // boxShadow: theme.shadows[6],
  padding: 5,
  margin: 2,
  marginBottom: 50,
  //width: "100%",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    // flexBasis: "95%",
    // backgroundColor: "yellow",
    //  width: "90%",
    //    background: "inherit",
  },
  [theme.breakpoints.down("md")]: {
    //width: "100%",
    margin: 0,
    padding: 0,
  },
  [theme.breakpoints.down("sm")]: {},
}));

export const StyledCardGroup = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  marginTop: 10,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    // flexDirection: "column",
  },
}));

export const StyledImg = styled("img")(({ theme }) => ({
  // objectFit: "cover",
  //objectPosition: "0 0 0 0",
  boxShadow: theme.shadows[4],
  //width: "100%",
  // float: "left",
  marginRight: 5,
  borderRadius: 20,
  //maxHeight: 200,
  [theme.breakpoints.down("md")]: {
    //width: 100,
  },
  [theme.breakpoints.down("sm")]: {
    // height: 150,
    // objectFit: "scale-down",
  },
}));

export const StyledBody = styled(Typography)(({ theme }) => ({
  padding: 3,
  //width: 500,
  width: "calc(80% - 1rem)",
  margin: "auto",
  backgroundColor: theme.palette.info.light,
  color: theme.palette.info.contrastLight,
  borderRadius: 10,
  boxShadow: theme.shadows[4],
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const StyledFormContainer = styled(Typography)(({ theme }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  zIndex: theme.zIndex.modal,
  backgroundColor: theme.palette.info.light,
  color: theme.palette.info.contrastText,
}));
