import React from 'react';

export default class Background extends React.PureComponent{
  render(){

    const backgroundVideo={
      background: 'url(/static/images/daytimelight.jpg) no-repeat',
    };

    return(
      <div className="home_background">
        <video
          playsInline
          autoPlay
          muted
          loop
          poster='/static/images/daytimelight.jpg'
          className="home_background__video"
          style={backgroundVideo}
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