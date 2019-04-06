import React from 'react';
import {connect} from 'react-redux';

class Skew extends React.Component{
  render(){
    const {
      children,
      skew,
      menuDisplay,
    } = this.props;

    const skewStyle = {
      transform: `skewY(${skew}deg)`,
      opacity: menuDisplay ? 0 : 1,
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
    menuDisplay: state.menu.menuDisplay,
  }),
  dispatch => ({
  }),
)(Skew);
