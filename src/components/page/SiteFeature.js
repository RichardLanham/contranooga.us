import React from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Zoom } from "@mui/material";

import { getLarge } from "../../apps/functions";

import {
  StyledPageSection,
  StyledPage,
  StyledHeader,
  StyledHeading,
  // StyledSubHead,
  // StyledBody1,
  // StyledImgGroup,
} from "../../styles/PageStyles";

const SiteFeature = ({ slug }) => {
  const theme = useTheme();
  const feature = theme.feature;
  if (slug !== "home") {
    return null;
  }
  if (!feature) {
    return null;
  }
  if (feature.heading === "") {
    return null;
  }
  const image1 = getLarge(
    feature.picture1.data.length === 0
      ? false
      : feature.picture1.data[0].attributes
  );
  const image2 = getLarge(
    feature.picture2.data.length === 0
      ? false
      : feature.picture2.data[0].attributes
  );

  const imgstyle = { width: image2.width, height: "auto", maxWidth: "50%" };
  return (
    <StyledPageSection>
      <div style={{ ...theme.typography.h4 }}>{feature.heading}</div>
      <div style={{ ...theme.typography.body1 }}>{feature.body}</div>
      <div
        style={{
          //sborder: "1px solid green",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          gap: 10,
        }}
      >
        {image1 && (
          <div>
            <img
              style={imgstyle}
              src={process.env.REACT_APP_STRAPI + image1.url}
            />
            <div style={{ ...theme.typography.caption }}>
              {feature.caption1}
            </div>
          </div>
        )}

        {image2 && (
          <div>
            <img
              style={imgstyle}
              src={process.env.REACT_APP_STRAPI + image2.url}
            />
            <div style={{ ...theme.typography.caption }}>
              {feature.caption2}
            </div>
          </div>
        )}
      </div>
    </StyledPageSection>
  );
};

export default SiteFeature;
