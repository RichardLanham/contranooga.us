import React, { useState, useRef } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Box, Card, Button, Input, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
// import FaceBookPlayer from "../../apps/FaceBookPlayer";
import SitePlayer from "./SitePlayer";

import GoogleMap from "../../apps/GoogleMap";

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

import { POST_LEAD } from "../../gql/leadForm";
import { useMutation, useQuery } from "@apollo/client";

import CancelIcon from "@mui/icons-material/Cancel";

// require("../../styles/formStyles.css");

const StyledLargeVideo = styled(Box)(({ theme }) => ({
  color: theme.palette.info.contrastText,
  width: 640,
  margin: "auto",

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

const StyledFlexBox = styled("div")(({ theme }) => ({
  display: "flex",
  // border: "10px solid orange",
  borderColor: theme.palette.primary.main,
  backgroundColor: theme.palette.grey[300],
  borderRadius: 5,
  // shadow: theme.shadows[9],

  // width: "30%",
  marginTop: 20,
  [theme.breakpoints.down("lg")]: {
    // width: "calc(60% - 1rem)",
    width: "45%",
  },
  [theme.breakpoints.down("md")]: {
    width: "85%",
  },
}));

export const FlexGroup = ({ section }) => {
  const theme = useTheme();
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
                <GoogleMap
                  marker={group.googleMap.marker}
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
              <div>
                {thumb && (
                  <img
                    title="group image"
                    style={{
                      height: thumb.height,
                      width: "auto",
                      verticalAlign: "middle",
                      float: "left",
                      borderRadius: 5,
                      margin: 3,
                    }}
                    src={process.env.REACT_APP_STRAPI + thumb.url}
                  />
                )}
                {group.richtext && (
                  <span
                    dangerouslySetInnerHTML={createMarkup(
                      group.richtext.richtext
                    )}
                  ></span>
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
                              <span
                                dangerouslySetInnerHTML={createMarkup(
                                  box.richtext
                                )}
                              />
                            )}
                          </div>
                        )}
                        {box.googleMap && (
                          <div>
                            <GoogleMap
                              marker={box.googleMap.marker}
                              lat={box.googleMap.lat}
                              lng={box.googleMap.lng}
                              style={box.googleMap.style}
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

const StyledWrap = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.info.main,
  color: theme.palette.info.contrastText,
  width: 300,
  top: 0,
  // backgroundColor: "yellow",
  padding: 10,
  margin: 10,
  // border: "4px solid black",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("lg")]: {
    // width: "calc(60% - 1rem)",
    // width: "45%",
  },
  [theme.breakpoints.down("md")]: {
    // width: "85%",
  },
}));

const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

