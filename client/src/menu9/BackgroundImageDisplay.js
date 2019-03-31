import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as menuActions from 'actions/menu';
import {bindActionCreators} from 'redux';
import {history} from 'store';
import {Link} from 'react-router-dom';

const CheckCurrentPage = ({loadedContent, link, closeMenu, children}) => {
  if (loadedContent === link) {
    return (
      <div onClick={closeMenu}>
        {children}
      </div>
    );
  }
  else {
    return (
      <Link to={link}>
        {children}
      </Link>
    );
  }
};

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
      <CheckCurrentPage
        loadedContent={loadedContent}
        link={link}
        closeMenu = {this.closeMenu}
      >
        <div className={backgroundClassName}
          style={{backgroundImage: `url(${image})`}}
        />
      </CheckCurrentPage>
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
