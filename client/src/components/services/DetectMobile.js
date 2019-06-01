import {useEffect} from 'react';
import {connect} from 'react-redux';
import * as mouseActions from 'actions/mouse';

const DetectMobile = ({setMobile}) => {
  useEffect(() => {
    setMobile();
  }, [setMobile]);
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMobile: () => {
      let c = 'ontouchstart' in window || navigator.msMaxTouchPoints;
      if (c) {
        dispatch(mouseActions.setMobile(true));
      }
      else {
        dispatch(mouseActions.setMobile(false));
      }
    },
  };
};

export default connect (null, mapDispatchToProps)(DetectMobile);