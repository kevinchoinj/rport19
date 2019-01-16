import React from 'react';
import MenuPanel from 'menu9/MenuPanel';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuWrap extends React.Component{
  render(){
    const {
      menuDisplay,
    }=this.props;
    const wrapperName = classNames(
      'nine_menu_wrapper',
      {
        'nine_menu_wrapper--display':menuDisplay
      }
    );

    return(
      <div className={wrapperName}>
        <MenuPanel />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    menuDisplay:state.menu.menuDisplay,
  }),
)(MenuWrap);
