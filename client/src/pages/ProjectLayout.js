import React, {useEffect} from 'react';
import Banner from 'components/projects/Banner';
import AboutContainer from 'components/projects/AboutContainer';
import Skew from 'components/projects/Skew';
import {connect} from 'react-redux';
import {toggleMenu} from 'actions/menu';
import MobileImagesStatic from 'components/projects/MobileImagesStatic';
import ProjectVideo from 'components/projects/ProjectVideo';
import Section from 'components/projects/Section';
import styled from 'styled-components';
import scroll from 'react-scroll';
import Sticky from 'components/projects/Sticky';

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
    width: 100%;
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
  position: relative;
  @media screen and (max-width: 992px) {
    padding: 0;
  }
`;
const StyledText = styled.div`
  font-size: 2rem;
  letter-spacing: 1px;
  width: 66.6%;
  padding: 0 0 var(--size-spacing-large) 0px;
  font-family: 'Josefin Sans', Helvetica, sans-serif;
  line-height: 140%;
  @media screen and (max-width: 992px) {
    width: 100%;
    font-size: 1.5rem;
    padding: 6rem 1rem;
    margin-left: 0;
    box-sizing:border-box;
  }
`;
const StyledTitle = styled.div`
  font-size: 3rem;
  cursor: default;
  line-height: 140%;
  color: ${props => props.theme.colorTheme}
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
  padding: 0 0 7rem 0;
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
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;
const StyledSections = styled.div`
  margin-top: 4rem;
`;

const ProjectImage = React.memo(({src}) => {
  return src ? (
    <StyledDisplay>
      <StyledImage src={src}/>
    </StyledDisplay>
  ) : null;
});

const ProjectVideoObject = React.memo(({
  extended,
  src,
  textOne,
  textTwo,
  textThree,
  video,
}) => {
  return (
    <StyledDisplayContainer>
      <StyledDisplay>
        {src && video &&
          <ProjectVideo
            backgroundImage={src}
            backgroundVideo={video}
          />
        }
        {textOne &&
          [extended ?
            <StyledSections>
              <Section
                title="Frontend"
                number="01"
              >
                {textOne}
              </Section>
            </StyledSections>
            :
            <StyledText>
              <StyledTitle>
                OVERVIEW
              </StyledTitle>
              <StyledBodyText>
                {textOne}
                <br/><br/>
                {textTwo}
                <br/><br/>
                {textThree}
              </StyledBodyText>
            </StyledText>
          ]
        }

        {!video && src &&
          <StyledImage
            src={src}
          />
        }
      </StyledDisplay>
    </StyledDisplayContainer>
  )
});

const ProjectLayout = ({ pageValues, toggleMenu }) => {
  useEffect(() => {
    toggleMenu();
  }, [toggleMenu]);
  return (
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
        <ProjectVideoObject
          extended={pageValues.extended}
          src={pageValues.bodyImageOne}
          textOne={pageValues.bodyTextOne}
          textTwo={pageValues.bodyTextTwo}
          textThree={pageValues.bodyTextThree}
          video={pageValues.video}
        />
        <ProjectImage src={pageValues.bodyImageTwo}/>
          {pageValues.addImageOne &&
            <StyledDisplaySmall size={pageValues.addImageOneSize}>
              <StyledImage src={pageValues.addImageOne}/>
            </StyledDisplaySmall>
          }
          {pageValues.extended && pageValues.bodyTextTwo &&
            <StyledDisplay>
              <StyledSections>
                <Section
                  title="Backend"
                  number="02"
                >
                  {pageValues.bodyTextTwo}
                </Section>
              </StyledSections>
            </StyledDisplay>
          }
          <ProjectImage src={pageValues.bodyImageThree}/>
          {pageValues.extended && pageValues.bodyTextThree &&
            <StyledDisplay>
              <StyledSections>
                <Section
                  title="Misc"
                  number="03"
                >
                  {pageValues.bodyTextThree}
                </Section>
              </StyledSections>
            </StyledDisplay>
          }
          <ProjectImage src={pageValues.bodyImageFour}/>
        <MobileImageView pageValues = {pageValues}/>
      </StyledContainer>

      <StyledFooter
        onClick={() => scrollUp()}
      />
    </Skew>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => {
      dispatch(toggleMenu(false));
    },
  };
};

export default React.memo(connect(null, mapDispatchToProps)(ProjectLayout));