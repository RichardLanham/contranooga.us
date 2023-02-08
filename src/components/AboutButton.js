import React, { useState } from "react";
import Button from "@mui/material/Button";
const AboutButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Button
      style={
        {
          // backgroundColor: theme.palette.secondary.main,
          // color: theme.palette.secondary.contrastText,
          // border: location.pathname === props.page ? "2px solid" : 0,
          // borderColor: theme.palette.info.dark,
        }
      }
      aria-controls={open ? "demo-positioned-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      //   onClick={handleClick}
    >
      About
    </Button>
  );
};

export default AboutButton;
