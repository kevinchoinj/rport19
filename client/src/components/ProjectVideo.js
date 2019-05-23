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
`;

const Background = ({backgroundVideo, backgroundImage}) => {
  return(
    <StyledVideo
      poster={backgroundImage}
      src={backgroundVideo}
    />
  );
};

export default Background;