import React, {useEffect} from 'react';
import * as menuActions from 'actions/menu';
import {connect} from 'react-redux';
import classNames from 'classnames';
import Scrollbar from 'smooth-scrollbar';
import {Link} from 'react-router-dom';
import {menuData} from 'data/menuData';

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

const CheckCurrentPage = ({loadedContent, link, children}) => {
  if (loadedContent === link) {
    return (
      <div className="menu_panel__link">
        {children}
      </div>
    );
  }
  else {
    return (
      <Link
        to={link}
        className = "menu_panel__link"
      >
        {children}
      </Link>
    );
  }
};

const MenuText = ({menuDisplay, loadedContent, hoverOption}) => {
  useEffect(() => {
    Scrollbar.init(document.querySelector('#menu_scrollbar'), {
      alwaysShowTracks: true,
    });
  });
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
          <CheckCurrentPage
            loadedContent={loadedContent}
            link={value.link}
          >
            <LinkDivWrapper
              image={value.image}
              hoverOption={hoverOption}
            >
              <div className="number">
                {value.value}
              </div>
              <div className="menu_panel__link_title">
                {value.text}
              </div>
            </LinkDivWrapper>
          </CheckCurrentPage>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay:state.menu.menuDisplay,
    loadedContent: state.transition.loadedContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hoverOption: (option) => {
      dispatch(menuActions.hoverMenuOption(option));
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(MenuText);
