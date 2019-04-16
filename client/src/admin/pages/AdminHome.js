import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from 'actions/authentication';
import GitView from 'admin/components/GitView';
import FetchGit from 'admin/services/FetchGit';
import TextBasicForm from 'admin/forms/TextBasicForm';

class AdminHome extends React.Component {

  register = values => {
    this.props.authActions.registerPassport(values);
  }

  render(){
    return (
      <div className="admin_home">
        Recent Changes

        <TextBasicForm
          textInputs = {[
            {name:'first_name', type: 'text'},
            {name:'last_name', type: 'text'},
            {name:'email', type: 'text'},
            {name:'username', type: 'text'},
            {name:'password', type: 'text'},
          ]}
          formName = 'register'
          onSubmit={this.register}
        />

        <GitView/>
        <FetchGit/>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({

  }),
  dispatch => ({
    authActions: bindActionCreators(authActions, dispatch),
  }),
)(AdminHome);
