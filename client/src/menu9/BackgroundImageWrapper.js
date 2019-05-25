import React from 'react';
import {connect} from 'react-redux';
import {menuData} from 'data/menuData';
import styled from 'styled-components';
import BackgroundImageDisplay from 'menu9/BackgroundImageDisplay';
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
  z-index: -1;
`;

const BackgroundImageWrapper = ({menuDisplay}) => {
  return(
    <StyledWrapper
      menuDisplay={menuDisplay}
    >
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

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
  };
};

export default connect (mapStateToProps, null)(BackgroundImageWrapper);
