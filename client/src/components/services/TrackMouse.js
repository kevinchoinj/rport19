import React from "react";
import { setMousePosition } from "reducers/mouse";
import { useDispatch } from "react-redux";

const TrackMouse = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <div onMouseMove={(e) => dispatch(setMousePosition({ xValue: e.clientX, yValue: e.clientY }))}>{children}</div>
  );
};

export default TrackMouse;
