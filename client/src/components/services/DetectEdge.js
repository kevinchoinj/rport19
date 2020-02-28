import {useEffect} from 'react';
import {connect} from 'react-redux';
import * as mouseActions from 'actions/mouse';

const DetectEdge = ({setEdge}) => {
  useEffect(() => {
    setEdge();
  }, [setEdge]);
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEdge: () => {
      if (window.navigator.userAgent.indexOf('Edge') > -1) {
        dispatch(mouseActions.setEdge(true));
      }
    },
  };
};

export default connect (null, mapDispatchToProps)(DetectEdge);