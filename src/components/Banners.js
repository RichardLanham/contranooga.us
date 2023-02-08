import React, { useEffect, useState } from "react";
import { Zoom, Button } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import Banner from "./Banner";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const getImage = (attribs) => {
  if (!attribs.image.data) {
    return false;
  }
  const formats = attribs.image.data.attributes.formats;
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
const StyledBanners = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "30%",
  top: 100,
  zIndex: theme.zIndex.tooltip,
  width: "calc(40% - 1em)",
  boxShadow: theme.shadows[4],
  background: `linear-gradient(90deg, ${theme.palette.grey[200]}, ${theme.palette.grey[600]}, ${theme.palette.info.light})`,
  borderRadius: 15,
  margin: "auto",
  [theme.breakpoints.down("xl")]: {
    left: "20%",
    width: "calc(60% - 1em)",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "calc(80% - 1em)",
    left: "10%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    left: "5%",
  },
}));
const StyledImg = styled("img")(({ theme }) => ({
  width: "50%",
  height: "auto",
  float: "left",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Banners = () => {
  const theme = useTheme();

  const [banners, setBanners] = useState(theme.banners ? theme.banners : []);

  const refresh = useForceUpdate();

  const [displayBanners, setDisplayBanners] = useState(
    banners ? "none" : "block"
  );

  useEffect(() => {
    return () => {};
  }, []);

  const filtered = theme.banners ? theme.banners.filter((b) => !b.seen) : [];
  //console.log(filtered);

  return (
    <StyledBanners
      style={{ display: filtered.length === 0 ? "none" : "block" }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          margin: 20,
          padding: 20,
        }}
      >
        {filtered.map((banner, key) => {
          return (
            <Banner
              banner={banner}
              banners={banners}
              refresh={refresh}
              key={key}
            ></Banner>
          );
        })}
      </div>
    </StyledBanners>
  );
};

export default Banners;
