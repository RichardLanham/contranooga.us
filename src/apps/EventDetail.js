import React, { useState } from "react";
import {
  // FormLabel,
  // InputLabel,
  Button,
  // IconButton,
  // Input,
  // Select,
  // MenuItem,
  // TextareaAutosize,
  // Zoom,
  ClickAwayListener,
} from "@mui/material";

import { useTheme, styled } from "@mui/material/styles";

import { createMarkup } from "../apps/functions";

const EventDetail = ({ currentEvent }) => {
  //   console.log(props);
  const theme = useTheme();
  const [current] = useState(currentEvent);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const handleClick = () => {
    console.log(current);
    setShowDetails((prev) => !prev);
  };

  if (!showDetails) {
    return (
      <div
        style={{
          position: "absolute",
          display: showDetails ? "none" : "inline",
          marginLeft: 10,
          //height: 50,
          //   whiteSpace: "nowrap",
        }}
      >
        <Button
          style={{
            ...theme.typography.body2,
            textTransform: "none",
            padding: 1,
            margin: 1,
          }}
          onClick={handleClick}
        >
          {current.title}
        </Button>
      </div>
    );
  }

  return (
    <ClickAwayListener onClickAway={() => setShowDetails(false)}>
      <div style={{ postion: "absolute", display: "inline" }}>
        <Button onClick={handleClick}>close</Button>
        <pre>{JSON.stringify(current, null, 3)}</pre>
      </div>
    </ClickAwayListener>
  );
};

export default EventDetail;
