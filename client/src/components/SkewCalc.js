import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scrollActions from 'actions/scroll';
let currentPixel = window.pageYOffset;

class Skew extends React.Component{
  looper = () => {
    const newPixel = window.pageYOffset;
    const diff = newPixel - currentPixel;
    const speed = diff*0.1;
    this.props.scrollActions.setSkew(speed);
    currentPixel = newPixel;
    requestAnimationFrame(this.looper);
  }
  componentDidMount() {
    this.looper();
  }
  render(){
    return null;
  }
}


export default connect(
  (state) => ({
  }),
  dispatch => ({
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(Skew);
