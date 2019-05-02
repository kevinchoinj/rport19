import React from 'react';
import Viewer from 'components/LightboxViewer';

const makeUnsplashSrc = (id) => {
  return id;
};

const makeUnsplashThumbnail = (id) => {
  return id;
};

const LightboxGallery = ({imageArray, carouselId}) => {
  if (imageArray.length >=2){
    return (
      <Viewer
        carouselId = {carouselId}
        images={imageArray.map(({ caption, id }) => ({
          src: makeUnsplashSrc(id),
          thumbnail: makeUnsplashThumbnail(id),
          caption,
        }))
        }/>
    );
  }
  else return null;
};
export default LightboxGallery;