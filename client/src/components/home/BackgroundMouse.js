import React, {memo, useMemo} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  selectCurrentMousePosition,
  selectMenuDisplay,
} from 'reducers';

const StyledWrapper = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  left: 0px;
  transition: .2s ease;
`;
const Video = ({className, src, poster}) => (
  <video
    playsInline
    autoPlay
    muted
    loop
    poster={poster}
    className={className}
  >
    <source
      src={src}
      type="video/mp4"
    />
  </video>
);
const StyledVideo = styled(Video)`
  position:fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
  background-position: center center;
`;
const StyledTextWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  opacity: ${props => props.menuDisplay && 0};
  transition: .4s ease;
`;
// mix-blend-mode: darken;
const StyledText = styled.h1`
  font-size: 12vw;
  margin: 0 0 0 ${props => props.marginLeft};
  color: ${props => props.theme.colorTheme};

  @media screen and (max-width: 768px) {
    margin: 0;
    -webkit-text-stroke: 1px ${props => props.theme.colorTheme};
  }
  font-weight: 400;
  font-family: 'Josefin Sans', sans-serif;
  @media screen and (max-width: 768px) {
    transform: none !important;
  }
`;
// color: #dadada;

//  color: rgba(216, 178, 216, .05);
//-webkit-text-stroke: 1px rgba(216, 178, 216, .5);

const VideoComponent = memo(() => (
  <StyledVideo
    src='/static/images/daytime.mp4'
  />
));

const Background = ({menuDisplay, mousePosition}) => {
  const memoizedMovement = useMemo(() => mousePosition.xValue/35, [mousePosition]);
  return(
    <>
      <StyledWrapper>
        <VideoComponent/>
      </StyledWrapper>
      <StyledTextWrapper menuDisplay={menuDisplay}>
        <StyledText
          marginLeft="-3rem"
          style={{
            transform: `translateX(${memoizedMovement}px)`,
          }}
        >
          CREATIVE
        </StyledText>
        <StyledText
          marginLeft="3rem"
          style={{
            transform: `translateX(-${memoizedMovement}px)`,
          }}
        >
          DEVELOPER
        </StyledText>
      </StyledTextWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mousePosition: selectCurrentMousePosition(state),
    menuDisplay: selectMenuDisplay(state),
  };
};

export default memo(connect(mapStateToProps, null)(Background));
