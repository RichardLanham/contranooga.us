import { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import DraftsIcon from "@mui/icons-material/Drafts";
// import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// import Article from "@mui/icons-material/ArticleRounded";
// import { LibraryBooks, People } from "@mui/icons-material";

import { eventEmitter } from "../events";

const graceIco = require("../assets/grace2.ico");

const pagePng = require("../assets/page.png");

const CollapsedMenuItem = ({ subMenusPages }) => {
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
    setOpen(exists > -1);
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
  // let icon = () => {
  //   return <LibraryBooks />;
  // };
  // switch (anch) {
  //   case "Members":
  //     icon = <People />;
  //     break;
  //   case "Worship":
  //     icon = (
  //       <img
  //         title="Grace ico Episcopal flag"
  //         src={graceIco}
  //         style={{ width: 28 }}
  //       />
  //     );
  //     break;
  //   default:
  //     icon = <LibraryBooks />;
  // }

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
          // width: "95%",
          // backgroundColor: "green",
        }}
      >
        <ListItemText
          primary={anch}
          style={{
            // backgroundColor: theme.palette.info.light,
            // color: theme.palette.info.contrastText,
            // height: 10,
            // width: 300,
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
                  // marginLeft: 25,
                  //padding: 1,
                  //margin: 0,
                  marginLeft: "auto",
                  backgroundColor:
                    location.pathname === "/page/" + page.slug
                      ? theme.palette.primary.light
                      : theme.palette.background.default,
                  color:
                    location.pathname === "/page/" + page.slug
                      ? theme.palette.primary.contrastLight
                      : theme.palette.text.primary,
                  // border: `1px solid black`,
                  // backgroundColor: theme.palette.primary.light,
                  // color: theme.palette.primary.contrastLight,
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
