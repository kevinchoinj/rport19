import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';

class Logo extends React.Component{

  toggleMenu = () => {
    this.props.menuActions.hoverMenuOption('');
    this.props.menuActions.toggleMenu(!this.props.menuDisplay);
    document.getElementById('menu_scrollbar').focus();
  }

  render(){
    return(
      <header className="logo">
        <div className="logo_inner" onClick={()=>this.toggleMenu()}>
          <span className="logo_link">
            <span className="logo_first">K E V I N</span>&nbsp;<span className="logo_last">C H O I</span>
          </span>
        </div>
      </header>
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
)(Logo);
