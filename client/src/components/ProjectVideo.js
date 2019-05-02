import React from 'react';

const Background = ({backgroundVideo, backgroundImage}) => {
  return(
    <video
      playsInline
      autoPlay
      muted
      loop
      poster={backgroundImage}
      className="project_video"
    >
      <source
        src={backgroundVideo}
        type="video/mp4"
      />
    </video>
  );
};

export default Background;