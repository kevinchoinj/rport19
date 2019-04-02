import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as scrollActions from 'actions/scroll';

/*Detects of device has touch screen for background-position: fixed on banner*/
class DetectMobile extends React.Component {
  componentDidMount(){
    let c = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    if (c) {
      this.props.scrollActions.setMobile(true);
    }
    else {
      this.props.scrollActions.setMobile(false);
    }
  }
  render(){
    return null;
  }
}

export default connect(
  (state, ownProps) => ({
  }),
  dispatch => ({
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(DetectMobile);