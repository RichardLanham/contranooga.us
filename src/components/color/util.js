import {
  getLuminance,
  rgbToHex,
  darken,
  lighten,
  //TextField,
} from "@mui/material";
import cloneDeep from "lodash/cloneDeep";

// (targ, swatchHex, shade, true)
export const incrementShade = (hex, increase, offset) => {
  //let offset = theme.palette.tonalOffset;
  offset === increase ? offset++ : offset++;
  // const seed = theme.palette[palette].main;

  //   theme.palette[palette].light = colorLuminance(hex, Math.abs(offset));
  //   theme.palette[palette].dark = colorLuminance(hex, offset);

  const light = colorLuminance(hex, Math.abs(offset));
  const dark = colorLuminance(hex, offset);

  return { light: light, dark: dark };
  // console.log("incrementShade");
  //console.log(hex);
  // refreshReact();
};

export const colorLuminance = (hex, lum) => {
  //console.log("colorlum");
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    // console.log("C: " + c)
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
};

export const getContrastHex = (hex, factor) => {
  const lum = getLuminance(hex);
  const darker = darken(hex, factor);
  const lighter = lighten(hex, factor);

  const dLum = getLuminance(rgbToHex(darker));
  const lLum = getLuminance(rgbToHex(lighter));

  const dDistance = Math.abs(lum - dLum);
  const lDistance = Math.abs(lum - lLum);

  return lDistance > dDistance ? lighter : darker;
};

export const hexToRgb = (hex) => {
  if (!hex) {
    return;
  }
  if (hex.toString().substr(0, 1) !== "#") {
    return hex; // probably rgb already
  }

  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const fillHex = (color, theme) => {
  //  console.log("");
  const targMode = cloneDeep(color);
  // put current theme values into the mode, for targetButtons
  targMode.hex.value = theme.main;
  targMode.hex.clean = theme.main.replace("#", "");
  targMode.contrast.value = theme.contrastText;

  return targMode;
};
