import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Constants";
import { Button } from "@mui/material";
import { eventEmitter } from "../../events.tsx";

export default function DragCard(props) {
  //console.log("DragCard");
  const id = props.id;
  const data = props.data;
  //const theme = props.theme;
  const [{ opacity, backgroundColor }, dragRef, dragPrev] = useDrag(() => ({
    type: ItemTypes.Card,
    item: { id, data },
    collect: (monitor) => {
      return {
        opacity: monitor.isDragging() ? 0.5 : 1,
      };
      //backgroundColor: monitor.isDragging() ? "yellow" : "green",
    },
    end: () => {
      setTimeout(() => {
        eventEmitter.dispatch("DNDISOVER", { hex: "#fff", disappear: true });
      }, 900);
    },
  }));
  return (
    <Button ref={dragRef} style={{ opacity }}>
      {props.children}
    </Button>
  );
}
