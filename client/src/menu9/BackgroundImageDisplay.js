import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as menuActions from 'actions/menu';
import {bindActionCreators} from 'redux';
import {history} from 'store';

class BackgroundImageDisplay extends React.Component{

  toggleMenu = (path) => {
    this.props.menuActions.hoverMenuOption('');
    this.props.menuActions.toggleMenu(false);
    history.push(path);
  }

  render(){

    const {
      pathName,
      isActive,
      backgroundName,
      menuDisplay,
    }=this.props;

    const backgroundClassName = classNames(
      'nine_menu_background',
      {
        'nine_menu_background--display': isActive && menuDisplay
      }
    );

    return(
      <div
        onClick = {()=>this.toggleMenu(pathName)}
      >
        <div className={backgroundClassName} style={{backgroundImage: 'url('+backgroundName+')'}}/>
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
)(BackgroundImageDisplay);
