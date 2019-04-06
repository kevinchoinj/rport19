import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scrollActions from 'actions/scroll';
let currentPixel = window.pageYOffset;

class Skew extends React.Component{
  looper = () => {
    const newPixel = window.pageYOffset;
    const diff = newPixel - currentPixel;
    const top = 3;
    const intensity = 0.15;
    const speed = top * ((2/(1+Math.exp(-1 * intensity * diff)))-1);
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
