import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import {pageData} from 'data/pageData';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

class TopRightDisplay extends React.Component{
  setSection = (value) => {
    this.props.menuActions.setMenuSection(value);
  }
  render(){
    return(
      <div className="menu_top_right">
        <div className="menu_top_right__title">
          <div className="menu_top_right__first">K E V I N</div>
          <div>&nbsp;</div>
          <div className="menu_top_right__last">C H O I</div>
        </div>
        <div className="menu_top_right__line">
          B.Sc Computer Science - Rensselaer Polytechnic Institute (RPI)
        </div>
        <div className="menu_top_right__line">
          {pageData.emailAddress}
        </div>
        <div className="contact_link menu_top_right__line">

          <div className="contact_icon">
            <a
              href={pageData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesome name="github"/>
            </a>
          </div>

          <div className="contact_icon">
            <a
              href={pageData.musicLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesome name="music"/>
            </a>
          </div>

          <div className="contact_icon">
            <Link to={pageData.gaming}>
              <FontAwesome name="gamepad"/>
            </Link>
          </div>

          <div className="contact_icon">
            <a href={'mailto:'+pageData.emailAddress}>
              <FontAwesome name="envelope"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    menuDisplay:state.menu.menuDisplay,
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(TopRightDisplay);