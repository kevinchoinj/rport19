import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  selectMenuDisplay,
} from 'reducers';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  left: 0px;
  transition: .2s ease;
  opacity: ${props => props.menuDisplay && 0};
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

const Background = ({menuDisplay}) => {
  return(
    <StyledWrapper menuDisplay={menuDisplay}>
      <StyledVideo
        poster='/static/images/daytimelight.jpg'
        src='/static/images/daytime.mp4'
      />
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
  };
};

export default connect (mapStateToProps, null)(Background);
