import { useState, useEffect, useRef } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Button, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ReactPlayer from "react-player";
import { createMarkup } from "../../../apps/functions";

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

  // const defaultVideo = playlist[0];

  const [listVal, setListVal] = useState("Playlist...");
  const [stopLabel, setStopLabel] = useState("");

  const handleChangeTrack = (event) => {
    //    console.log("handleChangeTrack");
    event.stopPropagation();
    setListVal(event.target.value);
    const targ = pl.find((item) => item.text === event.target.value);
    load(targ.url, targ.text);
  };

  useEffect(() => {
    pl_.length > 0 && load(pl_[0].url);
    setListVal(pl_[0].text);
  }, [pl_]);

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

  const StyledButton = styled(Button)(({ theme }) => ({
    // maxWidth: 150,
    // height: "fit-content",
    width: "fit-content",
    justifyContent: "left",
    // maxHeight: 80,
    padding: 1,
    margin: 1,
    [theme.breakpoints.down("lg")]: {
      // padding: 0,
    },
    [theme.breakpoints.down("md")]: {
      // flexDirection: "row",
    },
    [theme.breakpoints.down("sm")]: {
      // display: "none",
      // maxWidth: 100,
      ...theme.typography.caption,
    },
  }));

  const renderLoadButton = (url, label, key) => {
    return (
      <StyledButton
        // variant="outlined"
        key={key}
        onClick={() => load(url, label, label === stopLabel)}
        style={{
          // ...theme.typography.caption,

          backgroundColor:
            label === stopLabel
              ? theme.palette.primary.main
              : theme.palette.background.default,
          color:
            label === stopLabel
              ? theme.palette.primary.contrastText
              : theme.palette.info.dark,
        }}
      >
        {label}
      </StyledButton>
    );
  };

  const StyledVideoButtonGroup = styled("div")(({ theme }) => ({
    // gap: 2,
    // ...theme.flexRows,
    // flexDirection: "column",
    width: 300,
    // maxHeight: 200,

    overFlowX: "scroll",
    [theme.breakpoints.down("lg")]: {
      // padding: 0,
    },
    [theme.breakpoints.down("md")]: {
      // flexDirection: "row",
      // flexWrap: "wrap",
      // ...theme.typography.caption,
      // flexWrap: "wrap",
    },
    [theme.breakpoints.down("sm")]: {
      // display: "flex",
      // // flexDirection: "column",
      // justifyContent: "center",
      // alignContent: "left",
      // display: "none",
    },
  }));

  const StyledPlayerWrap = styled("div")(({ theme }) => ({
    width: state.url === null ? 100 : 400,
    height: state.url === null ? 100 : 225,
    marginRight: 5,
    [theme.breakpoints.down("lg")]: {
      // padding: 0,
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: state.url === null ? 100 : 300,
      height: state.url === null ? 100 : 170,
    },
  }));

  return (
    <div>
      <div dangerouslySetInnerHTML={createMarkup(section.richtext)}></div>
      <div style={{ ...theme.typography.subtitle1 }}>{section.description}</div>
      <div
        style={{
          ...theme.flexRows,
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <StyledPlayerWrap>
          <ReactPlayer
            // style={{ objectFit: "cover" }}

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
          />
        </StyledPlayerWrap>
        <div>
          <span
            style={{
              ...theme.typography.caption,
            }}
          >
            {section.title}
          </span>
          <StyledVideoButtonGroup>
            {pl.map((item, key) => {
              return renderLoadButton(item.url, item.text, key);
            })}
          </StyledVideoButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default LargeVideo;
