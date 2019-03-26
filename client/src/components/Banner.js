import React from 'react';
import { connect } from 'react-redux';

class Banner extends React.Component {
  render() {
    const {
      bgimage,
      opacity,
    } = this.props;

    const projectBannerImage={
      backgroundImage: `url(${bgimage})`,
      opacity: opacity,
    };

    return (
      <div
        style={projectBannerImage}
        className="project_banner_image"
      />
    );
  }
}

export default connect(
  (state) => {
    const scrollAmount = state.scroll.scrollAmount;
    let opacity;

    if (scrollAmount > window.innerHeight){
      opacity = 0;
    }
    else {
      opacity = 1 - scrollAmount/1000;
    }

    return {
      opacity,
    };
  },
)(Banner);
