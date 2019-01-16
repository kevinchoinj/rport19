import React from 'react';
import Banner from 'components/Banner.js';
import BannerText from 'components/BannerText.js';

export default class BannerContainer extends React.Component {
  render() {

    const {
      bgimage,
      line1,
      line2,
      line3,
      line4,
    } = this.props;

    return (
      <div className="project_banner__container">
        <Banner
          bgimage={bgimage}
        />
        <BannerText
          line1={line1}
          line2={line2}
          line3={line3}
          line4={line4}
        />
      </div>
    );
  }
}
