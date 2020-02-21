import React, {useEffect} from 'react';
import Banner from 'components/projects/Banner';
import AboutContainer from 'components/projects/AboutContainer';
import Skew from 'components/projects/Skew';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import MobileImagesStatic from 'components/projects/MobileImagesStatic';
import ProjectVideo from 'components/projects/ProjectVideo';
import styled from 'styled-components';
import scroll from 'react-scroll';
import LoadIntersect from 'components/animations/LoadIntersectOpacity';
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
    width: calc(100% - 3rem);
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
  font-size: 3rem;
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
  position: relative;
  @media screen and (max-width: 992px) {
    margin-left: 0px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: calc(100% - 3rem);
    padding: 0;
    &:nth-child(1) {
      margin-top: 2rem;
    }
  }
`;
const StyledDisplaySmall = styled(StyledDisplay)`
  width: ${props => props.size ? props.size : '375px'};
  padding: 3.5rem 0;
  right: 8.333333333%;
  align-self: flex-end;

  @media screen and (max-width: 992px) {
    right: auto;
    width: calc(100% - 3rem);
    max-width: ${props => props.size ? props.size : '375px'};
    align-self: center;
    display: none;
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

const ProjectLayout = ({ pageValues, toggleMenu, menuDisplay }) => {
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
          <StyledDisplaySmall size={pageValues.addImageOneSize}>
            <LoadIntersect>
              <StyledImage src={pageValues.addImageOne}/>
            </LoadIntersect>
          </StyledDisplaySmall>
          <StyledDisplay>
            <LoadIntersect>
              <StyledImage src={pageValues.bodyImageThree}/>
            </LoadIntersect>
          </StyledDisplay>
          <MobileImageView pageValues = {pageValues}/>
        </StyledContainer>

        <StyledFooter
          onClick={() => scrollUp()}
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
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(ProjectLayout));