import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as menuActions from 'actions/menu';
import {bindActionCreators} from 'redux';
import {history} from 'store';
import {menuData} from 'menu9/menuData';

import BackgroundImageDisplay from 'menu9/BackgroundImageDisplay';

class BackgroundImageWrapper extends React.Component{
  toggleMenu = (path) => {
    this.props.menuActions.hoverMenuOption(false);
    this.props.menuActions.toggleMenu(false);
    history.push(path);
  }
  render(){
    const {
      menuDisplay,
    } = this.props;

    const wrapperName = classNames(
      'menu_background__wrapper',
      {
        'menu_background__wrapper--display': menuDisplay,
      }
    );

    return(
      <div className={wrapperName}>
        {menuData.map((value, index)=>(
          <div key={index}>
            <BackgroundImageDisplay
              image={value.image}
              link={value.link}
            />
          </div>
        ))}
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
)(BackgroundImageWrapper);
