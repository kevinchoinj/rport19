import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  flex-direction: column;
`;
const StyledTitle = styled.div`
  font-size: 5.9vw;
`;
const StyledText = styled.div`
  font-size: 20px;
`;

export const NotFound = ({toggleMenu}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    toggleMenu();
  }, [toggleMenu]);

  return(
    <StyledWrapper>
      <StyledTitle>
        404
      </StyledTitle>
      <StyledText>
        Sorry, that page does not exist.
      </StyledText>
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch(menuActions.toggleMenu(false)),
  };
};

export default connect (null, mapDispatchToProps)(NotFound);
