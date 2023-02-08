import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import { Card, Button } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import { GET_PAGES_SHORT } from "../gql/site";
import CollapsedTopMenuItem from "./CollapsedTopMenuItem";

import PaletteIcon from "@mui/icons-material/Palette";

// import { eventEmitter } from "../events";

const pagePng = require("../assets/page.png");
const StrapiPages = (props) => {
  const location = useLocation();
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [pages, setPages] = useState([]);
  // const { data, loading, error } = useQuery(GET_PAGES_SHORT);

  const [user, setUser] = useState(false);

  useEffect(() => {
    theme.pages && setPages([theme.global.navbar.links]);
    setUser(window.localStorage.getItem("strapi_user"));
  }, []);

  const anchorList = theme.menuAnchors || [];
  // window.localStorage.setItem("strapiPages", JSON.stringify(data.pages.data));
  // theme.p; //ages = data.pages.data;
  const subMenusPages = theme.global.navbar.dropdown;

  // const StyledButton = styled(Button)(({ theme }) => ({
  //   ...theme.typography.button,
  //   border: 0,
  //   "&:hover": {
  //     boxShadow: theme.shadows[4],
  //     // backgroundColor: theme.palette.info.dark,
  //   },
  //   [theme.breakpoints.down("xl")]: {},
  //   [theme.breakpoints.down("lg")]: {},
  //   [theme.breakpoints.down("md")]: {},
  //   [theme.breakpoints.down("sm")]: {},
  // }));

  const ColorButton = () => (
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

  const StyledList = styled(List)(({ theme }) => ({
    ...theme.typography.button,
    width: 500,
    margin: "auto",
    justifyContent: "center",
    height: 45,
    padding: 10,
    // backgroundColor: theme.palette.primary.main,
    borderRadius: 5,
    // backgroundColor: "green",
    //maxWidth: 360,
    // backgroundColor: "yellow",
    display: theme.menuPosition === "top" ? "flex" : "none",
    flexDirection: "row",
    flexWrap: "nowrap",
    "&:hover": {
      // boxShadow: theme.shadows[4],
      // backgroundColor: theme.palette.info.dark,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      display: "flex",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {},
  }));

  const switchSlug = (slug) => {
    switch (slug) {
      case "/cal":
        return "Events";
    }
  };
  return (
    <StyledList component="nav" aria-labelledby="nested-list-subheader">
      {theme.global.navbar.links.map((page, key) => {
        //console.log("Page.id " + page.id);
        // if (page.attributes.MenuAnchor === "None") {
        //   return <span key={page.id}></span>;
        // }
        const slug = page.text;
        const to = page.url; //slug.substr(0, 1) !== "/" ? "/page/" + slug : slug;
        const show = page.text;
        return (
          <ListItemButton
            to={page.url}
            component={Link}
            key={key}
            style={{
              ...theme.typography.button,
              height: 40,
              boxShadow:
                "inset 0.2em 0.2em 0.2em 0 rgba(255, 255, 255, 0.5), inset -0.2em -0.2em 0.2em 0 rgba(0, 0, 0, 0.5)",
              maxWidth: 100,
              minWidth: 50,
              borderRadius: 5,
              margin: 3,
              border: 0,
              backgroundColor:
                location.pathname === to
                  ? theme.palette.primary.light
                  : theme.palette.background.default,
              color:
                location.pathname === to
                  ? theme.palette.primary.contrastLight
                  : theme.palette.text.primary,
              // backgroundColor: "yellow",
            }}
          >
            {show}
          </ListItemButton>
        );
      })}
      {user ? <ColorButton /> : null}
      {theme.global.navbar.dropdown.map((dropdown, key) => {
        return <CollapsedTopMenuItem key={key} subMenusPages={dropdown} />;
      })}
    </StyledList>
  );
};

export default StrapiPages;
