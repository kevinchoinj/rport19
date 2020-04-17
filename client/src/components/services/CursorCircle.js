import React, {
  useState,
  useRef,
  useLayoutEffect,
} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {selectCurrentMousePosition} from 'reducers';

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

const StyledWrapper = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 2.5rem;
  position: fixed;
  top: -2.5rem;
  left: -2.5rem;
  opacity: .8;
  background-color: rgba(216, 178, 216, .1);
  border: 1px solid rgba(216, 178, 216, .9);
  pointer-events: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

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
    <StyledWrapper style={{
      transform: `translate(${imageValues.x}px, ${imageValues.y}px)`
    }}/>
  );
};

const mapStateToProps = (state) => {
  return {
    mousePosition: selectCurrentMousePosition(state),
  };
};

export default connect(mapStateToProps, null)(CursorCircle);
