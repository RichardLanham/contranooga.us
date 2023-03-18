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
} from "@mui/material";

import { useTheme, styled } from "@mui/material/styles";

const EventDetail = (props) => {
  //   console.log(props);
  const theme = useTheme();
  const [current] = useState(props.currentEvent);
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
        }}
      >
        <Button
          variant="outlined"
          style={{
            ...theme.typography.body2,
            textTransform: "none",
            padding: 1,
            margin: 1,
          }}
          onClick={handleClick}
        >
          details ...
        </Button>
      </div>
    );
  }

  return (
    <div style={{ postion: "absolute", display: "inline" }}>
      <Button onClick={handleClick}>close</Button>
      <pre>{JSON.stringify(current, null, 3)}</pre>
    </div>
  );
};

export default EventDetail;
