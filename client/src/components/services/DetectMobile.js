import {useEffect} from 'react';
import {connect} from 'react-redux';
import * as scrollActions from 'actions/scroll';

const DetectMobile = props => {
  useEffect(() => {
    props.setMobile();
  });
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMobile: () => {
      let c = 'ontouchstart' in window || navigator.msMaxTouchPoints;
      if (c) {
        dispatch(scrollActions.setMobile(true));
      }
      else {
        dispatch(scrollActions.setMobile(false));
      }
    },
  };
};

export default connect (null, mapDispatchToProps)(DetectMobile);