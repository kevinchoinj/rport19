import React from 'react';
import {connect} from 'react-redux';

const Skew = ({children, skew, menuDisplay}) => {
  const skewStyle = {
    transform: `skewY(${skew}deg)`,
    opacity: menuDisplay ? 0 : 1,
  };
  return(
    <section className="skew" style={skewStyle}>
      {children}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    skew: state.scroll.skew,
    menuDisplay: state.menu.menuDisplay,
  };
};

export default connect (mapStateToProps, null)(Skew);