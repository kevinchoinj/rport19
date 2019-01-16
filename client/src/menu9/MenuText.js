import React from 'react';
import * as menuActions from 'actions/menu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {history} from 'store';
import Scrollbar from 'smooth-scrollbar';

const LinkDivWrapper = ({hoverOption, pageName, children}) => {
  if (window.innerWidth >= 768) {
    return (
      <div
        className = "nine_menu_panel__link_div"
        onMouseOver={()=>hoverOption(pageName)}
      >
        {children}
      </div>
    );
  }
  else {
    return (
      <div className = "nine_menu_panel__link_div">
        {children}
      </div>
    );
  }
};

class MenuText extends React.Component{
  toggleMenu = (path) => {
    this.props.menuActions.toggleMenu(false);
    history.push(path);
  }
  hoverOption = (option) => {
    this.props.menuActions.hoverMenuOption(option);
  }
  componentDidMount(){
    Scrollbar.init(document.querySelector('#menu_scrollbar'), {
      alwaysShowTracks: true,
    });
  }
  render(){

    const {
      menuDisplay,
    } = this.props;

    const menuClassName = classNames(
      'nine_menu_panel__links',
      {
        'nine_menu_panel__links--display': menuDisplay,
      }
    );

    const menuValues = [
      {value: '00', text: 'Home', link: '/', pageName: 'home'},
      {value: '01', text: 'TooCool', link: '/projects/tcfs', pageName: 'tcfs'},
      {value: '02', text: 'Delilah', link: '/projects/delilah', pageName: 'delilah'},
      {value: '03', text: 'Wildcat', link: '/projects/wildcat', pageName: 'wildcat'},
      {value: '04', text: 'DrJart+', link: '/projects/drjart', pageName: 'drjart'},
      {value: '05', text: 'Waterloo', link: '/projects/uwloo', pageName: 'uwloo'},
      {value: '06', text: 'Harvard', link: '/projects/harvard', pageName: 'harvard'},
      {value: '07', text: 'Discord', link: '/projects/discord', pageName: 'discord'},
      {value: '08', text: 'LastFM', link: '/projects/lastfm', pageName: 'lastfm'},
      {value: '09', text: 'Leida', link: '/projects/leida', pageName: 'leida'},
      {value: '10', text: 'Smile', link: '/projects/wns', pageName: 'wns'},
      {value: '11', text: 'Library', link: '/projects/library', pageName: 'library'},
      {value: '12', text: 'Gaming', link: '/gaming', pageName: 'gaming'},
      {value: '13', text: 'Misc', link: '/projects/misc', pageName: 'misc'},
    ];

    return(
      <div className = {menuClassName} id="menu_scrollbar">
        {menuValues.map((value, index)=>(
          <div className="nine_menu_panel__container" key={index}>
            <div
              className = "nine_menu_panel__link"
              onClick = {()=>this.toggleMenu(value.link)}
            >
              <LinkDivWrapper
                pageName={value.pageName}
                hoverOption={this.hoverOption}
              >
                <div className="nine_number">
                  {value.value}
                </div>
                <div className="nine_menu_panel__link_title">
                  {value.text}
                </div>
              </LinkDivWrapper>
            </div>
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
)(MenuText);
