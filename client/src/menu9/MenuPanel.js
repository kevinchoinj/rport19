import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as menuActions from 'actions/menu';
import {bindActionCreators} from 'redux';
import {history} from 'store';
import {projectData} from 'data/projectData';

import uwloo from 'images/uwloo/banner.jpg';
import tcfs from 'images/tcfs/toocool.jpg';
import wildcat from 'images/wildcat/banner.jpg';
import discord from 'images/discord/banner.jpg';
import lastfm from 'images/lastfm/banner.jpg';
import leida from 'images/leida/banner.jpg';
import drjart from 'images/drjart/banner.png';
import wns from 'images/wns/banner.jpg';
import library from 'images/library/banner.jpg';
import home from 'images/daytime.jpg';
import gaming from 'images/chess.jpg';
import miscbanner from 'images/heroku/herokubanner.png';
import delilah from 'images/delilahs/banner.jpg';
import harvard from 'images/harvard/image1.png';
import novaruu from 'images/novaruu/banner.jpg';

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
      {pathName: '/', isActive: hoverOption==='home', backgroundName: home},
      {pathName: '/projects/novaruu', isActive: hoverOption==='novaruu', backgroundName: novaruu},
      {pathName: '/projects/uwloo', isActive: hoverOption==='uwloo', backgroundName: uwloo},
      {pathName: '/projects/tcfs', isActive: hoverOption==='tcfs', backgroundName: tcfs},
      {pathName: '/projects/wildcat', isActive: hoverOption==='wildcat', backgroundName: wildcat},
      {pathName: '/projects/drjart', isActive: hoverOption==='drjart', backgroundName: drjart},
      {pathName: '/projects/delilah', isActive: hoverOption==='delilah', backgroundName: delilah},
      {pathName: '/projects/discord', isActive: hoverOption==='discord', backgroundName: discord},
      {pathName: '/projects/lastfm', isActive: hoverOption==='lastfm', backgroundName: lastfm},
      {pathName: '/projects/leida', isActive: hoverOption==='leida', backgroundName: leida},
      {pathName: '/projects/wns', isActive: hoverOption==='wns', backgroundName: wns},
      {pathName: '/projects/library', isActive: hoverOption==='library', backgroundName: library},
      {pathName: '/projects/harvard', isActive: hoverOption==='harvard', backgroundName: harvard},
      {pathName: '/gaming', isActive: hoverOption==='gaming', backgroundName: gaming},
      {pathName: '/projects/misc', isActive: hoverOption==='misc', backgroundName: miscbanner},
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
