import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, MenuItem, Button } from "@mui/material";
import {
  // getLuminance,
  rgbToHex,
  darken,
  lighten,
  TextField,
} from "@mui/material";
//import { red } from "@mui/material/colors";
//const color = red[500];
import Site from "../Site";
import Palette from "../components/color/Palette";

import Controls from "../components/color/Controls";
import InputHex from "../components/color/InputHex";
import DragHover from "../components/color/DragHover";
import Revert_Save_Buttons from "../components/color/Revert_Save_Buttons";
import ThemeInspector from "../components/color/ThemeInspector";

import { StyledColorSections } from "../styles/ComponentStyles";

import { eventEmitter } from "../events.tsx";

import DragCard from "../components/DnD/DragCard";
import DropTarget from "../components/DnD/DropTarget";
import ColorDropTarget from "../components/color/ColorDropTarget";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

import {
  colorLuminance,
  getContrastHex,
  hexToRgb,
} from "../components/color/util";

import { DefaultTheme, ColorModes } from "../Model";
import { useMutation, useQuery } from "@apollo/client";
import {
  PUT_THEME_SELECTED_COLOR_MODES,
  GET_THEMES,
  // DELETE_THEME,
  //  GET_THEME,
} from "../gql/theme";
import { WindowOutlined } from "@mui/icons-material";

