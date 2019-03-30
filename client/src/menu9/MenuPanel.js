import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as menuActions from 'actions/menu';
import {bindActionCreators} from 'redux';
import {history} from 'store';
import {projectData} from 'data/projectData';

import MenuText from 'menu9/MenuText';
import TopRightDisplay from 'menu9/TopRightDisplay';

const RightTextDisplay = ({hoverOption}) => {
  let projectText = projectData[hoverOption];
  if (hoverOption==='home'){
    return (
      <RightTextAreaDisplay
        noDetails= {true}
        title="Kevin Choi"
      />
    );
  }
  else if (hoverOption==='gaming'){
    return (
      <RightTextAreaDisplay
        noDetails= {true}
        title="Gaming"
      />
    );
  }
  else if (hoverOption==='misc'){
    return (
      <RightTextAreaDisplay
        noDetails= {true}
        title="Misc Projects"
      />
    );
  }
  else if (projectText) {
    return (
      <RightTextAreaDisplay
        title={projectText.bannerTextOne}
        year={projectText.bannerTextTwo}
        body={projectText.aboutText}
      />
    );
  }
  else return null;
};

const RightTextAreaDisplay = ({title, year, body, noDetails}) => {
  if (noDetails){
    return (
      <div className="text_right">
        <div className="text_right__title">
          {title}
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="text_right">
        <div className="text_right__title">
          {title}
        </div>
        <div className="text_right__subcontainer">
          <div className="text_right__subtitle">
            <div className="text_right__label">
            Year:
            </div>
            <div className="text_right__subvalue">
              {year}
            </div>
          </div>
        </div>

        <div className="text_right__subtext">
          {body}
        </div>
      </div>
    );
  }
};

class MenuPanel extends React.Component{
  toggleMenu = (path) => {
    this.props.menuActions.hoverMenuOption('');
    this.props.menuActions.toggleMenu(false);
    history.push(path);
  }
  render(){
    const {
      menuDisplay,
      hoverOption,
    } = this.props;

    const wrapperName = classNames(
      'menu_wrapper',
      {
        'menu_wrapper--display':menuDisplay
      }
    );

    const menuClassNameLeft = classNames(
      'menu_panel__left',
      {
        'menu_panel__left--display':menuDisplay
      }
    );
    const menuClassNameRight = classNames(
      'menu_panel__right',
      {
        'menu_panel__right--display':menuDisplay
      }
    );

    return(
      <div className={wrapperName}>
        <div className={menuClassNameLeft}>
          <MenuText />
        </div>
        <div className = {menuClassNameRight}>
          <TopRightDisplay />
          <RightTextDisplay
            hoverOption={hoverOption}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    hoverOption: state.menu.hoverOption,
    menuDisplay:state.menu.menuDisplay,
    currentPage: state.menu.currentPage,
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(MenuPanel);
