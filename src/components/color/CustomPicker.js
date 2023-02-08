import React, { useMemo } from "react";
import { HexColorPicker } from "react-colorful";

export const CustomPicker = ({ color, size, ...rest }) => {
  // console.log("CustomPicker");
  const hexString = useMemo(() => {
    return color;
  }, [color]);

  return (
    <HexColorPicker
      style={{ width: size, height: size }}
      color={hexString}
      {...rest}
    />
  );
};
export default CustomPicker;
