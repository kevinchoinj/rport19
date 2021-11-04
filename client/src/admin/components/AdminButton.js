import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Button = ({className, children, onClick}) => (
  <button
    type="submit"
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
);

const StyledButton = styled(Button)`
  cursor: pointer;
  font-size: 13px;
  margin: 7px 0px;
  text-align: center;
  background-color: ${props => props.theme.colorAdminPrimary};
  color: ${props => props.theme.colorBackground};
  padding: 14px 8px;
  font-family: 'Open Sans', Helvetica, sans-serif;
  transition: ${props => props.theme.transitionMedium};
  font-weight: 700;
  color: ${props => props.theme.colorText};
  width: 100%;
  border: none;
  &:hover {
    background-color: ${props => props.theme.colorAdminPrimaryDark};
`;

const LinkWrapper = ({link, children}) =>
  link ?
    <Link to={link}>
      {children}
    </Link>
    :
    children;

const AdminButton = ({children, link, onClick, type}) => {
  return (
    <LinkWrapper link={link}>
      <StyledButton onClick={onClick} type={type}>
        {children}
      </StyledButton>
    </LinkWrapper>
  );
};

export default AdminButton;