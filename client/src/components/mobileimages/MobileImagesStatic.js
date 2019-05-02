import React from 'react';

const CardObject = ({loadDelay, image}) => {
  const addLoadDelay = {
    transitionDelay: loadDelay,
  };
  return (
    <div className="mobile_images_column">
      <img
        style={addLoadDelay}
        src={image}
        className="project_fillimage"
        alt=''
      />
    </div>
  );
};

const MobileImages = ({isVisible, image1, image2, image3}) => {
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
};

export default MobileImages;