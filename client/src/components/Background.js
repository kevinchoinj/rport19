import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  left: 0px;
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

const Background = () => {
  return(
    <StyledWrapper>
      <StyledVideo
        poster='/static/images/daytimelight.jpg'
        src='/static/images/daytime.mp4'
      />
    </StyledWrapper>
  );
};

export default Background;