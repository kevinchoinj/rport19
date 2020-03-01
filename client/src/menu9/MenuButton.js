import React from 'react';
import {connect} from 'react-redux';
import {toggleMenu} from 'actions/menu';
import {
  selectMenuDisplay,
} from 'reducers';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background: transparent;
  color: ${props => props.theme.colorBackground};
  display: flex;
  flex-direction: column;
`;
const StyledLines = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  height: var(--size-spacing-small);
`;
const StyledLineOne = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${props => props.menuDisplay ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, -30%) rotate(90deg) scaleY(0.7)'};
  height: 100%;
  width: 1px;
  background-color: #000;
  transition: all 0.5s cubic-bezier(0.000, 0.785, 0.000, 1.000);
`;
const StyledLineTwo = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${props => props.menuDisplay ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -70%) rotate(90deg) scaleY(0.7)'};
  height: 100%;
  width: 1px;
  background-color: #000;
  transition: all 0.5s cubic-bezier(0.000, 0.785, 0.000, 1.000);
`;
const StyledWrapper = styled.div`
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  background-color: ${props => props.theme.colorTheme};
  position: fixed;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  transition: ${props => props.theme.transitionMedium};
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover ${StyledContainer} ${StyledLines} ${StyledLineOne} {
    transform: translate(-50%, -50%);
  }
  &:hover ${StyledLineTwo} {
    transform: translate(-50%, -50%);
  }
  &:active, &:focus {
    outline: none;
  }
`;

const handleKeyDown = (event, action) => {
  if (event.keyCode === 13) {
    action();
  }
}
const MenuButton = ({menuDisplay, toggleMenu}) => {
  return(
    <StyledWrapper
      onClick={() => toggleMenu(menuDisplay)}
      onKeyDown={(event) => handleKeyDown(event, () => toggleMenu(menuDisplay))}
      aria-label="menu button"
    >
      <StyledContainer>
        <StyledLines >
          <StyledLineOne menuDisplay={menuDisplay}/>
          <StyledLineTwo menuDisplay={menuDisplay}/>
        </StyledLines>
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
      dispatch(toggleMenu(!menuDisplay));
    }
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(MenuButton));
