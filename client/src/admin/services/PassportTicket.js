import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authActions from 'actions/authentication';

class PassportTicket extends React.Component{
  componentDidMount() {
    this.props.authActions.findPassport('Shodyra');
  }
  render(){
    return null;
  }
}
export default connect(
  (state, ownProps) => ({
  }),
  dispatch => ({
    authActions: bindActionCreators(authActions, dispatch)}),
)(PassportTicket);