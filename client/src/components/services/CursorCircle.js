import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {hoverImage} from 'actions/mouse';

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
  height: 4rem;
  width: 4rem;
  border-radius: 2rem;
  position: fixed;
  top: -2rem;
  left: -2rem;
  opacity: .8;
  background-color: rgba(216, 178, 216, .05);
  border: 1px solid rgba(216, 178, 216, .5);
  pointer-events: none;
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

  const imageStyle = {
    transform: `translate(${imageValues.x}px, ${imageValues.y}px)`,
  };

  return(
      <StyledWrapper style={imageStyle}/>

  );
};

const mapStateToProps = (state) => {
  return {
    content: state.mouse.content,
    mousePosition: state.mouse.mousePosition,
  };
};

export default connect(mapStateToProps, null)(CursorCircle);
