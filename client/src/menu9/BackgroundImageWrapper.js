import React from 'react';
import styled from 'styled-components';
import BackgroundTwo from 'menu9/BackgroundTwo';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`;

const BackgroundImageWrapper = () => {
  return(
    <StyledWrapper>
      <BackgroundTwo/>
    </StyledWrapper>
  );
};

export default BackgroundImageWrapper;