import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as menuActions from 'actions/menu';
import {bindActionCreators} from 'redux';
import {history} from 'store';

class BackgroundImageDisplay extends React.Component{

  toggleMenu = (path) => {
    this.props.menuActions.toggleMenu(false);
    history.push(path);
  }

  closeMenu = (path) => {
    this.props.menuActions.toggleMenu(false);
  }

  render(){

    const {
      hoverOption,
      image,
      link,
      loadedContent,
      menuDisplay,
    }=this.props;

    const backgroundClassName = classNames(
      'menu_background',
      {
        'menu_background--display':
        (link===loadedContent && !menuDisplay) ||
        (image===hoverOption && menuDisplay)
      }
    );

    return(

      <div className={backgroundClassName}
        style={{backgroundImage: `url(${image})`}}
      />
    );
  }
}

export default connect(
  (state) => {
    return {
      menuDisplay: state.menu.menuDisplay,
      hoverOption: state.menu.hoverOption,
      loadedContent: state.transition.loadedContent,
    };
  },
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(BackgroundImageDisplay);
