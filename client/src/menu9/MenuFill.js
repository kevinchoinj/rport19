import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class BackgroundImageWrapper extends React.Component{
  render(){
    const {
      menuDisplay,
      hoverOption
    } = this.props;

    const fillClassName = classNames(
      'menu_fill',
      {
        'menu_fill--display':menuDisplay && (hoverOption === false),
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
    menuDisplay:state.menu.menuDisplay,
  }),
  dispatch => ({
  }),
)(BackgroundImageWrapper);
