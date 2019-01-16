import React from 'react';
import { connect } from 'react-redux';

class AdminHome extends React.Component {
  render(){
    return (
      <div className="admin_container">
        Home
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    loggedIn: state.authentication.loggedIn,
    email: state.authentication.email,
  }),
  dispatch => ({
  }),
)(AdminHome);
