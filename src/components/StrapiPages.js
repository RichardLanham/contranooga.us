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
import CollapsedMenuItem from "./CollapsedMenuItem";

// import { eventEmitter } from "../events";

const pagePng = require("../assets/page.png");

const StrapiPages = (props) => {
  const location = useLocation();
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [pages, setPages] = useState([]);

  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(window.localStorage.getItem("strapi_user"));
  }, []);

  const ColorButton = () => (
    <ListItemButton
      to="/color"
      key="colorbutton"
      component={Link}
      style={{
        ...theme.typography.button,
        height: 40,
        borderRadius: 5,
        margin: 3,
        //boxShadow: theme.shadows[5],
        boxShadow:
          "inset 0.2em 0.2em 0.2em 0 rgba(255, 255, 255, 0.5), inset -0.2em -0.2em 0.2em 0 rgba(0, 0, 0, 0.5)",
        border: 0,
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
      color
    </ListItemButton>
  );

  // const { data, loading, error } = useQuery(GET_PAGES_SHORT);

  // useEffect(() => {
  //   if (!loading) {
  //     if (!error) {
  //       setPages([...data.pages.data]);
  //       theme.pages = data.pages.data;
  //       window.localStorage.setItem(
  //         "strapiPages",
  //         JSON.stringify(data.pages.data)
  //       );
  //     }
  //   }
  // }, [data, loading, error]);

  const anchorList = [];
  // window.localStorage.setItem("strapiPages", JSON.stringify(data.pages.data));
  // theme.p; //ages = data.pages.data;

  // theme.global.navbar.dropdown.map((page) => {
  //   if (anchorList.indexOf(page.attributes.MenuAnchor) < 0) {
  //     anchorList.push(page.attributes.MenuAnchor);
  //   }
  //   theme.menuAnchors = anchorList;
  // });

  // const menuAnchors = anchorList.filter(unique);

  // console.log(anchorList);

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

  const StyledList = styled(List)(({ theme }) => ({
    ...theme.typography.button,
    border: 0,
    "&:hover": {
      // boxShadow: theme.shadows[4],
      // backgroundColor: theme.palette.info.dark,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      // display: "none",
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
    <StyledList
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader
      //     style={{
      //       ...theme.typography.body1,
      //       backgroundColor: theme.palette.background.default,
      //       display: "inline", /// not showing
      //     }}
      //     component={Card}
      //     id="nested-list-subheader"
      //   >
      //     GRACE PAGES
      //   </ListSubheader>
      // }
    >
      {theme.global.navbar.links.map((drop, key) => {
        //console.log("Page.id " + page.id);
        // if (page.attributes.MenuAnchor === "None") {
        //   return <span key={page.id}></span>;
        // }
        const slug = drop.text;
        const to = drop.url;
        const show =
          slug.substr(0, 1) !== "/"
            ? slug.split("")[0].toUpperCase() + slug.substr(1, slug.length)
            : switchSlug(slug);
        return (
          <ListItemButton
            to={to}
            key={drop.id}
            button="true"
            component={Link}
            style={{
              ...theme.typography.button,
              height: 40,
              borderRadius: 5,
              margin: 3,
              // boxShadow: theme.shadows[5],
              boxShadow:
                "inset 0.2em 0.2em 0.2em 0 rgba(255, 255, 255, 0.5), inset -0.2em -0.2em 0.2em 0 rgba(0, 0, 0, 0.5)",
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
      {theme.global.navbar.dropdown.map((anch, key) => {
        return <CollapsedMenuItem key={key} subMenusPages={anch} anch={anch} />;
      })}
    </StyledList>
  );
};

export default StrapiPages;
