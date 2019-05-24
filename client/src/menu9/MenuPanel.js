import React from 'react';
import {connect} from 'react-redux';
import MenuText from 'menu9/MenuText';
import TopRightDisplay from 'menu9/TopRightDisplay';
import styled from 'styled-components';
import {
  selectMenuDisplay,
} from 'reducers';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  pointer-events: ${props => props.menuDisplay ? 'auto' : 'none'};
  z-index: 9;
`;
const StyledLeft = styled.div`
  height: 100vh;
  width: 33vw;
  position: fixed;
  pointer-events: none;
  background-color: var(--black-color);
  transition: var(--transition-long);
  overflow: hidden;
  left: -33vw;
  z-index: 3;
  -webkit-overflow-scrolling: touch;
  transform: ${props => props.menuDisplay ? 'translateX(33vw)' : 'translateX(0px)'};
  @media screen and (max-width: 1590px) {
    left: -50vw;
    width: 50vw;
    transform: ${props => props.menuDisplay ? 'translateX(50vw)' : 'translateX(0px)'};
  }
  @media screen and (max-width: 768px) {
    left: -100vw;
    width: 100%;
    min-width: 0px;
    transform: ${props => props.menuDisplay ? 'translateX(100vw)' : 'translateX(0px)'};
  }
`;
const StyledRight = styled.div`
  height: 100vh;
  width: 33vw;
  position: fixed;
  right: -33vw;
  background-color: var(--black-color);
  transition: var(--transition-long);
  transform: ${props => props.menuDisplay ? 'translateX(-33vw)' : 'translateX(0px)'};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const MenuPanel = ({menuDisplay}) => {
  return(
    <StyledWrapper menuDisplay={menuDisplay}>
      <StyledLeft menuDisplay={menuDisplay}>
        <MenuText />
      </StyledLeft>
      <StyledRight menuDisplay={menuDisplay}>
        <TopRightDisplay />
      </StyledRight>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
  };
};

export default connect (mapStateToProps, null)(MenuPanel);
