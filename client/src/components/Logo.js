import React from 'react';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import {
  selectMenuDisplay,
} from 'reducers';

const Logo = props => {
  return(
    <header className="logo">
      <div
        className="logo_inner"
        onClick={() => props.toggleMenu(props.menuDisplay)}
      >
        <span className="logo_link">
          <span className="logo_first">K E V I N</span>&nbsp;<span className="logo_last">C H O I</span>
        </span>
      </div>
    </header>
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
      dispatch(menuActions.hoverMenuOption(''));
      dispatch(menuActions.toggleMenu(!menuDisplay));
      document.getElementById('menu_scrollbar').focus();
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(Logo);