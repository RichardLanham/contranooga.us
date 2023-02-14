import React from "react";
import { Box, MenuItem, Button, Typography, Card } from "@mui/material";

import { Calendar } from "react-big-calendar";

import { styled } from "@mui/material/styles";

import { useTheme } from "@mui/material/styles";

const CalendarStyles = () => {
  const theme = useTheme();
  return <span></span>;
};

export const StyledRoot = styled("div")(({ theme }) => ({
  width: "calc(60% - 1rem)",
  margin: "auto",
  // // position: "relative",
  // top: 30,
  // backgroundColor: theme.palette.background.default,
  // opacity: 1.0,
  // [theme.breakpoints.down("xl")]: {},
  // [theme.breakpoints.down("lg")]: {
  //   width: "calc(80% - 1rem)",
  // },
  // [theme.breakpoints.down("md")]: {
  //   width: "90%",
  //   // margin: 0,
  // },
  // [theme.breakpoints.down("sm")]: {
  //   width: "100%",
  // },
}));

export const StyledEventList = styled(Box)(({ theme }) => ({
  width: "100%",
}));
export const StyledCalendar = styled(Calendar)(({ theme }) => ({
  width: "100%",
  marginBottom: 25,
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  width: "calc(90% - 1px)",
  position: "relative",
  background: `linear-gradient(45deg, ${theme.palette.grey[100]}, ${theme.palette.grey[300]}, ${theme.palette.grey[500]})`,
  border: `5px solid ${theme.palette.primary.dark}`,
  borderRadius: 10,
  boxShadow: theme.shadows[6],
  padding: 5,
  margin: "auto",
  marginBottom: 40,
  marginTop: 40,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    // backgroundColor: "yellow",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const StyleEventButton = styled("button")(({ theme }) => ({
  ...theme.typography.button,
  ...theme.typography.h6,
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  cursor: "pointer",
  "&:hover": { backgroundColor: theme.palette.primary.dark },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
export const StyledCardGroup = styled("div")(({ theme }) => ({
  float: "left",
  // display: "flex",
  // alignItems: "flex-start",
  flexWrap: "wrap",
  marginTop: 10,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const StyledImg = styled("img")(({ theme }) => ({
  boxShadow: theme.shadows[4],
  marginRight: 5,
  borderRadius: 5,
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const StyledBody = styled("div")(({ theme }) => ({
  ...theme.typography.h5,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  // padding: 3,
  width: "calc(80% - 1rem)",
  margin: "auto",
  borderRadius: 5,
  boxShadow: theme.shadows[4],
  [theme.breakpoints.down("md")]: {
    width: "calc(90% - 1px)",
  },
}));

export const StyledFormContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  width: 400,
  //minHeight: 300,
  border: `4px solid ${theme.palette.primary.dark}`,
  padding: 5,
  left: 0,
  top: 0,
  boxShadow: "0 6px 12px 0 rgba(9,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
  animationName: "rotate",
  // animationDuration: "0.4s",
  zIndex: theme.zIndex.modal,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export const StyledEventTypography = styled(Typography)(
  ({ theme, future }) => ({
    ...theme.typography.h6,
    margin: "auto",
    width: "calc(50% - 1rem)",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  })
);
export const StyledEventButton = styled("a")(({ theme }) => ({
  ...theme.typography.h6,
  color: theme.palette.info.contrastText,
  backgroundColor: theme.palette.info.main,

  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.info.contrastLight,
  },
  "&:visited": {
    color: "theme.palette.info.contrastText",
    backgroundColor: theme.palette.info.main,
  },
  "&:active": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastLight,
  },
  [theme.breakpoints.down("md")]: {},
}));
