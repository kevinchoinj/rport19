import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from 'actions/authentication';
import * as imagesActions from 'actions/images';
import {Link} from 'react-router-dom';
import AdminRoutes from 'routes/AdminRoutes';
import TextBasicForm from 'admin/forms/TextBasicForm';
import PassportTicket from 'admin/services/PassportTicket';

import {pageData} from 'data/pageData';

const LoginDisplay = ({loggedIn, register, login}) => {
  if (loggedIn){
    return (
      <AdminRoutes/>
    );
  }
  else {
    return (
      <div className="admin_login_wrapper" id="scroll_admin">
        <div className="admin_login_container">
          <div className="admin_container__body">
            register
            <TextBasicForm
              textInputs = {[
                {name:'username', type: 'text'},
                {name:'password', type: 'text'},
              ]}
              formName = 'registerPassport'
              onSubmit={register}
            />

            login
            <TextBasicForm
              textInputs = {[
                {name:'username', type: 'text'},
                {name:'password', type: 'text'},
              ]}
              formName = 'loginPassport'
              onSubmit={login}
            />

          </div>
        </div>
        <Link
          to={pageData.home}
          className="admin_login__return"
        >
          Return to Site
        </Link>
      </div>
    );
  }
};

class CheckLogin extends Component {
  register = values => {
    this.props.authActions.registerPassport(values);
  }
  login = values => {
    this.props.authActions.loginPassport(values);
  }

  render() {

    const {
      loggedIn,
    }=this.props;

    return (
      <div>
        <PassportTicket/>
        <div className="admin_background"/>
        <LoginDisplay
          loggedIn = {loggedIn}
          signOut={this.signOut}
          login={this.login}
          register={this.register}
        />
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
    authActions: bindActionCreators(authActions, dispatch),
    imagesActions: bindActionCreators(imagesActions, dispatch),
  }),
)(CheckLogin);
