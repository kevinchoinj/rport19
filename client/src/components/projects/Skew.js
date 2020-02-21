import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {
  selectMenuDisplay,
  selectMenuHover,
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
/*
will-change: transform;
*/

//inline skew transform value to prevent rerendering entire component every update
const Skew = ({children, skewValue, menuDisplay, hoverOption}) => {
  return(
    <StyledSkew
      skew={skewValue}
      menuDisplay={menuDisplay}
      hoverOption={hoverOption}
      style = {{transform: `skewY(${skewValue}deg)`}}
    >
      {children}
    </StyledSkew>
  );
};

const mapStateToProps = (state) => {
  return {
    hoverOption: selectMenuHover(state),
    menuDisplay: selectMenuDisplay(state),
  };
};

export default connect(mapStateToProps, null)(Skew);