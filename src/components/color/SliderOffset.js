import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { rgbToHex, lighten, darken } from "@mui/material";
import { colorLuminance } from "./util";
const SliderOffset = ({ eventEmitter, newColor }) => {
  // console.log("NEW COLOR : " + newColor);
  const theme = useTheme();
  const [tonalOrg] = useState(theme.palette.tonalOffset);
  const [cur, setCur] = useState(theme.palette.tonalOffset);
  const [committed, setCommitted] = useState(theme.palette.tonalOffset);
  const [showRecalc, setShowRecalc] = useState(
    Number(tonalOrg) === Number(cur)
  );

  const applyTonaloffsetGlobal = () => {
    //  console.log("applyTonaloffsetGlobal");

    const offset = cur; //theme.palette.tonalOffset;
    ["primary", "secondary", "info", "error", "success", "warning"].forEach(
      (which) => {
        const main = theme.palette[which].main;
        const light = rgbToHex(lighten(main, offset * 0.01));
        const dark = rgbToHex(darken(main, offset * 0.01));
        // const light = colorLuminance(main, offset);
        // const dark = colorLuminance(main, offset);
        // console.log(which + main + light + dark);
        theme.palette[which].light = light;
        theme.palette[which].dark = dark;
      }
    );
    setCommitted(cur);
    //const payload = { v: cur, commit: true };
    eventEmitter.dispatch("TONALTOUCH", "");
  };

  useEffect(() => {});
  return (
    <div>
      <div
        style={{
          //backgroundColor: contrastHexMain,
          border: "1px solid gray",
          borderColor: newColor === "" ? theme.palette.primary.main : newColor,
          color: newColor === "" ? theme.palette.primary.main : newColor,
          width: "100%",
          textAlign: "center",
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        <Typography>
          offset&nbsp;
          {committed > 1
            ? Math.round((committed * 0.01 + Number.EPSILON) * 1000) / 1000
            : Math.abs(committed)}
        </Typography>
      </div>
      <div
        style={{
          height: 30,
          width: 80,
          marginLeft: 10,
          marginBottom: 20,
          borderRadius: 50,
        }}
      >
        <Slider
          //marks={[10, 20, 30, 40, 50, 60, 70, 80, 90]}
          style={{
            backgroundColor:
              newColor === "" ? theme.palette.primary.main : newColor,
            color: theme.palette.secondary.contrastText,
            borderRadius: 50,
          }}
          rail={{ backgroundColor: theme.palette.primary.main, height: 10 }}
          //thumb={{ width: 5 }}
          valueLabelDisplay="auto"
          valueLabelFormat={(v, n) => {
            /// v * 0.01 + Number.EPSILON) * 1000) / 1000
            const show = Math.round((v * 0.01 + Number.EPSILON) * 1000) / 1000;
            return (
              <span
                style={{
                  backgroundColor: theme.palette.secondary.dark,
                  color: theme.palette.secondary.contrastText,
                  borderRadius: 500,
                  padding: 3,
                  height: 1,
                }}
              >
                <Typography
                  as="span"
                  style={{
                    backgroundColor: theme.palette.secondary.dark,
                    color: theme.palette.secondary.contrastText,
                    padding: 1,
                    marginLeft: 3,
                  }}
                >
                  {show}
                </Typography>
              </span>
            );
          }}
          defaultValue={tonalOrg * 100}
          onChange={(e, v) => {
            //   console.log(v);
            setCur(v);
            setShowRecalc(Number(tonalOrg * 100) === Number(v));
            eventEmitter.dispatch("TONAL", v);
          }}
          onChangeCommitted={(e, v) => {
            //   console.log("commit");

            //handleTonalChange(v);
            setCommitted(v);
            const payload = { v: v, commit: true };
            eventEmitter.dispatch("TONAL", payload);
          }}
        />
        <Button
          style={{
            display: "block",
            padding: 0,
            textTransform: "lowercase",
            backgroundColor: !showRecalc
              ? theme.palette.info.main
              : theme.palette.grey[200],
            color: !showRecalc
              ? theme.palette.info.contrastText
              : theme.palette.grey[400],
          }}
          disabled={showRecalc}
          onClick={() => {
            applyTonaloffsetGlobal();
          }}
        >
          recalc
        </Button>

        <Button
          style={{
            // hidden for now
            display: "none",
            padding: 0,
            textTransform: "lowercase",
            backgroundColor: !showRecalc
              ? theme.palette.info.main
              : theme.palette.grey[200],
            color: !showRecalc
              ? theme.palette.info.contrastText
              : theme.palette.grey[400],
          }}
          disabled={showRecalc}
          onClick={(e, v) => {
            // setCur(tonalOrg * 100);
            setShowRecalc(false);
            eventEmitter.dispatch("TONAL", tonalOrg);
          }}
        >
          revert
        </Button>
      </div>
    </div>
  );
};

export default SliderOffset;
