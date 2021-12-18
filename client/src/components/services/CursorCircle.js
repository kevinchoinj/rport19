import React, {
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import {connect} from "react-redux";
import {selectCurrentMousePosition} from "reducers";
import CursorCircleInner from "components/services/CursorCircleInner";

//https://github.com/facebook/react/issues/14195
//useMutationEffect removed: https://github.com/facebook/react/pull/14336
const useAnimationFrame = callback => {
  const callbackRef = useRef(callback);
  useLayoutEffect(
    () => {
      callbackRef.current = callback;
    },
    [callback]
  );

  const loop = () => {
    frameRef.current = requestAnimationFrame(
      loop
    );
    const cb = callbackRef.current;
    cb();
  };

  const frameRef = useRef();
  useLayoutEffect(() => {
    frameRef.current = requestAnimationFrame(
      loop
    );
    return () =>
      cancelAnimationFrame(frameRef.current);
  });
};

const CursorCircle = ({mousePosition}) => {
  const [imageValues, setImageValues] = useState({x: 0, y: 0});
  const animate = () => {
    const distX = mousePosition.xValue - imageValues.x;
    const distY = mousePosition.yValue - imageValues.y;
    setImageValues({
      x: imageValues.x + (distX * 0.1),
      y: imageValues.y + (distY * 0.1)
    });
  };

  useAnimationFrame(() => {
    animate();
  });

  return(
    <CursorCircleInner imageValues={imageValues}/>
  );
};

const mapStateToProps = (state) => {
  return {
    mousePosition: selectCurrentMousePosition(state),
  };
};

export default connect(mapStateToProps, null)(CursorCircle);
