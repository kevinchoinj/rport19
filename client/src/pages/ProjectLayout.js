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
import LoadIntersect from 'components/animations/LoadIntersectZoom';
import Sticky from 'components/projects/Sticky';
import {selectMenuDisplay} from 'reducers';

let scroller = scroll.animateScroll;

const scrollUp = () => {
  scroller.scrollTo(0);
};

const Image = ({className, src}) => (
  <img src={src} alt="" className={className} loading="lazy"/>
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
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 992px) {
    padding: 0;
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
const StyledDisplayContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const StyledDisplay = styled.div`
  width: 83.33333333%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: visible;
  padding: 7rem 0;
  &:nth-child(1) {
    padding: 0 0 7rem 0;
  }
  position: relative;
  @media screen and (max-width: 992px) {
    margin-left: 0px;
    width: 100%;
    padding: 0;
    &:nth-child(1) {
      padding: 0;
    }
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
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

const ProjectLayout = ({ pageValues, toggleMenu, hoverImage, menuDisplay }) => {
  useEffect(() => {
    toggleMenu();
  }, [toggleMenu]);
  return (
    <div tabIndex="0" style={{pointerEvents: menuDisplay ? 'none' : 'auto', position: 'relative'}}>
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
          <Sticky title ={pageValues.bannerTextOne}/>
        <StyledDisplayContainer>

          <StyledDisplay>
            {pageValues.bodyImageOne && pageValues.video &&
              <ProjectVideo
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
          </StyledDisplayContainer>
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
          <MobileImageView pageValues = {pageValues}/>
        </StyledContainer>

        <StyledFooter
          onClick={() => scrollUp()}
          onMouseEnter={() => hoverImage('up')}
          onMouseLeave ={() => hoverImage('')}
        />
      </Skew>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => {
      dispatch(menuActions.toggleMenu(false));
    },
    hoverImage: (value) => dispatch(mouseActions.hoverImage(value)),
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(ProjectLayout));