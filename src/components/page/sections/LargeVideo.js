import { useState, useEffect, useRef } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Button, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ReactPlayer from "react-player";
import { createMarkup } from "../../../apps/functions";

import Playlist from "./Playlist";

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

  const pl_ = section?.playlistItem || section?.playlist?.playlistItem || [];
  const pl = pl_.slice();
  const playlist = pl.map((item) => item.url);

  // const defaultVideo = playlist[0];

  const [listVal, setListVal] = useState("Playlist...");
  const [stopLabel, setStopLabel] = useState("");

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
        <div>
          <span
            style={{
              ...theme.typography.caption,
            }}
          >
            {section.title}
          </span>
          <Playlist section={section} />
        </div>
      </div>
    </div>
  );
};

export default LargeVideo;
