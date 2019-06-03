import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  bottom: 0px;
  background-color: ${props => props.theme.colorBackground};
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 32px 8.333333333% 100px 8.333333333%;
  @media screen and (max-width: 992px) {
    padding: 0px;
  }
`;
const StyledContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (max-width: 767px) and (orientation: landscape) {
    flex-direction: row;
  }
`;
const StyledColumn = styled.div`
  width: 30%;
  box-sizing: border-box;
  @media screen and (max-width: 992px) {
    width: 33.3333%;
    margin-right: 0;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (max-width: 767px) and (orientation: landscape) {
    width: 33.33333333%;
  }
`;

const Image = ({className, src}) => (
  <img src={src} alt="" className={className}/>
);

const StyledImage = styled(Image)`
  width: 100%;
  @media screen and (max-width: 992px) {
    padding: 1.5rem 1.5rem 0 1.5rem;
    box-sizing:border-box;
  }
`;
const CardObject = ({image}) => {
  return (
    <StyledColumn>
      <StyledImage
        src={image}
      />

    </StyledColumn>
  );
};

const MobileImages = ({isVisible, image1, image2, image3}) => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <CardObject
          isVisible={isVisible}
          loadDelay="0s"
          image={image1}
        />
        <CardObject
          isVisible={isVisible}
          loadDelay=".4s"
          image={image2}
        />
        <CardObject
          isVisible={isVisible}
          loadDelay=".8s"
          image={image3}
        />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default MobileImages;