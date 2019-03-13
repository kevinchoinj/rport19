import React from 'react';
import OverlayBottom from 'components/animations/OverlayBottom';

const CardObject = ({loadDelay, image, isVisible}) => {

  const addLoadDelay = {
    transitionDelay: loadDelay,
  };

  return (
    <div className="mobile_images_column">
      <OverlayBottom
        isVisible = {isVisible}
        loadDelay={loadDelay}
      >
        <img
          style={addLoadDelay}
          src={image}
          className="project_fillimage"
          alt=''
        />
      </OverlayBottom>
    </div>
  );
};


export default class MobileImages extends React.Component {
  render() {
    const {
      isVisible,
      image1,
      image2,
      image3
    } = this.props;

    return (
      <div className="mobile_images__wrapper">
        <div className="mobile_images__container">
          <CardObject
            isVisible={isVisible}
            loadDelay="0s"
            image={image1}
          />
          <CardObject
            isVisible={isVisible}
            loadDelay=".4s"
            image={image2}
          />
          <CardObject
            isVisible={isVisible}
            loadDelay=".8s"
            image={image3}
          />
        </div>
      </div>
    );
  }
}
