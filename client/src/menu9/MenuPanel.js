import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as menuActions from 'actions/menu';
import {bindActionCreators} from 'redux';
import {history} from 'store';
import {projectData} from 'data/projectData';

import MenuText from 'menu9/MenuText';
import TopRightDisplay from 'menu9/TopRightDisplay';
import BackgroundImageDisplay from 'menu9/BackgroundImageDisplay';

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
    const backgroundClassName = classNames(
      'menu_background',
      {
        'menu_background--display':menuDisplay && hoverOption,
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
    const backgroundValues = [
      {pathName: '/', isActive: hoverOption==='home', backgroundName: '/static/images/daytime.png'},
      {pathName: '/projects/novaruu', isActive: hoverOption==='novaruu', backgroundName: '/static/images/novaruu/banner.jpg'},
      {pathName: '/projects/uwloo', isActive: hoverOption==='uwloo', backgroundName: '/static/images/uwloo/banner.jpg'},
      {pathName: '/projects/tcfs', isActive: hoverOption==='tcfs', backgroundName: '/static/images/tcfs/toocool.jpg'},
      {pathName: '/projects/wildcat', isActive: hoverOption==='wildcat', backgroundName: '/static/images/wildcat/banner.jpg'},
      {pathName: '/projects/drjart', isActive: hoverOption==='drjart', backgroundName: '/static/images/drjart/banner.png'},
      {pathName: '/projects/delilah', isActive: hoverOption==='delilah', backgroundName: '/static/images/delilahs/banner.jpg'},
      {pathName: '/projects/discord', isActive: hoverOption==='discord', backgroundName: '/static/images/discord/banner.jpg'},
      {pathName: '/projects/lastfm', isActive: hoverOption==='lastfm', backgroundName: '/static/images/lastfm/banner.jpg'},
      {pathName: '/projects/leida', isActive: hoverOption==='leida', backgroundName: '/static/images/leida/banner.jpg'},
      {pathName: '/projects/wns', isActive: hoverOption==='wns', backgroundName: '/static/images/wns/banner.jpg'},
      {pathName: '/projects/library', isActive: hoverOption==='library', backgroundName: '/static/images/library/banner.jpg'},
      {pathName: '/projects/harvard', isActive: hoverOption==='harvard', backgroundName: '/static/images/harvard/image1.png'},
      {pathName: '/gaming', isActive: hoverOption==='gaming', backgroundName: '/static/images/chess.jpg'},
      {pathName: '/projects/misc', isActive: hoverOption==='misc', backgroundName: '/static/images/heroku/herokubanner.png'},
    ];
    return(
      <div className={wrapperName}>
        <div className={backgroundClassName}/>
        {backgroundValues.map((value, index)=>(
          <div key={index}>
            <BackgroundImageDisplay
              pathName={value.pathName}
              isActive={value.isActive}
              backgroundName={value.backgroundName}
            />
          </div>
        ))}
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
