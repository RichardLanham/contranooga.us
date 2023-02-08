import React from "react";
import { Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
const MenuLittleButton = (props) => {
  const location = useLocation();
  const theme = useTheme();
  return (
    <Button
      component={Link}
      to={props.page}
      style={{
        textTransform: "lowercase",
        marginLeft: 3,
        marginRight: 3,
        padding: 0,
        backgroundColor: theme.palette.info.light,
        color: theme.palette.info.contrastText,
        border: location.pathname === props.page ? "2px solid" : 0,
        borderColor: theme.palette.info.dark,
      }}
    >
      <Typography>{props.children}</Typography>
    </Button>
  );
};

export default MenuLittleButton;
