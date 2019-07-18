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
  @media screen and (max-width: 992px) {
    padding: 1.5rem 1.5rem 0 1.5rem;
    box-sizing:border-box;
  }
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
const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: '';
  width: 100%;
  top: 10%;
  left: 20%;
  justify-self: flex-start;
  position: sticky;
  color: #555;
  font-size: 6vw;
  font-family: "Josefin Sans", Helvetica, sans-serif;
  div {
    white-space: nowrap;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const Background = ({backgroundVideo, backgroundImage, title}) => {
  return(
    <>
    <StyledTitle>
      {`${title} ${title} ${title}`}
    </StyledTitle>
    <StyledVideo
      poster={backgroundImage}
      src={backgroundVideo}
    />
    </>
  );
};

export default Background;