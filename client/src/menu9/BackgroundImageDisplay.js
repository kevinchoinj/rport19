import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as menuActions from 'actions/menu';
import {history} from 'store';

const BackgroundImageDisplay = ({hoverOption, image, link, loadedContent, menuDisplay, toggleMenu}) => {
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
      onClick={() => toggleMenu(link, menuDisplay)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: state.menu.menuDisplay,
    hoverOption: state.menu.hoverOption,
    loadedContent: state.transition.loadedContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: (path, menuDisplay) => {
      dispatch(menuActions.toggleMenu(!menuDisplay));
      history.push(path);
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(BackgroundImageDisplay);
