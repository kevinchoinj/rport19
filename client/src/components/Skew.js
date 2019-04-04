import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scrollActions from 'actions/scroll';

const section = document.querySelector('section');
let currentPixel = window.pageYOffset;

class Skew extends React.Component{
  state = {
    skew: ''
  };
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
    const {
      children,
      skew,
    } = this.props;

    const skewStyle = {
      transform: `skewY(${skew}deg)`
    };
    return(
      <section className="skew" style={skewStyle}>
        {children}
      </section>
    );
  }
}


export default connect(
  (state) => ({
    skew: state.scroll.skew,
  }),
  dispatch => ({
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(Skew);
