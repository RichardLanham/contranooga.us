import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import List from "@mui/material/List";
import { useTheme, styled } from "@mui/material/styles";
import CollapsedMenuItem from "./CollapsedMenuItem";
import ColorButton from "./ColorButton";
import MenuButton from "./MenuButton";
const StrapiPages = (props) => {
  const location = useLocation();
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [pages, setPages] = useState([]);
  const [user, setUser] = useState(false);

  useEffect(() => {
    theme.pages && setPages([theme.global.navbar.links]);
    setUser(window.localStorage.getItem("strapi_user"));
  }, []);

  const subMenusPages = theme.global.navbar.dropdown;

  const StyledList = styled(List)(({ theme }) => ({
    ...theme.typography.button,
    width: 500,
    margin: "auto",
    justifyContent: "center",
    height: 45,
    padding: 10,
    borderRadius: 5,
    display: theme.menuPosition === "top" ? "flex" : "none",
    flexDirection: "row",
    flexWrap: "nowrap",
    "&:hover": {
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
        const slug = page.text;
        const to = page.url; //slug.substr(0, 1) !== "/" ? "/page/" + slug : slug;
        const show = page.text;
        return <MenuButton page={page} key={key}></MenuButton>;
      })}
      {user ? <ColorButton /> : null}
      {theme.global.navbar.dropdown.map((dropdown, key) => {
        return (
          <CollapsedMenuItem
            hideOnRender={true}
            key={key}
            subMenusPages={dropdown}
          />
        );
      })}
    </StyledList>
  );
};

export default StrapiPages;
