import React from 'react';
import ReactDOM from 'react-dom';
import BannerContainer from 'components/BannerContainer';
import AboutContainer from 'components/AboutContainer';

import LoadIn from 'components/animations/LoadIn';
import OverlayBottom from 'components/animations/OverlayBottom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as scrollActions from 'actions/scroll';

import MobileImagesStatic from 'components/mobileimages/MobileImagesStatic';
import ProjectVideo from 'components/ProjectVideo';

import { LazyLoadComponent } from 'react-lazy-load-image-component';

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

class ProjectLayout extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.focusDiv();
  }

  focusDiv() {
    ReactDOM.findDOMNode(this.refs.theDiv).focus();
  }

  render() {
    const {
      pageValues,
    } = this.props;

    return (
      <div className="project_wrapper" ref="theDiv" tabIndex="0">
        <BannerContainer
          bgimage={pageValues.bannerImage}
          line1 = {pageValues.bannerTextOne}
          line2 = {pageValues.bannerTextTwo}
          line3 = {pageValues.bannerTextThree}
          line4 = {pageValues.bannerTextFour}
        />

        <div id="project_about">
          <AboutContainer>
            {pageValues.aboutText}
          </AboutContainer>
        </div>

        <div className="project_body">
          {pageValues.bodyTextOne &&
            <div className="project_body_text project_body_text--top">
              <LoadIn>
                <span  className="project_smallfont">
                  OVERVIEW
                </span>
              </LoadIn>

              <LoadIn loadDelay=".2s">
                {pageValues.bodyTextOne}
              </LoadIn>
              <LoadIn loadDelay=".3s">
                {pageValues.bodyTextTwo}
              </LoadIn>
              <LoadIn loadDelay=".4s">
                {pageValues.bodyTextThree}
              </LoadIn>
            </div>
          }

          <div className="full_width">
            <OverlayBottom loadDelay=".1s">
              {pageValues.bodyImageOne && pageValues.video &&
                <ProjectVideo
                  backgroundImage = {pageValues.bodyImageOne}
                  backgroundVideo = {pageValues.video}
                />
              }
            </OverlayBottom>


            {!pageValues.video && pageValues.bodyImageOne &&
              <OverlayBottom loadDelay=".1s">
                <LazyLoadComponent>
                  <img
                    src={pageValues.bodyImageOne}
                    className="project_fillimage"
                    alt=""
                  />
                </LazyLoadComponent>
              </OverlayBottom>}
          </div>

          <div className="full_width">
            <OverlayBottom loadDelay=".1s">
              <LazyLoadComponent>
                <img
                  src={pageValues.bodyImageTwo}
                  className="project_fillimage"
                  alt=""
                />
              </LazyLoadComponent>
            </OverlayBottom>
          </div>

          <div className="full_width">
            <OverlayBottom loadDelay=".1s">
              <LazyLoadComponent>
                <img
                  src={pageValues.bodyImageThree}
                  className="project_fillimage"
                  alt=""
                />
              </LazyLoadComponent>
            </OverlayBottom>
          </div>
        </div>

        <MobileImageView pageValues = {pageValues}/>

      </div>
    );
  }
}

export default connect(
  () => ({
  }),
  dispatch => ({
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(ProjectLayout);