export const LeadForm = ({ section }) => {
  const theme = useTheme();
  const [name, setName] = useState(theme.leadFormName);
  const [phone, setPhone] = useState(theme.leadFormPhone);
  const [email, setEmail] = useState(theme.leadFormEmail);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState("none");
  const [postLead] = useMutation(POST_LEAD);

  const handleSubmit = async () => {
    await postLead({
      variables: {
        // name: theme.leadFormName,
        // email: theme.leadFormEmail,
        // phone: theme.leadFormPhone,
        name: name,
        email: email,
        phone: phone,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });

    setOpen("thanks");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const handleCancel = () => {
    setOpen("");
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  const handleConfirm = () => {
    const isEmail = validateEmail(email);

    if (isEmail) {
      setOpen("confirm");
    } else {
      setMessage("bad email");
      setOpen("form");
    }
  };

  if (open === "thanks") {
    return (
      <StyledWrap>
        <div style={{ ...theme.typography.h4 }}>Thank you!</div>

        <Button onClick={() => setOpen("none")} variant="contained" style={{}}>
          Close
        </Button>
      </StyledWrap>
    );
  }
  if (open === "confirm") {
    return (
      <StyledWrap>
        <div>Is this correct?</div>
        <div>{name}</div>
        <div>{email}</div>
        <div>{phone}</div>
        <Button onClick={() => handleSubmit()} variant="contained" style={{}}>
          Yes!
        </Button>
        <Button onClick={() => setOpen("form")} variant="contained" style={{}}>
          Change
        </Button>
      </StyledWrap>
    );
  }

  if (open === "form") {
    return (
      <StyledWrap>
        <form>
          <div
            style={{
              backgroundColor: theme.palette.error.main,
              color: theme.palette.error.contrastText,
            }}
          >
            {message}
          </div>
          <Input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder={section.namePlaceHolder}
            type="text"
          ></Input>
          <Input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={section.emailPlaceHolder}
          ></Input>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={section.phonePlaceHolder}
            type="phone"
          ></Input>

          {section.blurb && (
            <div
              style={{
                ...theme.typography.caption,
                width: 300,
              }}
            >
              {section.blurb}
            </div>
          )}
          <Button onClick={() => handleConfirm()} variant="contained">
            subscribe
          </Button>
          <IconButton
            style={{ position: "absolute", top: 0, right: 0, float: "left" }}
            variant="contained"
            onClick={() => handleCancel()}
          >
            <CancelIcon />
          </IconButton>
        </form>
      </StyledWrap>
    );
  }

  return (
    <div>
      {section.submitButton ? (
        <Button onClick={() => setOpen("form")} variant="contained" style={{}}>
          {section.title}
        </Button>
      ) : (
        <Button onClick={() => setOpen("form")} variant="contained" style={{}}>
          {section.title}
        </Button>
      )}
    </div>
  );
};

export const LargeVideo = ({ section }) => {
  const theme = useTheme();

  const [state, setState] = useState({
    url: null,
    pip: false,
    playing: true,
    controls: true,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  });

  const load = (url) => {
    console.log("LOADING");
    setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };

  const renderLoadButton = (url, label, key) => {
    return (
      <Button
        key={key}
        onClick={() => load(url)}
        style={{ minWidth: 100, maxWidth: 150, padding: 1, margin: 1 }}
      >
        {label}
      </Button>
    );
  };

  const handlePlayPause = () => {
    setState({ playing: !state.playing });
  };

  const handleStop = () => {
    setState({ url: null, playing: false });
  };

  const handleToggleControls = () => {
    const url = state.url;
    setState(
      {
        controls: !state.controls,
        url: null,
      },
      () => load(url)
    );
  };

  const handleToggleLight = () => {
    setState({ light: !state.light });
  };

  const handleToggleLoop = () => {
    setState({ loop: !state.loop });
  };

  const handleVolumeChange = (e) => {
    setState({ volume: parseFloat(e.target.value) });
  };

  const handleToggleMuted = () => {
    setState({ muted: !state.muted });
  };

  const handleSetPlaybackRate = (e) => {
    setState({ playbackRate: parseFloat(e.target.value) });
  };

  const handleOnPlaybackRateChange = (speed) => {
    setState({ playbackRate: parseFloat(speed) });
  };

  const handleTogglePIP = () => {
    setState({ pip: !state.pip });
  };

  const handlePlay = () => {
    console.log("onPlay");
    // setState({ playing: true });
  };

  const handleEnablePIP = () => {
    console.log("onEnablePIP");
    setState({ pip: true });
  };

  const handleDisablePIP = () => {
    console.log("onDisablePIP");
    setState({ pip: false });
  };

  const handlePause = () => {
    console.log("onPause");
    setState({ playing: false });
  };

  const handleSeekMouseDown = (e) => {
    setState({ seeking: true });
  };

  const handleSeekChange = (e) => {
    setState({ played: parseFloat(e.target.value) });
  };

  const handleSeekMouseUp = (e) => {
    setState({ seeking: false });
    // player.seekTo(parseFloat(e.target.value));
  };

  const handleProgress = (state) => {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!state.seeking) {
      // setState(state);
    }
  };

  const handleEnded = () => {
    console.log("onEnded");
    setState({ playing: state.loop });
  };

  const handleDuration = (duration) => {
    console.log("onDuration", duration);
    // setState({ duration });
  };

  const handleClickFullscreen = () => {
    // screenfull.request(findDOMNode(player));
  };

  const pl = section.playlist ? section.playlist.playlistItem : [];
  const playlist = pl.map((item) => item.url);

  const defaultVideo = playlist[0];

  // const playerRef = useRef();
  // console.log(playlist[0]);
  const [url, setUrl] = useState(playlist);

  return (
    <div>
      <StyledSubHead>{section.title ? section.title : ""}</StyledSubHead>
      <div dangerouslySetInnerHTML={createMarkup(section.richtext)}></div>
      <StyledVideoButtonGroup>
        {pl.map((item, key) => {
          return renderLoadButton(item.url, item.text, key);
        })}
      </StyledVideoButtonGroup>
      <div>
        <ReactPlayer
          style={{ padding: 0 }}
          // ref={playerRef}
          // className="react-player"
          width="200hw"
          // height="100%"
          // url={state.url || defaultVideo}
          url={state.url}
          pip={state.pip}
          playing={state.playing} //{playing}
          controls={true}
          light={state.light}
          loop={state.loop}
          playbackRate={state.playbackRate}
          volume={state.volume}
          muted={state.muted}
          onReady={() => console.log("onReady")}
          onStart={() => console.log("onStart")}
          onPlay={handlePlay}
          onEnablePIP={handleEnablePIP}
          onDisablePIP={handleDisablePIP}
          // onPause={handlePause}
          onBuffer={() => console.log("onBuffer")}
          onPlaybackRateChange={handleOnPlaybackRateChange}
          // onSeek={(e) => console.log("onSeek", e)}
          onEnded={handleEnded}
          onError={(e) => console.log("onError", e)}
          onProgress={handleProgress}
          onDuration={handleDuration}
          playIcon={<Button>Play</Button>}
        />
      </div>
      <div
        style={{
          // display: "flex",
          backgroundColor: "yellow",
          opacity: 0.2,
          position: "relative",
          flexDirection: "row",
          zIndex: 2000,
        }}
      ></div>
      <div style={{ position: "relative", width: 320 }}>
        {section.description}
      </div>
    </div>
  );
};

const StyledRichText = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "left",
  padding: "10px 10px 20px 20px",
  borderRadius: 5,
  margin: 5,
  // background: theme.palette.background.default,
  [theme.breakpoints.down("lg")]: {
    // padding: 0,
  },
  [theme.breakpoints.down("md")]: {},
}));

