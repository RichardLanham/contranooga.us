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
  width: "50%",
  marginBottom: 25,
  [theme.breakpoints.down("xl")]: {
    // width: "30%",
  },
  [theme.breakpoints.down("lg")]: {
    // width: "40%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    // width: "100%",
  },
}));

export const StyledDateTime = styled("div")(({ theme }) => ({
  ...theme.typography.h6,
  padding: 1,
  margin: 0,
  borderRadius: 3,
  textTransform: "unset",
  // minHeight: 40,
  // marginBottom: 25,
  boxShadow: theme.shadows[1],
  // width: "fit-content",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    // whiteSpace: "wrap",
    // maxWidth: 200,
  },
  [theme.breakpoints.down("md")]: {
    ...theme.typography.body1,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: 120,
    ...theme.typography.body2,
  },
}));
export const StyledEventButton = styled(Button)(({ theme }) => ({
  ...theme.typography.h6,
  textTransform: "unset",
  // whiteSpace: "nowrap",
  cursor: "pointer",
  minHeight: 40,
  marginBottom: 25,
  boxShadow: theme.shadows[3],
  // width: "fit-content",
  cursor: "pointer",
  "&:hover": {
    border: "1px solid",
    borderColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[8],
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    // whiteSpace: "wrap",
    maxWidth: 200,
  },
  [theme.breakpoints.down("md")]: {
    ...theme.typography.body1,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: 120,
    ...theme.typography.body2,
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
