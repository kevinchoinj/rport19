import React from 'react';

export default class Background extends React.Component{
  render(){
    const {
      backgroundVideo,
      backgroundImage,
    } = this.props;

    return(
      <div className="full_width">
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
      </div>
    );
  }
}