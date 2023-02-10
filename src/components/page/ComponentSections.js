import React from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Box, Card, Button } from "@mui/material";
import { Link } from "react-router-dom";
// import renderHTML from "react-markdown";
// import renderHTML from "react-render-html";
import ReactPlayer from "react-player";
import FaceBookPlayer from "../../apps/FaceBookPlayer";
import {
  StyledSubHead,
  // StyledPage,
  StyledPageSection,
  StyledHeading,
  StyledBody1,
  StyledColumns,
  StyledColumn,
  StyledImgGroup,
  StyledImg,
  StyledImgCaption,
} from "../../styles/PageStyles";

import { getThumb, getLarge } from "../../apps/functions";
// import { PUT_THEME_SELECTED_COLOR_MODES } from "../../gql/theme";

// import { typography } from "@mui/system";

// const Main = () => {
//   return <div></div>;
// };

const StyledLargeVideo = styled(Box)(({ theme }) => ({
  // ...typography.caption,
  // backgroundColor: theme.palette.info.main,
  color: theme.palette.info.contrastText,
  //marginBottom: 30,
  // marginTop: 40,
  // textAlign: "center",
  // width: "calc(90% - 1px)",
  width: 640,
  margin: "auto",
  // height: "auto",

  [theme.breakpoints.down("lg")]: {
    width: 320,
    height: "auto  ",
    // height: 120,
    // margin: 0,
  },
  [theme.breakpoints.down("sm")]: {
    // width: 320,
  },
}));

