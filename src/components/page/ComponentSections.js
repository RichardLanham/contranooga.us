import React, { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Button,
  Input,
  IconButton,
  MenuItem,
  Zoom,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
// import FaceBookPlayer from "../../apps/FaceBookPlayer";
import SitePlayer from "./SitePlayer";

import GoogleMapApp from "../../apps/GoogleMapApp";

import { GET_PAGE } from "../../gql/site";

import {
  StyledSubHead,
  // StyledPage,
  StyledPageSection,
  StyledHeading,
  StyledBody1,
  // StyledColumns,
  // StyledColumn,
  StyledImgGroup,
  StyledImg,
  StyledImgCaption,
} from "../../styles/PageStyles";

import PledgeForm from "./PledgeForm";

import { getThumb, getLarge } from "../../apps/functions";

import { POST_LEAD } from "../../gql/leadForm";
import { useMutation, useQuery } from "@apollo/client";

import CancelIcon from "@mui/icons-material/Cancel";

import ReactDOMServer from "react-dom/server";
import { doTypesOverlap } from "graphql";

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
                <GoogleMapApp
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
                            <GoogleMapApp
                              markerText={box.googleMap.markerText}
                              markerImage={box.googleMap.markerImage}
                              lat={box.googleMap.lat}
                              lng={box.googleMap.lng}
                              description={box.googleMap.description}
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
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.dark,
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

export const GoogleMap = ({ section }) => {
  const theme = useTheme();

  return (
    <div>
      {section.gmap.map((map, key) => {
        return (
          <div key={key}>
            <GoogleMapApp
              lat={map.lat}
              lng={map.lng}
              zoom={map.zoom}
              markerText={map.markerText}
              markerImage={map.markerImage}
              description={map.description}
            />
          </div>
        );
      })}
    </div>
  );

  // return (
  //   <GoogleMapApp
  //     lat={section.gmap.lat}
  //     lng={section.gmap.lng}
  //     markerText={section.gmap.markerText}
  //     markerImage={section.gmap.markerImage}
  //     description={section.gmap.description}
  //   />
  // );
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
        <div
          onMouseEnter={() => setOpen("none")}
          style={{ ...theme.typography.h4 }}
        >
          Thank you!
        </div>
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
              backgroundColor: theme.palette.background.default,
              color: theme.palette.primary.dark,
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
  const hand = require("../../assets/hand.png");
  return (
    <div style={{ position: "relative", marginTop: 20, marginBottom: 30 }}>
      <div
        style={{
          position: "absolute",
          left: -10,
          top: 0,
          display: "inline",
          zIndex: 10,
        }}
      >
        <img
          src={hand}
          style={{
            width: 35,
            height: 35,
            transform: "rotate(-0.25turn)",
          }}
        />
      </div>
      {section.submitButton ? (
        <Button
          onClick={() => setOpen("form")}
          variant="outlined"
          style={{
            ...theme.typography.h6,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          }}
        >
          {section.submitButton.text}
        </Button>
      ) : (
        <Button
          onClick={() => setOpen("form")}
          variant="outlined"
          style={{
            ...theme.typography.h6,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          }}
        >
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

  const load = (url, label, loaded) => {
    if (loaded) {
      handleStop(stopLabel);
      setStopLabel("");
      return;
    }
    console.log("load");
    setStopLabel(label);
    // console.log("LOADING");
    setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };

  const pl_ = section?.playlistItem || section?.playlist?.playlistItem || [];

  const pl = pl_.slice();

  const playlist = pl.map((item) => item.url);

  // console.log(playlist);

  // const addTopOption = [
  //   {
  //     id: "4110000",
  //     description: "added",
  //     url: "https://youtu.be/8_cfiw0V0FU",
  //     newTab: false,
  //     text: "Playlist",
  //     slug: null,
  //   },
  // ];

  // pl.unshift(addTopOption);

  const defaultVideo = playlist[0];

  // const [listVal, setListVal] = useState(pl[0]?.text ? pl[0].text : "");
  const [listVal, setListVal] = useState("Playlist...");

  const [stopLabel, setStopLabel] = useState("");

  const handleChangeTrack = (event) => {
    console.log("handleChangeTrack");
    event.stopPropagation();
    setListVal(event.target.value);
    const targ = pl.find((item) => item.text === event.target.value);
    //console.log(targ);
    load(targ.url);
  };

  useEffect(() => {
    //pl.length > 0 && load(pl[0].url);
  }, [pl]);

  const renderLoadButton = (url, label, key) => {
    return (
      <Button
        // variant="outline"
        key={key}
        onClick={() => load(url, label, label === stopLabel)}
        style={{
          // minWidth: 100,
          // maxWidth: 250,
          // maxHeight: 100,
          whiteSpace: "nowrap",
          padding: 1,
          margin: 1,
          // color: theme.palette.primary.contrastText,
          // backgroundColor: theme.palette.secondary.main,
          backgroundColor:
            label === stopLabel
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
          color:
            label === stopLabel
              ? theme.palette.primary.contrastText
              : theme.palette.secondary.contrastText,
        }}
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
    // console.log("onProgress", state);
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
    // console.log("onDuration", duration);
    // setState({ duration });
  };

  const handleClickFullscreen = () => {
    // screenfull.request(findDOMNode(player));
  };

  // const playerRef = useRef();
  // console.log(playlist[0]);
  const [url, setUrl] = useState(playlist);

  const StyledVideoButtonGroup = styled("div")(({ theme }) => ({
    // ...theme.flexRows,
    // flexWrap: "wrap",
    // gap: 3,
    [theme.breakpoints.down("lg")]: {
      // padding: 0,
    },
    [theme.breakpoints.down("md")]: {
      // width: 300,
      // display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: 300,
      display: "none",
    },
  }));

  const StyledPlayListSelect = styled("div")(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("lg")]: {
      // padding: 0,
    },
    [theme.breakpoints.down("md")]: {
      // display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  }));

  // console.log("down here");
  return (
    <div style={{ zIndex: 3000 }}>
      <div dangerouslySetInnerHTML={createMarkup(section.richtext)}></div>
      <StyledPlayListSelect>
        <div style={{ display: "block", flexWrap: "wrap" }}>
          <span
            style={{
              ...theme.typography.h5,
              fontSize: "larger",
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.primary.contrastText,
              marginRight: 10,
              whiteSpace: "nowrap",
              borderRadius: 5,
            }}
          >
            {section.title ? section.title : ""}
          </span>
          <Select
            style={{ ...theme.typography.h5 }}
            onChange={handleChangeTrack}
            name="Play List"
            // value={<MenuItem>{listVal}</MenuItem>}
            value={listVal}
            // onChange={(e) => handle(e)}
          >
            <MenuItem value={"Playlist..."}>Playlist...</MenuItem>
            {pl.map((item, key) => {
              console.log(item);
              return (
                <MenuItem key={key} value={item.text}>
                  {item.text}
                </MenuItem>
              );
            })}
          </Select>
        </div>

        <Button
          style={{ display: "none" }}
          onClick={() => load(url)}
          variant="contained"
        >
          Play {listVal}
        </Button>
        <Button
          onClick={handleStop}
          style={{
            display: state.url === null ? "none" : "inline",
            padding: 0,
            maring: 0,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            // display: "inline",
          }}
          variant="outline"
        >
          Stop {listVal}
        </Button>
      </StyledPlayListSelect>

      <StyledVideoButtonGroup>
        <span
          style={{
            ...theme.typography.h5,
            fontSize: "larger",
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.contrastText,
            marginRight: 10,
            whiteSpace: "nowrap",
            borderRadius: 5,
          }}
        >
          {section.title ? section.title : ""}
        </span>
        {pl.map((item, key) => {
          return renderLoadButton(item.url, item.text, key);
        })}
        <Button
          onClick={handleStop}
          style={{
            display: state.url === null ? "none" : "inline",
            display: "none", // hiding this now.
            padding: 0,
            maring: 0,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            // display: "inline",
          }}
          variant="outline"
        >
          Stop {listVal}
        </Button>
      </StyledVideoButtonGroup>
      <div>
        <ReactPlayer
          style={{ padding: 0 }}
          // ref={playerRef}
          // className="react-player"
          // width="200hw"
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
          // onReady={() => console.log("onReady")}
          // onStart={() => console.log("onStart")}
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

// const StyledVideoButtonGroup = styled("div")(({ theme }) => ({
//   border: "4px solid blue",
//   height: 400,
//   // margin: "auto",
//   gap: 3,
//   [theme.breakpoints.down("lg")]: {
//     // padding: 0,
//   },
//   [theme.breakpoints.down("md")]: {
//     // width: 300,
//   },
// }));

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

export const Tabs = ({ section }) => {
  // console.log(section);
  const [show, setShow] = useState("none");

  const theme = useTheme();
  const [slug, setSlug] = useState("");

  const showTab = (e, tab) => {
    console.log(tab);
    e.preventDefault();
    setSlug(tab.slug);
  };
  const tabSectionThumb = getThumb(section?.picture?.data?.attributes);
  const TabHeader = () => {
    // console.log(tabSectionThumb);
    return (
      <div>
        <img src={process.env.REACT_APP_STRAPI + tabSectionThumb.url} />
        <div>{section.label}</div>
        <div>{section.description}</div>
        <div>{section.title}</div>
      </div>
    );
  };

  const TabHomeTabButton = (section) => {
    if (section?.section?.tabs?.type === "link") {
      return (
        <a
          onClick={(e) => e.preventDefault()}
          name="HomeTabButton"
          style={{
            ...theme.typography.h5,
            textDecoration: "none",
            backgroundColor: theme.palette.background.default,
            padding: 3,
            borderRadius: 15,
            borderBottom: 20,
            border: "1px solid blue",
          }}
          href="#"
        >
          {section.section.tabs.title}
        </a>
      );
    }

    if (section?.section?.tabs?.type === "button") {
      return <Button variant="outline">{section?.section?.tabs?.title}</Button>;
    }
    if (section?.section?.tabs?.type === "image") {
      return (
        <a href="#">
          <img
            onClick={(e) => e.preventDefault()}
            src={process.env.REACT_APP_STRAPI + tabSectionThumb.url}
          />
        </a>
      );
    }

    return <div>nothing to make</div>;
  };

  const handleTabClick = (e) => {
    console.log(e.currentTarget);
  };

  if (!section.tabs) {
    return <TabHeader section={section} />;
  }
  return (
    <div>
      <TabHeader section={section} />
      <TabHomeTabButton section={section} />
      <div>
        <div
          style={{
            // ...theme.flexRows,
            width: "100%",
            marginTop: 20,
            // border: "1px solid red",
          }}
        >
          {section.tabs.tab.map((tab, key) => {
            const tabThumb = getThumb(tab.image?.data?.attributes);
            // console.log(tabThumb); // putting tab content below
            return (
              <div
                key={key}
                style={{ marginBottom: 20, marginLeft: 10, marginRight: 10 }}
              >
                <div name="tabButtonWrap" onClick={(e) => showTab(e, tab)}>
                  {tab.type === "button" ? (
                    <Button
                      id={tab.slug}
                      //onClick={(e) => handleTabClick()}
                      variant="outline"
                    >
                      {tab.text}
                    </Button>
                  ) : tab.type === "image" ? (
                    tabThumb && (
                      <a href="#">
                        <img
                          src={process.env.REACT_APP_STRAPI + tabThumb.url}
                        />
                      </a>
                    )
                  ) : (
                    <a
                      name={tab.slug}
                      //onClick={(e) => handleTabClick(e)}
                      style={{
                        ...theme.typography.h5,
                        textDecoration: "none",
                        backgroundColor: theme.palette.background.default,
                        padding: 3,
                        borderRadius: 15,
                      }}
                      href="#"
                    >
                      {tab.text}
                    </a>
                  )}
                </div>

                <div
                  id={tab.slug}
                  name="tabContentWrap"
                  style={{ display: "none" }}
                >
                  {tab.inputs.map((input, key) => {
                    return (
                      <div key={key}>
                        <pre style={{ display: "none" }}>
                          {JSON.stringify(input, null, 3)}
                        </pre>
                        {input.richtext && (
                          <div
                            dangerouslySetInnerHTML={createMarkup(
                              input.richtext
                            )}
                          ></div>
                        )}

                        {input.playlist && (
                          <div>
                            <LargeVideo section={input.playlist} />
                          </div>
                        )}

                        {input.googleMap && (
                          <div>
                            <GoogleMapApp
                              lat={input.googleMap.lat}
                              lng={input.googleMap.lng}
                              zoom={input.googleMap.zoom}
                              markerText={input.googleMap.markerText}
                              markerImage={input.googleMap.markerImage}
                              description={input.googleMap.description}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {true && ( // render default content of section Tabs, no clicks
            <Zoom in={true}>
              <div>
                <pre style={{ display: "none" }}>
                  {JSON.stringify(section, null, 3)}
                </pre>
                {section.inputs.map((input, key) => {
                  return (
                    <div key={key}>
                      <pre style={{ display: "none" }}>
                        {JSON.stringify(input, null, 3)}
                      </pre>
                      {input.richtext && (
                        <div
                          dangerouslySetInnerHTML={createMarkup(input.richtext)}
                        ></div>
                      )}

                      {input.playlist && (
                        <div>
                          <LargeVideo section={input.playlist} />
                        </div>
                      )}

                      {input.googleMap && (
                        <div>
                          <GoogleMapApp
                            lat={input.googleMap.lat}
                            lng={input.googleMap.lng}
                            zoom={input.googleMap.zoom}
                            markerText={input.googleMap.markerText}
                            markerImage={input.googleMap.markerImage}
                            description={input.googleMap.description}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Zoom>
          )}
          {section.tabs.tab.map((page, key) => {
            {
              // HIDE TAB CONTENT HERE
              return (
                <div key={key}>
                  <pre style={{ display: "none" }}>
                    {JSON.stringify(page, null, 3)}
                  </pre>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

// Below is seen as Page -> ContentSection -> "DeepTabs" in the Strapi UI
export const FeatureColumnsGroup = ({ section }) => {
  const theme = useTheme();
  const [slug, setSlug] = useState("");
  const [page, setPage] = useState([]);

  const { data, loading, error } = useQuery(GET_PAGE, {
    variables: { slug: slug, publicationState: "LIVE", locale: "en" },
  });

  useEffect(() => {
    if (!loading) {
      if (!error) {
        // console.log(data);
        setPage(data.pages.data);
      }
    }
  }, [slug, data]);

  const showTab = (e, tab) => {
    console.log(slug);
    e.preventDefault();
    setSlug(tab.slug);
  };
  const setpage = (e) => {
    e.preventDefault();
    console.log(slug);
    setSlug("");
    setPage([]);
  };
  const tabs_Thumb = getThumb(section?.tabs?.icon?.data?.attributes);
  return (
    <div>
      {section.tabs.homeTabType === "link" && (
        <a
          onClick={(e) => setpage(e)}
          name="HomeTabButton"
          style={{
            ...theme.typography.h5,
            textDecoration: "none",
            backgroundColor: theme.palette.background.default,
            padding: 3,
            borderRadius: 15,
            borderBottom: 20,
            border: "1px solid blue",
          }}
          href="#"
        >
          {section.tabs.title}
        </a>
      )}
      {section.tabs.homeTabType === "button" && (
        <Button onClick={(e) => setpage(e)} variant="outline">
          {section.tabs.title}
        </Button>
      )}
      {section.tabs.homeTabType === "image" && (
        <a onClick={(e) => setpage(e)} href="#">
          <img src={process.env.REACT_APP_STRAPI + tabs_Thumb.url} />
        </a>
      )}
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            marginTop: 20,
            // border: "1px solid red",
          }}
        >
          {section.tabs.tab.map((t, key) => {
            const tabThumb = getThumb(t.image?.data?.attributes);
            return (
              <div
                key={key}
                style={{ marginBottom: 20, marginLeft: 10, marginRight: 10 }}
              >
                <div onClick={(e) => showTab(e, t)}>
                  {t.type === "button" ? (
                    <Button variant="outline">{t.text}</Button>
                  ) : t.type === "image" ? (
                    tabThumb && (
                      <a href="#">
                        <img
                          src={process.env.REACT_APP_STRAPI + tabThumb.url}
                        />
                      </a>
                    )
                  ) : (
                    <a
                      style={{
                        ...theme.typography.h5,
                        textDecoration: "none",
                        backgroundColor: theme.palette.background.default,
                        padding: 3,
                        borderRadius: 15,
                      }}
                      href="#"
                    >
                      {t.text}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {page.length === 0 && ( // render default content of section Tabs, no clicks
            <Zoom in={true}>
              <div>
                <pre style={{ display: "none" }}>
                  {JSON.stringify(section.inputs, null, 3)}
                </pre>
                {section.inputs && (
                  <div>
                    {section.inputs.map((input, key) => {
                      return (
                        <div key={key}>
                          {input.playlist && (
                            <div>
                              <LargeVideo section={input.playlist} />
                            </div>
                          )}

                          {input.richtext && (
                            <div
                              dangerouslySetInnerHTML={createMarkup(
                                input.richtext
                              )}
                            ></div>
                          )}
                          {input.googleMap && (
                            <div>
                              <GoogleMapApp
                                lat={input.googleMap.lat}
                                lng={input.googleMap.lng}
                                zoom={input.googleMap.zoom}
                                markerText={input.googleMap.markerText}
                                markerImage={input.googleMap.markerImage}
                                description={input.googleMap.description}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </Zoom>
          )}
          {page.map((page, key) => {
            // render content of the clicked tab/page
            console.log(page);
            {
              const source = "/page/" + page.attributes.slug;

              const pageSrc = page?.attributes?.contentSections.map(
                (section, key) => {
                  // ComponentSections
                  switch (section.__typename.replace("ComponentSections", "")) {
                    case "GoogleMap":
                      return <GoogleMap key={key} section={section} />;
                    // case "LeadForm":
                    //   return <LeadForm key={key} section={section} />;
                    // case "FlexGroup":
                    //   return <FlexGroup key={key} section={section} />;
                    case "RichText":
                      return <RichText key={key} section={section} />;

                    // case "Hero":
                    //   return <Hero key={key} section={section} />;
                    // case "PageFeature":
                    //   return <Feature key={key} section={section} />;
                    // case "LargeVideo":
                    //   return <LargeVideo key={key} section={section} />;
                    // case "FeatureColumnsGroup":
                    //   return (
                    //     <FeatureColumnsGroup key={key} section={section} />
                    //   );
                    // case "FeatureRowsGroup":
                    //   return <FeatureRowsGroup key={key} section={section} />;
                    // case "BottomActions":
                    //   return <BottomActions key={key} section={section} />;
                    case "PledgeForm":
                      return (
                        <div key={key}>
                          <StyledPageSection>
                            <PledgeForm key={key} section={section} />
                          </StyledPageSection>
                        </div>
                      );
                    default:
                      return <></>;
                      break;
                  }
                }
              );
              // console.log(pagesrc[0]);
              const NewSrc = ReactDOMServer.renderToString(pageSrc);
              return <div key={key}>{pageSrc}</div>;
            }
          })}
        </div>
      </div>
    </div>
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

const HeroButton = ({ section }) => {
  const theme = useTheme();
  // console.log(section);
  const buttonThumb = getThumb(section?.button?.image?.data?.attributes);

  const url = section?.button?.url;
  const slug = section?.button?.slug;

  let goTo = slug ? slug : url;

  if (slug) {
    goTo = "/page/" + goTo;
  }

  console.log(goTo);

  let localLink = true;

  if (goTo.startsWith("http")) {
    localLink = false;
  }

  const [target, setTarget] = useState(localLink ? "_self" : "_new");

  return (
    <div>
      {section?.button?.type === "button" && localLink && (
        <Button
          target={target}
          style={{
            maxWidth: 200,
            maxHeight: 50,
            backgroundColor: theme.palette.primary.main,
            position: "absolute",
            top: 0,
            right: 0,
          }}
          title={section.title}
          variant="contained"
          component={Link}
          to={goTo}
        >
          {section?.button?.text}
        </Button>
      )}

      {section?.button?.type === "link" && (
        <Link
          style={{ position: "absolute", top: 0, right: 0 }}
          target={target}
          title={section.title}
          element="a"
          to={goTo}
        >
          {section?.button?.text}
        </Link>
      )}

      {section?.button?.type === "link" && section?.url && (
        <Link
          style={{ position: "absolute", top: 0, right: 0 }}
          target={target}
          title={section.title}
          element="a"
          href={goTo}
        >
          {section?.button?.text}
        </Link>
      )}

      {!section?.button?.type && (
        <Button
          target={target}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: theme.palette.secondary.main,
            maxWidth: 200,
            maxHeight: 50,
          }}
          variant="contained"
          component={Link}
          to={goTo}
        >
          {section?.button?.text || "button label text missing"}
        </Button>
      )}

      {section?.button?.type === "image" && section?.button.image && (
        <Link target={target} to={goTo}>
          <Button
            title={section.title}
            style={{
              float: "left",
              backgroundColor: theme.palette.secondary.main,
            }}
            startIcon={
              <img
                style={{ width: buttonThumb.width, height: "auto" }}
                src={process.env.REACT_APP_STRAPI + buttonThumb.url}
              />
            }
            variant="contained"
          >
            {section?.button.text}
          </Button>
        </Link>
      )}
    </div>
  );
};
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

const StyledHeroText = styled("p")(({ theme }) => ({
  // width: "30%",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    // width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    // width: 300,
  },
}));
export const Hero = ({ section }) => {
  //const img = section.data.attr;
  const thumb = getThumb(section?.picture?.data?.attributes);
  console.log(section.text);

  const theme = useTheme();
  return (
    <StyledPageSection>
      <div style={{ position: "relative" }}>
        <StyledHeading>{section.label}</StyledHeading>

        {section.button && <HeroButton section={section} />}
      </div>
      <StyledHeroBox>
        {thumb && (
          <img
            style={{ width: thumb.width, height: thumb.height, float: "left" }}
            src={process.env.REACT_APP_STRAPI + thumb.url}
          />
        )}
        <StyledHeroText
          dangerouslySetInnerHTML={createMarkup(section?.text?.content)}
        ></StyledHeroText>

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
