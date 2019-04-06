import React from 'react';
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';

class MenuButton extends React.Component{
  toggleMenu = () => {
    this.props.menuActions.hoverMenuOption(false);
    this.props.menuActions.toggleMenu(!this.props.menuDisplay);
    document.getElementById('menu_scrollbar').focus();
  }
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuLine1Names= classNames(
      'seventeen_menu_line1',
      {
        'seventeen_menu_line1--display':menuDisplay,
      }
    );
    const menuLine2Names= classNames(
      'seventeen_menu_line2',
      {
        'seventeen_menu_line2--display':menuDisplay,
      }
    );
    return(
      <div
        onClick = {()=>this.toggleMenu()}
        className = "seventeen_menu_btn"
      >
        <div
          className = "seventeen_menu_btn__container"
        >
          <div className="seventeen_menu_btn__letter">M</div>
          <div className="seventeen_menu_btn__letter">E</div>
          <div className="seventeen_menu_btn__letter">N</div>
          <div className="seventeen_menu_btn__letter">U</div>
          <div className="seventeen_menu_btn__lines">
            <span
              className = {menuLine1Names}
            >
            </span>
            <span
              className = {menuLine2Names}
            >
            </span>
          </div>
        </div>
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
)(MenuButton);