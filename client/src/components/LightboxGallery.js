import React from 'react';
import Viewer from 'components/LightboxViewer';

function makeUnsplashSrc (id) {
  return id;
}
function makeUnsplashThumbnail (id) {
  return id;
}
export default class Gallerycomp extends React.Component{

  render(){

    const {
      imageArray,
      carouselId,
    } = this.props;

    if (imageArray.length >=2){
      return (
        <div>
          <Viewer
            carouselId = {carouselId}
            images={imageArray.map(({ caption, id }) => ({
              src: makeUnsplashSrc(id),
              thumbnail: makeUnsplashThumbnail(id),
              caption,
            }))
            } />
        </div>
      );
    }
    else return null;
  }
}
