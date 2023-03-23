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

export const Scroller = ({ section }) => {
  const theme = useTheme();
  const [user, setUser] = useState(null);

  const [msg, setMsg] = useState("");

  const [slug, setSlug] = useState("");
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
    window.onscroll = function (ev) {
      setMsg("");
      if (
        window.innerHeight + window.pageYOffset + 20 >=
        document.body.offsetHeight
      ) {
        const distance =
          window.innerHeight + window.pageYOffset - document.body.offsetHeight;
        //   setMsg("you're at nar bottom of the page " + distance);
        //setSlug(slugs.length > 0 ? slugs[0]?.slug : "");

        if (slug === "") {
          setSlug(slugs[0]);
        } else {
          // const array1 = [5, 12, 8, 130, 44];
          // const isLargeNumber = (element) => element > 13;
          // console.log(array1.findIndex(isLargeNumber));
          const arrayNumber = slugs.findIndex((s) => s.slug === slug);
          const next = slugs[arrayNumber + 1];
          console.log(next.slug);
          //setSlug(next.slug);
        }
      }
    };

    setUser(window.localStorage.getItem("strapi_user") ? true : false);
  });

  const loadSlug = (e) => {
    console.log(e.target.name);
    setSlug(e.target.name);
  };

  return (
    <StyledPageSection
      style={{
        border: "1px none red",
      }}
    >
      <Button name={section.slugs[0].slug} onClick={loadSlug}>
        {section.slugs[0].slug} ok
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
