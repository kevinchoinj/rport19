import React from "react";
import { getMousePosition } from "actions/mouse";
import { useDispatch } from "react-redux";

const TrackMouse = ({ children }) => {
  const dispatch = useDispatch();
  return <div onMouseMove={(e) => dispatch(getMousePosition(e.clientX, e.clientY))}>{children}</div>;
};

export default TrackMouse;
