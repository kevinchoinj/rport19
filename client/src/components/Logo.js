import React from 'react';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import styled from 'styled-components';
import {
  selectMenuDisplay,
} from 'reducers';

const StyledWrapper = styled.div`
  position: fixed;
  padding: var(--size-spacing);
  width: 100%;
  top: 0;
  left: 0;
`;
const StyledContainer = styled.div`
  background: transparent;
  position: fixed;
  cursor: pointer;
`;
const StyledLink = styled.span`
  font-size: var(--size-small);
  letter-spacing: 3px;
  color: #fff;
  transition: var(--transition-medium);
  &:hover {
    color: var(--color-link-hover);
  }
`;
const StyledSecondary = styled.span`
  opacity: .5
`;

const Logo = props => {
  return(
    <StyledWrapper>
      <StyledContainer
        onClick={() => props.toggleMenu(props.menuDisplay)}
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
      dispatch(menuActions.hoverMenuOption(''));
      dispatch(menuActions.toggleMenu(!menuDisplay));
      document.getElementById('menu_scrollbar').focus();
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(Logo);