import React from 'react';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import {bindActionCreators} from 'redux';

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
