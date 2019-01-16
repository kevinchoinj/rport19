import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import {pageData} from 'data/pageData';

class TopRightDisplay extends React.Component{
  setSection = (value) => {
    this.props.menuActions.setMenuSection(value);
  }
  render(){
    return(
      <div className="nine_menu_top_right">
        <div className="nine_menu_top_right__title">
          <div className="nine_menu_top_right__first">K E V I N</div>
          <div>&nbsp;</div>
          <div className="nine_menu_top_right__last">C H O I</div>
        </div>
        <div className="nine_menu_top_right__line">
          B.Sc Computer Science - Rensselaer Polytechnic Institute (RPI)
        </div>
        <div className="nine_menu_top_right__line">
          {pageData.emailAddress}
        </div>
        <div className="contact_link nine_menu_top_right__line">
          <a
            href={pageData.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
          GitHub
          </a>
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