import {
  StyledPage,
  // StyledHeader,
  // StyledPageSection,
} from "../styles/PageStyles";
import SiteHeader from "../components/page/SiteHeader";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const Color = (props) => {
  const [putTheme] = useMutation(PUT_THEME_SELECTED_COLOR_MODES);
  const { data, loading, error } = useQuery(GET_THEMES);
  const DragIcon = require("../assets/drag_icon.jpeg");
  const theme = useTheme();
  const classes = {
    root: { marginBottom: 10 },
    flexRows: {
      ...theme.flexRows,
    },
    wrapper: {
      backgroundColor: theme.palette.grey[100],
      width: 380,

      marginBottom: 0,
      minHeight: 490,
    },
    showHoverData: {
      backgroundColor: "green",
    },
    controls: {
      ...theme.flexRows,
      width: 380,
      paddingTop: 0,
      paddingBottom: 20,
      position: "relative",
      marginTop: 10,
      boxShadow: theme.shadows[4],
      backgroundColor: theme.palette.grey[300],
    },
    dragButtons: {
      width: "100%",
      marginLeft: 25,
      boxShadow: theme.shadows[2],
      backgroundColor: theme.palette.grey[100],
    },
    innerLabel: {
      ...theme.typography.caption,
      padding: 0,
      margin: 0,
      backgroundColor: "#fff",
      color: "#000",
      lineHeight: 1,
      textTransform: "lowercase",
    },
    dragLabel: {
      borderRadius: 500,

      height: 20,
      lineHeight: 1,
      backgroundColor: "#000",
      color: "#fff",
      padding: 0,
      whiteSpace: "nowrap",
      position: "absolute",
      top: 0,
      left: 140,
      width: 50,
      fontWeight: "bold",
      zIndex: theme.zIndex.mobileStepper,
      boxShadow: theme.shadows[2],
    },
    colorDropheader: {
      ...theme.typography.caption,
      backgroundColor: "#fff",
      color: "#000",
      width: 180,
      display: "inline-block",
      textAlign: "center",
    },
    card: {
      backgroundColor: theme.palette.info.light,
      color: theme.palette.info.contrastText,
      boxShadow: theme.shadows[2],
      marginBottom: 10,
      marginTop: 10,
      padding: 4,
      "&:hover": {
        boxShadow: theme.shadows[8],
      },
    },
    swatch: {
      width: 10,
    },
    applyToTargetButton: {
      //textTransform: "lowercase",
      padding: 2,
      // margin: 2,
      //  fontWeight: 300,
      // fontSize: ".8rem",
      width: 130,
      whiteSpace: "nowrap",
      height: 26,
      marginBottom: 2,
    },
    innerLeaf: {
      padding: 0,
      borderRadius: 500,
      display: "inline-block",
      width: 50,
    },
    colorLeaf: {
      display: "inline",
      width: 50,
      margin: 0,
      //border: "1px none red",
      cursor: "pointer",
    },
    colorBranch: {},
    colorTree: {
      width: 160,
      marginLeft: 10,
      boxShadow: theme.shadows[2],
    },
    applyButton: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
    },
    modeButtonsBox: {
      ...theme.flexRows,
      width: 360,
    },

    modeButtonWrap: {
      ...theme.flexRows,
    },
    allButton: {
      ...theme.submitButton,
      height: 40,
      backgroundColor: theme.palette.grey[500],
      color: "#ff0",
      marginLeft: 5,
      padding: 1,
      margin: 1,
      cursor: "pointer",
    },
    modeLabel: {
      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.info.main})`,
      color: theme.palette.grey[100],
      padding: 1,
      height: 25,
    },
    modeLabelIcon: {
      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.info.main})`,
      color: theme.palette.grey[100],
      height: 25,
      marginRight: 5,
    },
    modeSelector: {
      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.info.main})`,
    },
    modeList: {
      width: 320,
      marginTop: 5,
      marginBottom: 5,
      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.info.main})`,
    },
    removeCircleIcon: {
      backgroundColor: theme.palette.common.white,
      borderRadius: 500,
      cursor: "pointer",
    },
  };

  const [showReset, setShowReset] = useState(false);
  const refresh = useForceUpdate();
  const defaultColorModes = ColorModes;
  const refreshReact = () => {
    setShowReset(true);
    refresh();
  };

  const [themeId, setThemeId] = useState(0);

  const [targ, setTarg] = useState("info");
  const [attrib, setAttrib] = useState("primary");

  const [themes, setThemes] = useState([]);

  useEffect(() => {
    // useQuery(GET_THEME);
    if (!loading) {
      if (!error) {
        const _themes = [];
        data.themes.data.map((t) => {
          const _theme = {};
          _theme.id = t.id;
          _theme.name = t.attributes.name;
          _themes.push(_theme);
          // if (_theme.name === "default") {
          //   setSelectedTheme(t.id);
          // }
        });
        setThemes(_themes);
        // setSelectedTheme(theme.themeId);
        theme.themes = _themes;
        console.log(_themes);
      }
    }
  }, [loading, error, data]);

  useEffect(() => {
    console.log("Color Effect");

    eventEmitter.subscribe("REFRESH", () => {
      console.log("REFRESH at Site");
      refresh();
    });
    return () => {
      eventEmitter.unsubscribe("REFRESH");
    };
  }, []);
  useEffect(() => {
    setThemeId(theme.themeId);
    const cm = theme.color_modes; // window.localStorage.getItem("ColorModes");
    // if (!cm) {
    //   window.localStorage.setItem(
    //     "ColorModes",
    //     JSON.stringify(defaultColorModes)
    //   );
    // }

    eventEmitter.subscribe(
      "SETCONTROLS",
      (settings) => {
        // console.log("INPUTHEX at PTRC: " + hex);
        setTarg(settings.targ);
        // setNewColor("#" + hex);
        console.log("SETCONTROLS_COLOR");
      },
      []
    );

    eventEmitter.subscribe(
      "TONALTOUCH",
      (val) => {
        refresh();
        setShowReset(true);
      },
      []
    );
    return () => {
      eventEmitter.unsubscribe("TONALTOUCH");
      //eventEmitter.unsubscribe("SETCONTROLS");
      window.localStorage.setItem("newColor", theme.palette.primary.main);
    };
  }, []);

  // const Lt = () => {
  //   const { data, loading, error } = useQuery(GET_THEMES);
  //   return { data, loading, error };
  // };
  // const LoadThemes = () => {
  //   const { data, loading, error } = Lt();

  //   if (loading) return <div>loading</div>;

  //   if (error) return <pre>{JSON.stringify(error)}</pre>;

  //   if (data.themes.data.length === 0) return <div></div>;

  //   const latestTheme =
  //     data.themes.data[data.themes.data.length - 1].attributes.theme;

  //   return (
  //     <pre style={{ width: 500, height: 500 }}>
  //       {JSON.stringify(JSON.parse(latestTheme), null, 3)}
  //     </pre>
  //   );
  // };
  const transformThemeBranch = async (thisHex, palette) => {
    // // console.log("transformThemeBranch");
    setShowReset(true);
    //refreshReact();
    const cleanHex = thisHex.hex.replace("#", "");
    const rgb = hexToRgb(thisHex.hex);

    const factor = theme.palette.tonalOffset;

    const light = rgbToHex(lighten(thisHex.hex, factor));
    const dark = rgbToHex(darken(thisHex.hex, factor));

    if (thisHex.dark === "") {
      thisHex.dark = dark;

      thisHex.contrastDark = getContrastHex(dark, 1);
    }
    if (thisHex.light === "") {
      thisHex.light = light;
      thisHex.contrastLight = getContrastHex(light, 1);
    }

    thisHex.contrast = getContrastHex(thisHex.hex, 1);

    const newPalletPail = {
      ...theme.palette[palette],
      contrastText: thisHex.contrast,
      contrastDark: thisHex.contrastDark,
      contrastLight: thisHex.contrastLight,
      dark: thisHex.dark,
      main: thisHex.hex,
      light: thisHex.light,
    };

    theme.palette[palette] = newPalletPail;

    if (palette === "primary") {
      await getTheColorAPIModes(cleanHex);
    }
    window.localStorage.setItem("theme", JSON.stringify(theme));

    // await createTheme({
    //   variables: {
    //     name: "default",
    //     // theme.palette.primary.main.replace("#", "") +
    //     // "_" +
    //     // new Date().toISOString(),
    //     theme: JSON.stringify(theme),
    //   },
    // });
    refreshReact();
  };

  const modeArray = [
    "monochrome",
    "monochrome-dark",
    "monochrome-light",
    "analogic",
    "complement",
    "analogic-complement",
    "triad",
    "quad",
  ];

  // fill Modes after choosing new Primary color.
  const getColorApi = async (hex, mode, count) => {
    // monochrome, monochrome-dark, monochrome-light, analogic, complement, analogic-complement, triad, quad
    const response = await fetch(
      `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=${count}&format=json`
    );
    let mc = await response.json();
    return mc;
  };

  const getTheColorAPIModes = async (hex) => {
    // // console.log("setupPalette");
    const modes = [];
    // monochrome, monochrome-dark, monochrome-light, analogic, analogic, analogic-complement, triad, quad
    let mode = ""; //await getColorApi(hex, "monochrome");
    modeArray.map(async (api, key) => {
      mode = await getColorApi(hex, api, 5);
      let target = "secondary";
      mode.colors.map((color, key) => {
        switch (key) {
          // case 0:
          //   target = "secondary";
          //   break;
          case 1:
            target = "error";
            break;
          case 2:
            target = "warning";
            break;
          case 3:
            target = "info";
            break;
          case 4:
            target = "success";
            break;
          default:
            target = "secondary";
        }
        color.target = target;
      });
      await modes.push(mode);
      // await window.localStorage.setItem("ColorModes", JSON.stringify(modes));
      theme.color_modes = modes;

      if (modes.length === 8) {
        await putTheme({
          variables: {
            id: theme.defaultThemeId,
            // name: "default",
            // theme: JSON.stringify(theme),
            // color_modes: JSON.stringify(
            //   window.localStorage.getItem("ColorModes")
            // ),
            selected_color_modes: JSON.stringify(modes),
          },
        });
      }
      // dispatch({ type: "COLORMODE", payload: mode });
    });
  };

  const clearThemeFromStorage = () => {
    setShowReset(false);
    window.localStorage.removeItem("theme");
    window.localStorage.setItem(
      "ColorModes",
      JSON.stringify(defaultColorModes)
    );
    // dispatch("ColorModes", defaultColorModes);
    //setRender(Math.random());
    const palette = DefaultTheme.palette;

    ["primary", "secondary", "info", "error", "success", "warning"].forEach(
      (targ) => {
        ["light", "main", "dark", "contrastText"].forEach((shade) => {
          theme.palette[targ][shade] = palette[targ][shade];
        });
      }
    );
    theme.palette.tonalOffset = palette.tonalOffset;

    window.localStorage.setItem("theme", JSON.stringify(DefaultTheme));

    window.localStorage.setItem("newColor", theme.palette.primary.main);

    //getTheColorAPIModes(theme.palette.primary.main);

    refreshReact();
  };

  const styles = {
    cardStyle: {
      //width: "50%",
      backgroundColor: "secondary.light",
    },
    boxStyle: { width: "100%" },
    root: { backgroundColor: "f0f0f0", width: "100%" },
  };

  const [target, setTarget] = useState("secondary");
  const [hex, setHex] = useState({});
  const doSetHex = (hex, display) => {
    setHex(hex);
    // setRange([]);
    transformThemeBranch(hex, hex.target);
  };

  const [mode, setMode] = useState({});

  const ColorTarget = (props) => {
    const color = props.color;
    // const factor = -Number(state.tonalOffset);

    const payload = {
      color: color.hex.value,
      target: color.target,
    };

    return (
      <DropTarget hex={color} doSetHex={doSetHex}>
        <div style={{ ...classes.colorLeaf, backgroundColor: color.hex.value }}>
          <ColorDropTarget
            color={color}
            mode={mode}
            //saveTheme={saveTheme}
            theme={theme}
            // factor={factor}
          />
        </div>
      </DropTarget>
    );
  };

  const ColorDropBox = ({ mode }) => {
    return (
      <div
        style={{
          ...classes.colorTree,
          display: mode.mode === selectedMode ? "block" : "none ",
        }}
      >
        {ModeTabs()}
        <div>
          {mode.colors.map((color, index) => {
            // ColorBranch
            return (
              <div key={index} style={classes.colorBranch}>
                <ColorTarget color={color} name={""} />
                {/* <ColorLeaf hex={color.name.closest_named_hex} name={color.name.value} /> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // ShowModes, ColorTree/branch, ColorLeaf
  // Are the Mode Buttons
  // The Apply (all) button is here.
  // This is the top of the bottom right quad.
  const DragControls = () => {
    // // console.log("dragcontrols");
    const modes_ = theme.color_modes ? theme.color_modes : defaultColorModes;
    // JSON.parse(window.localStorage.getItem("ColorModes")) ||
    // defaultColorModes;
    return (
      <StyledColorSections>
        <div style={{ position: "relative" }}>
          <DragHover />
          <Revert_Save_Buttons
            key={Math.random()}
            showReset={true} ///{showReset}
            clearThemeFromStorage={clearThemeFromStorage}
          />
        </div>
        <div>
          <DragButtons />
        </div>

        <div
          style={{
            // marginTop: 18,
            marginLeft: 20,
            //width: 150,
            //whiteSpace: "nowrap",
            position: "relative",
          }}
        >
          {modes_
            .filter((cm) => cm.mode === selectedMode)
            .map((mode, key) => {
              return <ColorDropBox mode={mode} key={key} />;
            })}
        </div>
      </StyledColorSections>
    );
  };

  // these are the buttons that receive colors from the Modes list, and apply them with doHex to the document
  // TargetButtons Selectors with the 5 "apply to" actions, one per color except primary.
  const DragButtons = () => {
    const factor = window.localStorage.getItem("theme")
      ? JSON.parse(window.localStorage.getItem("theme")).palette.tonalOffset
      : 0.2;

    const modes_ = theme.color_modes || defaultColorModes;

    return (
      <div style={{ ...classes.dragButtons }}>
        <div
          style={{
            backgroundColor: theme.palette.backgroundColor,
            color: "#000",
            paddingTop: 28,
            paddingBottom: 2,
            textAlign: "left",
            verticalAlign: "middle",
            width: "100%",
            height: 15,
          }}
        >
          current settings
          {/* <img
            style={{
              marginTop: 0,
              lineHeight: theme.typography.caption.lineHeight,
              width: 15,
              left: "100%",
            }}
            src={DragIcon}
          /> */}
        </div>
        {modes_
          .filter((m) => m.mode === selectedMode)[0]
          ["colors"].map((m, key) => {
            const color = m.hex.value;
            const light = colorLuminance(color, factor);
            const dark = colorLuminance(color, factor);
            const data = {
              target: m.target,
              hex: color,
              light: light,
              dark: dark,
              contrast: "#f0f0f0",
            };
            return (
              <div key={key} style={{ position: "relative" }}>
                <DragCard isDragging={false} id={key} data={data} theme={theme}>
                  <div
                    style={{
                      ...classes.applyToTargetButton,
                      background: `repeating-linear-gradient(
                    90deg,
                    ${theme.palette[m.target].light} 10px,
                    ${theme.palette[m.target].main} 40px,
                    ${theme.palette[m.target].dark} 10px
                  )`,
                      // backgroundColor: theme.palette[m].main,
                      color: theme.palette[m.target].contrastText,
                    }}
                  >
                    <div style={classes.innerLabel}>
                      {m.target}&nbsp;
                      {theme.palette[m.target].main.replace("#", "")}{" "}
                    </div>
                  </div>
                </DragCard>
              </div>
            );
          })}
      </div>
    );
  };

  const [selectedMode, setSelectedMode] = useState(
    window.localStorage.getItem("ColorModeTabValue")
      ? window.localStorage.getItem("ColorModeTabValue")
      : "monochrome"
  );

  const ModeLabelSwatch = ({ option, colors }) => {
    return (
      <div style={classes.modeButtonWrap}>
        <button
          style={{
            background: `linear-gradient(180deg, ${colors[0].hex.value}, ${colors[1].hex.value}, ${colors[2].hex.value}, ${colors[3].hex.value}, ${colors[4].hex.value})`,
          }}
        ></button>
        <div style={{ backgroundColor: "#fff", color: "#000", opacity: 0.6 }}>
          {option}
        </div>
      </div>
    );
  };

  // this is the list of Modes that are stored in reducer state. Modes in state are populated when a primary color is selected,
  // so they contain colors modes per the primary color
  const ModeTabs = () => {
    const modes_ = theme.color_modes || defaultColorModes;
    const handleTabChange = (newValue) => {
      //dispatch({ type: "COLORMODETABVALUE", payload: newValue });
      window.localStorage.setItem("ColorModeTabValue", newValue);
      const colors = theme.color_modes.filter((m) => m.mode === newValue)[0]
        .colors;
      // setModeSelectionColors(colors);
      setSelectedMode(newValue);
    };

    const GradientBg = (whichMode) => {
      const modes_ = theme.color_modes || defaultColorModes;
      const modeColors = modes_.filter((m) => m.mode === whichMode)[0].colors;
      const grades = [
        modeColors[0].hex.value,
        modeColors[1].hex.value,
        modeColors[2].hex.value,
        modeColors[3].hex.value,
        modeColors[4].hex.value,
      ];
      const ret = "linear-gradient(90deg," + grades.join(",") + ")";
      return ret;
    };
    let gradient = GradientBg(selectedMode);

    return (
      <div style={{ marginTop: 2 }}>
        <TextField
          id="modeslist"
          style={{
            //background: `linear-gradient(90deg, ${modeSelectionColors[0].hex.value}, ${modeSelectionColors[1].hex.value}, ${modeSelectionColors[2].hex.value}, ${modeSelectionColors[3].hex.value}, ${modeSelectionColors[4].hex.value})`,
            // background: GradientBg(),
            width: "100%",
            marginTop: 1,
            marginBottom: 1,
            boxShadow: theme.shadows[4],
            background: gradient,
          }}
          variant="outlined"
          // InputProps={{
          //   startAdornment: <ModeSelectAdornment />,
          // }}
          select
          value={selectedMode}
          onChange={(event) => handleTabChange(event.target.value)}
        >
          {modeArray.map((modeOption, key) => {
            const modeColors = modes_.filter(
              (mode) => mode.mode === modeOption
            )[0].colors;

            gradient = GradientBg(modeOption);
            return (
              <MenuItem
                style={{
                  width: "80%",
                  height: 32,
                  padding: 2,
                  margin: 4,
                  fontSize: ".8rem",
                  textTransform: "lowercase",
                  //overflow:"hidden",
                  //background: `linear-gradient(90deg, ${colors[0].hex.value}, ${colors[1].hex.value}, ${colors[2].hex.value}, ${colors[3].hex.value}, ${colors[4].hex.value})`,
                  background: gradient,
                  color: theme.palette.text.black,
                }}
                key={key}
                value={modeOption}
              >
                <ModeLabelSwatch
                  key={Math.random()}
                  option={modeOption}
                  colors={modeColors}
                />
                {/* {ModeLabelSwatch(option, colors)} */}
              </MenuItem>
            );
          })}
        </TextField>
      </div>
    );
  };
  return (
    <Site title="Color">
      <StyledPage>
        <SiteHeader metaTitle="Site Settings" />
        <div
          style={{
            position: "relative",
            // border: "2px solid",
          }}
        >
          <InputHex />
          <Controls transformThemeBranch={transformThemeBranch} />

          <DndProvider backend={HTML5Backend}>
            <DndProvider backend={TouchBackend}>{DragControls()}</DndProvider>
          </DndProvider>
          <Palette keepOpen={true} refreshReact={refreshReact} />

          <ThemeInspector />
        </div>
      </StyledPage>
    </Site>
  );
};

export default Color;
