import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  selectCurrentMousePosition,
} from 'reducers';

const StyledWrapper = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  left: 0px;
  transition: .2s ease;
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
  @media screen and (max-width: 768px) {
    margin: 0;
  }
  color: #dadada;
  font-family: 'Josefin Sans', sans-serif;
  @media screen and (max-width: 768px) {
    transform: none !important;
  }
`;
const Background = ({mousePosition}) => {
  const memoizedMovement = useMemo(() => mousePosition.xValue/50, [mousePosition])
  return(
    <StyledWrapper>
      <StyledVideo
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
  };
};

export default React.memo(connect(mapStateToProps, null)(Background));
