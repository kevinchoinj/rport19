import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as scrollActions from 'actions/scroll';
import * as menuActions from 'actions/menu';

import GetMiscProjects from 'components/services/GetMiscProjects';
import BannerContainer from 'components/BannerContainer';

class ProjectMisc extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.focusDiv();
    this.props.menuActions.toggleMenu(false);
  }

  focusDiv() {
    ReactDOM.findDOMNode(this.refs.theDiv).focus();
  }

  render() {

    const {
      miscProjects,
    } = this.props;

    return (
      <div className="project_wrapper" ref="theDiv" tabIndex="0">
        <GetMiscProjects/>
        <BannerContainer
          bgimage='/static/images/heroku/herokubanner.png'
          line1="Misc Projects"
        />
        <div className="project_body">
          <div className="misc_wrap">
            {miscProjects.length > 2 && miscProjects.map((value, key)=> (
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
            ))}
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
    menuActions: bindActionCreators(menuActions, dispatch),
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(ProjectMisc);
