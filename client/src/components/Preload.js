import React from 'react';
import banner3 from 'images/chess.jpg';
import banner7 from 'images/discord/banner.jpg';
import banner8 from 'images/drjart/banner.png';
import banner9 from 'images/lastfm/banner.jpg';
import banner10 from 'images/leida/banner.jpg';
import banner11 from 'images/library/banner.jpg';
import banner14 from 'images/tcfs/toocool.jpg';
import banner16 from 'images/uwloo/banner.jpg';
import banner17 from 'images/wildcat/banner.jpg';
import banner18 from 'images/wns/banner.jpg';
import banner19 from 'images/delilahs/banner.jpg';
import banner20 from 'images/novaruu/banner.jpg';

import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import {bindActionCreators} from 'redux';

const preloadImages = [
  {imageFile: banner3, altText:''},
  {imageFile: banner7, altText:''},
  {imageFile: banner8, altText:''},
  {imageFile: banner9, altText:''},
  {imageFile: banner10, altText:''},
  {imageFile: banner11, altText:''},
  {imageFile: banner14, altText:''},
  {imageFile: banner16, altText:''},
  {imageFile: banner17, altText:''},
  {imageFile: banner18, altText:''},
  {imageFile: banner19, altText:''},
  {imageFile: banner20, altText:''},
];

class Preload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesLoaded: 1,
    };
  }
  imageLoaded() {
    this.setState((prevState) => ({
      imagesLoaded: prevState.imagesLoaded+1,
    }));
    if (this.state.imagesLoaded >= preloadImages.length) {
      this.props.menuActions.setLoaded(true);
    }
  }
  render() {

    return (
      <div className="preload_images">
        {preloadImages.map((value, index)=>(
          <div key={index}>
            <img
              src={value.imageFile}
              alt={value.altText}
              onLoad={this.imageLoaded.bind(this)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  () => ({
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(Preload);
