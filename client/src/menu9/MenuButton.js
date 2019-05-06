import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import {
  selectMenuDisplay,
} from 'reducers';

const MenuButton = ({menuDisplay, toggleMenu}) => {
  const containerName= classNames(
    'seventeen_menu_btn__container',
    {
      'seventeen_menu_btn__container--display': menuDisplay,
    }
  );
  return(
    <div
      onClick = {() => toggleMenu(menuDisplay)}
      className = "seventeen_menu_btn"
    >
      <div className={containerName}>
        <div className="seventeen_menu_btn__letter">M</div>
        <div className="seventeen_menu_btn__letter">E</div>
        <div className="seventeen_menu_btn__letter">N</div>
        <div className="seventeen_menu_btn__letter">U</div>
        <div className="seventeen_menu_btn__lines">
          <span className="seventeen_menu_line1"/>
          <span className="seventeen_menu_line2"/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: (menuDisplay) => {
      dispatch(menuActions.hoverMenuOption(false));
      dispatch(menuActions.toggleMenu(!menuDisplay));
      document.getElementById('menu_scrollbar').focus();
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(MenuButton);
