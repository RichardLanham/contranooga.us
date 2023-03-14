import React, { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Box, MenuItem, Button, Typography } from "@mui/material";
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

// import Controls from "../components/color/Controls";
// import InputHex from "../components/color/InputHex";
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
import PageHeader from "../components/page/PageHeader";

import { GET_THEME } from "../gql/theme";
import client from "../apollo/client";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import {
  // Typography,
  Card,
  Select,
  ClickAwayListener,
  FormLabel,
} from "@mui/material";

import CustomPicker from "../components/color/CustomPicker";
import SliderOffset from "../components/color/SliderOffset";

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

  const [selectedTheme, setSelectedTheme] = useState(theme.themeId);

  const {
    loading: loading2,
    error: error2,
    data: data2,
  } = useQuery(GET_THEME, {
    client: client,
    variables: { id: selectedTheme },
  });

  /// THIS WAS WORKING IN UTC version but source of a color mode bug, which is fixed by commenting out. can't remember why it is there. so....
  useEffect(() => {
    console.log("InputHex");
    console.log(selectedTheme);
    if (!loading2) {
      if (!error2) {
        // console.log("color featch");
        //const _themes = [];
        // console.log(data2.theme.data.attributes.theme);

        ///// HERE IS THE PROBLEM. Enabled, fetch stored theme works. Apply new hex seed, doesn't work. Vice versa.
        // it shouldn't fire on the Apply button click.
        // it's firing somehow

        // commented out I can set new seed color and fetch from api and load color_modes
        // uncommented, I can get saved Themes. I can save theme to default. I can save to new theme name

        theme.palette = JSON.parse(data2.theme.data.attributes.theme).palette;
        theme.color_modes = JSON.parse(data2.theme.data.attributes.color_modes);

        // console.log(theme.palette);
        // console.log(JSON.parse(data2.theme.data.attributes.theme).palette);

        eventEmitter.dispatch("REFRESH", {});
        //setThemes(_themes);
      }
    }
  }, [selectedTheme]);

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
    refreshReact();
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
        //window.localStorage.setItem("newColor", c);
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

  const InputHex = () => {
    const [themes, setThemes] = useState([]);
    const [themeIds, setThemeIds] = useState([]);
    // const [themeId, setThemeId] = useState("");
    const [show, setShow] = useState(false);

    const [selected, setSelected] = useState("primary");

    const [font, setFont] = useState("'Roboto Slab', serif");

    const [menuPosition, setMenuPosition] = useState("side");

    // const { data, loading, error } = useQuery(GET_THEMES);

    const theme = useTheme();
    // const [selectedTheme, setSelectedTheme] = useState(theme.themeId);
    const [targ, setTarg] = useState("primary");
    const [inputHex, setInputHex] = useState(theme.palette[targ].main);
    const orgHex = theme.palette.primary.main;

    useEffect(() => {
      // console.log("USEEFFECT TWO");
      setFont(theme.font);
      setMenuPosition(menuPosition in theme ? theme.menuPosition : "side");
    }, [theme.font]);

    const applyText = (hex) => {
      const fixed = "#" + hex.replace("#", "");
      //const test = hexToRgb(fixed);

      //var color = 'rgb(255, 15, 120)';
      var matchColors = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
      var match = matchColors.exec(fixed);
      if (match === null) {
        //setShowInput(false);
        return;
      }
      window.localStorage.setItem("targ", targ);
      eventEmitter.dispatch("INPUTHEX", {
        hex: hex.replace("#", ""),
        targ: targ,
      });
    };

    const handleInput = (e) => {
      if (e.target.value.replaceAll("#", "").length < 3) {
        return;
      }
      applyText(e.target.value);
      //setShow(false);
    };
    const handleMenuPositionChange = (e) => {
      setMenuPosition(e.target.value);
      theme.menuPosition = e.target.value;
      eventEmitter.dispatch("REFRESH", {});
    };
    const handleFontChange = (e) => {
      eventEmitter.dispatch("REFRESH", {});
      setFont(e.target.value);
      const fnt = e.target.value;

      theme.typography.h1.fontFamily = fnt;
      theme.typography.h2.fontFamily = fnt;
      theme.typography.h3.fontFamily = fnt;
      theme.typography.h4.fontFamily = fnt;
      theme.typography.h5.fontFamily = fnt;
      theme.typography.h6.fontFamily = fnt;
      theme.typography.caption.fontFamily = fnt;
      theme.typography.body1.fontFamily = fnt;
      theme.typography.body2.fontFamily = fnt;
      theme.typography.button.fontFamily = fnt;
      theme.typography.subtitle1.fontFamily = fnt;
      theme.typography.subtitle2.fontFamily = fnt;
      theme.typography.overline.fontFamily = fnt;
      theme.font = fnt;
      eventEmitter.dispatch("REFRESH", {});
    };

    const handleTheme = (e) => {
      setSelectedTheme(e.target.value);
      theme.themeId = e.target.value;
    };
    const handleSelect = (e) => {
      setTarg(e.target.value);
      window.localStorage.setItem("targ", e.target.value);
      setInputHex(theme.palette[e.target.value].main);
      setSelected(e.target.value);
      window.localStorage.setItem("tonalOffset", -1);
      eventEmitter.dispatch("INPUTHEX", {
        hex: theme.palette[e.target.value].main.replace("#", ""),
        targ: e.target.value,
      });
    };
    const cancelInput = () => {
      applyText(orgHex);
      setInputHex(theme.palette[targ].main);
      setShow(false);
    };
    const previewHex = (e) => {
      setInputHex(e.target.value);
      applyText(e.target.value);

      //setShowInput(false);
    };
    if (!show) {
      return (
        <StyledColorSections style={{ cursor: "pointer", width: 400 }}>
          <EditIcon
            onClick={() => setShow(true)}
            style={{
              width: 20,
              // position: "absolute",
              // top: 0,
              // right: 10,
              cursor: "pointer",
            }}
          />
          <div style={{ ...theme.flexRows, border: "2px none red" }}>
            <div>
              <FormLabel>Colors</FormLabel>
              <Select value={selected} onChange={(e) => handleSelect(e)}>
                <MenuItem
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                  value="primary"
                >
                  primary
                </MenuItem>
                <MenuItem
                  style={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                  }}
                  value="secondary"
                >
                  secondary
                </MenuItem>
                <MenuItem
                  style={{
                    backgroundColor: theme.palette.error.main,
                    color: theme.palette.error.contrastText,
                  }}
                  value="error"
                >
                  error
                </MenuItem>
                <MenuItem
                  style={{
                    backgroundColor: theme.palette.warning.main,
                    color: theme.palette.warning.contrastText,
                  }}
                  value="warning"
                >
                  warning
                </MenuItem>
                <MenuItem
                  style={{
                    backgroundColor: theme.palette.info.main,
                    color: theme.palette.info.contrastText,
                  }}
                  value="info"
                >
                  info
                </MenuItem>
                <MenuItem
                  style={{
                    backgroundColor: theme.palette.success.main,
                    color: theme.palette.success.contrastText,
                  }}
                  value="success"
                >
                  success
                </MenuItem>
              </Select>
            </div>
            <div>
              <FormLabel>Fonts</FormLabel>
              <Select value={font} onChange={(e) => handleFontChange(e)}>
                <MenuItem value="Roboto">Roboto</MenuItem>
                <MenuItem value="Anton">Anton</MenuItem>
                <MenuItem value="'Roboto Serif', serif">Roboto Serif</MenuItem>
                <MenuItem value="'Roboto Flex', 'Helvetica','Arial', sans-serif">
                  Roboto Flex
                </MenuItem>
                <MenuItem value="'Roboto Slab', serif">Roboto Slab</MenuItem>
                <MenuItem value="'Roboto Condensed', 'Helvetica','Arial', sans-serif">
                  Roboto Condensed
                </MenuItem>
                <MenuItem value="'Roboto Mono', 'Helvetica','Arial', sans-serif">
                  Roboto Mono
                </MenuItem>
                <MenuItem value="'EB Garamond', serif">EB Garamond</MenuItem>
                <MenuItem value="'Cormorant Garamond', serif">
                  Cormorant Garamond
                </MenuItem>
              </Select>
            </div>
            <div>
              <FormLabel>Menu</FormLabel>
              <Select
                value={menuPosition}
                onChange={(e) => handleMenuPositionChange(e)}
              >
                <MenuItem value="side">side</MenuItem>
                <MenuItem value="top">top</MenuItem>
                <MenuItem value="split">split</MenuItem>
              </Select>
            </div>
            <div>
              <FormLabel>Themes</FormLabel>
              <Select value={selectedTheme} onChange={handleTheme}>
                {theme.themes &&
                  theme.themes.map((t, k) => (
                    <MenuItem key={k} value={t.id}>
                      {t.name}
                    </MenuItem>
                  ))}
              </Select>
            </div>
          </div>
        </StyledColorSections>
      );
    }
    // const inputRef = React.createRef();

    return (
      <ClickAwayListener onClickAway={() => setShow(false)}>
        <StyledColorSections style={{ marginTop: 40, marginBottom: 20 }}>
          <CloseIcon
            onClick={() => setShow(false)}
            style={{
              width: 20,
              // position: "absolute",
              // top: 0,
              // right: 10,
              cursor: "pointer",
            }}
          />

          <input
            autoFocus
            type="text"
            value={inputHex}
            //defaultValue={textHex}
            //defaultValue={textHex}
            onChange={(e) => previewHex(e)}
            // onBlur={(e) => handleInput(e)}
            onClick={(e) => {
              handleInput(e);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleInput(e);
              }
              if (e.key === "Escape") {
                cancelInput(false);
              }
            }}
          />
          <Card
            style={{
              margin: 3,
              padding: 3,
              backgroundColor: theme.palette[selected].main,
              color: theme.palette[selected].contrastText,
              // height: 100,
              // border: "1px solid green",
            }}
          >
            {selected}
          </Card>
        </StyledColorSections>
      </ClickAwayListener>
    );
  };

  return (
    <Site title="Color">
      <StyledPage>
        <PageHeader metaTitle="Site Settings" />
        <div style={{ ...theme.flexRows }}>
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