const StyledVideoButtonGroup = styled("div")(({ theme }) => ({
  width: 600,
  height: "auto",
  display: "flex",
  flexWrap: "wrap",
  gap: 3,
  [theme.breakpoints.down("lg")]: {
    // padding: 0,
  },
  [theme.breakpoints.down("md")]: {
    width: 300,
  },
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
  // backgroundColor: theme.palette.background.default,
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

      <Box
        style={{
          // backgroundColor: theme.palette.background.default,
          padding: 4,
          // color: theme.palette.secondary.contrastText,
          // maxWidth: "50%",
        }}
      >
        {section.googleMap && (
          <div>
            <GoogleMap
              marker={section.googleMap.marker}
              lat={section.googleMap.lat}
              lng={section.googleMap.lng}
              style={section.googleMap.style}
            />
          </div>
        )}
        {thumb && (
          <>
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
          </>
        )}

        {section.buttons.map((button, key) => {
          const buttonThumb = getThumb(button.image.data.attributes);
          return (
            <Link key={key} style={{ textDecoration: "none" }} to={button.url}>
              {buttonThumb ? (
                <>
                  <Button
                    style={{ float: "left" }}
                    startIcon={
                      <img
                        src={process.env.REACT_APP_STRAPI + buttonThumb.url}
                      />
                    }
                    variant="contained"
                  >
                    {button.text}
                  </Button>
                  <div
                    dangerouslySetInnerHTML={createMarkup(section.richText)}
                  ></div>
                </>
              ) : (
                <Button variant="contained">{button.text}</Button>
              )}
            </Link>
          );
        })}
      </Box>
    </StyledPageSection>
  );
};
