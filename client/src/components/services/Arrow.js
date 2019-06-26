import React, {
  useState,
  useRef,
  useLayoutEffect,
} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  selectMouseContent,
  selectIsMobile,
  selectIsEdge,
} from 'reducers';

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
  top: 2rem;
  left: -5rem;
  position: fixed;
  pointer-events: none;
  height: 100px;
  width: 100px;
  transition: .2s ease;
  mix-blend-mode:  difference;
  will-change: opacity;
  svg {
    stroke: #fff;
    stroke-width: 3;
  }
`;
const StyledUp = styled(StyledWrapper)`
  opacity: ${props => props.contentExists ? 1 : 0}
`;
const StyledDown = styled(StyledWrapper)`
  opacity: ${props => props.contentExists ? 1 : 0}
`;

const TextOverlay = ({content, mousePosition, isMobile, isEdge }) => {

  const [imageValues, setImageValues] = useState({x: 0, y: 0});
  const animate = () => {
    const distX = mousePosition.xValue - imageValues.x;
    const distY = mousePosition.yValue - imageValues.y;
    setImageValues({
      x: imageValues.x + (distX * 0.05),
      y: imageValues.y + (distY * 0.05)
    });
  };

  useAnimationFrame(() => {
    animate();
  });

  const imageStyle = {
    transform: `translate3d(${imageValues.x}px, ${imageValues.y}px, 0)`,
  };

  return(
    <>
      {!isMobile && !isEdge &&
      <>
        <StyledDown style={imageStyle} contentExists={content && content === 'down'}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 92 100">
            <line x1="0.4" y1="54.4" x2="46" y2="99"></line>
            <line x1="91.6" y1="54.4" x2="46" y2="99"></line>
            <line x1="40.3" y1="77.8" x2="8.2" y2="46.4"></line>
            <line x1="51.7" y1="77.8" x2="83.8" y2="46.4"></line>
            <line x1="51.7" y1="0" x2="51.7" y2="77.8"></line>
            <line x1="40.3" y1="0" x2="40.3" y2="77.8"></line>
          </svg>
        </StyledDown>
        <StyledUp style={imageStyle} contentExists={content && content === 'up'}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 92 100">
            <line x1="0.4" y1="44.6" x2="46" y2="0"></line>
            <line x1="91.6" y1="44.6" x2="46" y2="0"></line>
            <line x1="40.3" y1="21.2" x2="8.2" y2="54.4"></line>
            <line x1="51.7" y1="21.2" x2="83.8" y2="54.4"></line>
            <line x1="51.7" y1="21.2" x2="51.7" y2="99"></line>
            <line x1="40.3" y1="21.2" x2="40.3" y2="99"></line>
          </svg>
        </StyledUp>
      </>
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isEdge: selectIsEdge(state),
    content: selectMouseContent(state),
    isMobile: selectIsMobile(state),
  };
};

export default connect (mapStateToProps, null)(TextOverlay);
