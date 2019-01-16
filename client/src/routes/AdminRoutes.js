import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SetUser from 'admin/services/SetUser';
import LoginForm from 'admin/forms/LoginForm';
import * as authActions from 'actions/authentication';
import * as imagesActions from 'actions/images';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';

import AdminMenu from 'admin/menu/AdminMenu';

import Admin from 'admin/pages/AdminHome';
import AdminMiscProjects from 'admin/pages/AdminMiscProjects';

import {pageData} from 'data/pageData';

import backgroundImage from 'images/admin/background.jpg';

let json = require('config.json');
let emailAddress= json.emailAddress;

const LoginDisplay = ({loggedIn, login, email,}) => {
  if (loggedIn && email === emailAddress){
    return (
      <div className="admin_panel">
        <div className="admin_nav__left">
          <AdminMenu/>
        </div>

        <div className = "admin_right">
          <Switch>
            <Route exact path={pageData.adminHome} render={(props)=> <Admin {...props} />}/>
            <Route exact path={pageData.adminMiscProjects} render={(props)=><AdminMiscProjects {...props} />}/>
          </Switch>
        </div>

        <div className="admin_nav__right"/>
      </div>
    );
  }
  else {
    return (
      <div className="admin_login_wrapper">
        <div className="admin_login_container">
              <div className="admin_container__body">
                <LoginForm onSubmit={login}/>
              </div>
            </div>
            <Link
              to={pageData.homeLink}
              className="admin_login__return"
            >
              Return to Site
            </Link>
      </div>
    );
  }
};

class CheckLogin extends Component {
  login = values => {
    this.props.authActions.signInUser(values, '/');
  };

  render() {

    const {
      loggedIn,
      email,
    }=this.props;

    const backgroundStyle = {
      backgroundImage: 'url('+backgroundImage+')',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh',
      position: 'relative',
    }

    return (
      <div style={backgroundStyle}>
        <SetUser/>
        <LoginDisplay
          loggedIn = {loggedIn}
          signOut={this.signOut}
          login={this.login}
          email={email}
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
