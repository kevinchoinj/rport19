import React from 'react';
import backgroundImage from 'images/daytime.jpg';
import backgroundMp4 from 'images/daytime.mp4';
import backgroundWebm from 'images/daytime.webm';

export default class Background extends React.Component{
  render(){

    const backgroundVideo={
      background: `url(${backgroundImage}) no-repeat`,
    };

    return(
      <div className="home_background">
        <video
          playsInline
          autoPlay
          muted
          loop
          poster={backgroundImage}
          className="home_background__video"
          style={backgroundVideo}
        >
          <source
            src={backgroundWebm}
            type="video/webm"
          />
          <source
            src={backgroundMp4}
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}