import React, { useEffect, useState } from "react";
import { Zoom, Button, Card, FormLabel } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import { ThreeMpOutlined } from "@mui/icons-material";
import { typography } from "@mui/system";

const StyledImg = styled("img")(({ theme }) => ({
  width: "50%",
  height: "auto",
  float: "left",
  margin: 2,
  borderRadius: 5,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
  [theme.breakpoints.down("sm")]: {},
}));

const getImage = (formats) => {
  console.log(formats);
  if (formats.large) {
    return formats.large;
  }
  if (formats.medium) {
    return formats.medium;
  }
  if (formats.small) {
    return formats.small;
  }
  if (formats.thumbnail) {
    return formats.thumbnail;
  }
};

const StyledBanner = styled("div")(({ theme }) => ({
  position: "relative",
  display: "block",
  // border: `2px solid ${theme.palette.primary.dark}`,
  width: "100%",
  boxShadow: theme.shadows[4],
  borderRadius: 10,

  margin: "auto",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    // width: "80%",
  },
  [theme.breakpoints.down("sm")]: {},
}));

const StyledGotitButton = styled("button")(({ theme }) => ({
  position: "absolute",
  right: -10,
  top: -10,
  ...theme.typography.button,
  backgroundColor: theme.palette.info.main,
  color: theme.palette.info.contrastText,
  padding: 3,
  width: "30%",
  height: 50,
  fontSize: "1.6em",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.4em",
    width: "40%",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const EventDetails = ({ banner, banners, refresh }) => {
  const theme = useTheme();
  const attribs = banner.banner.attributes;
  const link = attribs.link;
  const img = getImage(attribs.image.data.attributes.formats);

  const [display, setDisplay] = useState("flex");

  const markBanner = (e) => {
    banners.map((banner) => {
      if (banner.id === e.target.value) {
        banner.seen = true;
      }
    });
    window.localStorage.setItem("Banners", JSON.stringify(banners));
    // setTimeout(() => {
    //   refresh();
    // }, 1000);
    refresh();
    setDisplay("none");
  };
  return (
    <div style={{ display: display }}>
      <Zoom in={display === "flex"}>
        <StyledBanner>
          <StyledGotitButton
            value={banner.banner.id}
            onClick={(e) => markBanner(e)}
          >
            Got It
          </StyledGotitButton>
          <h1>{attribs.name}</h1>
          {img && <StyledImg src={process.env.REACT_APP_STRAPI + img.url} />}
          <div
            style={{
              ...theme.typography.body1,
              padding: 1,
              backgroundColor: theme.palette.background.default,
            }}
          >
            {attribs.body}
          </div>
          {link.map((l) => {
            return (
              <Card style={{ boxShadow: theme.shadows[4] }}>
                <Button>
                  <a href={"/page" + l.url}>{l.text}</a>
                </Button>
                <div style={{ ...theme.typography.h5 }}>{l.description}</div>
              </Card>
            );
          })}
        </StyledBanner>
      </Zoom>
    </div>
  );
};

export default EventDetails;
