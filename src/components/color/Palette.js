import React, { useEffect, useState } from "react";
import {
  Button,
  //   Box,
  Card,
  Typography,
  ClickAwayListener,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { rgbToHex, darken, lighten } from "@mui/material";
import { getContrastHex } from "./util";
import { StyledColorSections } from "../../styles/ComponentStyles";
import { eventEmitter } from "../../events.tsx";
const Palette = ({ refreshReact }) => {
  //console.log("palette");
  const theme = useTheme();
  const [show, setShow] = useState(true);
  const gradient = {
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.info.main})`,
    color: theme.palette.grey[100],
  };
  const swatch = {
    //font: theme.typography.button,
    padding: 0,
    margin: 1,
    textTransform: "lowercase",
    height: 20,
    width: 80,
    display: "inline-block",
  };
  //const classes = {};

  const TinyShadeButton = ({
    shade,
    setEdit,
    //   setSelectedColor,
    refreshReact,
    targ,
    attrib,
  }) => {
    //const [selected, setSelected] = useState("");
    ////console.log("SHADE: " + shade);
    return (
      <span
        title={shade.replace("#", "")}
        onMouseEnter={() => {
          //setSelectedColor(shade);
        }}
        onMouseLeave={() => {}}
        onClick={(e) => {
          //console.log(shade);
          const contrast = getContrastHex(shade, 1);
          e.target.style.backgroundColor = shade;
          e.target.style.color = contrast;
          // setSelected(lighter);
          theme.palette[targ][attrib] = shade;
          theme.palette[targ].contrastText = contrast;
          window.localStorage.setItem("theme", JSON.stringify(theme));
          refreshReact();
          setEdit(false);
        }}
        key={Math.random()}
        style={{
          backgroundColor: shade,
          //color: contText,
          cursor: "pointer",
          display: "inline-block",
          width: 8,
        }}
      >
        &nbsp;
      </span>
    );
  };
  const TinyShadePicker = ({ setEdit, color, targ, attrib }) => {
    const [selectedColor, setSelectedColor] = useState("");

    const [shadeArray, setShadeArray] = useState([]);

    useEffect(
      (setEdit) => {
        //console.log("tiny shader");
        window.addEventListener("keyup", (e) => {
          if (e.key === "Escape") {
            setEdit(false);
          }
        });
        let darkArray = [];
        let lightArray = [];
        [...Array(6).keys()].forEach((key) => {
          if (key === 0) {
            return;
          }
          const darker = rgbToHex(darken(color, key * 0.05));

          const lighter = rgbToHex(lighten(color, key * 0.05));
          //const contText = getContrastHex(color, 1);
          darkArray.push(darker);
          lightArray.push(lighter);
        });
        setShadeArray([...lightArray.reverse(), ...darkArray]);
        // //console.log([...lightArray.reverse(), darkArray]);
      },
      [color]
    );

    return (
      <ClickAwayListener onClickAway={() => setEdit(false)}>
        <span
          onMouseLeave={() => {
            setEdit(false);
          }}
        >
          {shadeArray.map((shade, key) => {
            ////console.log("Key: " + key);
            return (
              <TinyShadeButton
                setSelectedColor={setSelectedColor}
                setEdit={setEdit}
                refreshReact={refreshReact}
                //selected={selected}
                viewColor={selectedColor}
                //  setEdit={setEdit}
                attrib={attrib}
                targ={targ}
                shade={shade}
                key={key}
              />
            );
          })}
        </span>
      </ClickAwayListener>
    );
  };

  const Swatch = ({ attrib, targ, refreshReact }) => {
    const [edit, setEdit] = useState(false);

    ////console.log("swatch");
    if (edit) {
      return (
        <div style={swatch}>
          <TinyShadePicker
            refreshReact={refreshReact}
            setEdit={setEdit}
            color={theme.palette[targ][attrib]}
            targ={targ}
            attrib={attrib}
          />
        </div>
      );
    } // default button below. Color Range picker for this Shade above
    let contrast = theme.palette[targ].contrastText;
    if (attrib === "dark") {
      contrast = theme.palette[targ].contrastDark;
    }
    if (attrib === "light") {
      contrast = theme.palette[targ].contrastLight;
    }
    //console.log(contrast);
    if (attrib === "main") {
      return (
        // entry point for setting a main color directly
        <Button
          style={{
            ...swatch,
            backgroundColor: theme.palette[targ][attrib],
            color: contrast,
          }}
        >
          <Typography>
            {theme.palette[targ][attrib].replace("#", "")}
          </Typography>
        </Button>
      );
    }
    return (
      <Button
        onMouseEnter={() => setEdit(true)}
        onClick={() => setEdit(true)}
        style={{
          ...swatch,
          backgroundColor: theme.palette[targ][attrib],
          color: contrast,
        }}
      >
        <Typography>{theme.palette[targ][attrib].replace("#", "")}</Typography>
      </Button>
    );
  };

  const Header = () => {
    return (
      <div>
        <div>
          <button
            style={{
              ...gradient,
              textTransform: "uppercase",
              backgroundColor: "#000",
              color: "#fff",
              paddingTop: 0,
              borderRadius: 30,
            }}
            onClick={() => setShow(true)} // disable close disable closing
          >
            palette
          </button>
        </div>

        <Typography style={swatch}>light</Typography>
        <Typography style={swatch}>main</Typography>
        <Typography style={swatch}>dark</Typography>
      </div>
    );
  };
  const Swatches = () => {
    const targs = [
      "primary",
      "secondary",
      "error",
      "warning",
      "info",
      "success",
    ];
    const attribs = ["light", "main", "dark"];

    return (
      <div style={{ maxWidth: 380 }}>
        <Header />

        {targs.map((targ, targKey, refreshReact) => {
          return (
            <div key={targKey}>
              <Typography style={swatch}>{targ}</Typography>
              {attribs.map((attrib, key) => {
                //  let shade = "main";
                // switch (key) {
                //   case 0: {
                //     shade = "light";
                //     break;
                //   }
                //   case 2: {
                //     shade = "dark";
                //     break;
                //   }
                //   default: {
                //     shade = "main";
                //   }
                // }
                return (
                  <Swatch
                    key={key}
                    attrib={attrib}
                    targ={targ}
                    refreshReact={refreshReact}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };
  if (!show) {
    return (
      <Button
        style={{ ...gradient, borderRadius: 30, boxShadow: theme.shadows[4] }}
        onClick={() => setShow(true)}
      >
        Palette
      </Button>
    );
  }

  return (
    <StyledColorSections>
      <Swatches refreshReact={refreshReact} />
    </StyledColorSections>
  );
};

export default Palette;
