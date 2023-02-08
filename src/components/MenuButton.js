import React from "react";
import { Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
const MenuButton = (props) => {
  const location = useLocation();
  const theme = useTheme();
  return (
    <Button
      component={Link}
      to={props.page}
      style={{
        marginLeft: 3,
        marginRight: 3,
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText,
        border: location.pathname === props.page ? "2px solid" : 0,
        borderColor: theme.palette.secondary.dark,
      }}
    >
      <Typography>{props.children}</Typography>
    </Button>
  );
};

export default MenuButton;
