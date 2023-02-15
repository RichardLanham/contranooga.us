import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import List from "@mui/material/List";
import { Button } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import CollapsedMenuItem from "./CollapsedMenuItem";
import MenuButton from "./MenuButton";
import ColorButton from "./ColorButton";

const StrapiPages = (props) => {
  const position = props.position;
  const location = useLocation();
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [pages, setPages] = useState([]);
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(window.localStorage.getItem("strapi_user"));
  }, []);

  const StyledButton = styled(Button)(({ theme }) => ({
    display: "none",
    ...theme.typography.button,
    border: 0,
    "&:hover": {
      boxShadow: theme.shadows[4],
      // backgroundColor: theme.palette.info.dark,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  }));

  const topStyle = {
    maxWidth: 300,
    margin: "auto",
    justifyContent: "center",
    height: 45,
    padding: 10,
    borderRadius: 5,
    display: theme.menuPosition === "top" ? "flex" : "none",
    flexDirection: "row",
    flexWrap: "nowrap",
  };

  theme.topStyle = { border: 0 };

  // if (position === "top") {
  theme.topStyle = topStyle;
  // }

  const StyledList = styled(List)(({ theme }) => ({
    ...theme.typography.button,
    ...theme.topStyle,
    border: 0,
    "&:hover": {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      display: position === "side" ? "none" : "block",
    },
    [theme.breakpoints.up("lg")]: {
      display: position === "top" ? "none" : "block",
    },
    [theme.breakpoints.down("md")]: {
      display: position === "top" ? "none" : "block",
    },
    [theme.breakpoints.down("sm")]: {},
  }));

  return (
    <StyledList component="nav" aria-labelledby="nested-list-subheader">
      {theme.global.navbar.links.map((page, key) => {
        return <MenuButton page={page} key={key}></MenuButton>;
      })}
      {user ? <ColorButton /> : null}
      {theme.global.navbar.dropdown.map((anch, key) => {
        return (
          <CollapsedMenuItem
            hideOnRender={position === "top" ? true : false}
            key={key}
            subMenusPages={anch}
            anch={anch}
          />
        );
      })}
    </StyledList>
  );
};

export default StrapiPages;