export const FlexGroup = ({ section }) => {
  const theme = useTheme();
  return (
    <StyledPageSection>
      <StyledSubHead>{section.title}</StyledSubHead>

      {section.group.map((group, key) => {
        //GROUP
        const thumb = getThumb(group.logo.data.attributes);
        return (
          <div>
            {group.groupTitle && <div>{group.groupTitle}</div>}
            <div
              style={{
                display: "flex",
                gap: 2,
                // width: "100%",
                // backgroundColor: theme.palette.background.default,
              }}
            >
              <div>
                {thumb && (
                  <img
                    title="group image"
                    style={{
                      height: thumb.height,
                      width: "auto",
                      verticalAlign: "middle",
                      // float: "left",
                    }}
                    src={process.env.REACT_APP_STRAPI + thumb.url}
                  />
                )}
                {group.richtext.richtext && (
                  <span
                    dangerouslySetInnerHTML={createMarkup(
                      group.richtext.richtext
                    )}
                  ></span>
                )}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                // backgroundColor: "yellow",
                gap: 20,
                // width: 300,
              }}
            >
              {group.box.map((box, key) => {
                // BOX
                const boxThumb = getThumb(box.poster.data.attributes);
                return (
                  <div
                    style={{
                      border: "1px solid",
                      // borderColor: theme.palette.primary.main,
                      borderRadius: 5,
                      shadow: theme.shadows[10],
                    }}
                  >
                    {box.title && <div>{box.title}</div>}
                    {box.description && <div>{box.description}</div>}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        gap: 20,
                        // backgroundColor: "green",
                        maxWidth: 320,
                        height: "100%",
                        // verticalAlign: "middle",
                      }}
                    >
                      <div>
                        {box.richtext && (
                          <span
                            dangerouslySetInnerHTML={createMarkup(box.richtext)}
                          />
                        )}
                        {boxThumb && (
                          <img
                            title="box image"
                            style={{
                              height: boxThumb.height,
                              width: "auto",
                              float: "left",
                            }}
                            src={process.env.REACT_APP_STRAPI + boxThumb.url}
                          />
                        )}
                      </div>

                      {box.url && (
                        <div style={{ width: 300 }}>
                          <ReactPlayer width="100%" url={box.url} controls />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </StyledPageSection>
  );
};

export const LargeVideo = ({ section }) => {
  const theme = useTheme();
  return (
    <StyledPageSection>
      <StyledSubHead>{section.title}</StyledSubHead>
      <StyledLargeVideo>
        {section.facebook_bound ? (
          <FaceBookPlayer width="100%" section={section} controls />
        ) : (
          <ReactPlayer width="100%" url={section.url} controls />
        )}

        {section.description}
      </StyledLargeVideo>
    </StyledPageSection>
  );
};

const StyledRichText = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "left",
  padding: "10px 10px 20px 20px",
  borderRadius: 5,
  margin: 5,
  background: theme.palette.background.default,
  [theme.breakpoints.down("lg")]: {
    // padding: 0,
  },
  [theme.breakpoints.down("md")]: {},
}));

const createMarkup = (html) => {
  return { __html: html };
};
export const RichText = ({ section }) => {
  const theme = useTheme();
  return (
    <StyledPageSection>
      <StyledRichText>
        <div dangerouslySetInnerHTML={createMarkup(section.content)}></div>
      </StyledRichText>
    </StyledPageSection>
  );
};

export const BottomActions = ({ section }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3>{section.title}</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row ",
          gap: 10,
          // backgroundColor: theme.palette.info.light,

          // backgroundColor: theme.palette.info.light,
          // color: theme.palette.info.contrastLight,
        }}
      >
        {section.buttons.map((button, key) => {
          return (
            <Card
              key={key}
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 5,
                // border: `1px solid ${theme.palette.secondary.light}`,
                maxWidth: 300,
              }}
            >
              {button.url.substr(0, 4) === "http" ? (
                <Button>
                  <a
                    target="_new"
                    href={button.url}
                    style={{ textDecoration: "none" }}
                  >
                    {button.text}
                  </a>
                </Button>
              ) : (
                <Link
                  target={button.newTab ? "_new" : "_self"}
                  style={{ textDecoration: "none" }}
                  to={button.url}
                >
                  <Button variant={button.variant}>{button.text}</Button>
                </Link>
              )}
              <div
                style={{
                  ...theme.typography.body2,
                  padding: 5,
                  margin: "auto",
                }}
              >
                {button.label}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const StyledFeaturesRowGroup = styled(Box)(({ theme }) => ({
  // backgroundColor: "purple",
  width: "90%",
  // width: "calc(90% - 1px)",
  // textAlign: "center",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "flex-start",
  gap: 15,
  marginTop: 40,
  marginLeft: 50,
  [theme.breakpoints.down("lg")]: {
    // width: "70%",
    // backgroundColor: "yellow",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginLeft: 10,

    // backgroundColor: "green",
  },
}));
const StyledFeaturesRow = styled(Card)(({ theme }) => ({
  ...theme.typography.caption,
  width: "calc(28%)",
  // minWidth: 200,
  margin: "auto",
  marginLeft: 10,
  textAlign: "center",
  border: `2px solid ${theme.palette.secondary.dark}`,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  //opacity: 0.9,
  borderRadius: 5,
  padding: 1,
  boxShadow: theme.shadows[8],
  "&:hover": {
    // backgroundColor: theme.palette.info.light,
    // color: theme.palette.info.contrastLight,
    opacity: 1,
  },
  [theme.breakpoints.down("xl")]: {
    width: "calc(40% - 1px)",
    // backgroundColor: "yellow",
  },
  [theme.breakpoints.down("lg")]: {
    marginLeft: 0,
    width: "calc(44%)",
    // backgroundColor: "green",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    width: "calc(100% - 1em)",
  },
}));

export const FeatureRowsGroup = ({ section }) => {
  const theme = useTheme();
  return (
    <StyledPageSection>
      <StyledFeaturesRowGroup>
        {section.features.map((feature, key) => {
          const thumb = feature.media.data
            ? getImageThumb(feature.media.data.attributes)
            : false;
          return (
            <StyledFeaturesRow key={key}>
              <Card
                style={{
                  ...theme.typography.h5,

                  color: theme.palette.primary.dark,

                  padding: 3,
                }}
              >
                {feature.title}
              </Card>
              <Card
                style={{
                  ...theme.typography.body2,

                  display: "inline",
                  color: theme.palette.primary.dark,

                  padding: 3,
                }}
              >
                {feature.description}
              </Card>
              <div>
                {thumb && (
                  <img
                    className="fade-in-image"
                    title={thumb.url}
                    style={{
                      // float: "left",
                      maxWidth: thumb.width,
                      height: "auto",
                    }}
                    src={process.env.REACT_APP_STRAPI + thumb.url}
                  />
                )}
              </div>
              {feature.link && (
                <Button
                  style={{
                    //maxHeight: 30,
                    boxShadow: theme.shadows[4],
                    margin: 5,
                    backgroundColor: theme.palette.info.main,
                    color: theme.palette.info.contrastText,
                  }}
                  variant="raised"
                >
                  {feature.link.newTab ? (
                    <a
                      href={feature.link.url}
                      target="_new"
                      style={{
                        textDecoration: "none",
                        color: theme.palette.info.contrastText,
                      }}
                    >
                      {feature.link.text}
                    </a>
                  ) : (
                    <Link
                      key={"link" + key}
                      to={feature.link.url}
                      style={{
                        textDecoration: "none",
                        color: theme.palette.info.contrastText,
                      }}
                    >
                      {feature.link.text}
                    </Link>
                  )}
                </Button>
              )}
            </StyledFeaturesRow>
          );
        })}
      </StyledFeaturesRowGroup>
    </StyledPageSection>
  );
};

export const FeatureColumnsGroup = ({ section }) => {
  const theme = useTheme();
  return (
    <StyledBody1>
      <StyledColumns>
        {section.features.map((feature, key) => {
          return (
            <StyledColumn
              key={key}
              style={{
                //border: `1px solid ${theme.palette.secondary.main}`,
                width: 100 / section.features.length + "%",
              }}
            >
              {feature.description}
              {feature.picture && (
                <img
                  src={
                    process.env.REACT_APP_STRAPI +
                    feature.picture.attributes.formats.thumbnail.url
                  }
                />
              )}
            </StyledColumn>
          );
        })}
      </StyledColumns>
    </StyledBody1>
  );
};

const getImageThumb = (attribs) => {
  if (!attribs.formats) {
    return false;
  }
  if (attribs.formats.thumbnail) {
    return attribs.formats.thumbnail;
  }
  if (!attribs.formats.medium) {
    if (!attribs.formats.small) {
      return attribs.formats.thumbname;
    } else {
      return attribs.formats.small;
    }
  } else {
    return attribs.formats.medium;
  }
};

const getImage = (attribs) => {
  if (!attribs.formats) {
    return false;
  }
  if (attribs.formats.large) {
    return attribs.formats.large;
  }
  if (!attribs.formats.medium) {
    if (!attribs.formats.small) {
      return attribs.formats.thumbname;
    } else {
      return attribs.formats.small;
    }
  } else {
    return attribs.formats.medium;
  }
};
export const Feature = ({ section }) => {
  //const img = section.data.attr;
  const thumb = getImage(section.picture.data.attributes);
  // const thumb = section.picture.data.attributes.formats.thumbnail
  //thumb ? section.picture.data.attributes.formats.thumbnail : false;
  return (
    <StyledPageSection>
      <StyledHeading>{section.title}</StyledHeading>
      {section.richText && (
        <StyledBody1>
          <div dangerouslySetInnerHTML={createMarkup(section.richText)}></div>
        </StyledBody1>
      )}

      <StyledImgGroup>
        {thumb && (
          <StyledImg
            title={thumb.url}
            style={{
              float: "left",
            }}
            src={process.env.REACT_APP_STRAPI + thumb.url}
          />
        )}
        <StyledImgCaption>{section.caption}</StyledImgCaption>
      </StyledImgGroup>
    </StyledPageSection>
  );
};

export const Hero = ({ section }) => {
  //const img = section.data.attr;
  const thumb = getImageThumb(
    section.picture.data ? section.picture.data.attributes : false
  );
  const theme = useTheme();
  return (
    <StyledPageSection>
      <StyledHeading>{section.title}</StyledHeading>

      {thumb && (
        <Box
          style={{
            backgroundColor: theme.palette.background.default,
            padding: 4,
            // color: theme.palette.secondary.contrastText,
            maxWidth: "50%",
          }}
        >
          <img
            title={section.title}
            style={{
              float: "left",
              width: thumb.width,
              height: "auto",
              margin: 3,
            }}
            src={process.env.REACT_APP_STRAPI + thumb.url}
          />
          <div dangerouslySetInnerHTML={createMarkup(section.richText)}></div>
          {section.buttons.map((button, key) => {
            return (
              <Link
                key={key}
                style={{ textDecoration: "none" }}
                to={button.url}
              >
                <Button variant="outlined">{button.text}</Button>
              </Link>
            );
          })}
        </Box>
      )}
    </StyledPageSection>
  );
};
