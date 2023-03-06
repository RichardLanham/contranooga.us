import { useState, useEffect, useRef } from "react";
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

import GoogleMapApp from "../../../apps/GoogleMapApp";

import { GET_PAGE } from "../../../gql/site";

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
} from "../../../styles/PageStyles";

import PledgeForm from "../PledgeForm";

import { getThumb, createMarkup, getLarge } from "../../../apps/functions";

import { POST_LEAD } from "../../../gql/leadForm";
import { useMutation, useQuery } from "@apollo/client";

import CancelIcon from "@mui/icons-material/Cancel";

import ReactDOMServer from "react-dom/server";
import { doTypesOverlap } from "graphql";

const LargeVideo = ({ section }) => {
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
  // Load
  const load = (url, label, loaded) => {
    // playerRef.current.width = "90vw";
    if (label === "Playlist...") {
      handleStop();
      return;
    }
    if (loaded) {
      handleStop(stopLabel);
      setStopLabel("");
      return;
    }
    // console.log("load");
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
    // onClick={() => load(url, label, label === stopLabel)}
    load(targ.url, targ.text);
  };

  useEffect(() => {
    pl_.length > 0 && load(pl_[0].url);
    setListVal(pl_[0].text);
  }, [pl_]);

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
    setListVal("Playlist...");
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

  const playerRef = useRef();
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

  const StyledPlayerWrap = styled("div")(({ theme }) => ({
    // border: "1px none",
    // borderColor: theme.palette.info.light,
    width: state.url === null ? 100 : 400,
    height: state.url === null ? 100 : 225,
    // height: "auto !important",
    // aspectRatio: "16/9",
    // objectFit: "fill",
    [theme.breakpoints.down("lg")]: {
      // padding: 0,
    },
    [theme.breakpoints.down("md")]: {
      // width: state.url === null ? 100 : 400,
      // height: state.url === null ? 100 : "min-content",
    },
    [theme.breakpoints.down("sm")]: {
      width: state.url === null ? 100 : 300,
      height: state.url === null ? 100 : 170,
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
              // console.log(item);
              return (
                <MenuItem key={key} value={item.text}>
                  {item.text}
                </MenuItem>
              );
            })}
          </Select>
          <Button
            onClick={handleStop}
            style={{
              display:
                state.url === null ||
                listVal.toLocaleLowerCase() === "playlist..."
                  ? "none"
                  : "inline",

              padding: 0,
              maring: 0,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              // display: "inline",
            }}
            variant="outline"
          >
            close
          </Button>
        </div>

        <Button
          style={{ display: "none" }}
          onClick={() => load(url)}
          variant="contained"
        >
          Play {listVal}
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
          close {listVal}
        </Button>
      </StyledVideoButtonGroup>
      <StyledPlayerWrap>
        <div
          style={{
            ...theme.typography.h6,
            display: state.url === null ? "block" : "none",
            height: "min-content",
          }}
        >
          Select from the Playlist
        </div>
        <ReactPlayer
          // style={{ objectFit: "cover" }}
          ref={playerRef}
          // className="react-player"
          width="100%"
          height="100%"
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
          close {listVal}
        </Button>
      </StyledPlayerWrap>

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

export default LargeVideo;
