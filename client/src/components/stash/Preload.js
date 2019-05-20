import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as menuActions from 'actions/menu';

const preloadImages = [
  {imageFile: '/static/images/chess.jpg', altText:''},
  {imageFile: '/static/images/discord/banner.jpg', altText:''},
  {imageFile: '/static/images/drjart/banner.png', altText:''},
  {imageFile: '/static/images/lasfm/banner.jpg', altText:''},
  {imageFile: '/static/images/leida/banner.jpg', altText:''},
  {imageFile: '/static/images/library/banner.jpg', altText:''},
  {imageFile: '/static/images/tcfs/toocool.jpg', altText:''},
  {imageFile: '/static/images/uwloo/banner.jpg', altText:''},
  {imageFile: '/static/images/wildcat/banner.jpg', altText:''},
  {imageFile: '/static/images/wns/banner.jpg', altText:''},
  {imageFile: '/static/images/delilahs/banner.jpg', altText:''},
  {imageFile: '/static/images/novaruu/1.png', altText:''},
];

const Preload = ({setLoaded}) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  useEffect(() => {
    if (this.state.imagesLoaded >= preloadImages.length) {
      setLoaded(true);
    }
  });

  return (
    <div className="preload_images">
      {preloadImages.map((value) => (
        <div key={value.imageFile}>
          <img
            src={value.imageFile}
            alt={value.altText}
            onLoad={() => setImagesLoaded(imagesLoaded + 1)}
          />
        </div>
      ))}
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    setLoaded: () => dispatch(menuActions.setLoaded(true)),
  };
};

export default connect (null, mapDispatchToProps)(Preload);