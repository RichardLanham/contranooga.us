import React, { useState } from "react";
//import { useStore } from "../../reducer/store";
import { Button } from "@mui/material";
import { colorLuminance } from "./util";

const ColorDropTarget = (props) => {
  // const classes = useStyles();
  const factor = props.factor;
  // const { state, dispatch } = useStore();

  const mode = props.mode;
  const color = props.color;

  const theme = props.theme;

  const [target, setTarget] = useState("");
  const styleTargets = [
    "set",
    "secondary",
    "error",
    "warning",
    "info",
    "success",
  ];

  const ColorDrop = () => {
    const light = colorLuminance(color.hex.value, Math.abs(factor));
    const dark = colorLuminance(color.hex.value, factor);

    return (
      <Button
        className="fade-in-image"
        title={color.hex.value}
        style={{
          padding: 0,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 33,
          //marginBottom: 3,
          height: 30,
          color: theme.palette["secondary"].contrastText,
        }}
      >
        <div
          style={{
            ...theme.typography.caption,
            position: "absolute",
            top: 4,
            left: 6,
            margin: 1,
            color: color.contrast.value,
            borderRadius: 3,
          }}
        >
          {color.hex.clean}
        </div>
        <div
          //className={classes.innerLeaft}
          title={light.replace("#", "")}
          style={{ backgroundColor: light, width: 20 }}
        >
          &nbsp;
        </div>
        <div
          //className={classes.innerLeaft}
          style={{ backgroundColor: color.hex.value, width: 20 }}
        >
          &nbsp;
        </div>
        <div
          //className={classes.innerLeaft}
          title={dark.replace("#", "")}
          style={{ backgroundColor: dark, width: 20 }}
        >
          &nbsp;
        </div>
      </Button>
    );
  };

  return (
    <div style={theme.flexRows}>
      <ColorDrop />
    </div>
  );
};

export default ColorDropTarget;
