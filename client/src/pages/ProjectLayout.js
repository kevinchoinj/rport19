import React, {useEffect} from 'react';
import Banner from 'components/projects/Banner';
import AboutContainer from 'components/projects/AboutContainer';
import Skew from 'components/projects/Skew';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import * as mouseActions from 'actions/mouse';
import MobileImagesStatic from 'components/projects/MobileImagesStatic';
import ProjectVideo from 'components/projects/ProjectVideo';
import styled from 'styled-components';
import scroll from 'react-scroll';
import LoadIntersect from 'components/animations/LoadIntersect';

let scroller = scroll.animateScroll;

const scrollUp = () => {
  scroller.scrollTo(0);
};

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
  background-color: ${props => props.theme.colorBackground};
  width: 100%;
  color: ${props => props.theme.colorText};
  padding-top: 3rem;
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
  line-height: 140%;
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
  line-height: 140%;
`;
const StyledDisplay = styled.div`
  margin-left: 8.33333333%;
  width: 83.33333333%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: visible;
  padding: 3rem 0;
  position: relative;
  @media screen and (max-width: 992px) {
    margin-left: 0px;
    width: 100%;
    padding: 0;
  }
`;
const StyledFooter = styled.div`
  height: 100vh;
  width: 100%;
  cursor: pointer;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
const StyledBodyText = styled.div`
  width: 50%;
`;
const ProjectLayout = ({ pageValues, toggleMenu, hoverImage, skewValue }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    toggleMenu();
  }, [toggleMenu]);
  return (
    <div tabIndex="0">
      <Skew skewValue={skewValue}>
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

          <StyledDisplay>
            {pageValues.bodyImageOne && pageValues.video &&
              <ProjectVideo
                title={pageValues.bannerTextOne}
                backgroundImage={pageValues.bodyImageOne}
                backgroundVideo={pageValues.video}
              />
            }
            { pageValues.bodyTextOne &&
              <StyledText>
                <StyledTitle>
                  OVERVIEW
                </StyledTitle>
                <StyledBodyText>
                  {pageValues.bodyTextOne}
                  {pageValues.bodyTextTwo}
                  {pageValues.bodyTextThree}
                </StyledBodyText>
              </StyledText>
            }
            {!pageValues.video && pageValues.bodyImageOne &&
              <LoadIntersect>
                <StyledImage
                  src={pageValues.bodyImageOne}
                />
              </LoadIntersect>
            }
          </StyledDisplay>
          <StyledDisplay>
            <LoadIntersect>
              <StyledImage src={pageValues.bodyImageTwo}/>
            </LoadIntersect>
          </StyledDisplay>
          <StyledDisplay>
            <LoadIntersect>
              <StyledImage src={pageValues.bodyImageThree}/>
            </LoadIntersect>
          </StyledDisplay>
        </StyledContainer>
        <MobileImageView pageValues = {pageValues}/>
        <StyledFooter
          onClick={() => scrollUp()}
          onMouseEnter={() => hoverImage('up')}
          onMouseLeave ={() => hoverImage('')}
        />
      </Skew>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => {
      dispatch(menuActions.toggleMenu(false));
    },
    hoverImage: (value) => dispatch(mouseActions.hoverImage(value)),
  };
};

export default connect (null, mapDispatchToProps)(ProjectLayout);