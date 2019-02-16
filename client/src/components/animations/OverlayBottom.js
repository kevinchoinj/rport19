import React from 'react';
import classNames from 'classnames';

class LoadIn extends React.Component{
  render(){
    const {
      loadDelay,
      isVisible,
      onPageLoad,
    } = this.props;

    const objectName = classNames(
      'overlay_bottom',
      {
        'overlay_bottom--display': onPageLoad ? true : isVisible,
      }
    );

    const addLoadDelay = {
      transitionDelay: loadDelay,
    };

    return(
      <div
        className={objectName}
      >
        {this.props.children}
        <div
          className="overlay_bottom__overlay"
          style={addLoadDelay}
        />
      </div>
    );
  }
}

export default LoadIn;
