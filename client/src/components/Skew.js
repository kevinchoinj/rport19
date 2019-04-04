import React from 'react';
import {connect} from 'react-redux';

class Skew extends React.Component{
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
  }),
)(Skew);
