import React from 'react';
import { connect } from 'react-redux';
import SetUser from 'admin/services/SetUser';
import LoginForm from 'admin/forms/LoginForm';
import * as authActions from 'actions/authentication';
import {Link} from 'react-router-dom';
import AdminRoutes from 'routes/AdminRoutes';
import {pageData} from 'data/pageData';

let json = require('config.json');
let emailAddress= json.emailAddress;

const LoginDisplay = ({loggedIn, logIn, email,}) => {
  if (loggedIn && email === emailAddress){
    return (
      <AdminRoutes/>
    );
  }
  else {
    return (
      <div className="admin_login_wrapper" id="scroll_admin">
        <div className="admin_login_container">
          <div className="admin_container__body">
            <LoginForm onSubmit={logIn}/>
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

const CheckLogin = ({loggedIn, email, logIn}) => {
  return (
    <div>
      <div className="admin_background"/>
      <SetUser/>
      <LoginDisplay
        loggedIn = {loggedIn}
        logIn={logIn}
        email={email}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.authentication.loggedIn,
    email: state.authentication.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (values) => {
      dispatch(authActions.signInUser(values, '/'));
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(CheckLogin);
