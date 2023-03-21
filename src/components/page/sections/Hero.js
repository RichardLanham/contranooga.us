import { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleMapApp from "../../../apps/GoogleMapApp";
import { StyledPageSection, StyledHeading } from "../../../styles/PageStyles";
import { getThumb, getLarge } from "../../../apps/functions";
import { createMarkup } from "../../../apps/functions";
import RichEditor from "../Editor";
const StyledHeroBox = styled("div")(({ theme }) => ({
  // ...theme.flexRows,
  // flexDirection: "row",
  // outline: "1px solid red",
  width: "100%",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    //  width: "85%",
  },
  [theme.breakpoints.down("sm")]: {
    // width: 300,
  },
}));

const StyledCardImage = styled("img")(({ theme }) => ({
  float: "left",
  cursor: "ns-resize",
  maxWidth: "30vw",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    maxWidth: "50vw",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90vw",
  },
}));

export const Hero = ({ section }) => {
  //const img = section.data.attr;
  // log
  console.log("hero");
  const thumb = getThumb(section?.picture?.data?.attributes);
  const large = getLarge(section?.picture?.data?.attributes);
  const theme = useTheme();

  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(window.localStorage.getItem("strapi_user") ? true : false);
  }, []);
  // {user ? <Editor content={section.content} /> : null}

  const HeroButton = ({ section }) => {
    const buttonThumb = getThumb(section?.button?.image?.data?.attributes);
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
      console.log(section.button);
      return (
        <a
          style={{ ...theme.typography.h6 }}
          target="_new"
          title={section.title}
          href={goTo}
        >
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

    if (section?.button?.type === "image" && localLink) {
      return (
        <Link target="_self" to={goTo}>
          <Button
            title={section.title}
            style={{
              float: "left",
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

  return (
    <StyledPageSection
      style={{
        border: "1px none red",
        minHeight: thumb.height ? thumb.height + 5 : 50,
      }}
    >
      <div style={{ position: "relative" }}>
        <StyledHeading>{section.label}</StyledHeading>

        {section.button && <HeroButton section={section} />}
      </div>
      <StyledHeroBox>
        <pre style={{ display: "none" }}>
          {JSON.stringify(section, null, 3)}
        </pre>
        {thumb && (
          <StyledCardImage
            onClick={(e) =>
              (e.currentTarget.src = process.env.REACT_APP_STRAPI + large.url)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.src = process.env.REACT_APP_STRAPI + thumb.url)
            }
            src={process.env.REACT_APP_STRAPI + thumb.url}
          />
        )}
        {user ? (
          <RichEditor
            container={{
              content: section.text?.content,
              field: "richtext",
              id: section.text?.id,
              typename: section.text?.__typename,
            }}
          />
        ) : null}
        <div
          dangerouslySetInnerHTML={createMarkup(section?.text?.content)}
        ></div>

        <div
          style={{
            // backgroundColor: theme.palette.background.default,
            padding: 4,
            // color: theme.palette.secondary.contrastText,
            // maxWidth: "50%",
          }}
        >
          {section.googleMap && (
            <div>
              <GoogleMapApp
                markerText={section.googleMap.markerText}
                lat={section.googleMap.lat}
                lng={section.googleMap.lng}
                zoom={section.googleMap.zoom}
                markerImage={section.googleMap.markerImage}
                description={section.googleMap.description}
              />
            </div>
          )}
        </div>
      </StyledHeroBox>
    </StyledPageSection>
  );
};

export default Hero;
