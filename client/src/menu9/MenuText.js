import React from 'react';
import * as menuActions from 'actions/menu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {history} from 'store';
import Scrollbar from 'smooth-scrollbar';
import {Link} from 'react-router-dom';
import {menuData} from 'menu9/menuData';

const LinkDivWrapper = ({hoverOption, image, children}) => {
  if (window.innerWidth >= 768) {
    return (
      <div
        className = "menu_panel__link_div"
        onMouseOver={()=>hoverOption(image)}
      >
        {children}
      </div>
    );
  }
  else {
    return (
      <div className = "menu_panel__link_div">
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
      'menu_panel__links',
      {
        'menu_panel__links--display': menuDisplay,
      }
    );

    return(
      <div className = {menuClassName} id="menu_scrollbar">
        {menuData.map((value, index)=>(
          <div className="menu_panel__container" key={index}>
            <Link
              to={value.link}
              className = "menu_panel__link"
            >
              <LinkDivWrapper
                image={value.image}
                hoverOption={this.hoverOption}
              >
                <div className="number">
                  {value.value}
                </div>
                <div className="menu_panel__link_title">
                  {value.text}
                </div>
              </LinkDivWrapper>
            </Link>
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
