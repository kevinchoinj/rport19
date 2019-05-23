import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {
  selectMenuDisplay,
  selectScrollSkew,
} from 'reducers';

const StyledSkew = styled.div`
  opacity: ${props => props.menuDisplay ? 0 : 1};
  transition: .25s ease-in;
  will-change: transform;
`;

//inline skew transform value to prevent rerendering entire component every update
const Skew = ({children, skew, menuDisplay}) => {
  return(
    <StyledSkew
      skew={skew}
      menuDisplay={menuDisplay}
      style = {{transform: `skewY(${skew}deg)`}}
    >
      {children}
    </StyledSkew>
  );
};

const mapStateToProps = (state) => {
  return {
    skew: selectScrollSkew(state),
    menuDisplay: selectMenuDisplay(state),
  };
};

export default connect (mapStateToProps, null)(Skew);