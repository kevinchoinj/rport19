import React from 'react';
import BannerText from 'components/BannerText.js';

export default class BannerContainer extends React.Component {
  render() {

    const {
      line1,
      line2,
      line3,
      line4,
    } = this.props;

    return (
      <div className="project_banner__container">
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
