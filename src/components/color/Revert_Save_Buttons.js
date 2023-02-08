import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Autocomplete,
  ClickAwayListener,
} from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { useTheme, styled } from "@mui/material/styles";

import { useMutation } from "@apollo/client";
import {
  CREATE_THEME,
  PUT_THEME,
  // GET_THEMEIDS,
  // DELETE_THEME,
  //  GET_THEME,
} from "../../gql/theme";

const ResetAllButton = (props) => {
  console.log("ResetAllButton");
  const [createTheme] = useMutation(CREATE_THEME);
  const [putTheme] = useMutation(PUT_THEME);

  const [confirmed, setConfirmed] = useState(false);
  const [themeNames, setThemeNames] = useState([]);
  const [themeId, setThemeId] = useState(0);
  const [themeName, setThemeName] = useState("");
  const theme = useTheme();
  useEffect(() => {
    const themes = theme.themes
      ? theme.themes.map((t) => {
          return t;
        })
      : [];
    console.log(themes);
    setThemeId(theme.themeId);
  }, []);

  const StyledButton = styled(Button)(({ theme }) => ({
    width: 75,
    height: 35,
    padding: 0,
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
    boxShadow: theme.shadows[6],
    "&:hover": {
      boxShadow: theme.shadows[8],
      backgroundColor: theme.palette.info.dark,
    },
  }));
  const classes = {
    root: {
      marginBottom: 100,
    },
    resetSubmit: {
      marginLeft: 3,
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.success.dark,
      },
    },

    resetButtons: {
      position: "absolute",
      top: 0,
      left: 0,
      whiteSpace: "nowrap",
      display: "inline-block",
      display: "flex",
      gap: 10,
      flexDirect: "row",
      // width: 160,
      // height: 40,
      // backgroundColor: theme.palette.grey[200],
      boxShadow: theme.shadows[4],
      position: "relative",
      zIndex: theme.zIndex.drawer,
      borderRadius: 10,
      alignItems: "center",
      verticalAlign: "middle",
      margin: "auto",
    },
  };

  const saveTheme = async () => {
    const cms = theme.color_modes; // JSON.parse(window.localStorage.getItem("ColorModes"));
    let ret;
    if (themeName === "") {
      await putTheme({
        variables: {
          id: theme.defaultThemeId,
          name: "default",
          // theme.palette.primary.main.replace("#", "") +
          // "_" +
          // new Date().toISOString(),
          theme: JSON.stringify(theme),
          color_modes: JSON.stringify(cms),
        },
      });
      // let ret;
    } else {
      try {
        ret = await createTheme({
          variables: {
            name: themeName,
            // theme.palette.primary.main.replace("#", "") +
            // "_" +
            // new Date().toISOString(),
            theme: JSON.stringify(theme),
            color_modes: JSON.stringify(cms),
          },
        });
      } catch (err) {
        console.log(err);
        const tId = theme.themes.find((t) => t.name === themeName);
        await putTheme({
          variables: {
            id: tId.id,
            name: themeName,
            // theme.palette.primary.main.replace("#", "") +
            // "_" +
            // new Date().toISOString(),
            theme: JSON.stringify(theme),
            color_modes: JSON.stringify(cms),
          },
        });
      }
    }

    console.log(ret);

    setConfirmed(false);
    clearThemeFromStorage();
  };
  const toggleConfirm = () => {
    setConfirmed((prev) => !prev);
  };

  const clickText = "Confirm";
  const cancelText = "Cancel";
  //console.log("ColorResetButton");
  const show = props.showReset;

  const clearThemeFromStorage = props.clearThemeFromStorage;

  const handleClick = () => {
    setConfirmed(false);
    clearThemeFromStorage();
  };

  if (confirmed) {
    return (
      <div style={{ position: "absolute", top: 0, left: 0 }}>
        <div style={classes.resetButtons}>
          <Zoom in={true}>
            <StyledButton style={classes.resetButton} onClick={toggleConfirm}>
              {cancelText}
            </StyledButton>
          </Zoom>
          <Zoom in={true}>
            <StyledButton style={classes.resetButton} onClick={handleClick}>
              {clickText}
            </StyledButton>
          </Zoom>
        </div>
      </div>
    );
  }

  const SaveAs = () => {
    const [showSave, setShowSave] = useState(false);
    const [saveas, setSaveas] = useState("");

    const handleChange = (val) => {
      setSaveas(val);
    };
    const handleHide = (e) => {
      // setSaveas("");
      setShowSave(false);
    };
    const handleKey = (e) => {
      if (e.code === "Escape") {
        setSaveas("");
        setShowSave(false);
      }
      if (e.code === "Enter") {
        setThemeName(e.target.value);
        setShowSave(false);
      }
    };

    if (showSave) {
      return (
        <div
          style={{
            position: "relative",
            left: -14,
            backgroundColor: theme.palette.background.default,
            zIndex: theme.zIndex.tooltip,
          }}
          onKeyDown={(e) => handleKey(e)}
        >
          {/* <input
            autoFocus
            value={saveas}
            onChange={(e) => handleChange(e.target.value)}
          /> */}

          <Autocomplete
            onChange={(e) => handleChange(e.target.value)}
            id="combo-box-themes"
            options={theme.themes}
            getOptionLabel={(option) => (option ? option.name : "")}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
        </div>
      );
    } else {
      return (
        <div
          style={{
            position: "relative",
            left: -14,
            zIndex: theme.zIndex.tooltip,
          }}
        >
          <div
            style={{
              display: showSave ? "none" : "block",
            }}
          >
            <input
              onClick={() => setShowSave(true)}
              type="button"
              value={themeName === "" ? "as..." : "as: " + themeName}
            />
          </div>
        </div>
      );
    }
  };
  return (
    <div
      style={{
        position: "absolute",
        top: -5,
        left: -7,
        display: show ? "block" : "none",
      }}
    >
      <Zoom in={true}>
        <div style={{ display: "flex", gap: 10 }}>
          <StyledButton style={classes.resetButton} onClick={toggleConfirm}>
            Revert
          </StyledButton>
          <StyledButton
            style={classes.resetButton}
            onClick={(themeId) => saveTheme(themeId)}
          >
            Save
          </StyledButton>
          <SaveAs />
        </div>
      </Zoom>
    </div>
  );
};

ResetAllButton.propTypes = {};

export default ResetAllButton;
