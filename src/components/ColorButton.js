// import React from 'react';
import PaletteIcon from "@mui/icons-material/Palette";
import ListItemButton from "@mui/material/ListItemButton";
import { Link, useLocation } from "react-router-dom";
import { useTheme, styled } from "@mui/material/styles";
const ColorButton = () => {
  const theme = useTheme();
  const location = useLocation();
  return (
    <ListItemButton
      to="/color"
      key="colorbutton"
      component={Link}
      style={{
        boxShadow:
          "inset 0.2em 0.2em 0.2em 0 rgba(255, 255, 255, 0.5), inset -0.2em -0.2em 0.2em 0 rgba(0, 0, 0, 0.5)",
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.info.main})`,
        height: 40,
        maxWidth: 55,
        borderRadius: 5,
        marginRight: 12,
        border: 0,
        // padding: 0,
        margin: 0,
        marginRight: 5,
        backgroundColor:
          location.pathname === "/color"
            ? theme.palette.primary.light
            : theme.palette.background.default,
        color:
          location.pathname === "/color"
            ? theme.palette.primary.contrastLight
            : theme.palette.text.primary,
        // backgroundColor: "yellow",
      }}
    >
      <PaletteIcon />
    </ListItemButton>
  );
};

export default ColorButton;
