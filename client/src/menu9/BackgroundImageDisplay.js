import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as menuActions from 'actions/menu';
import {bindActionCreators} from 'redux';
import {history} from 'store';
import {Link} from 'react-router-dom';
class BackgroundImageDisplay extends React.Component{

  toggleMenu = (path) => {
    this.props.menuActions.toggleMenu(false);
    history.push(path);
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
      <Link to={link}>
        <div className={backgroundClassName}
          style={{backgroundImage: `url(${image})`}}
        />
      </Link>
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
