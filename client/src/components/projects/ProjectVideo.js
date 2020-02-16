import React from 'react';
import styled from 'styled-components';

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
  width: 100%;
  height: auto;
  @media screen and (min-width: 992px) {
    margin: 10rem 0px;
    width: 66.6666%;
    height: auto;
    float: right;
    align-self: flex-end;
    transform: translate3d(0px, 0px, 0.1px) rotateX(49deg) rotateY(0deg) rotateZ(39deg);
    -webkit-transform-style: preserve-3d;
  }
`;

const Background = ({backgroundVideo, backgroundImage}) => {
  return(
    <>
    <StyledVideo
      poster={backgroundImage}
      src={backgroundVideo}
    />
    </>
  );
};

export default Background;