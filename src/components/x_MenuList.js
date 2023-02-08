// import React from "react";

import { useTheme, styled } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
const MenuList = (props) => {
  const theme = useTheme();
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
    flexWrap: "wrap",
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

export default MenuList;
