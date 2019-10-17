import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Button = ({className, children}) => (
  <button
    type="submit"
    className={className}
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

const AdminButton = ({children, link, onClick}) => {
  return (
    <LinkWrapper link={link}>
      <StyledButton onClick={onClick}>
        {children}
      </StyledButton>
    </LinkWrapper>
  );
};

export default AdminButton;