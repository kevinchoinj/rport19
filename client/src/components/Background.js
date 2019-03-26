import React from 'react';

export default class Background extends React.PureComponent{
  render(){
    return(
      <div className="home_background">
        <video
          playsInline
          autoPlay
          muted
          loop
          poster='/static/images/daytimelight.jpg'
          className="home_background__video"
        >
          <source
            src='/static/images/daytime.mp4'
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}