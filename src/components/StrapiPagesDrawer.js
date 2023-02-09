import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import List from "@mui/material/List";
import { Button } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import CollapsedMenuItem from "./CollapsedMenuItem";
import MenuButton from "./MenuButton";
import ColorButton from "./ColorButton";

const StrapiPagesDrawer = (props) => {
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
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  }));

  const StyledList = styled(List)(({ theme }) => ({
    ...theme.typography.button,
    width: "100%",
    maxWidth: 360,
    display: "flex",
    flexDirection: "column",
    padding: 0,
    margin: 0,
    border: 0,
    "&:hover": {
      // boxShadow: theme.shadows[4],
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      // display: "none",
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
        return <CollapsedMenuItem key={key} subMenusPages={anch} anch={anch} />;
      })}
    </StyledList>
  );
};

export default StrapiPagesDrawer;
