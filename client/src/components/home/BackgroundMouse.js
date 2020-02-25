import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  selectMenuDisplay,
  selectMenuHover,
  selectCurrentMousePosition,
} from 'reducers';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  left: 0px;
  transition: .2s ease;
  pointer-events: ${props => props.menuDisplay ? 'none' : 'auto'};
  opacity: ${props => (props.hoverOption && props.menuDisplay) ? 0 : 1};
  :after {
    content: '';
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0,.1);
  }
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
/*
const StyledText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 800;
  font-style: normal;
  text-align: center;
  font-size: 50vw;
  content: 'KC';
  height: 100%;
  width: 100%;
  background: rgba(0,0,0, .75);
  color: #fff;
  mix-blend-mode: darken;
`;
*/
const StyledTextWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0,0,0,.75);
  mix-blend-mode: darken;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledText = styled.h1`
  font-size: 15vw;
  margin: 0 0 0 ${props => props.marginLeft};
  color: #dadada;
  font-family: 'Josefin Sans';
`;
const Background = ({menuDisplay, hoverOption, mousePosition}) => {
  const memoizedMovement = useMemo(() => mousePosition.xValue/100, [mousePosition])
  return(
    <StyledWrapper
      hoverOption={hoverOption}
      menuDisplay={menuDisplay}
    >
      <StyledVideo
        poster='/static/images/daytimelight.jpg'
        src='/static/images/daytime.mp4'
      />
      <StyledTextWrapper>
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
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    mousePosition: selectCurrentMousePosition(state),
    menuDisplay: selectMenuDisplay(state),
    hoverOption: selectMenuHover(state),
  };
};

export default React.memo(connect(mapStateToProps, null)(Background));
