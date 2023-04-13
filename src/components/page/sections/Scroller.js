import { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Button } from "@mui/material";
// import { Link } from "react-router-dom";
import { StyledPageSection, StyledHeading } from "../../../styles/PageStyles";
import { useQuery } from "@apollo/client";
import { GET_PAGE } from "../../../gql/site";

import {
  RichText,
  Feature,
  FeatureColumnsGroup,
  FeatureRowsGroup,
  BottomActions,
  LeadForm,
  GoogleMap,
} from "../../../components/page/PageSections";

import Tabs from "../../../components/page/sections/Tabs";
import Hero from "../../../components/page/sections/Hero";
import LargeVideo from "../../../components/page/sections/LargeVideo";
import FlexGroup from "../../../components/page/sections/FlexGroup";
import Flex from "../../../components/page/sections/Flex";

export const Scroller = ({ section }) => {
  const theme = useTheme();
  const [user, setUser] = useState(null);

  const [msg, setMsg] = useState("");

  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [slugs, setSlugs] = useState([]);

  const [attribs, setAttribs] = useState([]);
  const [loadMsg, setLoadMsg] = useState("");

  const { data, loading, error } = useQuery(GET_PAGE, {
    variables: { slug: slug, publicationState: "LIVE", locale: "en" },
  });

  useEffect(() => {
    if (!loading) {
      if (!error) {
        setLoadMsg("");
        const attrbs = data?.pages?.data[0]?.attributes;
        const pageId = data?.pages?.data[0]?.id;
        const metaTitle = attribs?.metadata?.metaTitle;
        console.log(attrbs);
        setTitle(attrbs?.metadata?.metaTitle);
        setAttribs(attrbs);
      } else {
        // handle error
      }
    } else {
      setLoadMsg("loading");
    }
  }, [data, loading, error, slug]);

  useEffect(() => {
    setSlugs(section.slugs);
  });
  useEffect(() => {
    window.onscroll = function (ev) {
      setMsg("");
      if (
        window.innerHeight + window.pageYOffset + 400 >=
        document.body.offsetHeight
      ) {
        setSlug(slugs[0].slug); // fix to single is upstream in Strapi, and across in gql. Was going to be many slugs per page, but it is only one, to form a linked list of pages.
      }
    };

    setUser(window.localStorage.getItem("strapi_user") ? true : false);
  });

  const loadSlug = (e) => {
    console.log(e.target.name);
    setSlug(e.target.name);
  };

  const StyledHeader = styled("div")(({ theme }) => ({
    ...theme.typography.h3,
    // opacity: ".1",
    // width: "calc(50% - 1px)",
    width: "fit-content",
    height: "fit-content",
    // maxHeight: 120,
    // paddingLeft: 10,
    // paddingRight: 10,
    marginTop: 50,
    // marginLeft: 10,
    borderRadius: 5,
    borderColor: theme.palette.primary.main,
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("xl")]: {
      marginTop: 15,
    },
    [theme.breakpoints.down("lg")]: {
      left: 50,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 22,
      left: 8,
      marginLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
    },
  }));
  return (
    <StyledPageSection
      style={{
        border: "1px none red",
      }}
    >
      <StyledHeader>{title}</StyledHeader>
      <Button
        style={{ display: "none" }}
        name={section.slugs[0].slug}
        onClick={loadSlug}
      >
        {section.slugs[0].slug}
      </Button>
      {msg}

      <div>{loadMsg}</div>

      <pre style={{ display: "none" }}>{JSON.stringify(slugs, null, 3)}</pre>

      {attribs?.contentSections &&
        attribs?.contentSections.map((section, key) => {
          // ComponentSections
          switch (section.__typename.replace("ComponentSections", "")) {
            case "Tabs":
              return <Tabs key={key} section={section} />;
            case "GoogleMap":
              return <GoogleMap key={key} section={section} />;
            case "LeadForm":
              return <LeadForm key={key} section={section} />;
            case "FlexGroup":
              return <FlexGroup key={key} section={section} />;
            case "Flex":
              return <Flex key={key} section={section} />;
            case "RichText":
              return <RichText key={key} section={section} />;
            case "Hero":
              return <Hero key={key} section={section} />;
            case "Scroller":
              return <Scroller key={key} section={section} />;
            case "PageFeature":
              return <Feature key={key} section={section} />;
            case "LargeVideo":
              return <LargeVideo key={key} section={section} />;
            case "FeatureColumnsGroup":
              return <FeatureColumnsGroup key={key} section={section} />;
            case "FeatureRowsGroup":
              return <FeatureRowsGroup key={key} section={section} />;
            case "BottomActions":
              return <BottomActions key={key} section={section} />;

            default:
              return <div key={key}></div>;
              break;
          }
        })}
    </StyledPageSection>
  );
};

export default Scroller;
