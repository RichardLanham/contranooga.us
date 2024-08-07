import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { useTheme, styled } from "@mui/material/styles";

import { useQuery } from "@apollo/client";
import { GET_PAGE } from "./gql/site";
import { Zoom } from "@mui/material";
import SiteFeature from "./components/page/SiteFeature";
import Site from "./Site";

import DownloadingIcon from "@mui/icons-material/Downloading";

import { StyledPageSection, StyledPage } from "./styles/PageStyles";

import {
  RichText,
  Feature,
  FeatureColumnsGroup,
  FeatureRowsGroup,
  BottomActions,
  LeadForm,
  GoogleMap,
} from "./components/page/PageSections";

import Tabs from "./components/page/sections/Tabs";
import Hero from "./components/page/sections/Hero";
import Scroller from "./components/page/sections/Scroller";
import LargeVideo from "./components/page/sections/LargeVideo";
import FlexGroup from "./components/page/sections/FlexGroup";
import Flex from "./components/page/sections/Flex";

import PledgeForm from "./components/page/PledgeForm";

import PageHeader from "./components/page/PageHeader";

import { StyledSiteName } from "./styles/PageStyles";

import { eventEmitter } from "./events";

const StyledHeader = styled("div")(({ theme }) => ({
  ...theme.typography.h3,
  // opacity: ".1",
  width: "calc(50% - 1px)",
  paddingLeft: 10,
  paddingRight: 10,
  marginTop: 20,
  marginLeft: 10,
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

// import { isNullableType } from "graphql";

function Page({ _slug }) {
  const toggleDrawer = () => {
    eventEmitter.dispatch("TOGGLE_DRAWER");
  };
  // console.log("page");
  // https://cms.contranooga.us/api/pages/5?populate[contentSections][populate]=*

  const [searchParams] = useSearchParams();
  const logout = searchParams.get("lo");

  const theme = useTheme();

  // target.scrollHeight — target.scrollTop === target.clientHeight
  useEffect(() => {
    // const scrollObj = document.getElementById("root");
    // scrollObj.onscroll = () => {
    //   if (
    //     scrollObj.scrollHeight - scrollObj.scrollTop ===
    //     scrollObj.clientHeight
    //   ) {
    //     console.log(scrollObj.scrollHeight);
    //     console.log(scrollObj.scrollTop);
    //     console.log(scrollObj.clientHeight);
    //   }
    // };
    if (logout) {
      window.localStorage.removeItem("strapi_jwt");
      window.localStorage.removeItem("strapi_user");
      window.localStorage.removeItem("jwt_date");
    }
    window.document.body.scrollTo(0, 0);
  }, []);

  // useEffect(() => {

  // }, []);
  let { slug } = useParams();
  slug = slug ? slug : _slug;
  slug = slug.toLowerCase();

  const { data, loading, error } = useQuery(GET_PAGE, {
    variables: { slug: slug, publicationState: "LIVE", locale: "en" },
  });
  // if (!loading) {
  if (!error) {
    const attribs = data?.pages?.data[0]?.attributes;
    const pageId = data?.pages?.data[0]?.id;
    const metaTitle = attribs?.metadata?.metaTitle;

    if (!attribs) {
      return (
        <Site>
          title="empty page"
          <Zoom in={true}>
            <StyledPage>
              <PageHeader metaTitle={metaTitle} />
              <h4>Empty Page</h4>
            </StyledPage>
          </Zoom>
        </Site>
      );
    }
    return (
      <Site title={metaTitle} description={attribs?.metadata?.metaDescription}>
        <Zoom in={true}>
          <StyledPage id="sitePage" onTouchStart={toggleDrawer}>
            <PageHeader metaTitle={metaTitle} />

            <SiteFeature slug={slug} />
            {attribs.contentSections.map((section, key) => {
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
                case "PledgeForm":
                  return (
                    <StyledPage key={key}>
                      <StyledPageSection>
                        <PledgeForm key={key} section={section} />
                      </StyledPageSection>
                    </StyledPage>
                  );
                default:
                  return <div key={key}></div>;
                  break;
              }
            })}
          </StyledPage>
        </Zoom>
      </Site>
    );
  } else {
    return (
      // ERRROR (some errors fall thru here, not all, bad Auth does not)
      <div style={{ width: "100%", height: "100%" }}>
        <Site title="CDTS" description="loading...">
          <StyledPage>
            <StyledSiteName>
              Chattanooga Traditional Dance Society
            </StyledSiteName>
            <StyledHeader>Sorry</StyledHeader>
            An error occurred
            <br />
            <a style={{ fontSize: 22, fontWeight: "bold" }} href="/?lo=true">
              Try Refreshing!
            </a>
          </StyledPage>
        </Site>
      </div>
    );
  }
  // }
  // return (
  //   // LOADING, waiting for graphql
  //   <div style={{ width: "100%", height: "100%" }}>
  //     <Site title="CDTS" description="loading...">
  //       <StyledPage>
  //         <StyledSiteName>Chattanooga Traditional Dance Society</StyledSiteName>
  //         <StyledHeader>loading</StyledHeader>
  //         <DownloadingIcon
  //           style={{
  //             margin: "auto",
  //             width: "20%",
  //             maxWidth: 40,
  //             height: "auto",
  //           }}
  //         />
  //       </StyledPage>
  //     </Site>
  //   </div>
  // );
}

export default Page;
