import React, { useEffect, useState } from "react";
import { Zoom, Button, Card, FormLabel } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
// import { ThreeMpOutlined } from "@mui/icons-material";
// import { typography } from "@mui/system";

import { Link } from "react-router-dom";

const StyledImg = styled("img")(({ theme }) => ({
  width: "50%",
  height: "auto",
  float: "left",
  margin: 2,
  borderRadius: 5,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {},
}));

const getImage = (attribs) => {
  if (!attribs.image.data) {
    return false;
  }
  const formats = attribs.image.data.attributes.formats;
  if (!formats) {
    return false;
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
  width: "calc(98% - 1px)",
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
  // position: "absolute",
  // right: -10,
  // top: -10,
  ...theme.typography.button,
  backgroundColor: theme.palette.info.main,
  color: theme.palette.info.contrastText,
  padding: 3,
  width: "30%",
  maxWidth: 200,
  minWidth: 120,
  height: "auto",
  fontSize: "1.6em",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.4em",
    width: "40%",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Banner = ({ banner, banners, refresh }) => {
  const theme = useTheme();
  const attribs = banner.banner.attributes;
  const link = attribs.link;
  const img = getImage(attribs);

  const [display, setDisplay] = useState("block");
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(localStorage.getItem("strapi_user"));
  }, []);

  const markBanner = (e) => {
    theme.banners.map((banner) => {
      if (banner.id === e.target.id) {
        banner.seen = true;
      }
    });
    //window.localStorage.setItem("Banners", JSON.stringify(banners));
    // setTimeout(() => {
    //   refresh();
    // }, 1000);
    refresh();
    // setDisplay("none");
  };
  return (
    <div style={{ display: display }}>
      <StyledGotitButton id={banner.banner.id} onClick={(e) => markBanner(e)}>
        Got It
      </StyledGotitButton>
      {user && (
        <div
          style={{
            ...theme.typography.body1,
            background: theme.palette.background.default,
            color: "#000",
          }}
        >
          {new Date(banner.banner.attributes.startTime).toLocaleDateString()}:
          {new Date(banner.banner.attributes.startTime).toLocaleTimeString()}
          &nbsp;to&nbsp;
          {new Date(banner.banner.attributes.endTime).toLocaleDateString()}:
          {new Date(banner.banner.attributes.endTime).toLocaleTimeString()}
        </div>
      )}
      <Zoom in={display !== "none"}>
        <StyledBanner>
          <Card style={{ ...theme.typography.h4, margin: 5 }}>
            {attribs.name}
          </Card>
          <Card
            style={{
              ...theme.typography.body1,
              ...theme.typography.fontWeightBold,
              padding: 1,
              margin: 5,
              backgroundColor: theme.palette.background.default,
            }}
          >
            {img && (
              <StyledImg
                // style={{ width: img.width, height: img.height }}
                src={process.env.REACT_APP_STRAPI + img.url}
              />
            )}
            {attribs.body}
          </Card>
          {link.map((l, key) => {
            return (
              <Card key={key} style={{ boxShadow: theme.shadows[4] }}>
                <Button>
                  {l.netTab === true || l.url.startsWith("http") ? (
                    <a
                      id={banner.banner.id}
                      onClick={(e) => markBanner(e)}
                      target="_new"
                      href={l.url}
                    >
                      {l.text}
                    </a>
                  ) : (
                    <Link
                      id={banner.banner.id}
                      onClick={(e) => markBanner(e)}
                      to={"/page" + l.url}
                    >
                      {l.text}
                    </Link>
                  )}
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

export default Banner;
