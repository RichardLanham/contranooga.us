import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { eventEmitter } from "../../events.tsx";
import Button from "@mui/material/Button";
import { getContrastHex } from "./util";
// const useStyles = makeStyles({
//   root: {
// // height: 40,
// width: 200,

// display: "flex",
// justifyContent: "right",
// textTransform: "lowercase",
// position: "absolute",
// top: -5,
// left: 0,
// backgroundColor: theme.palette.grey[400],
// boxShadow: theme.shadows[3],

// zIndex: theme.zIndex.modal,
// borderRadius: 10,
// alignItems: "right",
// verticalAlign: "middle",
//   },
//   label: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.primary.contrastText,
//     fontWeight: "bold",
//   },
//   applyButton: {
//     ...theme.submitButton,
//   },
//   scopeChecks: {
//     position: "absolute",
//     top: 10,
//     left: 125,
//   },
// });

const DragHover = () => {
  // const classes = useStyles();
  const theme = useTheme();
  const [bgHex, setBgHex] = useState("#000");
  const [colorHex, setColorHex] = useState("");
  const [target, setTarget] = useState("");
  const [contrast, setContrast] = useState("");

  useEffect(() => {
    console.log("Showhover");
    let chk = contrast;
    if (!bgHex) {
      return;
    }
    const contrastHex = getContrastHex(bgHex, 1);
    setContrast(contrastHex);
  }, [bgHex]);

  useEffect(() => {
    eventEmitter.subscribe("DNDISOVER", (hex) => {
      // console.log(event);
      if (hex) {
        setBgHex(hex.hex.value);
        setColorHex(hex.contrast);
      } else {
        //setBgHex("");
        //setColorHex("");
      }

      setTarget("select ");
      if (hex.dropped) {
        setTarget("'" + hex.dropped);
        // classes.root.justifyContent = "left";
      }

      if (hex.disappear) {
        setTarget("");
        setColorHex("");
        setBgHex("");
      }
    });
  }, []);

  return (
    <div
      style={{
        // height: 40,
        width: "100%",

        display: "flex",
        justifyContent: "right",
        textTransform: "lowercase",
        position: "absolute",
        top: -5,
        left: 0,
        backgroundColor: theme.palette.grey[400],
        boxShadow: theme.shadows[3],

        zIndex: theme.zIndex.modal,
        borderRadius: 10,
        alignItems: "right",
        verticalAlign: "middle",
        display: target === "" ? "none" : "block",
      }}
    >
      <Button
        style={{
          width: "100%",
          whiteSpace: "nowrap",
          backgroundColor: bgHex,
          textTransform: "lowercase",
          color: contrast,
          padding: 0,
          margin: 0,
          borderRadius: 10,
          textAlign: "right",
          boxShadow: theme.shadows[4],
          position: "absolute",
          top: 0,
        }}
      >
        {target} {bgHex}
      </Button>
    </div>
  );
};

export default DragHover;
