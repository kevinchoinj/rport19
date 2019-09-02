import React from 'react';
import {menuData} from 'data/menuData';
import styled from 'styled-components';
import BackgroundImageDisplay from 'menu9/BackgroundImageDisplay';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`;

const BackgroundImageWrapper = ({menuDisplay}) => {
  return(
    <StyledWrapper menuDisplay={menuDisplay}>
      {menuData.map((value) => (
        <div key={value.link}>
          <BackgroundImageDisplay
            image={value.image}
            link={value.link}
          />
        </div>
      ))}
    </StyledWrapper>
  );
};

export default BackgroundImageWrapper;