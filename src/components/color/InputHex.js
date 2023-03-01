import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { eventEmitter } from "../../events.tsx";
// import { getContrastHex } from "./util";
import { useTheme } from "@mui/material/styles";
import {
  // Typography,
  Select,
  MenuItem,
  Card,
  ClickAwayListener,
  FormLabel,
} from "@mui/material";
import { StyledColorSections } from "../../styles/ComponentStyles";

// import { GET_THEMES } from "../../gql/theme";

import { useQuery } from "@apollo/client";

import { GET_THEME } from "../../gql/theme";
import client from "../../apollo/client";
import { createTheme } from "@mui/material/styles";

// import DropTarget from "../DnD/DropTarget";

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
  const [selectedTheme, setSelectedTheme] = useState(theme.themeId);
  const [targ, setTarg] = useState("primary");
  const [inputHex, setInputHex] = useState(theme.palette[targ].main);
  const orgHex = theme.palette.primary.main;

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
    // console.log("USEEFFECT ONE");
    if (!loading2) {
      if (!error2) {
        // console.log("color featch");
        //const _themes = [];
        // console.log(data2.theme.data.attributes.theme);

        ///// HERE IS THE PROBLEM. Enabled, fetch stored theme works. Apply new hex seed, doesn't work. Vice versa.
        // it shouldn't fire on the Apply button click.
        // it's firing somehow
        theme.palette = JSON.parse(data2.theme.data.attributes.theme).palette;
        theme.color_modes = JSON.parse(data2.theme.data.attributes.color_modes);

        // console.log(theme.palette);
        // console.log(JSON.parse(data2.theme.data.attributes.theme).palette);

        eventEmitter.dispatch("REFRESH", {});
        //setThemes(_themes);
      }
    }
  }, [selectedTheme, loading2, error2, data2]);

  //const [attrib, setAttrib] = useState("primary");
  // useEffect(() => {
  //   // useQuery(GET_THEME);
  //   if (!loading) {
  //     if (!error) {
  //       const _themes = [];
  //       data.themes.data.map((t) => {
  //         const _theme = {};
  //         _theme.id = t.id;
  //         _theme.name = t.attributes.name;
  //         _themes.push(_theme);
  //         if (_theme.name === "default") {
  //           setSelectedTheme(t.id);
  //         }
  //       });
  //       setThemes(_themes);
  //       setSelectedTheme(theme.themeId);
  //       theme.themes = _themes;
  //       // console.log(_themes);
  //     }
  //   }
  // }, [loading, error, data]);

  useEffect(() => {
    // console.log("USEEFFECT TWO");
    setFont(theme.font);
    setMenuPosition(menuPosition in theme ? theme.menuPosition : "side");
  }, [theme.font]);
  // useEffect(() => {
  //   console.log("USEEFFECT Three");
  //   // setSelectedTheme(theme.themeId);
  //   return () => {
  //     window.localStorage.setItem("targ", "primary");
  //   };
  // }, []);

  // useEffect(() => {
  //   setInputHex(theme.palette[attrib].main);
  // }, [attrib]);

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
      <StyledColorSections style={{ marginTop: 40, cursor: "pointer" }}>
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
          }}
        >
          {selected}
        </Card>
      </StyledColorSections>
    </ClickAwayListener>
  );
};

export default InputHex;
