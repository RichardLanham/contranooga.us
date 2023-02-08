import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

// import DynamicFeedIcon from "@mui/icons/DynamicFeed";
import { DynamicFeed } from "@mui/icons-material";
import { Button, Fab } from "@mui/material";

import { Inspector, ObjectRootLabel, ObjectLabel } from "react-inspector";

import { StyledColorSections } from "../../styles/ComponentStyles";

import { eventEmitter } from "../../events.tsx";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const ThemeInspector = () => {
  const refresh = useForceUpdate();
  const theme = useTheme();
  const classes = {
    root: {
      //  backgroundColor: theme.palette.primary.light,
      // color: theme.palette.primary.contrastText,
      display: "block",
      //zIndex: theme.zIndex.drawer,
      // position: "fixed",
      overflow: "scroll",
      top: 0,
      right: 0,
      width: 380,
      height: 500,
      paddingBottom: 40,
      //   [theme.breakpoints.down("sm")]: {
      //     top: 80,
      //     left: 10,
      //     width: 300,
      //     height: 400,
      //   },
    },
    debug: {
      ...theme.debug,
    },
    fab: {
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 0,
      width: 20,
    },
    inspector: {
      backgroundColor: "green",
    },
  };

  const defaultNodeRenderer = ({
    depth,
    name,
    data,
    isNonenumerable,
    expanded,
  }) => {
    return depth === 0 ? (
      <ObjectRootLabel name={name} data={data} />
    ) : (
      <ObjectLabel name={name} data={data} isNonenumerable={isNonenumerable} />
    );
  };

  useEffect(() => {
    eventEmitter.subscribe("REFRESH", () => {
      console.log("REFRESH at Site");
      refresh();
    });
    return () => {
      eventEmitter.unsubscribe("REFRESH");
    };
  }, []);

  const [visible, setVisible] = useState(true);
  const toggle = () => {
    setVisible((prev) => (prev ? false : true));
  };

  const [pre, setPre] = useState(false);
  const togglePre = () => {
    setPre((prev) => (prev ? false : true));
  };

  const copyPre = () => {
    var copyText = document.getElementById("themeCopy");
    copyText.select();
    //copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };

  const copyColorModeCopy = () => {
    var copyText = document.getElementById("colorModeCopy");
    copyText.select();
    //       copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };

  return (
    <StyledColorSections>
      <button
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: theme.zIndex.modal,
          width: 80,
        }}
        onClick={toggle}
      >
        <DynamicFeed />
      </button>
      <div style={{ ...classes.root, display: visible ? "block" : "none" }}>
        <div style={{ position: "relative" }}>
          <Button onClick={copyPre}>copyPalette</Button>
          <Button onClick={copyColorModeCopy}>copyColor</Button>
          <textarea
            readOnly={true}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 10,
              height: 10,
            }}
            value={JSON.stringify(theme.palette, null, 3)}
            id="themeCopy"
          />

          <textarea
            readOnly={true}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 10,
              height: 10,
            }}
            //value={JSON.stringify(state.ColorModes, null, 3)}
            value={theme.color_modes || {}}
            id="colorModeCopy"
          />
        </div>

        <Inspector
          data={theme.palette}
          expandLevel={2}
          nodeRenderer={defaultNodeRenderer}
        />

        <Inspector
          data={theme}
          expandLevel={1}
          nodeRenderer={defaultNodeRenderer}
        />
      </div>
    </StyledColorSections>
  );
};

export default ThemeInspector;
