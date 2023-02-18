import { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { eventEmitter } from "../events";

const pagePng = require("../assets/page.png");
const CollapsedMenuItem = ({ subMenusPages, hideOnRender }) => {
  const anch = subMenusPages.text;
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    eventEmitter.dispatch("TOGGLE_DRAWER");
  };

  useEffect(() => {
    //   console.log(subMenusPages);
    eventEmitter.subscribe("EXPAND", (data) => {
      if (!data.open) {
        return false;
      }
      if (data.anch === anch) {
        return false;
      }
      setOpen(false);
    });
    const exists = subMenusPages.Link.findIndex(
      (page) => page.slug === location.pathname.replace("/page/", "")
    );
    setOpen(exists > -1 && !hideOnRender);
    return () => {
      // setOpen(false);
      eventEmitter.unsubscribe("EXPAND");
    };
  }, []);
  function handleClick() {
    setOpen(!open);
    const data = { open: !open, anch: anch };
    eventEmitter.dispatch("EXPAND", data);
  }

  const StyledButton = styled(Button)(({ theme }) => ({
    ...theme.typography.button,
    border: 0,
    margin: 2,
    "&:hover": {
      boxShadow: theme.shadows[4],
      // backgroundColor: theme.palette.info.dark,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  }));

  const StyledMenuDiv = styled("div")(({ theme }) => ({
    display: "flex",

    flexDirection: theme.menuPosition === "top" ? "row" : "column",
    flexWrap: "wrap",
    "&:hover": {
      boxShadow: theme.shadows[4],
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  }));

  return (
    <div>
      <ListItem
        onClick={handleClick}
        style={{
          backgroundColor: theme.palette.background.default,

          margin: "1px 5px 6px 2px",
          borderRadius: 5,
          boxShadow:
            "inset 0.2em 0.2em 0.2em 0 rgba(255, 255, 255, 0.5), inset -0.2em -0.2em 0.2em 0 rgba(0, 0, 0, 0.5)",
        }}
      >
        <ListItemText
          primary={anch}
          style={{
            padding: 0,
            margin: 0,
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <StyledMenuDiv>
          {subMenusPages.Link.map((page, key) => {
            return (
              <StyledButton
                key={key}
                style={{
                  marginRight: "auto",
                  backgroundColor:
                    location.pathname === "/page/" + page.slug
                      ? theme.palette.primary.light
                      : theme.palette.background.default,
                  color:
                    location.pathname === "/page/" + page.slug
                      ? theme.palette.primary.contrastLight
                      : theme.palette.text.primary,
                }}
                component={Link}
                to={"/page/" + page.slug}
                onClick={() => toggleDrawer()}
              >
                {page.text}
              </StyledButton>
            );
          })}
        </StyledMenuDiv>
      </Collapse>
    </div>
  );
};

export default CollapsedMenuItem;
