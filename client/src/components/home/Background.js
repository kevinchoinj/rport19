import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  selectMenuDisplay,
  selectMenuHover,
} from 'reducers';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
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
    background-color: rgba(0,0,0,.5);
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
  height: 100vh;
  width: 100%;
  background: rgba(0,0,0, .75);
  color: #fff;
  mix-blend-mode: darken;
`;

const Background = ({menuDisplay, hoverOption}) => {
  return(
    <StyledWrapper
      hoverOption={hoverOption}
      menuDisplay={menuDisplay}
    >
      <StyledVideo
        poster='/static/images/daytimelight.jpg'
        src='/static/images/daytime.mp4'
      />
      <StyledText>
        KC
      </StyledText>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
    hoverOption: selectMenuHover(state),
  };
};

export default connect (mapStateToProps, null)(Background);
