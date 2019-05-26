import React, {useEffect} from 'react';
import Banner from 'components/Banner';
import AboutContainer from 'components/AboutContainer';
import Skew from 'components/Skew';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import MobileImagesStatic from 'components/mobileimages/MobileImagesStatic';
import ProjectVideo from 'components/ProjectVideo';
import styled from 'styled-components';

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

const MobileImageView = ({ projectMobileVisible, pageValues }) => {
  if (pageValues.mobileImageOne &&
      pageValues.mobileImageTwo &&
      pageValues.mobileImageThree
  ) {
    return (
      <MobileImagesStatic
        isVisible = {projectMobileVisible}
        image1={pageValues.mobileImageOne}
        image2={pageValues.mobileImageTwo}
        image3={pageValues.mobileImageThree}
      />
    );
  }
  else {
    return null;
  }
};

const StyledContainer = styled.div`
  background-color: var(--black-color);
  width: 100%;
  color: var(--color-grey-light);
  padding-top: 6rem;
  @media screen and (max-width: 992px) {
    padding-top: 0;
  }
`;
const StyledText = styled.div`
  font-size: var(--size-small);
  letter-spacing: 1px;
  width: 66.6%;
  margin-left: 8.33333333%;
  padding: 0 0 var(--size-spacing-large) 0px;
  font-family: 'Josefin Sans', Helvetica, sans-serif;
  line-height: 200%;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 6rem 1rem;
    margin-left: 0;
    box-sizing:border-box;
  }
`;
const StyledTitle = styled.div`
  font-size: var(--size-xlarge);
  cursor: default;
  line-height: 200%;
`;
const StyledDisplay = styled.div`
  margin-left: 8.33333333%;
  width: 83.33333333%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  padding: 1.5rem 0;
  @media screen and (max-width: 992px) {
    margin-left: 0px;
    width: 100%;
    padding: 0;
  }
`;

const ProjectLayout = ({ pageValues, toggleMenu }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    toggleMenu();
  }, [toggleMenu]);
  return (
    <div tabIndex="0">
      <Skew>
        <Banner
          line1 = {pageValues.bannerTextOne}
          line2 = {pageValues.bannerTextTwo}
          line3 = {pageValues.bannerTextThree}
          line4 = {pageValues.bannerTextFour}
        />
        <AboutContainer title={pageValues.bannerTextOne}>
          {pageValues.aboutText}
        </AboutContainer>
        <StyledContainer>
          {pageValues.bodyTextOne &&
            <StyledText>
              <StyledTitle>
                OVERVIEW
              </StyledTitle>
              <div>
                {pageValues.bodyTextOne}
                {pageValues.bodyTextTwo}
                {pageValues.bodyTextThree}
              </div>
            </StyledText>
          }
          <StyledDisplay>
            {pageValues.bodyImageOne && pageValues.video &&
              <ProjectVideo
                backgroundImage = {pageValues.bodyImageOne}
                backgroundVideo = {pageValues.video}
              />
            }
            {!pageValues.video && pageValues.bodyImageOne &&
              <StyledImage
                src={pageValues.bodyImageOne}
              />
            }
          </StyledDisplay>
          <StyledDisplay>
            <StyledImage
              src={pageValues.bodyImageTwo}
            />
          </StyledDisplay>
          <StyledDisplay>
            <StyledImage
              src={pageValues.bodyImageThree}
            />
          </StyledDisplay>
        </StyledContainer>
        <MobileImageView pageValues = {pageValues}/>
      </Skew>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => {
      dispatch(menuActions.toggleMenu(false));
    },
  };
};

export default connect (null, mapDispatchToProps)(ProjectLayout);