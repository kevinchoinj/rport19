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
const StyledLetter = styled.div`
  font-weight: 400;
  color: #fff;
  font-size: var(--size-small);
  line-height: 140%;
  display: flex;
  justify-content: center;
`;
const StyledLines = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  height: var(--size-spacing-small);
  margin-top: var(--size-spacing-small);
`;
const StyledLineOne = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${props => props.menuDisplay ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, -50%)'};
  height: 100%;
  width: .1vw;
  background-color: #fff;
  transition: all 0.5s cubic-bezier(0.000, 0.785, 0.000, 1.000);
`;
const StyledLineTwo = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${props => props.menuDisplay ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -50%)'};
  height: 100%;
  width: .1vw;
  background-color: #fff;
  transition: all 0.5s cubic-bezier(0.000, 0.785, 0.000, 1.000);
`;
const StyledWrapper = styled.div`
  height: 100%;
  padding: 1rem;
  border-left: 1px solid #fff;

  @media screen and (max-width: 992px) {
    border: none;
    height: auto;
    padding: var(--size-spacing);
  }

  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  mix-blend-mode:  difference;
  will-change: opacity;
  transition: ${props => props.theme.transitionMedium};
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover ${StyledContainer} ${StyledLines} ${StyledLineOne} {
    transform: translate(-50%, -30%) rotate(90deg) scaleY(0.7);
  }
  &:hover ${StyledLineTwo} {
    transform: translate(-50%, -70%) rotate(90deg) scaleY(0.7);
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
        <StyledLetter>M</StyledLetter>
        <StyledLetter>E</StyledLetter>
        <StyledLetter>N</StyledLetter>
        <StyledLetter>U</StyledLetter>
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
