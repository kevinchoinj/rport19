import React from 'react';

export default class Background extends React.Component{
  render(){

    const backgroundVideo={
      background: 'url(/static/images/daytime.jpg) no-repeat',
    };

    return(
      <div className="home_background">
        <video
          playsInline
          autoPlay
          muted
          loop
          poster='/static/images/daytime.jpg'
          className="home_background__video"
          style={backgroundVideo}
        >
          <source
            src='/static/images/daytime.webm'
            type="video/webm"
          />
          <source
            src='/static/images/daytime.mp4'
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}