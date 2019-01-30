import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as scrollActions from 'actions/scroll';
import Scrollbar from 'smooth-scrollbar';

import GetMiscProjects from 'components/services/GetMiscProjects';
import Bannerimage from 'images/heroku/herokubanner.png';
import BannerContainer from 'components/BannerContainer';

class ProjectMisc extends React.Component {

  focusDiv() {
    ReactDOM.findDOMNode(this.refs.theDiv).focus();
  }

  componentDidMount() {
    this.focusDiv();
    var myDiv = document.getElementById('main_app');
    myDiv.scrollTop = 0;
    this.props.scrollActions.checkScroll(0);
    const scrollbar = Scrollbar.init(document.querySelector('#misc_body'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
    scrollbar.addListener(({ offset }) => {
      this.props.scrollActions.checkScroll(offset.y);
    });
  }
  render() {

    const {
      miscProjects,
    } = this.props;

    return (
      <div className="project_wrapper" id="misc_body"  ref="theDiv" tabIndex="0">
        <GetMiscProjects/>
        <BannerContainer
          bgimage={Bannerimage}
          line1="Misc Projects"
        />
        <div className="project_body">
          <div className="misc_wrap">
            {miscProjects.length > 2 ? miscProjects.map((value, key)=> (
              <div className="misc_image__container" key={key}>
                <div className="misc_title">
                  {value.value.name}
                </div>
                <a href={value.value.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={value.value.url} alt="" className="misc_image"/>
                </a>
              </div>
            )):null}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    miscProjects: state.images.miscProjects,
  }),
  dispatch => ({
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(ProjectMisc);
