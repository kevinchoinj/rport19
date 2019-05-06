import React from 'react';
import {connect} from 'react-redux';
import {
  selectMenuDisplay,
  selectScrollSkew,
} from 'reducers';

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
    skew: selectScrollSkew(state),
    menuDisplay: selectMenuDisplay(state),
  };
};

export default connect (mapStateToProps, null)(Skew);