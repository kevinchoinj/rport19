import React from 'react';
import { connect } from 'react-redux';

class Banner extends React.Component {
  render() {
    const {
      bgimage,
      bannerOffset,
      opacity,
    } = this.props;

    const projectBannerImage={
      backgroundImage: 'url('+bgimage+')',
      marginTop: bannerOffset,
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
    let bannerOffset;
    let opacity;

    if (scrollAmount > window.innerHeight){
      bannerOffset = window.innerHeight;
      opacity = 0;
    }
    else {
      bannerOffset = scrollAmount;
      opacity = 1 - scrollAmount/1000;
    }

    return {
      bannerOffset,
      opacity,
    }
  },
)(Banner);
