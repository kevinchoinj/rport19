import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {pageData} from 'data/pageData';
import * as authActions from 'actions/authentication';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  font-family: 'Open Sans', Helvetica, sans-serif;
  padding-top: 100px;
  line-height: 200%;
  min-width: 300px;
  min-height: 100vh;
  box-sizing: border-box;
`;
const LinkObject = ({className, link, children}) => (
  <Link
    to={link}
    className = {className}
  >
    {children}
  </Link>
);
const StyledLink = styled(LinkObject)`
  box-sizing: border-box;
  display: flex;
  padding: 3px 24px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: ${props => props.theme.transitionMedium};
  justify-content: flex-end;
  &:hover {
    color: ${props => props.theme.colorText};
    background-color: rgba(158,158,158,0.2);
  }
`;
const StyledLogOut = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 3px 24px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: ${props => props.theme.transitionMedium};
  justify-content: flex-end;
  &:hover {
    color: ${props => props.theme.colorText};
    background-color: rgba(158,158,158,0.2);
  }
`;
const AdminMenu = ({logOut}) => {
  const menuValues = [
    {text: 'Home', link: pageData.adminHome},
    {text: 'Edit Gallery', link: pageData.adminMiscProjects},
  ];
  return (
    <StyledWrapper>
      {menuValues.map((value) => (
        <div key={value.link}>
          <StyledLink
            link={value.link}
          >
            {value.text}
          </StyledLink>
        </div>
      ))}
      <StyledLogOut
        onClick={() => logOut()}
      >
        Log Out
      </StyledLogOut>
      <div>
        <StyledLink link={pageData.home}>
          Back to site
        </StyledLink>
      </div>
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      dispatch(authActions.logout());
    },
  };
};

export default connect (null, mapDispatchToProps)(AdminMenu);
