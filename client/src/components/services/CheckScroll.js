import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as scrollActions from 'actions/scroll';

class CheckScroll extends React.Component {
  constructor(props){
    super(props);
    this.scroller = this.scroller.bind(this);
  }
  componentDidMount(){
    this.scroller();
    window.addEventListener('scroll', this.scroller);
    window.addEventListener('resize', this.scroller);
  }
  scroller() {
    this.props.scrollActions.checkScroll(window.pageYOffset);
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
)(CheckScroll);