import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {
  selectMenuDisplay,
} from 'reducers';

const StyledSkew = styled.div`
  pointer-events: ${props => props.menuDisplay ? 'none' : 'auto'};
  position: relative;
  @media screen and (min-width: 768px) {
    will-change: opacity;
    opacity: ${props => props.menuDisplay ? 0 : 1};
    transition: .25s ease-in;
  }
`;

const Skew = ({children, menuDisplay}) => {
  return(
    <StyledSkew
      menuDisplay={menuDisplay}
    >
      {children}
    </StyledSkew>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
  };
};

export default connect(mapStateToProps, null)(Skew);