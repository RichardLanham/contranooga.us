import React, { useState } from "react";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";
import { useTheme } from "@mui/material/styles";

const ConfirmButtons = ({ action, args, label, icon }) => {
  args = args ? args : null;

  // console.log("ConfirmButton");
  const [confirmed, setConfirmed] = useState(false);
  const theme = useTheme();
  const classes = {
    root: {
      marginBottom: 100,
    },
    icon: {
      width: 25,
      padding: 0,
      margin: 0,
    },
    resetButton: {
      margin: 3,
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.warning.contrastText,
      boxShadow: theme.shadows[6],
      "&:hover": {
        boxShadow: theme.shadows[8],
        backgroundColor: theme.palette.warning.dark,
        color: theme.palette.warning.contrastDark,
      },
    },
    confirmButton: {
      backgroundColor: theme.palette.warning.dark,
      color: theme.palette.warning.contrastDark,
      boxShadow: theme.shadows[6],
      "&:hover": {
        boxShadow: theme.shadows[8],
        backgroundColor: theme.palette.warning.main,
      },
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
      display: "flex",
      flexDirect: "row",
      // width: 20,
      // height: 15,
      // textTransform: "lowercase",
      // backgroundColor: theme.palette.grey[200],
      // boxShadow: theme.shadows[4],
      // //position: "relative",
      zIndex: theme.zIndex.drawer,
      borderRadius: 10,
      alignItems: "center",
      verticalAlign: "middle",
      margin: "auto",
    },
  };

  const toggleConfirm = () => {
    setConfirmed((prev) => !prev);
  };

  const clickText = "Confirm";
  const cancelText = "Cancel";
  //console.log("ColorResetButton");
  //const show = props.showReset;

  //const clearThemeFromStorage = props.clearThemeFromStorage;

  const handleClick = (e) => {
    e.preventDefault();
    setConfirmed(false);
    action(args);
  };

  if (confirmed) {
    return (
      <div>
        <div style={classes.resetButtons}>
          <Zoom in={true}>
            <Button
              variant="contained"
              style={classes.resetButton}
              onClick={toggleConfirm}
            >
              {cancelText}
            </Button>
          </Zoom>
          <Zoom in={true}>
            <Button
              style={classes.confirmButton}
              onClick={(e) => handleClick(e)}
            >
              {label}
            </Button>
          </Zoom>
        </div>
      </div>
    );
  }
  return (
    <div style={classes.resetButtons}>
      <Zoom in={true}>
        <Button
          style={icon ? classes.icon : classes.resetButton}
          onClick={toggleConfirm}
        >
          {icon ? icon : label}
        </Button>
      </Zoom>
    </div>
  );
};

ConfirmButtons.propTypes = {};

export default ConfirmButtons;
