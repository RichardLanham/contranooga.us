import React from "react";
import Slider from "@mui/material/Slider";
import { styled, useTheme } from "@mui/material/styles";

const CustomSlider = () => {
  const theme = useTheme();
  const CustomizedSlider = styled(Slider)({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    thumb: { backgroundColor: "red" },
  });
  return <CustomizedSlider />;
};

export default CustomSlider;
