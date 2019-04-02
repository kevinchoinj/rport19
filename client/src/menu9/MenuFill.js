import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class BackgroundImageWrapper extends React.Component{
  render(){
    const {
      menuDisplay,
      hoverOption,
      isMobile,
    } = this.props;

    const fillClassName = classNames(
      'menu_fill',
      {
        'menu_fill--display': menuDisplay && (hoverOption === false) && !isMobile,
      }
    );

    return(
      <div className={fillClassName}/>
    );
  }
}

export default connect(
  (state) => ({
    hoverOption: state.menu.hoverOption,
    menuDisplay: state.menu.menuDisplay,
    isMobile: state.scroll.isMobile,
  }),
  dispatch => ({
  }),
)(BackgroundImageWrapper);
