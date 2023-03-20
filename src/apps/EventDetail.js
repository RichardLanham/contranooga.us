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

// import { createMarkup } from "../apps/functions";

const EventDetail = ({ currentEvent }) => {
  //   const future = new Date(currentEvent.end) >= new Date();
  //let title = (" " + currentEvent.title).slice(1); // by val

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

  const StyledCard = styled("div")(({ theme }) => ({
    // postion: "absolute",
    border: "1px solid red",
    // left: -100,
    zIndex: 5000,
    backgroundColor: "yellow",
    // display: "inline",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  }));

  if (!showDetails) {
    return (
      <div
        style={{
          //   position: "absolute",
          display: showDetails ? "none" : "block",
          //   marginLeft: 10,
          //height: 50,
          //   whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            ...theme.typography.caption,
            // textTransform: "none",
            padding: 1,
            margin: 0,
            // marginTop: 10,
            // paddingBottom: 10,
            border: "1px solid",
            borderColor: theme.palette.primary.dark,
            // height: 80,
            // blockSize: "fit-content",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          {current.title}
        </div>
      </div>
    );
  }

  return (
    <ClickAwayListener onClickAway={() => setShowDetails(false)}>
      <StyledCard>
        <Button onClick={handleClick}>close</Button>
        <pre>{JSON.stringify(current, null, 3)}</pre>
      </StyledCard>
    </ClickAwayListener>
  );
};

export default EventDetail;
