// import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
const MenuButton = (props) => {
  const page = props.page;
  const location = useLocation();
  const theme = useTheme();
  return (
    <Button
      to={page.url}
      //key={props.key}
      title={page.description}
      button="true"
      component={Link}
      style={{
        ...theme.typography.h5,
        textTransform: "none",
        height: 30,
        borderRadius: 5,
        margin: 3,
        width: "calc(80%)",
        maxWidth: 150,
        boxShadow: theme.shadows[10],
        boxShadow:
          "inset 0.2em 0.2em 0.2em 0 rgba(255, 255, 255, 0.5), inset -0.2em -0.2em 0.2em 0 rgba(0, 0, 0, 0.5)",
        border: 0,
        backgroundColor:
          location.pathname === page.url
            ? theme.palette.primary.light
            : theme.palette.background.default,
        color:
          location.pathname === page.url
            ? theme.palette.primary.contrastLight
            : theme.palette.text.primary,
        // backgroundColor: "yellow",
      }}
    >
      {page.text}
    </Button>
  );
};

export default MenuButton;
