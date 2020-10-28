import React from 'react';
import {connect} from 'react-redux';
import {hoverMenuOption, toggleMenu} from 'actions/menu';
import styled from 'styled-components';
import {
  selectMenuDisplay,
} from 'reducers';

const StyledWrapper = styled.div`
  position: fixed;
  padding: var(--size-spacing);
  box-sizing: border-box;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  pointer-events: none;
`;
const StyledContainer = styled.div`
  background: transparent;
  position: fixed;
  cursor: pointer;
`;
const StyledLink = styled.span`
  pointer-events: auto;
  font-size: var(--size-small);
  letter-spacing: 3px;
  color: #fff;
  text-decoration: none;
  transition: ${props => props.theme.transitionMedium}
  :hover {
    color: ${props => props.theme.colorLinkHover}
  }
`;
const StyledSecondary = styled.span`
  color: ${props => props.theme.colorTheme};
`;

const handleKeyDown = (event, action) => {
  if (event.keyCode === 13) {
    action();
  }
};
const Logo = ({menuDisplay, toggleMenu}) => {
  return(
    <StyledWrapper>
      <StyledContainer
        aria-label="logo Kevin Choi"
        onClick={() => toggleMenu(menuDisplay)}
        onKeyDown={(event) => handleKeyDown(event, () => toggleMenu(menuDisplay))}
      >
        <StyledLink>
         K E V I N&nbsp;<StyledSecondary>C H O I</StyledSecondary>
        </StyledLink>
      </StyledContainer>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: (menuDisplay) => {
      dispatch(hoverMenuOption(''));
      dispatch(toggleMenu(!menuDisplay));
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(Logo);