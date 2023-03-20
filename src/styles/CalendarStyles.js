import React from "react";
import { Box, MenuItem, Button, Typography, Card } from "@mui/material";

import { Calendar } from "react-big-calendar";

import { styled } from "@mui/material/styles";

import { useTheme } from "@mui/material/styles";

export const StyledEventList = styled("div")(({ theme }) => ({
  width: "100%",
}));

export const StyledCalendar = styled(Calendar)(({ theme }) => ({
  // ...theme.flexRows,
  // position: "relative",
  // gap: 0,
  width: "20%",
  marginBottom: 25,
  [theme.breakpoints.down("xl")]: {
    width: "30%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "40%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    // width: "100%",
  },
}));

export const StyledEventColumn = styled("div")(({ theme }) => ({
  padding: 2,
  margin: 0,
  border: "3px dotted red",
}));

export const StyledCard = styled("div")(({ theme }) => ({
  // width: "calc(90% - 1px)",
  position: "relative",
  // background: `linear-gradient(45deg, ${theme.palette.grey[100]}, ${theme.palette.grey[300]}, ${theme.palette.grey[500]})`,
  // border: `1px solid ${theme.palette.secondary.light}`,
  borderRadius: 10,
  boxShadow: theme.shadows[1],
  padding: 5,
  // margin: "auto",
  marginBottom: 20,
  marginTop: 20,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    // backgroundColor: "yellow",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const StyleEventButton = styled(Button)(({ theme }) => ({
  ...theme.typography.h6,
  textTransform: "unset",

  // ...theme.typography.body1,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,

  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastDark,
  },
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

export const StyledFormContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "80vw",
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
  [theme.breakpoints.down("md")]: {
    width: "95vw",
  },
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
