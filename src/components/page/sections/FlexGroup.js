import { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Box, Card, Button, Input, IconButton, Zoom } from "@mui/material";

import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

import GoogleMapApp from "../../../apps/GoogleMapApp";

import { GET_PAGE } from "../../../gql/site";

import {
  StyledSubHead,
  StyledPageSection,
  StyledHeading,
  StyledBody1,
  StyledImgGroup,
  StyledImg,
  StyledImgCaption,
} from "../../../styles/PageStyles";

import PledgeForm from "../PledgeForm";

import LargeVideo from "./LargeVideo";

import { getThumb, createMarkup, getLarge } from "../../../apps/functions";

import { POST_LEAD } from "../../../gql/leadForm";
import { useMutation, useQuery } from "@apollo/client";

import CancelIcon from "@mui/icons-material/Cancel";

import ReactDOMServer from "react-dom/server";
// import { theme } from "../../assets/theme";

import RichEditor from "../Editor";

import PanToolAltTwoToneIcon from "@mui/icons-material/PanToolAltTwoTone";
import Fab from "@mui/material/Fab";

const StyledFlexBox = styled("div")(({ theme }) => ({
  display: "flex",
  // border: "10px solid orange",
  borderColor: theme.palette.primary.main,
  backgroundColor: theme.palette.grey[300],
  borderRadius: 5,
  // shadow: theme.shadows[9],

  // width: "30%",
  marginTop: 20,
  width: "20vw",
  [theme.breakpoints.down("xl")]: {
    width: "30vw",
  },
  [theme.breakpoints.down("lg")]: {
    width: "40vw",
  },
  [theme.breakpoints.down("md")]: {
    width: "60vw",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90vw",
  },
}));

const FlexGroup = ({ section }) => {
  const theme = useTheme();
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(window.localStorage.getItem("strapi_user") ? true : false);
  }, []);
  // {user ? <Editor content={section.content} /> : null}

  return (
    <StyledPageSection
      style={{
        // border: "4px solid " + theme.palette.primary.light,
        display: "flex",
        flexFlow: "row-reverse wrap",

        // flexDirection: "row-reverse",
        justifyContent: "flex-start",
        // gap: 0,
        flexShrink: 10,
        flexGrow: 10,
        // justifyContent: "space-between",
        // flexWrap: "wrap",
        // backgroundColor: "green",
        // alignContent: "flex-start",
      }}
    >
      <StyledSubHead>{section.title}</StyledSubHead>

      {section.group.map((group, key) => {
        // GROUP START
        //GROUP
        const thumb = group.logo.data
          ? getThumb(group.logo.data.attributes)
          : false;
        return (
          <div style={{ marginRight: "auto" }} key={key}>
            {group.groupTitle && (
              <div style={{ ...theme.typography.h4 }}>{group.groupTitle}</div>
            )}
            {group.googleMap && (
              <div>
                <GoogleMapApp
                  markerText={group.googleMap.markerText}
                  markerImage={group.googleMap.markerImage}
                  description={group.googleMap.richtext}
                  lat={group.googleMap.lat}
                  lng={group.googleMap.lng}
                />
              </div>
            )}
            <div
              style={
                {
                  // display: "flex",
                  // gap: 2,
                  // borderRadius: 5,
                  // border: "2px solid black",
                  // boxShadow: theme.shadows[2],
                  // backgroundColor: theme.palette.grey[200],
                }
              }
            >
              <div style={{ ...theme.flexRows, border: "1px none red" }}>
                {thumb && (
                  <img
                    title="group image"
                    style={{
                      height: thumb.height,
                      width: "auto",
                      verticalAlign: "middle",
                      // float: "left",
                      borderRadius: 5,
                      margin: 3,
                    }}
                    src={process.env.REACT_APP_STRAPI + thumb.url}
                  />
                )}
                {group.richtext && (
                  <span>
                    {/* <Editor
                                      container={{
                                        field: "richtext",
                                        id: box.id,
                                        typename: box.__typename,
                                      }}
                                      content={box.richtext}
                                    /> */}
                    {user ? (
                      <RichEditor
                        container={{
                          content: group.richtext.richtext,
                          field: "richtext",
                          id: group.richtext.id,
                          typename: group.richtext.__typename,
                        }}
                      />
                    ) : null}
                    <span
                      dangerouslySetInnerHTML={createMarkup(
                        group.richtext.richtext
                      )}
                    ></span>
                  </span>
                )}
              </div>
            </div>
            <div
              className="groupBox"
              style={{
                // border: "2px solid",
                width: "100%",
                display: "flex",

                // marginLeft: "auto",
                // flexWrap: "wrap",
                // flexDirection: "row",
                flexFlow: "row wrap",
                // justifyContent: "space-between",
                // backgroundColor: "yellow",
                gap: 8,
                // width: 300,
              }}
            >
              {group.box.map((box, key) => {
                // BOX START /////////
                // BOX
                const boxThumb = box.poster.data
                  ? getThumb(box.poster.data.attributes)
                  : false;
                return (
                  <div style={{ marginRight: "auto" }} key={key}>
                    {box.title && (
                      <div style={{ ...theme.typography.h5 }}>{box.title}</div>
                    )}
                    {box.description && (
                      <div style={{ ...theme.typography.body1 }}>
                        {box.description}
                      </div>
                    )}
                    <StyledFlexBox key={key}>
                      <div
                        style={{
                          // border: "2px solid green",

                          // // display: "flex",
                          // flexWrap: "wrap",
                          // flexDirection: "row",
                          // gap: 20,
                          // backgroundColor: "green",
                          maxWidth: 320,
                          height: "100%",
                          // verticalAlign: "middle",
                        }}
                      >
                        {(box.richtext || boxThumb) && (
                          <div>
                            {boxThumb && (
                              <img
                                title="box image"
                                style={{
                                  height: boxThumb.height,
                                  width: "auto",
                                  borderRadius: 5,
                                  margin: 3,
                                  float: "left",
                                }}
                                src={
                                  process.env.REACT_APP_STRAPI + boxThumb.url
                                }
                              />
                            )}
                            {box.richtext && (
                              <span>
                                {user ? (
                                  <RichEditor
                                    container={{
                                      content: box.richtext,
                                      field: "richtext",
                                      id: box.id,
                                      typename: box.__typename,
                                    }}
                                  />
                                ) : null}
                                <span
                                  dangerouslySetInnerHTML={createMarkup(
                                    box.richtext
                                  )}
                                />
                              </span>
                            )}
                          </div>
                        )}
                        {box.googleMap && (
                          <div>
                            <GoogleMapApp
                              markerText={box.googleMap.markerText}
                              markerImage={box.googleMap.markerImage}
                              description={box.googleMap.richtext}
                              lat={box.googleMap.lat}
                              lng={box.googleMap.lng}
                              s
                            />
                          </div>
                        )}
                        {box.url && (
                          <div style={{ width: 300, height: "auto" }}>
                            <ReactPlayer
                              width="100%"
                              height="auto"
                              url={box.url}
                              controls
                            />
                          </div>
                        )}
                      </div>
                    </StyledFlexBox>
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

export default FlexGroup;
