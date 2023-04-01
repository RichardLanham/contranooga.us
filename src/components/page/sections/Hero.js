import { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleMapApp from "../../../apps/GoogleMapApp";
import { StyledPageSection, StyledHeading } from "../../../styles/PageStyles";
import {
  getThumb,
  getLarge,
  getMedium,
  getSmall,
} from "../../../apps/functions";
import { createMarkup } from "../../../apps/functions";
import RichEditor from "../Editor";
import OpenInNewTwoToneIcon from "@mui/icons-material/OpenInNewTwoTone";
import Playlist from "./Playlist";
require("./hero.css");

const StyledCardImage = styled("img")(({ theme }) => ({
  float: "left",
  //cursor: "ns-resize",
  // maxWidth: "30vw",
  marginRight: 5,
  borderRadius: 15,
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    maxWidth: "50vw",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90vw",
  },
}));

export const Hero = ({ section }) => {
  const theme = useTheme();
  const thumb = getThumb(section?.picture?.data?.attributes);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(window.localStorage.getItem("strapi_user") ? true : false);
  }, []);

  const HeroButton = ({ section }) => {
    const buttonThumb = getThumb(section?.button?.image?.data?.attributes);

    const large = getLarge(section?.button?.image?.data?.attributes);
    const medium = getMedium(section?.button?.image?.data?.attributes);
    const small = getSmall(section?.button?.image?.data?.attributes);

    const url = section?.button?.url;
    const slug = section?.button?.slug;

    let goTo = slug ? slug : url;

    if (slug) {
      goTo = "/page/" + goTo;
    }

    const localLink = slug ? true : false; // prefer slug, even if url is present

    if (section?.button?.type === "button" && localLink) {
      return (
        <Button
          target="_self"
          style={{
            // maxWidth: 200,
            // maxHeight: 50,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            // position: "absolute",
            // top: 0,
            // right: 0,
          }}
          title={section.title}
          variant="contained"
          component={Link}
          to={goTo}
        >
          {section?.button?.text}
        </Button>
      );
    }

    if (section?.button?.type === "button" && !localLink) {
      return (
        <Button
          target="_new"
          style={{
            maxWidth: 200,
            maxHeight: 50,
            backgroundColor: theme.palette.primary.main,
            // position: "absolute",
            // top: 0,
            // right: 0,
          }}
          title={section.title}
          variant="contained"
          href={goTo}
        >
          {section?.button?.text}
        </Button>
      );
    }

    if (section?.button?.type === "link" && !localLink) {
      // console.log(section.button);
      return (
        <a
          style={{ ...theme.typography.h6 }}
          target="_new"
          title={section.title}
          href={goTo}
        >
          <OpenInNewTwoToneIcon />
          {section?.button?.text}
        </a>
      );
    }

    if (section?.button?.type === "link" && localLink) {
      return (
        <Link
          style={{ ...theme.typography.h6 }}
          // target="_self"
          title={section.title}
          element="a"
          to={goTo}
        >
          {section?.button?.text}
        </Link>
      );
    }
    // console.log("link");
    if (section?.button?.type === "image" && localLink) {
      return (
        <Link
          element="a"
          target="_self"
          to={goTo}
          style={{ cursor: "pointer" }}
        >
          <FlexImage attributes={section?.button?.image?.data?.attributes} />
        </Link>
      );
    }

    if (section?.button?.type === "image" && !localLink) {
      return (
        <a target="_new" href={goTo}>
          <Button
            title={section.title}
            style={{
              backgroundColor: theme.palette.secondary.main,
            }}
            startIcon={
              buttonThumb ? (
                <img
                  style={{ width: buttonThumb.width, height: "auto" }}
                  src={process.env.REACT_APP_STRAPI + buttonThumb?.url}
                />
              ) : null
            }
            variant="contained"
          ></Button>
        </a>
      );
    }

    return <div>What did I miss?</div>;
  };

  const FlexImage = ({ attributes }) => {
    // console.log(section);
    const thumb = getThumb(attributes);
    const large = getLarge(attributes);
    const medium = getMedium(attributes);
    const small = getSmall(attributes);
    if (!thumb & !large) {
      return null;
    }

    if (section.size === "small" && small) {
      return (
        <div>
          <StyledCardImage
            style={{ float: section.float, maxWidth: medium.width }}
            src={process.env.REACT_APP_STRAPI + small.url}
          />
          <div>{section.description}</div>
        </div>
      );
    }
    if (section.size === "medium" && medium) {
      return (
        <div>
          <StyledCardImage
            style={{
              float: section.float,
              width: medium.width,
              maxWidth: "100%",
            }}
            src={process.env.REACT_APP_STRAPI + medium.url}
          />
          <div>{section.description}</div>
        </div>
      );
    }
    if (section.size === "large" && large) {
      return (
        <div>
          <StyledCardImage
            style={{
              float: section.float,
              width: large.width,
              maxWidth: "100%",
            }}
            src={process.env.REACT_APP_STRAPI + large.url}
          />
          <div>{section.description}</div>
        </div>
      );
    }
    return (
      <div>
        <StyledCardImage
          style={{ float: section.float }}
          onClick={(e) =>
            (e.currentTarget.src = process.env.REACT_APP_STRAPI + large.url)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.src = process.env.REACT_APP_STRAPI + thumb.url)
          }
          src={process.env.REACT_APP_STRAPI + thumb.url}
        />
        <div>{section.description}</div>
      </div>
    );
  };
  return (
    <StyledPageSection
      style={{
        border: "1px none red",
        minHeight: 100,
        minHeight:
          thumb.height && section.float !== "none" ? thumb.height + 5 : 10,
      }}
    >
      <div style={{ position: "relative" }}>
        <StyledHeading>{section.label}</StyledHeading>

        {section.button && <HeroButton section={section} />}
      </div>
      <div className="hero">
        <pre style={{ display: "none" }}>
          {JSON.stringify(section.Playlist, null, 3)}
        </pre>
        <FlexImage attributes={section?.picture?.data?.attributes} />

        {user && section.text ? (
          <RichEditor
            container={{
              content: section.text?.content,
              field: "content",
              id: section.text?.id,
              typename: section.text?.__typename,
            }}
          />
        ) : null}
        <div
          dangerouslySetInnerHTML={createMarkup(section?.text?.content)}
        ></div>

        {section.googleMap && (
          <GoogleMapApp
            markerText={section.googleMap.markerText}
            lat={section.googleMap.lat}
            lng={section.googleMap.lng}
            zoom={section.googleMap.zoom}
            markerImage={section.googleMap.markerImage}
          />
        )}
        {section.playlist && <Playlist section={section.playlist} />}
      </div>
    </StyledPageSection>
  );
};

export default Hero;
