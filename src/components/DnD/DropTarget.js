import React from "react";
import { useDrop } from "react-dnd";
import { useTheme } from "@mui/material/styles";
import { ItemTypes } from "./Constants";
// import { Button } from "@mui/material";
import { eventEmitter } from "../../events.tsx";

const DropTarget = (props) => {
  const theme = useTheme();
  const doSetHex = props.doSetHex;
  const hex = props.hex;
  const [{ isOver, id }, dropRef] = useDrop({
    accept: ItemTypes.Card,
    drop: (item, monitor) => {
      item.data.hex = hex.hex.value;
      item.data.light = "";
      item.data.dark = "";
      doSetHex(item.data); // out
      eventEmitter.dispatch("DNDISOVER", { ...hex, dropped: item.data.target });
      setTimeout(() => {
        eventEmitter.dispatch("DNDISOVER", { ...hex, disappear: true });
      }, 2000);
    },
    collect: (monitor) => {
      if (monitor.isOver()) {
        eventEmitter.dispatch("DNDISOVER", hex);
      }
      return {
        isOver: !!monitor.isOver(),
      };
    },
    hover: (item, monitor) => {
      // console.log(item);
    },
  });

  return (
    <div
      style={{
        backgroundColor: isOver ? hex.hex.value : theme.palette.grey[200],
        height: isOver ? 50 : 40,
        boxShadow: isOver ? theme.shadows[4] : theme.shadows[0],
      }}
      ref={dropRef}
    >
      {props.children}
    </div>
  );
};

export default DropTarget;
