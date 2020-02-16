import React from 'react';
import styled from 'styled-components';
import {menuData} from 'data/menuData';
import BackgroundImageDisplay from 'menu9/BackgroundImageDisplay';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 0;
`;

const BackgroundImageWrapper = () => {
  return(
    <StyledWrapper>
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

export default React.memo(BackgroundImageWrapper);