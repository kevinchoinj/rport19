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
      'load_in_object',
      {
        'load_in_object--display': onPageLoad ? true : isVisible,
      }
    );

    const addLoadDelay = {
      animationDelay: loadDelay,
    };

    return(
      <div
        className={objectName}
        style={addLoadDelay}
      >
        {this.props.children}
      </div>
    );
  }
}

export default LoadIn;
