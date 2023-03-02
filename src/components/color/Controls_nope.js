import React, { useState, useCallback, useEffect } from "react";
import { Button, Typography } from "@mui/material";

import CustomPicker from "./CustomPicker";
import SliderOffset from "./SliderOffset";
//import InputHex from "./InputHex";
import { eventEmitter } from "../../events.tsx";
import { getContrastHex } from "./util";

import { StyledColorSections } from "../../styles/ComponentStyles";

import {
  //getLuminance,
  hexToRgb,
  rgbToHex,
  darken,
  lighten,
  augmentColor,
  //TextField,
} from "@mui/material";

//import { colorLuminance } from "../util/functions";

//import { useStore } from "../../reducer/store";
import { useTheme, styled } from "@mui/material/styles";
import { Style } from "@mui/icons-material";

// You can now get a ref directly to the DOM button:

const Controls = (props) => {
  // console.log("Primary_Tonaloffset_Reset_Controls");
  //const ref = React.createRef();
  const doSetHex = props.doSetHex;
  //  // console.log("Primary_Tonaloffset_Reset_Controls");
  // const forceValue = props.forceValue;
  // const classes = useStyles();
  const [contrast, setContrast] = useState("");
  const transformThemeBranch = props.transformThemeBranch;
  const clearThemeFromStorage = props.clearThemeFromStorage;
  //const getContrastHex = props.getContrastHex;
  const showSaveThemeButton = props.showApply;
  const showReset = props.showReset;
  const theme = useTheme();
  const [color, setColor] = useState(theme.palette.primary.main);
  //const { state, dispatch } = useStore();

  const handleApply = (newcolor, targ) => {
    const payload = {
      hex: newcolor,
      dark: "",
      light: "",
      contrast: "",
    };

    transformThemeBranch(payload, targ, true);
  };

  const ControlsUi = (props) => {
    //// console.log("ControlsUi");
    const doSetHex = props.doSetHex;
    const [newColor, setNewColor] = useState("");
    const [enabled, setEnabled] = useState(false);
    // const [color, setColor] = useState(theme.palette[targ].main);

    const [targ, setTarg] = useState(
      window.localStorage.getItem("targ")
        ? window.localStorage.getItem("targ")
        : "primary"
    );
    const [attrib, setAttrib] = useState("primary");

    const [newLight, setLight] = useState(theme.palette[targ].light);
    const [newDark, setDark] = useState(theme.palette[targ].dark);

    const [tonalOffset, setTonalOffset] = useState(theme.palette.tonalOffset);
    const handleTonalChange = (val) => {
      let offset = val;
      let commit = false;
      if (typeof val === "object") {
        offset = val.v;
        commit = true;
      }
      setTonalOffset(offset * 0.01);
      window.localStorage.setItem("tonalOffset", offset);

      if (commit) {
        const palette = theme.palette;
        palette.tonalOffset = Number((offset * 0.01).toFixed(2));
        theme.palette = { ...theme.palette, ...palette };

        window.localStorage.setItem("theme", JSON.stringify(theme));
      }
    };

    const [userHex, setUserHex] = useState({});

    useEffect(() => {
      // dispatch({ type: "FIXTHIS", payload: "doit" });
      // // console.log("Primary_tonaal_ useEffect");

      if (window.localStorage.getItem("newColor")) {
        // trick
        // setNewColor(window.localStorage.getItem("newColor"));
      }

      setNewColor(theme.palette.primary.main);

      // eventEmitter.subscribe(
      //   "SETCONTROLS",
      //   (settings) => {
      //     // console.log("INPUTHEX at PTRC: " + hex);
      //     setTarg(settings.targ);
      //     // setNewColor("#" + hex);
      //     console.log("SETCONTROLS_Controls");
      //   },
      //   []
      // );

      eventEmitter.subscribe(
        "INPUTHEX",
        (payload) => {
          // console.log("INPUTHEX at PTRC: " + hex);
          setUserHex(payload.hex);
          setNewColor("#" + payload.hex);
          setTarg(payload.targ);
        },
        []
      );
      eventEmitter.subscribe(
        "TONAL",
        (val) => {
          if (Number(val)) {
            //// console.log("touched"); // working here to enable Apply/Reset buttons on Slide touch
            if (newColor === "") {
              // handlePickerChange(theme.palette[targ].main, val);
            }
            //setEnabled(true);
          }
          // // console.log("Emitted: " + val);
          // setTonalOffset(val * 0.01);
          handleTonalChange(val);
        },
        []
      );

      eventEmitter.subscribe("SHADES", (shades) => {
        theme.palette = {
          ...theme.palette,
          ...{ muiToolShades: shades },
        };
      });
      return () => {
        eventEmitter.unsubscribe("SHADES");
        // eventEmitter.unsubscribe("SETCONTROLS");
        eventEmitter.unsubscribe("TONAL");
        eventEmitter.unsubscribe("INPUTHEX");
      };
    }, []);

    const handlePickerChange = (c, v) => {
      // setColor(c);
      setNewColor(c);
      window.localStorage.setItem("newColor", c);
      //setTonalOffset(0.2);
      // setTextHex(c);
      const contrastVal = 1;
      const darker = darken(c, 1);
      const lighter = lighten(c, 1);
      // const lighter = colorLuminance(c, 3);
      // const darker = colorLuminance(c, 3);
      const contrastHexDark = getContrastHex(darker, contrastVal);
      const contrastHexLight = getContrastHex(lighter, contrastVal);
      const contrastHexMain = getContrastHex(
        newColor === "" ? theme.palette[targ].main : newColor,
        contrastVal
      );

      const shades = {
        main: newColor,
        dark: darker,
        light: lighter,
        contrastHexDark: contrastHexDark,
        contrastHexLight: contrastHexLight,
        contrastHexMain: contrastHexMain,
      };

      eventEmitter.dispatch("SHADES", shades);

      setDark(darker);
      setLight(lighter);

      if (v) {
        // handleTonalChange({ commit: true, v: v });
      }
    };

    const cancel = () => {
      setColor(theme.palette[targ].main);
      setNewColor(theme.palette[targ].main);
      window.localStorage.setItem("tonalOffset", -1);
    };

    const ApplyResetButtons = () => {
      const contrast = getContrastHex(
        newColor === "" ? theme.palette[targ].main : newColor,
        1
      );

      const StyledButton = styled(Button)(({ theme }) => ({
        width: 50,
        height: 20,
        padding: 0,
        margin: 3,
        marginTop: 10,
        backgroundColor: theme.palette.info.main,
        color: theme.palette.info.contrastText,
        boxShadow: theme.shadows[4],
        "&:hover": {
          boxShadow: theme.shadows[8],
          backgroundColor: theme.palette.info.light,
        },
      }));
      const tonaVal = window.localStorage.getItem("tonalOffset")
        ? window.localStorage.getItem("tonalOffset")
        : -1;
      let enabled =
        (newColor !== theme.palette[targ].main && newColor !== "") ||
        Number(tonaVal) > -1;
      return (
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <StyledButton
            // className={classes.primaryButton}

            onClick={(e) => handleApply(newColor, targ)}
            // onClick={(e) => // console.log("click")}
            disabled={!enabled}
          >
            Apply
          </StyledButton>
          <StyledButton
            //className={classes.primaryButton}

            onClick={cancel}
            disabled={!enabled}
          >
            reset
          </StyledButton>
        </div>
      );
    };
    const PrimaryShadeDisplay = () => {
      //const classes = useStyles();
      const theme = useTheme();
      const [isDisabled, setIsDisabled] = useState(true);
      // setShow(newColor !== "");
      const divider = 15;
      const lighter = lighten(
        newColor === "" ? theme.palette[targ].main : newColor,
        tonalOffset
        //Math.abs(theme.palette.tonalOffset)
      );
      const darker = darken(
        newColor === "" ? theme.palette[targ].main : newColor,
        tonalOffset
      );

      const contrastHexDark = getContrastHex(darker, 1);
      const contrastHexLight = getContrastHex(lighter, 1);
      const contrastHexMain = getContrastHex(
        newColor === "" ? theme.palette[targ].main : newColor,
        1
      );

      return (
        <div
          id="ApplyCancel_HexDisplays_Box"
          style={{
            //backgroundColor: "purple",
            marginLeft: divider,

            // border: "2px solid green",
          }}
        >
          <div
            id="positionedHexLabel"
            style={{
              position: "absolute",
              display: "none",
              height: 20,
              top: 0,
              left: 0,
              color: "#fff",
              backgroundColor: "#000",
              zIndex: 3000,
            }}
          >
            {newColor === "" ? theme.palette[targ].main : newColor}
          </div>
          <div
            id="MainLightDark_Box"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              //alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                backgroundColor: lighter,
                color: contrastHexLight,
              }}
            >
              <Typography>
                light {rgbToHex(lighter).replace("#", "")}
              </Typography>
            </div>

            <div
              style={{
                backgroundColor:
                  newColor === "" ? theme.palette[targ].main : newColor,
                color: contrastHexMain,
                height: 20,
                width: "100%",
                margin: "auto",
              }}
            >
              <Typography>
                main&nbsp;
                {newColor === ""
                  ? theme.palette[targ].main.replaceAll("#", "")
                  : newColor.replaceAll("#", "")}
              </Typography>
            </div>
            <div
              style={{
                backgroundColor: darker,
                color: getContrastHex(darker, 1),
                height: 20,
                width: "100%",
              }}
            >
              <Typography>
                dark {rgbToHex(darker).replaceAll("#", "")}
              </Typography>
            </div>
          </div>
          <ApplyResetButtons />
        </div>
      );
    };

    return (
      <StyledColorSections>
        <div>
          <CustomPicker
            onChange={(c) => handlePickerChange(c)}
            color={newColor ? newColor : color}
            size={100}
          />
        </div>
        <PrimaryShadeDisplay
          contrast={contrast}
          color={color}
          newColor={newColor}
          lighter={newLight}
          darker={newDark}
          //valueLabelComponent
        />

        <SliderOffset
          //contrastHexMain={contrastHexMain}
          newColor={newColor}
          eventEmitter={eventEmitter}
          theme={theme}
        />
      </StyledColorSections>
    );
  };

  //return show ? <Picker /> : <Buttons />;
  return <ControlsUi />;
};

export default Controls;
