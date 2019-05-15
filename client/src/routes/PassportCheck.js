import React from 'react';
import { connect } from 'react-redux';
import * as authActions from 'actions/authentication';
import {Link} from 'react-router-dom';
import AdminRoutes from 'routes/AdminRoutes';
import TextBasicForm from 'admin/forms/TextBasicForm';
import PassportTicket from 'admin/services/PassportTicket';
import {pageData} from 'data/pageData';
import {
  selectAuthLoggedIn,
} from 'reducers';

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
            <div className="admin_login__form">
              register
              <TextBasicForm
                textInputs = {[
                  {name:'username', type: 'text'},
                  {name:'password', type: 'password'},
                ]}
                formName = 'registerPassport'
                onSubmit={register}
              />
            </div>
            <div className="admin_login__form">
            login
              <TextBasicForm
                textInputs = {[
                  {name:'username', type: 'text'},
                  {name:'password', type: 'password'},
                ]}
                formName = 'loginPassport'
                onSubmit={login}
              />
            </div>
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

const PassportCheck = ({loggedIn, login, register}) => {
  return (
    <div>
      <PassportTicket/>
      <div className="admin_background"/>
      <LoginDisplay
        loggedIn = {loggedIn}
        login={login}
        register={register}
      />
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    loggedIn: selectAuthLoggedIn(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (values) => {
      dispatch(authActions.loginPassport(values));
    },
    register: (values) => {
      dispatch(authActions.registerPassport(values));
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(PassportCheck);
