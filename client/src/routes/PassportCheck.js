import React from 'react';
import styled from 'styled-components';
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

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0px;
  left: 0px;
`;
const StyledContainer = styled.div`
  color: #fff;
  display: flex;
  background-color: var(--admin-container-color);
  padding: var(--size-small);
  box-shadow: var(--shadow-box);
  max-width: 100vw;
  flex-wrap: wrap;
`;
const StyledBody = styled.div`
  padding: var(--size-small);
  display: flex;
`;
const StyledForm = styled.div`
  margin: 5px;
`;
const LinkObject = ({className, link, children}) => (
  <Link
    to={link || '/'}
    className = {className}
  >
    {children}
  </Link>
);
const StyledLink = styled(LinkObject)`
margin-top: 8px;
text-decoration: none;
color: var(--color-white);
font-family: 'Open Sans', Helvetica, sans-serif;
font-size: 12px;
transition: var(--transition-medium);
  &:hover {
    color: var(--color-grey-light);
  }
`;

const LoginDisplay = ({loggedIn, register, login}) => {
  if (loggedIn){
    return (
      <AdminRoutes/>
    );
  }
  else {
    return (
      <StyledWrapper>
        <StyledContainer>
          <StyledBody>
            <StyledForm>
              register
              <TextBasicForm
                textInputs = {[
                  {name:'username', type: 'text'},
                  {name:'password', type: 'password'},
                ]}
                formName = 'registerPassport'
                onSubmit={register}
              />
            </StyledForm>
            <StyledForm>
            login
              <TextBasicForm
                textInputs = {[
                  {name:'username', type: 'text'},
                  {name:'password', type: 'password'},
                ]}
                formName = 'loginPassport'
                onSubmit={login}
              />
            </StyledForm>
          </StyledBody>
        </StyledContainer>
        <StyledLink
          link={pageData.home}
        >
          Return to Site
        </StyledLink>
      </StyledWrapper>
    );
  }
};
const StyledBackground = styled(LinkObject)`
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(/static/images/background.jpg);
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
  }
`;
const PassportCheck = ({loggedIn, login, register}) => {
  return (
    <>
      <PassportTicket/>
      <StyledBackground/>
      <LoginDisplay
        loggedIn = {loggedIn}
        login={login}
        register={register}
      />
    </>
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
