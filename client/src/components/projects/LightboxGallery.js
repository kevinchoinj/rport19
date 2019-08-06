import React from 'react';
import Viewer from 'components/projects/LightboxViewer';

const makeUnsplashSrc = (id) => {
  return id;
};

const makeUnsplashThumbnail = (id) => {
  return id;
};

const LightboxGallery = ({imageArray, carouselId}) => {
  return (
    <Viewer
      carouselId = {carouselId}
      images={ imageArray && imageArray.map(({ caption, id }) => ({
        src: makeUnsplashSrc(id),
        thumbnail: makeUnsplashThumbnail(id),
        caption,
      }))
      }/>
  );
};
export default LightboxGallery;