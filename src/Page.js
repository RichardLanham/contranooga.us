import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useTheme, styled } from "@mui/material/styles";

import { useQuery } from "@apollo/client";
import { GET_PAGE } from "./gql/site";
import { Zoom } from "@mui/material";
import SiteFeature from "./components/page/SiteFeature";
import Site from "./Site";

import DownloadingIcon from "@mui/icons-material/Downloading";

import {
  StyledPageSection,
  StyledPage,
  // StyledHeader,
  StyledHeading,
  // StyledSubHead,
  // StyledBody1,
  // StyledImgGroup,
} from "./styles/PageStyles";

import {
  Hero,
  RichText,
  FlexGroup,
  LargeVideo,
  Feature,
  FeatureColumnsGroup,
  FeatureRowsGroup,
  BottomActions,
  LeadForm,
} from "./components/page/ComponentSections";

import PledgeForm from "./components/page/PledgeForm";

// import { isNullableType } from "graphql";

const Page = ({ _slug }) => {
  const theme = useTheme();
  useEffect(() => {}, []);
  let { slug } = useParams();
  slug = slug ? slug : _slug;
  slug = slug.toLowerCase();

  const StyledHeader = styled("div")(({ theme }) => ({
    ...theme.typography.h3,
    width: "calc(50% - 1px)",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
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
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
    },
  }));

  const StyledSiteName = styled("div")(({ theme }) => ({
    ...theme.typography.h3,
    marginTop: 60,
    borderRadius: 5,
    padding: 3,
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("lg")]: {
      // left: 50,
    },
    [theme.breakpoints.down("md")]: {
      ...theme.typography.h5,
    },
    [theme.breakpoints.down("sm")]: {
      left: 20,
    },
  }));

  const { data, loading, error } = useQuery(GET_PAGE, {
    variables: { slug: slug, publicationState: "LIVE", locale: "en" },
  });
  if (!loading) {
    if (!error) {
      const attribs = data.pages.data[0].attributes;
      const pageId = data.pages.data[0].id;

      return (
        <Site
          title={attribs.metadata.metaTitle}
          description={attribs.metadata.metaDescription}
        >
          <StyledPage>
            <StyledSiteName>
              {theme.global.metadata.metaDescription}
            </StyledSiteName>
            <StyledHeader>{attribs.metadata.metaTitle}</StyledHeader>

            <div style={{ height: 35, opacity: 0 }}>&nbsp;</div>
            <SiteFeature slug={slug} />
            {attribs.contentSections.map((section, key) => {
              // ComponentSections
              switch (section.__typename.replace("ComponentSections", "")) {
                case "LeadForm":
                  return <LeadForm key={key} section={section} />;
                case "FlexGroup":
                  return <FlexGroup key={key} section={section} />;
                case "RichText":
                  return <RichText key={key} section={section} />;
                case "Hero":
                  return <Hero key={key} section={section} />;
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
        </Site>
      );
    }
    return <div>error</div>;
  }
  return (
    <div>
      <DownloadingIcon />
    </div>
  );
};

export default Page;
