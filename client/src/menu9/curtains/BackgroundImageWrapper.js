import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {menuData} from 'data/menuData';
import BackgroundImageDisplay from 'menu9/BackgroundImageDisplay';
import {
  selectLoadedContent,
} from 'reducers';
const StyledWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`;

const BackgroundImageWrapper = ({loadedContent}) => {
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

const mapStateToProps = (state) => {
  return {
    loadedContent: selectLoadedContent(state),
  };
};
export default connect (mapStateToProps, null)(BackgroundImageWrapper);
