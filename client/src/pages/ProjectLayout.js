import React from 'react';
import ReactDOM from 'react-dom';
import BannerContainer from 'components/BannerContainer';
import AboutContainer from 'components/AboutContainer';

import Scrollbar from 'smooth-scrollbar';
import LoadIn from 'components/animations/LoadIn';
import OverlayBottom from 'components/animations/OverlayBottom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as scrollActions from 'actions/scroll';

import MobileImagesStatic from 'components/mobileimages/MobileImagesStatic';
import ProjectVideo from 'components/ProjectVideo';

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
  constructor(props) {
    super(props);
    this.state = {
      aboutVisible: false,
      project1Visible: false,
      project2Visible: false,
      project3Visible: false,
      project4Visible: false,
    };
  }

  focusDiv() {
    ReactDOM.findDOMNode(this.refs.theDiv).focus();
  }

  componentDidMount() {

    this.focusDiv();

    var myDiv = document.getElementById('main_app');
    myDiv.scrollTop = 0;
    this.props.scrollActions.checkScroll(0);
    const scrollbar = Scrollbar.init(document.querySelector('#scroll_project'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
    scrollbar.addListener(({ offset }) => {
      this.props.scrollActions.checkScroll(offset.y);
    });


    let projectAbout = document.querySelector('#project_about');
    let project1 = document.querySelector('#project_1');
    let project2 = document.querySelector('#project_2');
    let project3 = document.querySelector('#project_3');
    let project4 = document.querySelector('#project_4');
    let projectMobile = document.querySelector('#project_mobile');

    scrollbar.addListener(function() {
      this.setState({
        projectAboutVisible: scrollbar.isVisible(projectAbout),
        project1Visible: scrollbar.isVisible(project1),
        project2Visible: scrollbar.isVisible(project2),
        project3Visible: scrollbar.isVisible(project3),
        project4Visible: scrollbar.isVisible(project4),
        projectMobileVisible: scrollbar.isVisible(projectMobile),
      });
    }.bind(this));

    this.scrollbar = scrollbar;
  }

  render() {

    const {
      pageValues,
    } = this.props;

    return (
      <div className="project_wrapper" id="scroll_project" ref="theDiv" tabIndex="0">
        <BannerContainer
          bgimage={pageValues.bannerImage}
          line1 = {pageValues.bannerTextOne}
          line2 = {pageValues.bannerTextTwo}
          line3 = {pageValues.bannerTextThree}
          line4 = {pageValues.bannerTextFour}
        />

        <div id="project_about">
          <AboutContainer
            isVisible = {this.state.projectAboutVisible}
          >
            {pageValues.aboutText}
          </AboutContainer>
        </div>

        <div className="project_body">

          {pageValues.bodyTextOne?
            <div className="project_body_text project_body_text--top" id="project_1">
              <LoadIn isVisible={this.state.project1Visible}>
                <span  className="project_smallfont">
                  OVERVIEW
                </span>
              </LoadIn>

              <LoadIn
                isVisible={this.state.project1Visible}
                loadDelay=".2s"
              >
                {pageValues.bodyTextOne}
              </LoadIn>
              <LoadIn
                isVisible={this.state.project1Visible}
                loadDelay=".3s"
              >
                {pageValues.bodyTextTwo}
              </LoadIn>
              <LoadIn
                isVisible={this.state.project1Visible}
                loadDelay=".4s"
              >
                {pageValues.bodyTextThree}
              </LoadIn>
            </div>
            :
            <div id="project_1">
            </div>
          }

          <div className="full_width" id="project_2">
            <OverlayBottom
              isVisible={this.state.project2Visible}
              loadDelay=".4s"
            >
              {pageValues.bodyImageOne && pageValues.video ?
                <ProjectVideo
                  backgroundImage = {pageValues.bodyImageOne}
                  backgroundVideo = {pageValues.video}
                />
                :null
              }
            </OverlayBottom>


            {!pageValues.video && pageValues.bodyImageOne ?
              <OverlayBottom
                isVisible={this.state.project2Visible}
                loadDelay=".4s"
              >
                <img
                  src={pageValues.bodyImageOne}
                  className="project_fillimage"
                  alt=""
                  onLoad={()=>this.scrollbar.update()}
                />
              </OverlayBottom>
              :null}
          </div>

          <div className="full_width" id="project_3">
            <OverlayBottom
              isVisible={this.state.project3Visible}
              loadDelay=".4s"
            >
              <img
                src={pageValues.bodyImageTwo}
                className="project_fillimage"
                alt=""
                onLoad={()=>this.scrollbar.update()}
              />
            </OverlayBottom>
          </div>

          <div className="full_width" id="project_4">
            <OverlayBottom
              isVisible={this.state.project4Visible}
              loadDelay=".4s"
            >
              <img
                src={pageValues.bodyImageThree}
                className="project_fillimage"
                alt=""
                onLoad={()=>this.scrollbar.update()}
              />
            </OverlayBottom>
          </div>
        </div>

        <div id="project_mobile">
          <MobileImageView
            projectMobileVisible = {this.state.projectMobileVisible}
            pageValues = {pageValues}
          />
        </div>

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
