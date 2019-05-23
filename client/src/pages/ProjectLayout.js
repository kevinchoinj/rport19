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

const ProjectLayout = ({ pageValues, toggleMenu }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    toggleMenu();
  }, [toggleMenu]);
  return (
    <div className="project_wrapper" tabIndex="0">
      <Skew>
        <Banner
          line1 = {pageValues.bannerTextOne}
          line2 = {pageValues.bannerTextTwo}
          line3 = {pageValues.bannerTextThree}
          line4 = {pageValues.bannerTextFour}
        />
        <div id="project_about">
          <AboutContainer title={pageValues.bannerTextOne}>
            {pageValues.aboutText}
          </AboutContainer>
        </div>
        <div className="project_body">
          {pageValues.bodyTextOne &&
            <div className="project_body_text">
              <div className="project_smallfont">
                OVERVIEW
              </div>
              <div className="project_body__body">
                {pageValues.bodyTextOne}
                {pageValues.bodyTextTwo}
                {pageValues.bodyTextThree}
              </div>
            </div>
          }
          <div className="full_width">
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
          </div>
          <div className="full_width">
            <StyledImage
              src={pageValues.bodyImageTwo}
            />
          </div>
          <div className="full_width">
            <StyledImage
              src={pageValues.bodyImageThree}
            />
          </div>
        </div>
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