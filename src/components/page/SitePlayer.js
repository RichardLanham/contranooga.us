import React, { useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import ReactPlayer from "react-player";
import { Box, Card, Button, Input, IconButton } from "@mui/material";

const SitePlayer = ({ section }) => {
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
      <Button key={key} onClick={() => load(url)}>
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

  //   const playerRef = useRef();
  // console.log(playlist[0]);
  const [url, setUrl] = useState(playlist);

  return (
    <div>
      <ReactPlayer
        style={{ padding: 0 }}
        // ref={playerRef}
        // className="react-player"
        width="200hw"
        // height="100%"
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
        onPause={handlePause}
        onBuffer={() => console.log("onBuffer")}
        onPlaybackRateChange={handleOnPlaybackRateChange}
        onSeek={(e) => console.log("onSeek", e)}
        onEnded={handleEnded}
        onError={(e) => console.log("onError", e)}
        onProgress={handleProgress}
        onDuration={handleDuration}
        // playIcon={<button>Play</button>}
      />
    </div>
  );
};

export default SitePlayer;
